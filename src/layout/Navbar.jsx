import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Github, Linkedin, Twitter } from '../components/Icons';
import { cn } from '../utils/cn';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "top-4" : "top-0"
    )}>
      <div className={cn(
        "max-w-6xl mx-auto flex items-center justify-between transition-all duration-300",
        isScrolled ? "glass rounded-2xl px-6 py-3" : "py-2"
      )}>
        {/* Logo - Round 'A' */}
        <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary text-background font-bold text-xl font-display shadow-lg shadow-primary/20 hover:scale-110 transition-transform">
          A
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors font-sans"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="p-2 hover:bg-white/5 rounded-full transition-colors text-foreground/70 hover:text-primary">
            <Github size={20} />
          </a>
          <a href="#" className="p-2 hover:bg-white/5 rounded-full transition-colors text-foreground/70 hover:text-primary">
            <Linkedin size={20} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 glass rounded-2xl p-6 flex flex-col gap-4 md:hidden font-sans"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-foreground/70 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="h-[1px] bg-white/10 my-2" />
            <div className="flex gap-4">
              <a href="#" className="p-2 text-foreground/70 hover:text-primary"><Github /></a>
              <a href="#" className="p-2 text-foreground/70 hover:text-primary"><Linkedin /></a>
              <a href="#" className="p-2 text-foreground/70 hover:text-primary"><Twitter /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
