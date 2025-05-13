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
  justify-content: flex-end;
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
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.light};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
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

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <>
      <TopBar>
        <TopBarContent>
          <ContactLink href="tel:+15137617775">
            <span>+513 761 7775</span>
          </ContactLink>
          <ContactLink href="mailto:sales@monti-inc.com">
            <span>SALES@MONTI-INC.COM</span>
          </ContactLink>
        </TopBarContent>
      </TopBar>
      <StyledHeader>
        <HeaderContainer>
          <Logo href="/">MONTI</Logo>
          
          <Nav>
            <NavLink href="/">HOME</NavLink>
            <NavLink href="/about">ABOUT US</NavLink>
            <NavLink href="/services">SERVICES</NavLink>
            <NavLink href="/projects">INDUSTRIES SERVED</NavLink>
            <NavLink href="/blog">BLOG</NavLink>
            <NavLink href="/contact">CONTACT</NavLink>
            <Button variant="outline" size="sm">
              REQUEST A QUOTE
            </Button>
          </Nav>
          
          <MobileMenuButton onClick={toggleMobileMenu}>
            ☰
          </MobileMenuButton>
        </HeaderContainer>
      
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileMenuHeader>
          <Logo href="/">MONTI</Logo>
          <CloseButton onClick={toggleMobileMenu}>✕</CloseButton>
        </MobileMenuHeader>
        
        <MobileNavLink href="/">HOME</MobileNavLink>
        <MobileNavLink href="/about">ABOUT US</MobileNavLink>
        <MobileNavLink href="/services">SERVICES</MobileNavLink>
        <MobileNavLink href="/projects">INDUSTRIES SERVED</MobileNavLink>
        <MobileNavLink href="/blog">BLOG</MobileNavLink>
        <MobileNavLink href="/contact">CONTACT</MobileNavLink>
        
        <Button variant="outline" fullWidth style={{ marginTop: '2rem' }}>
          REQUEST A QUOTE
        </Button>
      </MobileMenu>
    </StyledHeader>
    </>
  );
};

export default Header;
