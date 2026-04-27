import React from 'react';
import { motion } from 'framer-motion';
import GradientText from '../components/GradientText';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] -z-10 animate-pulse delay-1000" />

      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Picture */}
          <div className="mb-8 relative inline-block">
             <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
             <img 
               src="/WebProfile.jpeg" 
               alt="Adeyemo Emmanuel" 
               className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/10 shadow-2xl mx-auto"
             />
             <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center border-4 border-background text-background">
                <div className="w-2 h-2 bg-white rounded-full animate-ping" />
             </div>
          </div>

          <span className="block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary mb-6 mx-auto w-fit font-sans">
            Available for new opportunities
          </span>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm <GradientText className="inline">Adeyemo Emmanuel</GradientText><br />
            <span className="text-3xl md:text-5xl opacity-80">Full-Stack Software Engineer</span>
          </h2>

          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            I specialize in building robust backend systems and intuitive mobile/web applications. 
            Passionate about scalable architecture and clean code.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-background font-bold rounded-xl flex items-center gap-2 group transition-shadow hover:shadow-[0_0_20px_rgba(var(--color-primary),0.3)] font-sans"
            >
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.a>
            
            <div className="relative group/cv">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass text-foreground font-bold rounded-xl flex items-center gap-2 hover:bg-white/10 font-sans"
              >
                Download Resume
                <Download size={20} />
              </motion.button>
              
              {/* CV Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-64 glass rounded-xl overflow-hidden opacity-0 invisible group-hover/cv:opacity-100 group-hover/cv:visible transition-all z-20">
                 <a href="/ADEYEMO_EMMANUEL_AKOREDE_Resume_2026-04-17.pdf" download className="block px-4 py-3 hover:bg-primary/20 text-sm border-b border-white/5 font-sans">
                    Main Resume (FlowCV)
                 </a>
                 <a href="/BackendEngineerCV.pdf" download className="block px-4 py-3 hover:bg-primary/20 text-sm font-sans">
                    Backend Specialist CV
                 </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3D Visual Element Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 relative"
        >
          {/* Floating badges */}
          <div className="absolute -top-10 -left-10 glass p-4 rounded-2xl shadow-xl hidden lg:block animate-bounce z-10">
            <div className="text-primary font-bold text-xl">2+ Years</div>
            <div className="text-xs text-foreground/60 text-left">Experience</div>
          </div>

          <div className="w-full max-w-4xl mx-auto aspect-video glass rounded-3xl p-1 relative overflow-hidden group">
             <div className="w-full h-full bg-[#0d1117] rounded-2xl flex flex-col border border-white/5 relative overflow-hidden">
                {/* Editor Header */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/5">
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                   </div>
                   <div className="text-[10px] font-mono text-foreground/40">AppLayout.tsx — portfolio</div>
                   <div className="w-10" />
                </div>
                
                {/* Bulky Code Snippet */}
                <div className="flex-1 p-6 font-mono text-[11px] md:text-sm text-left overflow-hidden relative">
                   <motion.div 
                     animate={{ y: [0, -600] }}
                     transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                     className="space-y-1"
                   >
<pre className="text-foreground/80 leading-relaxed">
{`import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './context/ThemeContext';
import { LayoutProps, SystemConfig } from './types';

/**
 * @author Adeyemo Emmanuel Akorede
 * @description Advanced layout orchestrator for the portfolio engine
 */
export const AppLayout: React.FC<LayoutProps> = ({ 
  children, 
  config = DEFAULT_CONFIG 
}) => {
  const { theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Memoized layout configurations for performance
  const layoutStyle = useMemo(() => ({
    background: theme === 'dark' ? 'var(--bg-dark)' : 'var(--bg-light)',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    perspective: '1200px'
  }), [theme]);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || 
                       document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - 
                    document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isMounted) return <LayoutSkeleton />;

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={layoutStyle}
      className="relative min-h-screen antialiased selection:bg-primary/30"
    >
      <header className="fixed top-0 w-full z-50 backdrop-blur-md">
        <ProgressBar progress={scrollProgress} />
        <Navigation items={config.navItems} />
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={window.location.pathname}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <Footer copyright={config.copyright} />
      <ThemeToggle active={theme} onToggle={toggleTheme} />
      
      {/* Dynamic Background Mesh */}
      <BackgroundMesh density={0.4} color={theme === 'dark' ? '#0a0a0a' : '#ffffff'} />
    </motion.main>
  );
};

// Internal Utility Components
const ProgressBar = ({ progress }) => (
  <motion.div 
    className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" 
    style={{ width: \`\${progress}%\` }}
  />
);

const LayoutSkeleton = () => (
  <div className="w-full h-screen bg-background animate-pulse flex items-center justify-center">
    <div className="w-32 h-32 rounded-full bg-white/5" />
  </div>
);`}
</pre>
                   </motion.div>
                   {/* Fade overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-[#0d1117]/50 pointer-events-none" />
                </div>
             </div>
          </div>
          
          <div className="absolute -bottom-10 -right-10 glass p-4 rounded-2xl shadow-xl hidden lg:block animate-bounce delay-700">
            <div className="text-secondary font-bold text-xl">15+ Projects</div>
            <div className="text-xs text-foreground/60 text-right">Completed</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
