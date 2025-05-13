import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Container from './components/Container';
import Button from './components/Button';

const HeroSection = styled.section`
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  text-align: center;
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

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <HeroSection>
          <Container>
            <HeroTitle>Your Partner in Precision Manufacturing</HeroTitle>
            <HeroSubtitle>
              We deliver high-quality machining and fabrication solutions for industries that demand excellence.
            </HeroSubtitle>
            <ButtonGroup>
              <Button size="lg">Get a Quote</Button>
              <Button size="lg" variant="outlineDark">Learn More</Button>
            </ButtonGroup>
          </Container>
        </HeroSection>
        
        <FeaturesSection>
          <Container>
            <SectionTitle>Our Services</SectionTitle>
            <FeatureGrid>
              <FeatureCard>
                <FeatureTitle>CNC Machining</FeatureTitle>
                <FeatureDescription>
                  Precision CNC machining services with tight tolerances and exceptional quality.
                </FeatureDescription>
              </FeatureCard>
              <FeatureCard>
                <FeatureTitle>Sheet Metal Fabrication</FeatureTitle>
                <FeatureDescription>
                  Custom sheet metal fabrication for your most demanding applications.
                </FeatureDescription>
              </FeatureCard>
              <FeatureCard>
                <FeatureTitle>Welding & Assembly</FeatureTitle>
                <FeatureDescription>
                  Expert welding and assembly services to complete your manufacturing needs.
                </FeatureDescription>
              </FeatureCard>
              <FeatureCard>
                <FeatureTitle>Prototyping</FeatureTitle>
                <FeatureDescription>
                  Rapid prototyping to bring your concepts to life quickly and efficiently.
                </FeatureDescription>
              </FeatureCard>
              <FeatureCard>
                <FeatureTitle>Quality Inspection</FeatureTitle>
                <FeatureDescription>
                  Comprehensive quality control to ensure your parts meet specifications.
                </FeatureDescription>
              </FeatureCard>
              <FeatureCard>
                <FeatureTitle>Design Support</FeatureTitle>
                <FeatureDescription>
                  Engineering and design support to optimize your products for manufacturing.
                </FeatureDescription>
              </FeatureCard>
            </FeatureGrid>
          </Container>
        </FeaturesSection>
        
        <CTASection>
          <Container>
            <CTATitle>Ready to Discuss Your Project?</CTATitle>
            <CTADescription>
              Contact us today to discuss how we can help bring your manufacturing project to life.
            </CTADescription>
            <Button size="lg" variant="secondary">Contact Us Now</Button>
          </Container>
        </CTASection>
      </main>
      
      <Footer>
        <Container>
          <FooterContent>
            <FooterColumn>
              <FooterTitle>Company</FooterTitle>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/team">Our Team</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/news">News</FooterLink>
            </FooterColumn>
            <FooterColumn>
              <FooterTitle>Services</FooterTitle>
              <FooterLink href="/services/cnc-machining">CNC Machining</FooterLink>
              <FooterLink href="/services/sheet-metal">Sheet Metal</FooterLink>
              <FooterLink href="/services/welding">Welding</FooterLink>
              <FooterLink href="/services/prototyping">Prototyping</FooterLink>
            </FooterColumn>
            <FooterColumn>
              <FooterTitle>Resources</FooterTitle>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/case-studies">Case Studies</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/support">Support</FooterLink>
            </FooterColumn>
            <FooterColumn>
              <FooterTitle>Contact</FooterTitle>
              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/quote">Request a Quote</FooterLink>
              <FooterLink href="tel:+1234567890">123-456-7890</FooterLink>
              <FooterLink href="mailto:info@yourcompany.com">info@yourcompany.com</FooterLink>
            </FooterColumn>
          </FooterContent>
          <Copyright>
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Copyright>
        </Container>
      </Footer>
    </>
  );
}
