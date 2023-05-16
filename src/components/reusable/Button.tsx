import React from 'react';

interface ButtonProps {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  ariaLabel?: string;
};

const Button: React.FC<ButtonProps> = ({ title, type, ariaLabel }) => {
  return (
    <button type={type} aria-label={ariaLabel}>{title}</button>
  );
};

export default Button;