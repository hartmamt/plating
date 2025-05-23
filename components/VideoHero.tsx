import { useState } from 'react';
import styled from 'styled-components';

const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 2;
  }
`;

const VideoHero = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Direct Vercel Blob URLs
  const videoUrls = {
    mp4: 'https://gljgx8x4obkfto7l.public.blob.vercel-storage.com/hero-video-9kY9Q2Zg6Qe8b7v1Qv8w3K2X7qQ9Q7.mp4',
    webm: 'https://gljgx8x4obkfto7l.public.blob.vercel-storage.com/hero-video-9kY9Q2Zg6Qe8b7v1Qv8w3K2X7qQ9Q7.webm',
    poster: 'https://gljgx8x4obkfto7l.public.blob.vercel-storage.com/hero-poster-KVTIUv6AFoLxPQSZ5KgMeHS07x2oKe.jpg'
  };

  // Handle video load events
  const handleLoadedData = () => {
    setLoading(false);
  };

  const handleError = () => {
    setError('Failed to load video. Please try again later.');
    setLoading(false);
  };

  if (error) {
    console.warn('Video loading warning:', error);
    return (
      <VideoBackground>
        <img 
          src={videoUrls.poster} 
          alt="Video loading failed" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </VideoBackground>
    );
  }

  return (
    <VideoBackground>
      {isLoading && (
        <img 
          src={videoUrls.poster} 
          alt="Loading video..." 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            zIndex: 1
          }}
        />
      )}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={videoUrls.poster}
        onLoadedData={handleLoadedData}
        onError={handleError}
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        <source src={videoUrls.webm} type="video/webm" />
        <source src={videoUrls.mp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </VideoBackground>
  );
};

export default VideoHero;
