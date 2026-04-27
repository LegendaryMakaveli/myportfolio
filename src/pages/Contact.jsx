import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import GradientText from '../components/GradientText';
import { Mail, MessageSquare, Send, Phone } from 'lucide-react';
import { Github, Linkedin, Twitter } from '../components/Icons';

const Contact = () => {
  const whatsappNumber = "+2348148732791";
  const suggestedMessage = encodeURIComponent("Hi Emmanuel, I saw your portfolio and would like to discuss a project with you!");
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${suggestedMessage}`;

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <GradientText as="h2" className="text-4xl md:text-5xl mb-6">Let's Connect</GradientText>
          <p className="text-lg text-foreground/60 mb-10 leading-relaxed">
            I'm currently open to new opportunities and collaborations. 
            Whether you have a question or just want to say hi, I'll try my best 
            to get back to you!
          </p>

          <div className="space-y-6">
             <div className="flex items-center gap-4">
                <div className="p-3 glass rounded-xl text-primary"><Mail size={24} /></div>
                <div>
                   <div className="text-xs text-foreground/40 uppercase tracking-widest font-bold">Email</div>
                   <a href="mailto:adeyemoakorede93@gmail.com" className="text-foreground/80 hover:text-primary transition-colors">
                      adeyemoakorede93@gmail.com
                   </a>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <div className="p-3 glass rounded-xl text-secondary"><Phone size={24} /></div>
                <div>
                   <div className="text-xs text-foreground/40 uppercase tracking-widest font-bold">WhatsApp</div>
                   <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-secondary transition-colors">
                      +234 81 48732791
                   </a>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <div className="p-3 glass rounded-xl text-accent"><MessageSquare size={24} /></div>
                <div>
                   <div className="text-xs text-foreground/40 uppercase tracking-widest font-bold">Socials</div>
                   <div className="flex gap-4 mt-1">
                      <a href="https://github.com/LegendaryMakaveli" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Github size={20} /></a>
                      <a href="#" className="hover:text-secondary transition-colors"><Linkedin size={20} /></a>
                      <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-8">
            <div className="text-center space-y-6">
               <h3 className="text-2xl font-bold">Quick Message</h3>
               <p className="text-foreground/60 text-sm">
                  Click the button below to chat with me directly on WhatsApp.
               </p>
               <a 
                 href={whatsappUrl} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-full py-4 bg-[#25D366] text-white font-bold rounded-xl flex items-center justify-center gap-2 group hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all"
               >
                  Text me on WhatsApp
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </a>
               
               <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                  <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#121214] px-2 text-foreground/20">or use the form</span></div>
               </div>

               <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors text-sm" placeholder="Your Name" />
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors text-sm" placeholder="Your Email" />
                  <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors resize-none text-sm" placeholder="How can I help you?" />
                  <button className="w-full py-3 glass text-foreground font-bold rounded-xl hover:bg-white/10 transition-colors text-sm">
                     Send Email
                  </button>
               </form>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
