import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Container from './components/Container';
import Link from 'next/link';
import FooterComponent from './components/Footer';

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
  return (
    <>
      <style>{buttonStyles}</style>
      <PageWrapper>
        <Header />
        
        <HeroSection>
          <Container>
            <PageTitle>Our Services</PageTitle>
            <PageSubtitle>
              We offer a wide range of electroplating and surface finishing services to meet your manufacturing needs.
            </PageSubtitle>
          </Container>
        </HeroSection>
        
        <ServicesSection>
          <Container>
            <SectionTitle style={{ marginBottom: '2rem' }}>Core Services</SectionTitle>
            <ServicesList>
              <ServiceCard id="silver">
                <ServiceImage>
                  <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" alt="Silver Electroplating" />
                </ServiceImage>
                <ServiceContent>
                  <ServiceTitle>Silver Electroplating</ServiceTitle>
                  <ServiceDescription>
                    Silver electroplating is a specialized process where a thin layer of silver is deposited
                    onto the surface of a metal component through an electrochemical reaction. At Plating
                    Solutions, our silver plating services are engineered for high-performance applications
                    where electrical conductivity, thermal performance, and corrosion resistance are
                    critical.
                  </ServiceDescription>
                  <ServiceFeatures>
                    <li><strong>Exceptional Conductivity</strong> - Silver is the most electrically conductive metal, making it ideal for electrical contacts, connectors, and components in high-reliability environments.</li>
                    <li><strong>Thermal Efficiency</strong> - Excellent thermal conductivity allows silver-plated parts to dissipate heat quickly, improving performance and longevity.</li>
                    <li><strong>Corrosion Resistance</strong> - Silver offers strong resistance to oxidation and corrosion, especially with proper underplating.</li>
                    <li><strong>Solderability</strong> - Silver-plated surfaces provide superior solderability for electronics manufacturing.</li>
                    <li><strong>Wear Resistance</strong> - With optional hard silver processes for better wear performance in contact applications.</li>
                  </ServiceFeatures>

                  <SectionText as="div" style={{ marginBottom: '1rem' }}>
                    <strong>Common Applications:</strong>
                    <ul style={{ marginTop: 8, marginBottom: 8, paddingLeft: 24 }}>
                      <li>Electrical contacts and bus bars</li>
                      <li>RF and microwave components</li>
                      <li>Aerospace and defense connectors</li>
                      <li>High-frequency electronics</li>
                      <li>Medical devices</li>
                    </ul>
                  </SectionText>
                  <SectionText>
                    Our team ensures <strong>tight process control</strong>, <strong>thorough testing</strong>, and <strong>adherence to industry standards</strong> to meet even the most demanding specifications. Whether you're looking to enhance conductivity, reduce signal loss, or improve solderability, <strong>Plating Solutions</strong> delivers consistent, high-quality silver electroplating backed by technical expertise.
                  </SectionText>

                </ServiceContent>
              </ServiceCard>
              
              <ServiceCard id="tin">
                <ServiceImage>
                  <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Tin Electroplating" />
                </ServiceImage>
                <ServiceContent>
                  <ServiceTitle>Tin Electroplating</ServiceTitle>
                  <ServiceDescription>
                    Tin electroplating is a widely used surface finishing process that deposits a layer of tin
                    onto metal components for improved solderability, corrosion resistance, and surface
                    protection. At Plating Solutions, we offer both bright and matte tin finishes tailored to
                    your application's specific requirements.
                  </ServiceDescription>
                  <ServiceFeatures>
                    <li><strong>Excellent Solderability</strong> - Tin is highly compatible with soldering processes, making it preferred for electrical components and circuit boards.</li>
                    <li><strong>Corrosion Protection</strong> - Tin provides a protective barrier against environmental factors, preventing oxidation.</li>
                    <li><strong>Non-Toxic and RoHS Compliant</strong> - Safe, lead-free coating that meets environmental standards for consumer electronics.</li>
                    <li><strong>Ductility and Softness</strong> - Malleable nature makes it suitable for applications requiring forming or crimping without cracking.</li>
                    <li><strong>Versatile Applications</strong> - Used in electrical terminals, PCB components, fasteners, and food processing equipment.</li>
                  </ServiceFeatures>

                  <SectionText as="div" style={{ marginBottom: '1rem' }}>
                    <strong>Common Applications:</strong>
                    <ul style={{ marginTop: 8, marginBottom: 8, paddingLeft: 24 }}>
                      <li>Electrical terminals and contacts</li>
                      <li>Printed circuit board components</li>
                      <li>Fasteners and fittings</li>
                      <li>Food processing equipment</li>
                      <li>Automotive electrical systems</li>
                    </ul>
                  </SectionText>
                  <SectionText>
                    Our tin plating processes are carefully controlled to ensure <strong>uniform coverage</strong>, <strong>excellent adhesion</strong>, and compatibility with your manufacturing workflow—from prototype to high-volume production.
                  </SectionText>

                </ServiceContent>
              </ServiceCard>
              
              <ServiceCard id="zinc">
                <ServiceImage>
                  <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" alt="Zinc Electroplating" />
                </ServiceImage>
                <ServiceContent>
                  <ServiceTitle>Zinc Electroplating</ServiceTitle>
                  <ServiceDescription>
                    Zinc electroplating is a cost-effective method for providing robust corrosion
                    protection to steel and iron components. At Plating Solutions, we offer both alkaline
                    and acid zinc plating solutions, with a variety of chromate conversion coatings for added
                    protection and appearance.
                  </ServiceDescription>
                  <ServiceFeatures>
                    <li><strong>Superior Corrosion Resistance</strong> - Zinc serves as a sacrificial coating, corroding preferentially to protect the underlying metal.</li>
                    <li><strong>Versatile Post-Treatment Options</strong> - Clear, yellow, black, and olive drab chromates for tailored aesthetics and enhanced protection.</li>
                    <li><strong>Cost Efficiency</strong> - One of the most economical plating choices for corrosion protection in high-volume applications.</li>
                    <li><strong>Improved Adhesion</strong> - Excellent base layer for powder coating and painting processes.</li>
                    <li><strong>Common Applications</strong> - Used in automotive parts, industrial hardware, construction materials, and electrical enclosures.</li>
                  </ServiceFeatures>

                  <SectionText as="div" style={{ marginBottom: '1rem' }}>
                    <strong>Common Applications:</strong>
                    <ul style={{ marginTop: 8, marginBottom: 8, paddingLeft: 24 }}>
                      <li>Automotive brackets and fasteners</li>
                      <li>Industrial hardware</li>
                      <li>Construction materials</li>
                      <li>Agricultural equipment</li>
                      <li>Electrical enclosures</li>
                    </ul>
                  </SectionText>
                  <SectionText>
                    Our zinc plating processes are optimized for <strong>durability</strong>, <strong>uniform thickness</strong>, and long-term corrosion resistance, ensuring your parts meet both performance and budget requirements.
                  </SectionText>

                </ServiceContent>
              </ServiceCard>
              

            </ServicesList>
          </Container>
        </ServicesSection>
        
        <FeaturedServiceSection>
          <Container>
            <FeaturedServiceGrid>
              <FeaturedServiceContent>
                <SectionTitle>Industry-Leading Electroplating Expertise</SectionTitle>
                <SectionText>
                  At Plating Solutions, we bring decades of expertise to every project. Our team of specialists understand the critical requirements of modern manufacturing across aerospace, electronics, automotive, and medical industries.
                </SectionText>
                <SectionText>
                  We deliver both high-volume production and custom plating solutions—always with precision, reliability, and a focus on customer satisfaction. Every project benefits from our technical expertise and commitment to quality.
                </SectionText>
                <SectionText>
                  Our state-of-the-art facility features the latest equipment and rigorous process controls to ensure consistent results that meet or exceed industry standards. From prototype to production, we're your partner in precision electroplating.
                </SectionText>
                <a className="button primary" style={{ marginTop: '1rem' }} href="/contact">Contact Us</a>
              </FeaturedServiceContent>
              <FeaturedServiceImage>
                <img src="https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=800&q=80" alt="Advanced Electroplating Facility" />
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
            <CTATitle>Ready to Enhance Your Component Performance?</CTATitle>
            <CTAText>
              Contact us today to discuss your electroplating requirements and discover how our expert solutions can meet your needs.
            </CTAText>
            <Link href="/contact" className="button secondary">
              Contact Us
            </Link>
          </Container>
        </CTASection>
        
        <FooterComponent />
      </PageWrapper>
    </>
  );
}
