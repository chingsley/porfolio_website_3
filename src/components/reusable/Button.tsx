import React from 'react';

interface ButtonProps {
  title: string;
};

const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <div>{title}</div>
  );
};

export default Button;