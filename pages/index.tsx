import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Header from './components/Header';
import Container from './components/Container';
import Button from './components/Button';
import FooterComponent from './components/Footer';

// Dynamically import VideoHero with no SSR to avoid window is not defined errors
const VideoHero = dynamic(() => import('../components/VideoHero'), { ssr: false });

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 600px;
  max-height: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #1a1a1a; // Fallback background color
`;

const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
    z-index: 1;
  }
  
  video {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); /* Add text shadow for better readability */
`;

const HeroHeadline = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  color: #fff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubheadline = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  color: #f0f0f0;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection>
          <VideoBackground>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="https://gljgx8x4obkfto7l.public.blob.vercel-storage.com/hero-poster-KVTIUv6AFoLxPQSZ5KgMeHS07x2oKe.jpg"
            >
              <source src="https://gljgx8x4obkfto7l.public.blob.vercel-storage.com/hero-video-26XkdkxkEpZw3ypdjYzeymQzfygtid.webm" type="video/webm" />
              <source src="https://gljgx8x4obkfto7l.public.blob.vercel-storage.com/hero-video-aHPwpfirTnOXJpU2wW8KCKaHyIK50W.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </VideoBackground>
          <HeroContent>
            <HeroHeadline>Your Partner in Precision Electroplating & Surface Finishing</HeroHeadline>
            <HeroSubheadline>
              Delivering high-quality, custom metal finishing solutions for industries that demand the highest standards of quality and reliability.
            </HeroSubheadline>
            <HeroButtons>
              <Link href="/contact" passHref>
                <Button as="a" primary>
                  Contact Us
                </Button>
              </Link>
              <Link href="/services" passHref>
                <Button as="a" secondary>
                  Our Services
                </Button>
              </Link>
            </HeroButtons>
          </HeroContent>
        </HeroSection>
      </main>
      <FooterComponent />
    </>
  );
}
