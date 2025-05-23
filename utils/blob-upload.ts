export interface UploadResult {
  url: string;
  type: string;
  size: number;
}

export async function uploadToBlob(file: File): Promise<UploadResult> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('/api/upload-video', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to upload file: ${errorText}`);
  }

  return response.json();
}

export async function uploadVideoFiles() {
  try {
    // In production, we'll upload the files to Vercel Blob
    if (process.env.NODE_ENV === 'production') {
      // Upload MP4
      const mp4Response = await fetch('/videos/hero-video.mp4');
      if (!mp4Response.ok) throw new Error('Failed to fetch MP4 file');
      const mp4Blob = await mp4Response.blob();
      const mp4File = new File([mp4Blob], 'hero-video.mp4', { type: 'video/mp4' });
      
      // Upload WebM
      const webmResponse = await fetch('/videos/hero-video.webm');
      if (!webmResponse.ok) throw new Error('Failed to fetch WebM file');
      const webmBlob = await webmResponse.blob();
      const webmFile = new File([webmBlob], 'hero-video.webm', { type: 'video/webm' });
      
      // Upload Poster
      const posterResponse = await fetch('/videos/hero-poster.jpg');
      if (!posterResponse.ok) throw new Error('Failed to fetch poster image');
      const posterBlob = await posterResponse.blob();
      const posterFile = new File([posterBlob], 'hero-poster.jpg', { type: 'image/jpeg' });

      // Upload all files
      const [mp4Result, webmResult, posterResult] = await Promise.all([
        uploadToBlob(mp4File),
        uploadToBlob(webmFile),
        uploadToBlob(posterFile),
      ]);

      return {
        mp4Url: mp4Result.url,
        webmUrl: webmResult.url,
        posterUrl: posterResult.url,
      };
    }

    // In development, return local file paths
    return {
      mp4Url: '/videos/hero-video.mp4',
      webmUrl: '/videos/hero-video.webm',
      posterUrl: '/videos/hero-poster.jpg',
    };
  } catch (error) {
    console.error('Error uploading files:', error);
    // Fallback to local files if upload fails
    return {
      mp4Url: '/videos/hero-video.mp4',
      webmUrl: '/videos/hero-video.webm',
      posterUrl: '/videos/hero-poster.jpg',
    };
  }
}
