import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import GradientText from '../components/GradientText';

const skillCategories = [
  {
    name: 'Backend',
    skills: ['Java', 'Spring Boot', 'Python', 'Django', 'Flask', 'Go', 'Node.js'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'React Native', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'],
  },
  {
    name: 'Architecture & DevOps',
    skills: ['Event-Driven Arch', 'Layered Arch', 'Kafka', 'Docker', 'CI/CD', 'AWS', 'Azure'],
  },
  {
    name: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-20">
        <GradientText as="h2" className="text-4xl md:text-5xl mb-4">Technical Skills</GradientText>
        <p className="text-foreground/60">My technical toolkit for building high-end software solutions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <GlassCard className="h-full group hover:shadow-primary/10 transition-shadow">
              <h3 className="text-xl font-bold mb-6 text-primary">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-foreground/80 hover:bg-primary/20 hover:border-primary/50 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
