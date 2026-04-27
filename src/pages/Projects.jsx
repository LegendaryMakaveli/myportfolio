import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import GradientText from '../components/GradientText';
import { ExternalLink, Code, Layout, Globe } from 'lucide-react';
import { Github } from '../components/Icons';

const projects = [
  {
    title: 'FarmSphere (E-Agriculture)',
    type: 'Full-Stack Platform',
    desc: 'A comprehensive platform for farmers and investors to manage tools, land leases, and agricultural investments.',
    problem: 'Farmers lack access to modern tools and capital, while investors find it hard to track agricultural opportunities.',
    solution: 'Built a robust Java (Spring Boot) backend and React Native mobile app for seamless management and investment tracking.',
    tags: ['Java', 'Spring Boot', 'React Native', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/LegendaryMakaveli/FarmSphere',
    link: '#',
    code: `@Transactional
public void processInvestment(Long farmerId, InvestmentPlan plan) {
    Farmer farmer = farmerRepo.findById(farmerId).orElseThrow();
    validateFarmerEligibility(farmer, plan);
    
    BigDecimal dividend = plan.calculateDividend(farmer.getRating());
    Investment inv = new Investment(farmer, plan, dividend);
    
    farmer.updateBalance(plan.getAmount().negate());
    investmentRepo.save(inv);
    notificationService.notify(farmer, "Investment Processed");
}`
  },
  {
    title: 'Digital Bank (WalletApp)',
    type: 'FinTech / Banking',
    desc: 'A comprehensive banking application for digital wallet management and secure transfers.',
    problem: 'Conventional banking interfaces are often slow and lack modern wallet-style flexibility.',
    solution: 'Created a secure, highly-available banking backend using Python and Django, focused on transactional safety.',
    tags: ['Python', 'Django', 'Banking', 'Security'],
    github: 'https://github.com/LegendaryMakaveli/WalletApplicationInDjango',
    link: '#',
    code: `@transaction.atomic
def process_intra_transfer(sender_wallet, receiver_wallet, amount):
    if sender_wallet.balance < amount:
        raise InsufficientFundsError("Balance too low for this transfer")
    
    sender_wallet.debit(amount)
    receiver_wallet.credit(amount)
    
    return Transaction.objects.create(
        sender=sender_wallet,
        receiver=receiver_wallet,
        amount=amount,
        type='INTRA_TRANSFER',
        status='COMPLETED'
    )`
  },
  {
    title: 'ShopFlow',
    type: 'E-commerce System',
    desc: 'An automated inventory and sales management system for modern retail businesses.',
    problem: 'Manual inventory tracking is prone to errors and scales poorly with business growth.',
    solution: 'Implemented a scalable Java-based system with real-time stock updates and comprehensive reporting.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'Redis'],
    github: 'https://github.com/LegendaryMakaveli/ShopFlow',
    link: '#',
    code: `@Service
public class InventoryManager {
    @CacheEvict(value = "stock", allEntries = true)
    public void deductStock(Long productId, int quantity) {
        Product product = repository.findById(productId)
            .orElseThrow(() -> new ProductNotFoundException());
            
        if (product.getStock() < quantity) {
            throw new InsufficientStockException();
        }
        
        product.setStock(product.getStock() - quantity);
        repository.save(product);
        checkReorderThreshold(product);
    }
}`
  },
  {
    title: 'lastManSystem',
    type: 'Security / Management',
    desc: 'A robust system for monitoring and managing security operations in high-stakes environments.',
    problem: 'Coordinating emergency responses and tracking personnel in real-time is often fragmented.',
    solution: 'Built a centralized Java-based command center with real-time status updates and automated alerts.',
    tags: ['Java', 'Security', 'Real-time Systems'],
    github: 'https://github.com/LegendaryMakaveli/lastManSystem',
    link: '#',
    code: `public SecurityCheckResult analyzeThreatLevel(SensorData data) {
    int riskScore = ruleEngine.evaluate(data);
    
    if (riskScore > threshold.getCriticalLimit()) {
        lockdownService.initiate(data.getZoneId());
        auditLog.recordEmergency(data, riskScore);
        return new SecurityCheckResult(AlertLevel.CRITICAL, true);
    }
    
    return new SecurityCheckResult(AlertLevel.NORMAL, false);
}`
  },
  {
    title: 'AdSystem (Classified Ads)',
    type: 'E-commerce / Marketing',
    desc: 'A full-stack classified advertisement platform for posting and managing listings.',
    problem: 'Users need a simple yet powerful way to post ads and reach local audiences without complex interfaces.',
    solution: 'Developed a dual-component system with a Java backend and a responsive JavaScript frontend for high performance.',
    tags: ['Java', 'JavaScript', 'SQL', 'REST API'],
    github: 'https://github.com/LegendaryMakaveli/AdSystem',
    link: '#',
    code: `public void publishAd(Ad ad) {
    validateContentPolicy(ad);
    
    if (ad.getAuthor().isPremiumMember()) {
        ad.setPriorityRank(1);
        ad.setExpiry(LocalDateTime.now().plusMonths(1));
        ad.setVisibility(Visibility.GLOBAL);
    } else {
        ad.setPriorityRank(0);
        ad.setExpiry(LocalDateTime.now().plusWeeks(1));
    }
    
    adRepository.save(ad);
}`
  },
  {
    title: 'Architectural Patterns',
    type: 'Educational / Utility',
    desc: 'A collection of implementations for Layered and Event-Driven architectures.',
    problem: 'Understanding and implementing clean architectural patterns in real projects is challenging for many developers.',
    solution: 'Created reference implementations in Java and Python to demonstrate decoupling and scalability.',
    tags: ['Architecture', 'Kafka', 'Java', 'Python'],
    github: 'https://github.com/LegendaryMakaveli/Layard_arch_in_java',
    link: '#',
    code: `// Business Logic decoupled from HTTP/Database
public class DomainLogicProcessor<T> {
    private final List<Validator<T>> validators;

    public void process(T entity) {
        validators.forEach(v -> v.validate(entity));
        
        // Pure domain logic execution
        applyBusinessRules(entity);
        
        eventPublisher.publish(new EntityProcessedEvent(entity));
    }
}`
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <GradientText as="h2" className="text-4xl md:text-5xl mb-4">Selected Work</GradientText>
          <p className="text-foreground/60 max-w-xl">Real-world systems I've built using modern architectural patterns.</p>
        </div>
        <a href="https://github.com/LegendaryMakaveli" target="_blank" rel="noopener noreferrer" className="text-primary font-bold flex items-center gap-2 hover:underline mb-2">
          View all on GitHub <ExternalLink size={18} />
        </a>
      </div>

      <div className="space-y-12">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12 group">
              <div className="space-y-6">
                <div>
                  <span className="text-primary font-mono text-sm uppercase tracking-widest">{project.type}</span>
                  <h3 className="text-3xl font-bold mt-2">{project.title}</h3>
                </div>
                
                <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                  {project.desc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4 border-y border-white/5">
                   <div>
                      <h4 className="text-sm font-bold text-secondary flex items-center gap-2 mb-2">
                         <Code size={16} /> THE PROBLEM
                      </h4>
                      <p className="text-xs text-foreground/60 leading-relaxed">{project.problem}</p>
                   </div>
                   <div>
                      <h4 className="text-sm font-bold text-accent flex items-center gap-2 mb-2">
                         <Layout size={16} /> THE SOLUTION
                      </h4>
                      <p className="text-xs text-foreground/60 leading-relaxed">{project.solution}</p>
                   </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-foreground/40 bg-white/5 px-2 py-1 rounded">#{tag}</span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:bg-primary hover:text-background transition-colors"><Github size={20} /></a>
                  {project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:bg-primary hover:text-background transition-colors"><Globe size={20} /></a>
                  )}
                </div>
              </div>

              {/* Code Snippet Area */}
              <div className="relative overflow-hidden glass rounded-2xl bg-[#0d1117] border border-white/10 group-hover:border-primary/30 transition-colors">
                 <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 flex items-center px-4 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    <span className="ml-2 text-[10px] font-mono text-foreground/40 uppercase tracking-widest">{project.tags[0]}</span>
                 </div>
                 <div className="p-6 pt-12 overflow-auto max-h-[400px] custom-scrollbar">
                    <pre className="text-[11px] md:text-xs font-mono text-foreground/70 leading-relaxed">
                       <code>{project.code}</code>
                    </pre>
                 </div>
                 
                 {/* Decorative elements */}
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                 <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl" />
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
