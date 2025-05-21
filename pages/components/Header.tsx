import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Container from './Container';
import Button from './Button';

const TopBar = styled.div`
  background-color: #000000;
  color: white;
  padding: 8px 0;
  font-size: 14px;
`;

const TopBarContent = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const ContactLink = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndices.sticky};
  padding: ${({ theme }) => theme.spacing.md} 0;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.text.light};
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    color: ${({ theme }) => theme.colors.text.light};
  }
  img {
    max-width: 220px;
    width: auto;
    height: 48px;
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      max-width: 160px;
      height: 40px;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text.light};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-left: ${({ theme }) => theme.spacing.lg};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.fast};
  font-size: 14px;
  letter-spacing: 0.5px;
  
  &:hover {
    color: #FFFFFF;
    text-decoration: underline;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.ui.background};
  z-index: ${({ theme }) => theme.zIndices.modal};
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const MobileNavLink = styled.a`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.ui.border};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const RequestQuoteButton = styled.a`
  display: inline-block;
  margin-top: 12px;
  padding: 10px 24px;
  background: #b77a3a;
  color: #fff;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.1rem;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  transition: background 0.2s;
  text-align: center;

  &:hover {
    background: #8f4f2d;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    margin-top: 20px;
    font-size: 1rem;
  }
`;

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <>
      <TopBar>
        <TopBarContent>
          <SocialIcons>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{color: 'white', fontSize: 20}}>
              {/* LinkedIn Emoji or SVG */}
              <span role="img" aria-label="LinkedIn">🔗</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{color: 'white', fontSize: 20}}>
              {/* Facebook Emoji or SVG */}
              <span role="img" aria-label="Facebook">📘</span>
            </a>
          </SocialIcons>
          <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
            <ContactLink href="tel:+15137617775">
              <span>+513 761 7775</span>
            </ContactLink>
            <ContactLink href="mailto:sales@monti-inc.com">
              <span>SALES@MONTI-INC.COM</span>
            </ContactLink>
          </div>
        </TopBarContent>
      </TopBar>
      <StyledHeader>
        <HeaderContainer>
          <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0}}>
            <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <Logo href="/">
                <img src="/plating-logo.svg" alt="Plating Solutions LLC" height="48" style={{ maxWidth: '220px', width: 'auto' }} />
              </Logo>
              <Nav>
                <NavLink href="/">HOME</NavLink>
                <NavLink href="/services">SERVICES</NavLink>
                <NavLink href="/contact">CONTACT</NavLink>
              </Nav>
              <MobileMenuButton onClick={toggleMobileMenu}>
                ☰
              </MobileMenuButton>
            </div>

          </div>
        </HeaderContainer>
      
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileMenuHeader>
          <Logo href="/">
            <img src="/plating-logo.svg" alt="Plating Solutions LLC" height="48" style={{ maxWidth: '220px', width: 'auto' }} />
          </Logo>
          <CloseButton onClick={toggleMobileMenu}>✕</CloseButton>
        </MobileMenuHeader>
        <MobileNavLink href="/">HOME</MobileNavLink>
        <MobileNavLink href="/services">SERVICES</MobileNavLink>
        <MobileNavLink href="/contact">CONTACT</MobileNavLink>
        <RequestQuoteButton href="/contact" style={{marginTop: 32}}>REQUEST A QUOTE</RequestQuoteButton>
      </MobileMenu>
    </StyledHeader>
    </>
  );
};

export default Header;
