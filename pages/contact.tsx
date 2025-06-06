import React, { useState } from 'react';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success?: boolean; message: string} | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear any previous submission status when user starts typing again
    if (submitStatus) setSubmitStatus(null);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus({
          success: true,
          message: 'Thank you for your message! We will get back to you soon.'
        });
        // Reset form on successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      <style>{buttonStyles}</style>
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
                  rows={5}
                />
              </FormGroup>
              
              {submitStatus && (
                <div style={{
                  margin: '1rem 0',
                  padding: '1rem',
                  borderRadius: '4px',
                  backgroundColor: submitStatus.success ? '#e6f7ee' : '#fde8e8',
                  color: submitStatus.success ? '#0f5132' : '#842029',
                  border: `1px solid ${submitStatus.success ? '#badbcc' : '#f5c2c7'}`
                }}>
                  {submitStatus.message}
                  {submitStatus.success && (
                    <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
                      You can also reach us directly at <a href="mailto:Joe.Tekuelve@monti-inc.com" style={{ color: '#B16034' }}>Joe.Tekuelve@monti-inc.com</a>
                    </div>
                  )}
                </div>
              )}
              
              <button 
                type="submit" 
                className="button primary" 
                style={{
                  marginTop: '1rem',
                  backgroundColor: isSubmitting ? '#ccc' : '#B16034',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span>Sending...</span>
                    <div style={{ width: '1rem', height: '1rem', border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                    <style jsx>{`
                      @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                      }
                    `}</style>
                  </>
                ) : 'Send Message'}
              </button>
            </ContactForm>
            
            <ContactInfo>
              <InfoTitle>Contact Information</InfoTitle>
              <InfoText>
                We're here to help with any questions you may have about our manufacturing services. 
                Reach out to us using any of the contact methods below, or fill out the form to send us a message.
              </InfoText>
              
              <ContactCards>
                <ContactCard>
                  <CardTitle><LocationIcon /> Address</CardTitle>
                  <CardText>871 Redna Terrace</CardText>
                  <CardText>Cincinnati, Ohio 45215</CardText>
                  <CardText>Phone: (513) 771-1941</CardText>
                  <CardText><a href="http://www.platingsolutionsllc.com" target="_blank" rel="noopener noreferrer" style={{color: '#B16034'}}>www.platingsolutionsllc.com</a></CardText>
                </ContactCard>
                
                <ContactCard>
                  <CardTitle><EmailIcon /> Contact</CardTitle>
                  <CardText>Joe Tekuelve</CardText>
                  <CardText>Phone: (513) 377-1661</CardText>
                  <CardText>Email: <a href="mailto:Joe.Tekuelve@monti-inc.com" style={{color: '#B16034'}}>Joe.Tekuelve@monti-inc.com</a></CardText>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.123456789012!2d-84.56789!3d39.12345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841a8a7d1a2b2c3%3A0x4dca0b1c41e33a5d!2s871%20Redna%20Terrace%2C%20Cincinnati%2C%20OH%2045215!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Plating Solutions Location"
        />
      </MapSection>
      
      <FooterComponent />
    </PageWrapper>
    </>
  );
}
