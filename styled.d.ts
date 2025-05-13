import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      text: {
        primary: string;
        secondary: string;
        light: string;
        accent: string;
      };
      ui: {
        background: string;
        card: string;
        border: string;
        hover: string;
        focus: string;
      };
      feedback: {
        success: string;
        warning: string;
        error: string;
        info: string;
      };
    };
    fonts: {
      heading: string;
      body: string;
      button: string;
      mono: string;
    };
    fontWeights: {
      light: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
    borderRadius: {
      none: string;
      sm: string;
      md: string;
      lg: string;
      full: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
    transitions: {
      fast: string;
      normal: string;
      slow: string;
    };
    zIndices: {
      hide: number;
      auto: string;
      base: number;
      docked: number;
      dropdown: number;
      sticky: number;
      banner: number;
      overlay: number;
      modal: number;
      popover: number;
      toast: number;
      tooltip: number;
    };
  }
}
