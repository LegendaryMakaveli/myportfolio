import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import GradientText from '../components/GradientText';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Software Engineer Trainee',
    company: 'Semicolon Africa',
    period: '2025 - Present',
    desc: 'Intensive software engineering fellowship focused on full-stack development, architectural patterns, and agile methodologies.',
    points: [
      'Developed and deployed several full-stack applications using Java (Spring Boot) and React.',
      'Implemented architectural patterns like Layered Architecture and Event-Driven systems.',
      'Collaborated in cross-functional teams to build scalable solutions for real-world problems.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Freelance / Open Source',
    period: '2025 - 2026',
    desc: 'Building and maintaining open-source projects and providing freelance development services.',
    points: [
      'Built a digital wallet application using Django and Python.',
      'Developed agricultural supply chain solutions (FarmSphere).',
      'Contributed to various open-source repositories on GitHub.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-20">
        <GradientText as="h2" className="text-4xl md:text-5xl mb-4">Experience</GradientText>
        <p className="text-foreground/60">My professional journey in software engineering.</p>
      </div>

      <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {experiences.map((exp, idx) => (
          <div key={exp.role + idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Briefcase className="text-primary" size={18} />
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]"
            >
              <GlassCard className="p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">{exp.period}</span>
                </div>
                <div className="text-secondary font-medium mb-4">{exp.company}</div>
                <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                  {exp.desc}
                </p>
                <ul className="space-y-2">
                   {exp.points.map(point => (
                     <li key={point} className="flex items-center gap-2 text-xs text-foreground/50">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                        {point}
                     </li>
                   ))}
                </ul>
              </GlassCard>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
