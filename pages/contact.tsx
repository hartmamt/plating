import React, { useState } from 'react';
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

const ContactSection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  flex: 1;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  background-color: ${({ theme }) => theme.colors.ui.card};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const FormTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.ui.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(200, 16, 46, 0.2);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.ui.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(200, 16, 46, 0.2);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.ui.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(200, 16, 46, 0.2);
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const InfoText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
`;

const ContactCards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const ContactCard = styled.div`
  background-color: ${({ theme }) => theme.colors.ui.card};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const CardTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CardText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const MapSection = styled.section`
  height: 400px;
  background-color: #eee;
  margin-top: ${({ theme }) => theme.spacing['3xl']};
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
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

// SVG Icons
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };
  
  return (
    <PageWrapper>
      <Header />
      
      <HeroSection>
        <Container>
          <PageTitle>Contact Us</PageTitle>
          <PageSubtitle>
            Get in touch with our team to discuss your manufacturing needs
          </PageSubtitle>
        </Container>
      </HeroSection>
      
      <ContactSection>
        <Container>
          <ContactGrid>
            <ContactForm onSubmit={handleSubmit}>
              <FormTitle>Send Us a Message</FormTitle>
              
              <FormRow>
                <FormGroup>
                  <Label htmlFor="firstName">First Name*</Label>
                  <Input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    required 
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="lastName">Last Name*</Label>
                  <Input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    required 
                  />
                </FormGroup>
              </FormRow>
              
              <FormRow>
                <FormGroup>
                  <Label htmlFor="email">Email Address*</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </FormGroup>
              </FormRow>
              
              <FormGroup>
                <Label htmlFor="company">Company</Label>
                <Input 
                  type="text" 
                  id="company" 
                  name="company" 
                  value={formData.company}
                  onChange={handleChange}
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="subject">Subject*</Label>
                <Select 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="quote">Request a Quote</option>
                  <option value="information">General Information</option>
                  <option value="support">Technical Support</option>
                  <option value="careers">Careers</option>
                  <option value="other">Other</option>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Message*</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <Button type="submit" size="lg">Send Message</Button>
            </ContactForm>
            
            <ContactInfo>
              <InfoTitle>Contact Information</InfoTitle>
              <InfoText>
                We're here to help with any questions you may have about our manufacturing services. 
                Reach out to us using any of the contact methods below, or fill out the form to send us a message.
              </InfoText>
              
              <ContactCards>
                <ContactCard>
                  <CardTitle><PhoneIcon /> Phone</CardTitle>
                  <CardText>Main Office: (123) 456-7890</CardText>
                  <CardText>Sales Department: (123) 456-7891</CardText>
                  <CardText>Support: (123) 456-7892</CardText>
                </ContactCard>
                
                <ContactCard>
                  <CardTitle><EmailIcon /> Email</CardTitle>
                  <CardText>General Inquiries: info@yourcompany.com</CardText>
                  <CardText>Sales: sales@yourcompany.com</CardText>
                  <CardText>Support: support@yourcompany.com</CardText>
                </ContactCard>
                
                <ContactCard>
                  <CardTitle><LocationIcon /> Address</CardTitle>
                  <CardText>123 Manufacturing Way</CardText>
                  <CardText>Industrial Park, Suite 500</CardText>
                  <CardText>Anytown, ST 12345</CardText>
                </ContactCard>
                
                <ContactCard>
                  <CardTitle><ClockIcon /> Business Hours</CardTitle>
                  <CardText>Monday - Friday: 8:00 AM - 5:00 PM</CardText>
                  <CardText>Saturday: Closed</CardText>
                  <CardText>Sunday: Closed</CardText>
                </ContactCard>
              </ContactCards>
            </ContactInfo>
          </ContactGrid>
        </Container>
      </ContactSection>
      
      <MapSection>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215175847356!2d-73.98784492439176!3d40.75798597138946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1683651913301!5m2!1sen!2sus" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location"
        />
      </MapSection>
      
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
