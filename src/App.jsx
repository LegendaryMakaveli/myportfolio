import React from 'react';
import Navbar from './layout/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="relative font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-2xl font-bold font-display tracking-tight text-gradient">
              <span className="text-foreground"></span>
           </div>
           <p className="text-foreground/40 text-sm">
              © {new Date().getFullYear()} Adeyemo Emmanuel Akorede. Built with Precision & Craft.
           </p>
           <div className="flex gap-6">
              {['About', 'Projects', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-medium text-foreground/40 hover:text-primary transition-colors">{item}</a>
              ))}
           </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
