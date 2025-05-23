import { put } from '@vercel/blob';
import { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm, File as FormidableFile, Files, Fields } from 'formidable';
import { promises as fs } from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = (req: NextApiRequest): Promise<{ fields: Fields; files: Files }> => {
  return new Promise((resolve, reject) => {
    const form = new IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
};

export default async function uploadVideo(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { files } = await parseForm(req);
    const file = Array.isArray(files?.file) ? files.file[0] as FormidableFile : files?.file as FormidableFile | undefined;

    if (!file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    // Validate file type
    const validTypes = ['video/mp4', 'video/webm', 'image/jpeg', 'image/png'];
    if (!file.mimetype || !validTypes.includes(file.mimetype)) {
      return res.status(400).json({ error: 'Invalid file type' });
    }

    // Generate a unique filename with timestamp
    const fileNameParts = file.originalFilename?.split('.') || [];
    const fileExt = fileNameParts.length > 1 ? fileNameParts.pop() : '';
    const fileName = `${file.newFilename || 'file'}-${Date.now()}${fileExt ? `.${fileExt}` : ''}`;
    const filePath = `videos/${fileName}`;

    // Read the file buffer
    if (!file.filepath) {
      throw new Error('File path is missing');
    }
    const fileBuffer = await fs.readFile(file.filepath);
    
    // Upload to Vercel Blob
    const blob = await put(
      filePath,
      fileBuffer,
      {
        access: 'public',
        addRandomSuffix: false,
        contentType: file.mimetype || 'application/octet-stream',
      }
    );

    // Clean up the temporary file if it exists
    if (file.filepath) {
      await fs.unlink(file.filepath).catch(console.error);
    }

    return res.status(200).json({ 
      url: blob.url,
      type: file.mimetype || 'application/octet-stream',
      size: file.size || 0
    });
  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ 
      error: 'Upload failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
