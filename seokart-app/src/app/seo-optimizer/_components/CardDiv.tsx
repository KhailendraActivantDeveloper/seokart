import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const CardDiv: React.FC<CardProps> = ({ children, className = '' }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default CardDiv;
