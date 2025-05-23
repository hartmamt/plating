import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';
import Header from './components/Header';
import Container from './components/Container';
import Button from './components/Button';
import FooterComponent from './components/Footer';

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 600px;
  max-height: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
`;

const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  min-height: 480px;
  z-index: 1;
  overflow: hidden;
  pointer-events: none;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.45);
    z-index: 2;
    pointer-events: none;
  }
`;

const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  min-width: 100vw;
  min-height: 100%;
  border: none;
  pointer-events: auto;
  object-fit: cover;
  z-index: 1;
`;


const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding: 2rem;
  text-align: left;
  color: white;
  
  @media (max-width: 768px) {
    text-align: center;
    padding: 1rem;
  }
`;

const HeroHeadline = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin: 0 0 1.5rem 0;
  background: linear-gradient(90deg, #fff 0%, #e0e0e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 800px;
  
  @media (max-width: 1024px) {
    font-size: 2.8rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    text-align: center;
    margin: 0 auto 1.5rem auto;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const MobileHeroButton = styled.a`
  display: none;
  @media (max-width: 600px) {
    display: block;
    width: 90vw;
    max-width: 360px;
    margin: 0 auto 1.5rem auto;
    background-color: #b77a3a;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1.15rem;
    font-weight: 700;
    padding: 1.1rem 0;
    text-align: center;
    text-decoration: none;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  }
`;

const HeroTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

const FeaturesSection = styled.section`
  padding: 6rem 0;
  background: #f8f9fa;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 100%);
    pointer-events: none;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1.5rem;
  }
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.05);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #b77a3a 0%, #8f4f2d 100%);
    transition: width 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    
    &::before {
      width: 8px;
    }
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: #1a1a1a;
  position: relative;
  padding-left: 1.5rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5em;
    width: 8px;
    height: 8px;
    background: #b77a3a;
    border-radius: 50%;
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.7;
  margin: 0;
  font-size: 1.05rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  }
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 1.5rem 0;
  color: white;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: #b77a3a;
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
  color: rgba(255,255,255,0.8);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Footer = styled.footer`
  background: #0a0a0a;
  color: #999;
  padding: 4rem 0 2rem;
  font-size: 0.95rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const FooterColumn = styled.div`
  flex: 1;
`;



// Minimal CSS for navigation buttons
const buttonStyles = `
.button.primary {
  background-color: #aa5f37;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  margin-right: 1rem;
  text-decoration: none;
  transition: background 0.2s;
}
.button.primary:hover {
  background-color: #8f4f2d;
}
.button.secondary {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
}
.button.secondary:hover {
  background-color: #000;
}
`;

// Floating chat/info bubble
const ChatBubble = styled.div`
  position: fixed;
  right: 16px;
  bottom: 24px;
  z-index: 9999;
  background: #fff;
  color: #222;
  border-radius: 32px 32px 32px 8px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.14);
  padding: 24px 20px 24px 24px;
  min-width: 280px;
  max-width: 350px;
  font-size: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  border: 2px solid #b77a3a;
  @media (max-width: 600px) {
    min-width: 0;
    max-width: 94vw;
    right: 2vw;
    bottom: 16px;
    padding: 16px 10px 16px 16px;
    font-size: 0.97rem;
  }
`;

const ChatBubbleLogo = styled.span`
  font-size: 2rem;
  margin-right: 8px;
  color: #b77a3a;
`;

const ChatBubbleClose = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #888;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 16px;
`;

function EmploymentChatBubble() {
  const [open, setOpen] = React.useState(true);
  if (!open) return null;
  return (
    <ChatBubble>
      <ChatBubbleLogo>Ⓜ️</ChatBubbleLogo>
      <div style={{flex: 1}}>
        Hello, thank you for visiting. If you are looking for employment opportunities, please apply here: <a href="https://monti-inc.com/jobs/employment-application" target="_blank" rel="noopener noreferrer" style={{color:'#0056d6', textDecoration:'underline'}}>https://monti-inc.com/jobs/employment-application</a>
      </div>
      <ChatBubbleClose aria-label="Close" onClick={()=>setOpen(false)}>&#10006;</ChatBubbleClose>
    </ChatBubble>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection>
          <VideoBackground>
            <ResponsiveIframe
              src="https://player.vimeo.com/video/255036745?autoplay=1&loop=1&automute=0"
              title="Electroplating Vimeo Video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{ position: 'relative', zIndex: 1 }}
            />
          </VideoBackground>
          <HeroContent>
            <HeroHeadline>
              Your Partner in Precision Electroplating & Surface Finishing
            </HeroHeadline>
            <MobileHeroButton href="/contact">GET A QUOTE TODAY</MobileHeroButton>
          </HeroContent>
        </HeroSection>

        <FeaturesSection>
          <FeatureGrid>
            <FeatureCard>
              <FeatureTitle>Comprehensive Electroplating</FeatureTitle>
              <FeatureDescription>
                We specialize in high-quality electroplating services tailored to modern manufacturing. Our offerings include silver, tin, and zinc electroplating, plus specialized surface treatments for enhanced performance, conductivity, corrosion resistance, and durability.
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureTitle>Industry-Spanning Expertise</FeatureTitle>
              <FeatureDescription>
                Serving industries from aerospace to electronics, our team brings decades of experience. We deliver both high-volume production and custom plating solutions—always with precision, reliability, and a focus on customer satisfaction.
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureTitle>Quality & Commitment</FeatureTitle>
              <FeatureDescription>
                Trust your components to the experts at Plating Solutions—where quality comes standard and every project is delivered on-spec, every time.
              </FeatureDescription>
            </FeatureCard>
          </FeatureGrid>
        </FeaturesSection>

        <CTASection>
          <CTATitle>Ready to Get Started?</CTATitle>
          <CTADescription>
            Contact us today to discuss your project requirements and discover how our expert electroplating solutions can meet your needs.
          </CTADescription>
          <ButtonGroup>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <Button variant="primary">Contact Us</Button>
            </Link>
          </ButtonGroup>
        </CTASection>
      </main>


      <FooterComponent />
    </>
  );
}
