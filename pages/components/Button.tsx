import React from 'react';
import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outlineDark' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  as?: React.ElementType;
  children: React.ReactNode;
}

const StyledButton = styled.button<Omit<ButtonProps, 'as'>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  border: none;
  text-decoration: none;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  transition: all 0.2s ease;
  border-radius: 4px;
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
  
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return 'padding: 0.5rem 1rem; font-size: 0.875rem;';
      case 'lg':
        return 'padding: 0.75rem 1.5rem; font-size: 1.125rem;';
      default:
        return '';
    }
  }}
  
  ${({ variant = 'primary', theme }) => {
    const primaryColor = theme.colors?.primary || '#b77a3a';
    const secondaryColor = theme.colors?.secondary || '#4a5568';
    
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${primaryColor};
          color: white;
          &:hover { opacity: 0.9; }
        `;
      case 'secondary':
        return css`
          background-color: ${secondaryColor};
          color: white;
          &:hover { opacity: 0.9; }
        `;
      case 'outline':
        return css`
          background: transparent;
          border: 1px solid ${primaryColor};
          color: ${primaryColor};
          &:hover {
            background-color: ${primaryColor}1a;
          }
        `;
      case 'outlineDark':
        return css`
          background: transparent;
          border: 1px solid #2d3748;
          color: #2d3748;
          &:hover {
            background-color: rgba(45, 55, 72, 0.1);
          }
        `;
      case 'text':
        return css`
          background: transparent;
          color: ${primaryColor};
          padding: 0;
          text-decoration: underline;
          &:hover {
            opacity: 0.8;
          }
        `;
      default:
        return css`
          background-color: ${primaryColor};
          color: white;
          border: none;
          
          &:hover {
            background-color: #8F4F2D;
          }
          
          &:active {
            background-color: #734023;
          }
        `;
    }
  }}
  
  /* Full Width */
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  
  /* Disabled state */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  as: Component = 'button',
  ...props
}, ref) => {
  return (
    <StyledButton
      as={Component}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      ref={ref}
      {...props}
    >
      {children}
    </StyledButton>
  );
});

Button.displayName = 'Button';

export default Button;
