import { motion } from 'motion/react';
import { COMPANY_DATA } from '../../constants';
import { ShieldAlert, Cloud, CodeXml, Activity, ExternalLink } from 'lucide-react';
import GoogleMap from '../GoogleMap';

const iconMap: Record<string, any> = {
  Cloud,
  ShieldAlert,
  CodeXml,
  Activity
};

export default function MinimalTemplate() {
  return (
    <div className="font-sans text-white selection:bg-blue-500/30">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-xs">A</div>
            <span className="font-bold tracking-tighter text-xl uppercase">Adamas</span>
          </div>
          <div className="hidden md:flex gap-12 text-xs font-medium uppercase tracking-widest text-zinc-500">
            <a href="#services" className="hover:text-blue-500 transition-colors">Services</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
          </div>
          <button className="bg-white text-black px-6 py-2 text-xs font-bold uppercase rounded-full hover:bg-blue-500 hover:text-white transition-all">
            Get Prosolusi
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Next-Gen IT Infrastructure
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]"
              >
                Precision <br />
                <span className="text-zinc-600">IT Integration.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 max-w-xl leading-relaxed mb-12"
              >
                {COMPANY_DATA.tagline}
              </motion.p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform">
                  Explore Services
                </button>
                <button className="px-10 py-5 border border-white/10 rounded-full font-bold hover:bg-white/5">
                  Our Work
                </button>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="lg:w-1/3 flex flex-col justify-end"
            >
              <div className="p-8 border border-white/5 rounded-3xl bg-zinc-900/30 backdrop-blur-xl">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <div key={i} className="w-1 h-8 bg-blue-500" style={{ height: `${Math.random() * 32 + 8}px` }} />)}
                </div>
                <h3 className="text-sm font-mono text-blue-400 uppercase tracking-widest mb-2">Live Systems</h3>
                <p className="text-xs text-zinc-500">Currently facilitating 4TB+ of secure data integration across 12 major cloud clusters.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
            {COMPANY_DATA.services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div 
                  key={service.id}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                  className="bg-black p-12 flex flex-col transition-all cursor-default"
                >
                  <Icon className="text-blue-500 mb-8" size={32} />
                  <h3 className="text-xl font-bold mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl font-bold tracking-tighter">Selected <span className="text-zinc-600">Deployments.</span></h2>
            <p className="text-zinc-500 max-w-xs text-sm uppercase tracking-widest leading-relaxed">Showcasing our impact across diverse industry sectors.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {COMPANY_DATA.projects.map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden rounded-3xl mb-6 grayscale hover:grayscale-0 transition-all duration-500">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-1 tracking-tight">{project.title}</h3>
                    <p className="text-xs text-blue-500 font-mono uppercase tracking-widest">{project.category}</p>
                  </div>
                  <ExternalLink size={20} className="text-zinc-700 group-hover:text-white transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Contact */}
      <section id="about" className="py-24 bg-zinc-900/20 backdrop-blur-3xl border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl font-bold tracking-tighter mb-8">Engineering <br />Digital Futures.</h2>
              <p className="text-xl text-zinc-400 leading-relaxed mb-12">
                {COMPANY_DATA.about}
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2 underline underline-offset-8">Mission</h4>
                  <p className="text-sm text-zinc-300">{COMPANY_DATA.mission}</p>
                </div>
                <div>
                  <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2 underline underline-offset-8">Vision</h4>
                  <p className="text-sm text-zinc-300">{COMPANY_DATA.vision}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xs text-zinc-500 font-mono">Location HQ</span>
                <p className="text-sm font-medium">{COMPANY_DATA.address}</p>
              </div>
            </div>
            <GoogleMap className="h-[400px]" />
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          <span>&copy; 2026 {COMPANY_DATA.name}. All Rights Reserved.</span>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Security Audit</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
