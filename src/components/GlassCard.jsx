import React from 'react';
import { cn } from '../utils/cn';

const GlassCard = ({ children, className, glow = true }) => {
  return (
    <div className={cn(
      "glass glass-hover rounded-2xl p-6 relative overflow-hidden group",
      glow && "glow-border",
      className
    )}>
      {/* Decorative light reflection */}
      <div className="absolute -inset-full bg-gradient-to-tr from-white/0 via-white/5 to-white/0 rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
