import { motion } from 'motion/react';
import { COMPANY_DATA } from '../../constants';
import { ShieldAlert, Cloud, CodeXml, Activity, Zap, ArrowUpRight } from 'lucide-react';
import GoogleMap from '../GoogleMap';

const iconMap: Record<string, any> = {
  Cloud,
  ShieldAlert,
  CodeXml,
  Activity
};

export default function CharismaticTemplate() {
  return (
    <div className="text-white selection:bg-blue-500/30 overflow-x-hidden font-sans">
      {/* Dynamic Aura Background */}
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-cyan-600/20 blur-[120px] rounded-full" />
      </div>

      <nav className="fixed top-0 w-full z-50 p-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/95 px-3 py-1.5 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <img src="./adamas-logo.png" alt="Adamas Logo" className="h-8 object-contain" />
            </div>
          </div>
          <div className="hidden md:flex gap-10 text-sm font-medium text-white/60">
            <a href="#services" className="hover:text-blue-400 transition-colors">Expertise</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Innovations</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">Company</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95">
            Connect Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8"
            >
              The New Standard of IT Integration
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-8"
            >
              Magnetic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-200">Intelligence.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/50 max-w-xl leading-relaxed mb-12"
            >
              {COMPANY_DATA.tagline}
            </motion.p>
            <div className="flex flex-wrap gap-6">
              <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-2xl flex items-center gap-2 overflow-hidden transition-all hover:pr-12">
                Launch Partnership
                <ArrowUpRight className="absolute right-4 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" size={20} />
              </button>
              <button className="px-8 py-4 border border-white/10 rounded-2xl font-bold bg-white/5 hover:bg-white/10 transition-colors">
                View Showcase
              </button>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-cyan-600/30 blur-[100px] -z-10" />
            <div className="aspect-square bg-white/5 backdrop-blur-3xl rounded-[60px] border border-white/10 p-4 relative overflow-hidden group">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover rounded-[44px] transition-transform duration-1000 group-hover:scale-105" 
                alt="Cyber Background"
              />
              <div className="absolute bottom-10 left-10 p-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-3xl max-w-[200px]">
                <div className="text-blue-400 font-bold mb-1">99.9%</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Uptime Integration</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="services" className="py-32 px-8 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-24">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Mastering the Digital Spectrum.</h2>
            <p className="text-white/40 text-lg">We provide a comprehensive suite of IT solutions designed to catalyze growth and eliminate operational friction.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
            {COMPANY_DATA.services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div 
                  key={service.id}
                  whileHover={{ y: -10 }}
                  className="group p-10 bg-white/5 border border-white/10 rounded-[40px] hover:bg-blue-600/10 hover:border-blue-600/30 transition-all"
                >
                  <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                    <Icon size={32} className="text-blue-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4">{service.title}</h3>
                  <p className="text-white/40 leading-relaxed font-light">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Innovations */}
      <section id="projects" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tight">Success Stories <br /> <span className="text-white/20">by Design.</span></h2>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-30">←</div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">→</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMPANY_DATA.projects.map((project, i) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-white/5 border border-white/10 rounded-[40px] overflow-hidden mb-8">
                  <img 
                    src={project.image} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    alt={project.title} 
                  />
                </div>
                <h4 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                <div className="text-sm font-medium text-white/30 uppercase tracking-[0.2em]">{project.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Origin */}
      <section id="about" className="py-32 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="order-2 lg:order-1">
              <GoogleMap />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl font-display font-bold mb-8">The Catalyst Behind the Code.</h2>
              <p className="text-xl text-white/50 leading-relaxed mb-12 font-light italic">
                "{COMPANY_DATA.about}"
              </p>
              <div className="grid grid-cols-2 gap-12 border-b border-white/10 pb-12 mb-12">
                <div>
                  <div className="text-blue-400 font-bold mb-4 uppercase text-xs tracking-widest">Our Mission</div>
                  <p className="text-sm leading-relaxed text-white/70">{COMPANY_DATA.mission}</p>
                </div>
                <div>
                  <div className="text-blue-400 font-bold mb-4 uppercase text-xs tracking-widest">Our Vision</div>
                  <p className="text-sm leading-relaxed text-white/70">{COMPANY_DATA.vision}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-blue-500/50 flex items-center justify-center text-blue-400">
                  <Zap size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-white/30 uppercase tracking-[0.3em]">Headquarters</div>
                  <div className="text-sm font-medium">{COMPANY_DATA.address}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="bg-white/95 px-3 py-1.5 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <img src="./adamas-logo.png" alt="Adamas Logo" className="h-6 object-contain" />
            </div>
          </div>
          <p className="text-white/20 text-xs tracking-widest uppercase">
            &copy; 2026 Adamas Techno Prosolusi &bull; Redefining Tech Logic
          </p>
          <div className="flex gap-8 text-[10px] text-white/40 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
