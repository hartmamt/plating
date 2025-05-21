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

const MainContent = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  flex: 1;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled.div`
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
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const TeamSection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

const TeamGrid = styled.div`
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

const TeamMember = styled.div`
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

const MemberImage = styled.div`
  height: 250px;
  background-color: #ddd;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MemberInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const MemberName = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const MemberTitle = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const MemberBio = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
`;

const ValuesSection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.ui.card};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const ValueTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ValueText = styled.p`
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

export default function About() {
  return (
    <PageWrapper>
      <Header />
      
      <HeroSection>
        <Container>
          <PageTitle>About Our Company</PageTitle>
        </Container>
      </HeroSection>
      
      <MainContent>
        <Container>
          <AboutGrid>
            <AboutImage>
              {/* Replace with actual image */}
              <img src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Manufacturing facility" />
            </AboutImage>
            <AboutContent>
              <SectionTitle>Our Story</SectionTitle>
              <SectionText>
                Founded in 1985, our company has grown from a small machine shop to a leading manufacturer of precision components. With over 35 years of experience, we've built a reputation for quality, reliability, and innovation.
              </SectionText>
              <SectionText>
                Our state-of-the-art facility spans 75,000 square feet and houses the latest manufacturing technology. We serve clients across multiple industries, including aerospace, automotive, medical, and energy.
              </SectionText>
              <SectionText>
                What sets us apart is our commitment to excellence in every aspect of our business. From the materials we source to the skilled professionals we employ, quality is at the heart of everything we do.
              </SectionText>
            </AboutContent>
          </AboutGrid>
        </Container>
      </MainContent>
      
      <TeamSection>
        <Container>
          <SectionTitle style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Leadership Team</SectionTitle>
          <TeamGrid>
            <TeamMember>
              <MemberImage>
                {/* Replace with actual image */}
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="CEO" />
              </MemberImage>
              <MemberInfo>
                <MemberName>Michael Johnson</MemberName>
                <MemberTitle>Chief Executive Officer</MemberTitle>
                <MemberBio>
                  With over 25 years of experience in manufacturing, Michael leads our company with a focus on innovation and sustainable growth.
                </MemberBio>
              </MemberInfo>
            </TeamMember>
            
            <TeamMember>
              <MemberImage>
                {/* Replace with actual image */}
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80" alt="COO" />
              </MemberImage>
              <MemberInfo>
                <MemberName>Sarah Williams</MemberName>
                <MemberTitle>Chief Operations Officer</MemberTitle>
                <MemberBio>
                  Sarah oversees our day-to-day operations, ensuring that we maintain the highest standards of quality and efficiency.
                </MemberBio>
              </MemberInfo>
            </TeamMember>
            
            <TeamMember>
              <MemberImage>
                {/* Replace with actual image */}
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="CTO" />
              </MemberImage>
              <MemberInfo>
                <MemberName>David Chen</MemberName>
                <MemberTitle>Chief Technology Officer</MemberTitle>
                <MemberBio>
                  David leads our engineering team, driving technological innovation and ensuring that we stay at the cutting edge of manufacturing.
                </MemberBio>
              </MemberInfo>
            </TeamMember>
          </TeamGrid>
        </Container>
      </TeamSection>
      
      <ValuesSection>
        <Container>
          <SectionTitle style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Core Values</SectionTitle>
          <ValuesGrid>
            <ValueCard>
              <ValueTitle>Quality</ValueTitle>
              <ValueText>
                We are committed to delivering products of the highest quality, meeting or exceeding industry standards and client expectations.
              </ValueText>
            </ValueCard>
            
            <ValueCard>
              <ValueTitle>Innovation</ValueTitle>
              <ValueText>
                We continuously seek new and better ways to serve our clients, investing in technology and processes that drive efficiency and excellence.
              </ValueText>
            </ValueCard>
            
            <ValueCard>
              <ValueTitle>Integrity</ValueTitle>
              <ValueText>
                We conduct our business with honesty, transparency, and ethical practices, building trust with our clients, partners, and employees.
              </ValueText>
            </ValueCard>
            
            <ValueCard>
              <ValueTitle>Sustainability</ValueTitle>
              <ValueText>
                We are committed to environmentally responsible manufacturing practices, minimizing waste and reducing our carbon footprint.
              </ValueText>
            </ValueCard>
          </ValuesGrid>
        </Container>
      </ValuesSection>
      
      <CTASection>
        <Container>
          <CTATitle>Ready to Work With Us?</CTATitle>
          <CTAText>
            Contact our team today to discuss how we can help with your manufacturing needs.
          </CTAText>
          <Button size="lg" variant="secondary">Contact Us Now</Button>
        </Container>
      </CTASection>
      
      <Footer>
        <Container>
          <FooterContent>
            <FooterColumn>
              <FooterTitle>Company</FooterTitle>
              
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
