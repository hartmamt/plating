import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Container from './components/Container';
import Link from 'next/link';

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.section`
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: ${({ theme }) => theme.spacing['2xl']} 0;
`;

const PageTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
`;

const PageSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ServicesSection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
`;

const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.ui.card};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const ServiceImage = styled.div`
  height: 250px;
  background-color: #eee;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ServiceContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ServiceTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.6;
  flex: 1;
`;

const ServiceFeatures = styled.ul`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-left: ${({ theme }) => theme.spacing.xl};
  
  li {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const ButtonWrapper = styled.div`
  margin-top: auto;
`;

const FeaturedServiceSection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

const FeaturedServiceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedServiceImage = styled.div`
  position: relative;
  height: 400px;
  background-color: #eee;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 1;
  }
`;

const FeaturedServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 2;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const SectionText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
`;

const ProcessSection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ProcessStep = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.ui.card};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin: 0 auto ${({ theme }) => theme.spacing.md};
`;

const StepTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
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

const CTAText = styled.p`
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

export default function Services() {
  // Only show electroplating and special processes services

  return (
    <>
      <style>{buttonStyles}</style>
      <PageWrapper>
      <Header />
      
      <HeroSection>
        <Container>
          <PageTitle>Our Services</PageTitle>
          <PageSubtitle>
            We specialize in high-quality electroplating and metal finishing. Our primary services include:
          </PageSubtitle>
        </Container>
      </HeroSection>
      
      <ServicesSection>
        <Container>
          <ServicesList>
            <ServiceCard>
              <ServiceContent>
                <ServiceTitle>Silver Electroplating</ServiceTitle>
                <ServiceDescription>
                  High-purity silver plating for electrical, industrial, and decorative applications. Offers excellent conductivity and corrosion resistance.
                </ServiceDescription>
              </ServiceContent>
            </ServiceCard>
            <ServiceCard>
              <ServiceContent>
                <ServiceTitle>Tin Electroplating</ServiceTitle>
                <ServiceDescription>
                  Tin plating for electronics, connectors, and components requiring solderability and protection from oxidation.
                </ServiceDescription>
              </ServiceContent>
            </ServiceCard>
            <ServiceCard>
              <ServiceContent>
                <ServiceTitle>Zinc Electroplating</ServiceTitle>
                <ServiceDescription>
                  Durable zinc coatings for corrosion protection on fasteners, hardware, and industrial parts.
                </ServiceDescription>
              </ServiceContent>
            </ServiceCard>
            <ServiceCard>
              <ServiceContent>
                <ServiceTitle>Special Processes</ServiceTitle>
                <ServiceDescription>
                  We offer a variety of specialty finishes and custom processes. Please contact us for details about additional capabilities.
                </ServiceDescription>
              </ServiceContent>
            </ServiceCard>
          </ServicesList>
        </Container>
      </ServicesSection>
      
      <FeaturedServiceSection>
        <Container>
          <FeaturedServiceGrid>
            <FeaturedServiceContent>
              <SectionTitle>Precision Copper Machining</SectionTitle>
              <SectionText>
                We specialize in precision copper machining for electrical and thermal applications. Our expertise in working with copper allows us to create components with excellent conductivity and thermal properties.
              </SectionText>
              <SectionText>
                From simple bus bars to complex heat sinks and electrical components, we have the capabilities to meet your copper machining needs with precision and quality.
              </SectionText>
              <SectionText>
                Our copper machining services include CNC milling, turning, drilling, and tapping, as well as custom fabrication and assembly.
              </SectionText>
              <a className="button primary" style={{ marginTop: '1rem' }} href="#">Learn About Our Copper Capabilities</a>
            </FeaturedServiceContent>
            <FeaturedServiceImage>
              <img src="https://images.unsplash.com/photo-1584285418504-090883a73e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="Copper Machining" />
            </FeaturedServiceImage>
          </FeaturedServiceGrid>
        </Container>
      </FeaturedServiceSection>
      
      <ProcessSection>
        <Container>
          <SectionTitle style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Process</SectionTitle>
          <ProcessSteps>
            <ProcessStep>
              <StepNumber>1</StepNumber>
              <StepTitle>Consultation</StepTitle>
              <StepDescription>
                We begin with a thorough consultation to understand your project requirements, specifications, and timeline.
              </StepDescription>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>2</StepNumber>
              <StepTitle>Design & Engineering</StepTitle>
              <StepDescription>
                Our engineering team reviews your designs and provides feedback for manufacturability and cost optimization.
              </StepDescription>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>3</StepNumber>
              <StepTitle>Production</StepTitle>
              <StepDescription>
                We manufacture your components using our state-of-the-art equipment and skilled technicians.
              </StepDescription>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>4</StepNumber>
              <StepTitle>Quality & Delivery</StepTitle>
              <StepDescription>
                Every part undergoes rigorous quality inspection before being carefully packaged and delivered to you.
              </StepDescription>
            </ProcessStep>
          </ProcessSteps>
        </Container>
      </ProcessSection>
      
      <CTASection>
        <Container>
          <CTATitle>Ready to Start Your Next Project?</CTATitle>
          <CTAText>
            Contact us today to discuss your manufacturing needs and get a quote for your project.
          </CTAText>
          <Link href="/contact" passHref legacyBehavior>
  <a className="button secondary">Request a Quote</a>
</Link>
        </Container>
      </CTASection>
      
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
    </PageWrapper>
    </>
  );
}
