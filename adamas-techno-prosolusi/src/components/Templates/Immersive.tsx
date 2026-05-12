import { motion, useScroll, useTransform } from 'motion/react';
import { COMPANY_DATA } from '../../constants';
import { ShieldAlert, Cloud, CodeXml, Activity, ArrowRight } from 'lucide-react';
import GoogleMap from '../GoogleMap';

const iconMap: Record<string, any> = {
  Cloud,
  ShieldAlert,
  CodeXml,
  Activity
};

export default function ImmersiveTemplate() {
  const { scrollYProgress } = useScroll();
  const backgroundBlur = useTransform(scrollYProgress, [0, 0.2], [4, 20]);

  return (
    <div className="text-white selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Cinematic Background Gradients */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-cyan-900/10 rounded-full blur-[150px]" />
      </div>

      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
        <div className="h-16 px-8 rounded-full border border-white/5 bg-white/5 backdrop-blur-3xl flex items-center justify-between shadow-2xl">
          <span className="font-bold tracking-widest uppercase text-cyan-400 italic">Adamas</span>
          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
            <a href="#services" className="hover:text-cyan-400 transition-colors">Integration</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Manifesto</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Network</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8 font-mono text-cyan-500 tracking-[0.5em] uppercase text-xs"
          >
            System Connectivity Status: Optimal
          </motion.div>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent italic">
            Futurizing <br /> Connectivity.
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light mb-12">
            {COMPANY_DATA.tagline}
          </p>
          <motion.button 
            whileHover={{ letterSpacing: '0.2em' }}
            className="group px-12 py-5 rounded-full bg-cyan-500 text-black font-bold uppercase text-xs tracking-widest transition-all"
          >
            Enter the Grid
          </motion.button>
        </motion.div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-cyan-500 to-transparent" />
        </div>
      </section>

      {/* Services - Glass Cards */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <h2 className="text-5xl font-light tracking-widest uppercase mb-4 italic">Core Protocol</h2>
            <div className="w-24 h-px bg-cyan-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_DATA.services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-cyan-500/5 hover:border-cyan-500/20 transition-all overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon className="text-cyan-400 mb-12 group-hover:scale-110 transition-transform" size={40} strokeWidth={1} />
                  <h3 className="text-2xl font-light mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects - Immersive Gallery */}
      <section id="projects" className="py-32 bg-cyan-500/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase mb-6 block">Output Case Studies</span>
              <h2 className="text-6xl font-bold tracking-tighter mb-8 italic">Pioneering Logic.</h2>
              <p className="text-xl text-white/50 leading-relaxed mb-12">
                We don't just build systems; we architect digital legacies. Each project represents a leap forward in IT integration and operational resilience.
              </p>
              <div className="space-y-4">
                {COMPANY_DATA.projects.map((p, i) => (
                  <div key={p.id} className="p-6 border-b border-white/10 flex justify-between items-center group cursor-pointer hover:bg-white/5 transition-all">
                    <div>
                      <h4 className="text-lg font-bold group-hover:text-cyan-400 transition-colors">{p.title}</h4>
                      <p className="text-xs text-white/30 uppercase tracking-widest">{p.category}</p>
                    </div>
                    <ArrowRight className="text-white/20 group-hover:translate-x-2 group-hover:text-cyan-400 transition-all" />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border border-cyan-500/20 rounded-full border-dashed"
              />
              <div className="absolute inset-12 overflow-hidden rounded-full border border-white/10 shadow-3xl shadow-cyan-500/20">
                <img src={COMPANY_DATA.projects[0].image} className="w-full h-full object-cover" alt="Main Project" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light italic mb-8 tracking-tight">Tactical Presence.</h2>
            <p className="text-white/50 max-w-xl mx-auto italic">{COMPANY_DATA.about}</p>
          </div>
          <GoogleMap />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-white/10 pt-20">
            <div>
              <h4 className="text-cyan-500 font-mono text-xs uppercase tracking-widest mb-4">Signal Origin</h4>
              <p className="text-sm font-light leading-relaxed">{COMPANY_DATA.address}</p>
            </div>
            <div>
              <h4 className="text-cyan-500 font-mono text-xs uppercase tracking-widest mb-4">Visionary Reach</h4>
              <p className="text-sm font-light leading-relaxed">{COMPANY_DATA.vision}</p>
            </div>
            <div>
              <h4 className="text-cyan-500 font-mono text-xs uppercase tracking-widest mb-4">Objective</h4>
              <p className="text-sm font-light leading-relaxed">{COMPANY_DATA.mission}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">
          <span>&copy; MMXXVI {COMPANY_DATA.name} &bull; SECURE NODES ACTIVATED</span>
        </div>
      </footer>
    </div>
  );
}
