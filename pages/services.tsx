import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Container from './components/Container';
import Button from './components/Button';

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

export default function Services() {
  return (
    <PageWrapper>
      <Header />
      
      <HeroSection>
        <Container>
          <PageTitle>Our Services</PageTitle>
          <PageSubtitle>
            We offer a comprehensive range of precision manufacturing services to meet your needs
          </PageSubtitle>
        </Container>
      </HeroSection>
      
      <ServicesSection>
        <Container>
          <ServicesList>
            <ServiceCard>
              <ServiceImage>
                <img src="https://images.unsplash.com/photo-1565437957398-7d4c9481c9c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="CNC Machining" />
              </ServiceImage>
              <ServiceContent>
                <ServiceTitle>CNC Machining</ServiceTitle>
                <ServiceDescription>
                  Our state-of-the-art CNC machining capabilities deliver precision parts with tight tolerances for a wide range of applications.
                </ServiceDescription>
                <ServiceFeatures>
                  <li>3-axis and 5-axis machining</li>
                  <li>Precision tolerances to ±0.0005"</li>
                  <li>Variety of materials including aluminum, steel, and plastics</li>
                  <li>Prototype to production quantities</li>
                </ServiceFeatures>
                <ButtonWrapper>
                  <Button variant="outline">Learn More</Button>
                </ButtonWrapper>
              </ServiceContent>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceImage>
                <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Sheet Metal Fabrication" />
              </ServiceImage>
              <ServiceContent>
                <ServiceTitle>Sheet Metal Fabrication</ServiceTitle>
                <ServiceDescription>
                  Our sheet metal fabrication services include cutting, bending, and forming to create custom components for your specific needs.
                </ServiceDescription>
                <ServiceFeatures>
                  <li>Laser cutting and punching</li>
                  <li>Press brake forming</li>
                  <li>Custom enclosures and brackets</li>
                  <li>Material thicknesses from 0.020" to 0.25"</li>
                </ServiceFeatures>
                <ButtonWrapper>
                  <Button variant="outline">Learn More</Button>
                </ButtonWrapper>
              </ServiceContent>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceImage>
                <img src="https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="Welding & Assembly" />
              </ServiceImage>
              <ServiceContent>
                <ServiceTitle>Welding & Assembly</ServiceTitle>
                <ServiceDescription>
                  Our skilled welders and assembly technicians ensure that your components are properly joined and assembled to meet your specifications.
                </ServiceDescription>
                <ServiceFeatures>
                  <li>TIG, MIG, and spot welding</li>
                  <li>Precision assembly services</li>
                  <li>Quality inspection and testing</li>
                  <li>Full documentation and traceability</li>
                </ServiceFeatures>
                <ButtonWrapper>
                  <Button variant="outline">Learn More</Button>
                </ButtonWrapper>
              </ServiceContent>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceImage>
                <img src="https://images.unsplash.com/photo-1581092921461-39b9884bcd13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Prototyping" />
              </ServiceImage>
              <ServiceContent>
                <ServiceTitle>Prototyping</ServiceTitle>
                <ServiceDescription>
                  Our rapid prototyping services help you quickly iterate and refine your designs before moving to full production.
                </ServiceDescription>
                <ServiceFeatures>
                  <li>Quick turnaround times</li>
                  <li>Design for manufacturability feedback</li>
                  <li>Material selection guidance</li>
                  <li>Seamless transition to production</li>
                </ServiceFeatures>
                <ButtonWrapper>
                  <Button variant="outline">Learn More</Button>
                </ButtonWrapper>
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
              <Button style={{ marginTop: '1rem' }}>Learn About Our Copper Capabilities</Button>
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
          <Button size="lg" variant="secondary">Request a Quote</Button>
        </Container>
      </CTASection>
      
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
    </PageWrapper>
  );
}
