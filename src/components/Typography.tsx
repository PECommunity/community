import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function Typography({ children, className = '' }: TypographyProps) {
  return (
    <div className={`typography-content ${className}`}>
      {children}
    </div>
  );
}
