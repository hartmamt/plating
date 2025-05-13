import React from 'react';
import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outlineDark' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const ButtonStyles = styled.button<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.button};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1;
  
  /* Size Variants */
  ${({ size, theme }) => {
    switch (size) {
      case 'sm':
        return css`
          font-size: ${theme.fontSizes.xs};
          padding: ${theme.spacing.xs} ${theme.spacing.md};
        `;
      case 'lg':
        return css`
          font-size: ${theme.fontSizes.md};
          padding: ${theme.spacing.md} ${theme.spacing.xl};
        `;
      case 'md':
      default:
        return css`
          font-size: ${theme.fontSizes.sm};
          padding: ${theme.spacing.sm} ${theme.spacing.lg};
        `;
    }
  }}
  
  /* Style Variants */
  ${({ variant, theme }) => {
    switch (variant) {
      case 'secondary':
        return css`
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.text.light};
          border: none;
          
          &:hover {
            background-color: #333333;
          }
          
          &:active {
            background-color: #000000;
          }
        `;
      case 'outline':
        return css`
          background-color: transparent;
          color: ${theme.colors.text.light};
          border: 3px solid ${theme.colors.text.light};
          font-weight: ${theme.fontWeights.bold};
          letter-spacing: 0.5px;
          text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
          
          &:hover {
            background-color: rgba(255, 255, 255, 0.25);
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
          }
          
          &:active {
            background-color: rgba(255, 255, 255, 0.35);
          }
        `;
      case 'outlineDark':
        return css`
          background-color: transparent;
          color: ${theme.colors.primary};
          border: 3px solid ${theme.colors.primary};
          font-weight: ${theme.fontWeights.bold};
          letter-spacing: 0.5px;
          
          &:hover {
            background-color: rgba(170, 95, 55, 0.1);
            box-shadow: 0 0 10px rgba(170, 95, 55, 0.2);
          }
          
          &:active {
            background-color: rgba(170, 95, 55, 0.2);
          }
        `;
      case 'text':
        return css`
          background-color: transparent;
          color: ${theme.colors.primary};
          border: none;
          padding-left: ${theme.spacing.sm};
          padding-right: ${theme.spacing.sm};
          
          &:hover {
            background-color: ${theme.colors.ui.hover};
          }
          
          &:active {
            color: ${theme.colors.secondary};
          }
        `;
      case 'primary':
      default:
        return css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.text.light};
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

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  ...props 
}) => {
  return (
    <ButtonStyles
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      {...props}
    >
      {children}
    </ButtonStyles>
  );
};

export default Button;
