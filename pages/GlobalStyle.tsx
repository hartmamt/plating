import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset & Base Styles */
  html, body {
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 16px;
    line-height: 1.5;
    background: ${({ theme }) => theme.colors.ui.background};
    color: ${({ theme }) => theme.colors.text.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text.primary};
  }
  
  h1 {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
  
  h2 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
  
  h3 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
  
  h4 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
  
  h5 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
  
  h6 {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
  
  p {
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  /* Links */
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  
  /* Lists */
  ul, ol {
    padding-left: ${({ theme }) => theme.spacing.xl};
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  /* Images */
  img {
    max-width: 100%;
    height: auto;
  }
  
  /* Focus styles */
  :focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
  
  /* Responsive typography */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    html {
      font-size: 14px;
    }
    
    h1 {
      font-size: ${({ theme }) => theme.fontSizes['3xl']};
    }
    
    h2 {
      font-size: ${({ theme }) => theme.fontSizes['2xl']};
    }
    
    h3 {
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }
  }
`;

export default GlobalStyle;
