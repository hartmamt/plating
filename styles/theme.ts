// Theme definition for styled-components, exactly matching Monti-Inc design language
import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    // Primary brand colors
    primary: '#AA5F37', // Brown color as specified
    secondary: '#333333', // Dark gray used for footer/secondary elements
    tertiary: '#F7F7F7', // Light gray background used for sections
    
    // Text colors
    text: {
      primary: '#333333', // Main text color
      secondary: '#666666', // Secondary text
      light: '#FFFFFF', // Light text (on dark backgrounds)
      accent: '#AA5F37', // Accent text (same as primary)
    },
    
    // UI colors
    ui: {
      background: '#FFFFFF',
      card: '#FFFFFF',
      border: '#DDDDDD',
      hover: '#F0F0F0',
      focus: '#E6E6E6',
    },
    
    // Feedback colors
    feedback: {
      success: '#28A745',
      warning: '#FFC107',
      error: '#DC3545',
      info: '#17A2B8',
    },
  },
  
  fonts: {
    // Monti uses a combination of Roboto and Roboto Condensed
    heading: '"Roboto Condensed", "Arial Narrow", Arial, sans-serif',
    body: '"Roboto", Arial, sans-serif',
    button: '"Roboto Condensed", "Arial Narrow", Arial, sans-serif',
    mono: '"Roboto Mono", monospace',
  },
  
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  
  fontSizes: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    md: '1rem',        // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
  },
  
  spacing: {
    xs: '0.25rem',     // 4px
    sm: '0.5rem',      // 8px
    md: '1rem',        // 16px
    lg: '1.5rem',      // 24px
    xl: '2rem',        // 32px
    '2xl': '2.5rem',   // 40px
    '3xl': '3rem',     // 48px
    '4xl': '4rem',     // 64px
  },
  
  borderRadius: {
    none: '0',
    sm: '2px',         // Monti uses very subtle rounded corners
    md: '4px',
    lg: '6px',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.12)',
    md: '0 3px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.05)',
    lg: '0 10px 20px rgba(0,0,0,0.08), 0 5px 8px rgba(0,0,0,0.04)',
    xl: '0 15px 30px rgba(0,0,0,0.1)',
  },
  
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '992px',       // Monti's site uses Bootstrap breakpoints
    xl: '1200px',
    '2xl': '1400px',
  },
  
  transitions: {
    fast: '150ms ease-in-out',
    normal: '250ms ease-in-out',
    slow: '400ms ease-in-out',
  },
  
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    toast: 1600,
    tooltip: 1700,
  },
};

export default theme;
