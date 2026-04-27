import React from 'react';
import { cn } from '../utils/cn';

const GradientText = ({ children, className, as: Component = 'h1' }) => {
  return (
    <Component className={cn("text-gradient font-display font-bold tracking-tight", className)}>
      {children}
    </Component>
  );
};

export default GradientText;
