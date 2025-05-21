import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';
import Header from './components/Header';
import Container from './components/Container';
import Button from './components/Button';

const HeroSection = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  text-align: center;
  min-height: 480px;
  overflow: hidden;
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
    background: rgba(0,0,0,0.45); /* adjust for desired dimming */
    z-index: 2;
    pointer-events: none;
  }
`;

const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 56.25vw; /* 16:9 aspect ratio */
  min-width: 100vw;
  min-height: 100%;
  transform: translate(-50%, -50%);
  border: none;
  pointer-events: auto;
  @media (max-width: 900px) {
    height: 60vw;
  }
  @media (max-width: 600px) {
    height: 80vw;
  }
`;


const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 480px;
`;

const HeroHeadline = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.5rem;
  text-shadow: 0 2px 16px rgba(0,0,0,0.25);
  letter-spacing: 0.02em;
  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 0 0.5rem;
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
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.colors.ui.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const FeatureTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 0;
`;

const CTASection = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.light};
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  text-align: center;
`;

const CTATitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.light};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CTADescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
`;

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text.light};
  padding: ${({ theme }) => theme.spacing['2xl']} 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const FooterColumn = styled.div`
  flex: 1;
`;

const FooterTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.light};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.text.light};
  opacity: 0.8;
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.text.light};
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing['2xl']};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.6;
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
            <Container>
              <HeroHeadline>Your Partner in Precision Electroplating & Surface Finishing</HeroHeadline>
              <MobileHeroButton href="/contact">GET A QUOTE TODAY!</MobileHeroButton>
            </Container>
          </HeroContent>
        </HeroSection>
        <FeaturesSection>
  <Container>
    <SectionTitle>About Us</SectionTitle>
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
  </Container>
</FeaturesSection>
      </main>
      <EmploymentChatBubble />
      <Footer>
        <Container>
          <FooterContent>
            <FooterColumn>
              <FooterTitle>Navigation</FooterTitle>
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </FooterColumn>
          </FooterContent>
          <Copyright>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </Copyright>
        </Container>
      </Footer>
    </>
  );
}
