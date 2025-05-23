import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const FooterWrapper = styled.footer`
  background-color: #B16034; /* Monti brand copper color from memory */
  color: white;
  padding: 1rem 0;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.p`
  font-size: 0.85rem;
  margin: 0;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterLinks>
          <FooterLink href="/ISO.pdf" target="_blank" rel="noopener noreferrer">
            ISO-9001: 2015 Registered
          </FooterLink>
          <FooterLink href="/Monti Terms and Conditions.docx" target="_blank" rel="noopener noreferrer">
            Terms & Conditions
          </FooterLink>
        </FooterLinks>
        <Copyright>
          © {new Date().getFullYear()} Monti Incorporated. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
