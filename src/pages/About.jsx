import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import TiltWrapper from '../components/TiltWrapper';
import GradientText from '../components/GradientText';
import { Server, Database, Cloud, Shield, Cpu, Code2 } from 'lucide-react';

const specializations = [
  {
    title: 'Backend Systems',
    desc: 'Designing high-performance, scalable microservices and APIs.',
    icon: <Server className="text-primary" size={32} />,
  },
  {
    title: 'Cloud Architecture',
    desc: 'Expertise in AWS, Azure, and serverless computing.',
    icon: <Cloud className="text-secondary" size={32} />,
  },
  {
    title: 'Database Design',
    desc: 'Optimizing SQL and NoSQL databases for high throughput.',
    icon: <Database className="text-accent" size={32} />,
  },
  {
    title: 'Security & Auth',
    desc: 'Implementing secure authentication and data protection.',
    icon: <Shield className="text-primary" size={32} />,
  },
  {
    title: 'API Integration',
    desc: 'Seamlessly connecting third-party services and platforms.',
    icon: <Code2 className="text-secondary" size={32} />,
  },
  {
    title: 'System Design',
    desc: 'Architecting distributed systems for maximum reliability.',
    icon: <Cpu className="text-accent" size={32} />,
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
        <div className="md:w-1/2">
          <GradientText as="h2" className="text-4xl md:text-5xl mb-6">About Me</GradientText>
          <p className="text-lg text-foreground/70 leading-relaxed font-sans">
            Most people are satisfied with the 'what' of a product. I’ve spent my career obsessed with the 'how.' 
            My entry into engineering wasn't through a tutorial, but through a desire to take the engine apart 
            while it was still running. I build backends for the same reason I study them: because complexity 
            is a puzzle that deserves a clean solution.
          </p>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
           <div className="glass p-6 rounded-2xl">
              <div className="text-3xl font-bold text-primary mb-1">99%</div>
              <div className="text-sm text-foreground/50">Uptime Track Record</div>
           </div>
           <div className="glass p-6 rounded-2xl">
              <div className="text-3xl font-bold text-secondary mb-1">40+</div>
              <div className="text-sm text-foreground/50">APIs Integrated</div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specializations.map((spec, index) => (
          <motion.div
            key={spec.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <TiltWrapper>
              <GlassCard className="h-full">
                <div className="mb-6 p-3 rounded-xl bg-white/5 inline-block">
                  {spec.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{spec.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {spec.desc}
                </p>
              </GlassCard>
            </TiltWrapper>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
