import { motion } from 'motion/react';
import { COMPANY_DATA } from '../../constants';
import { ShieldAlert, Cloud, CodeXml, Activity, Cpu, CircuitBoard, Terminal, Globe } from 'lucide-react';
import GoogleMap from '../GoogleMap';

const iconMap: Record<string, any> = {
  Cloud,
  ShieldAlert,
  CodeXml,
  Activity
};

export default function CyberKineticTemplate() {
  return (
    <div className="text-white selection:bg-cyan-500/30 font-mono overflow-x-hidden">
      {/* HUD Scanlines Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] overflow-hidden">
        <div className="absolute inset-x-0 h-px bg-cyan-400 animate-scanline" />
      </div>

      <nav className="fixed top-0 w-full z-[60] p-6 lg:p-10 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-start">
          <div className="pointer-events-auto group">
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="text-cyan-400 animate-pulse" size={24} />
              <span className="text-2xl font-bold tracking-[0.2em] font-display">ADAMAS</span>
            </div>
            <div className="h-0.5 w-full bg-cyan-500/20 group-hover:bg-cyan-500 transition-all duration-500" />
            <span className="text-[10px] text-cyan-500/50 uppercase tracking-[0.3em]">Module: Alpha-v2.6</span>
          </div>

          <div className="hidden md:flex gap-1 bg-white/5 backdrop-blur-md rounded-lg p-1 border border-white/10 pointer-events-auto">
            {['Expertise', 'Portfolio', 'Terminal'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="px-4 py-2 text-[10px] uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero: Cyber Kinetic */}
      <section className="min-h-screen pt-40 pb-20 px-6 flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-10">
          <CircuitBoard size={800} strokeWidth={0.5} className="text-cyan-500 animate-[spin_60s_linear_infinite]" />
        </div>

        <div className="max-w-5xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-4 text-[10px] tracking-[0.4em] text-cyan-400 uppercase">
              <span className="h-px w-8 bg-cyan-500/30" />
              Syncing Reality and Logic
              <span className="h-px w-8 bg-cyan-500/30" />
            </div>
            <h1 className="text-6xl md:text-[10rem] font-bold leading-none tracking-tighter mb-12 flex flex-col">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">KINETIC</span>
              <span className="md:-mt-8">SYSTEMS.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-16 border-l border-cyan-500/50 pl-8 text-left">
              {COMPANY_DATA.tagline}
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button className="px-10 py-4 bg-cyan-500 text-black font-bold uppercase text-xs tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)] active:scale-95">
                Initialize Connection
              </button>
              <div className="flex items-center gap-4 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                <Globe size={16} />
                Global Node: Active
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Specs Style Grid */}
      <section id="expertise" className="py-24 px-6 border-t border-white/10 bg-zinc-900/40 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-px bg-cyan-500" />
            <h2 className="text-sm font-bold tracking-[0.5em] uppercase text-cyan-400">Tactical Specifications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_DATA.services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <div key={service.id} className="group relative">
                  <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 transition-all -m-4 rounded-xl" />
                  <div className="relative border-t border-white/10 group-hover:border-cyan-500 transition-all pt-8">
                    <div className="flex justify-between items-start mb-12">
                      <Icon className="text-cyan-500 group-hover:translate-x-2 transition-transform" size={32} />
                      <span className="text-[10px] opacity-20 font-bold">MODE_0{i+1}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 tracking-tighter uppercase">{service.title}</h3>
                    <p className="text-xs text-white/40 leading-relaxed group-hover:text-white/70 transition-colors">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio: Data Viz Style */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8">
              {COMPANY_DATA.projects.map((project, i) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group flex flex-col md:flex-row bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all"
                >
                  <div className="md:w-1/3 aspect-video md:aspect-auto h-full overflow-hidden">
                    <img src={project.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={project.title} />
                  </div>
                  <div className="p-8 flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight mb-1">{project.title}</h3>
                        <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">{project.category}</span>
                      </div>
                      <Terminal size={16} className="text-white/20 group-hover:text-cyan-400" />
                    </div>
                    <p className="text-xs text-white/40 mb-8 line-clamp-2">{project.description}</p>
                    <div className="flex gap-2 h-1 w-full bg-white/5">
                      <div className="h-full bg-cyan-500 w-1/3 opacity-50" />
                      <div className="h-full bg-cyan-500 w-1/4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="lg:col-span-4 p-8 border border-white/10 rounded-3xl flex flex-col justify-between bg-zinc-900/20">
              <div className="space-y-8">
                <h2 className="text-2xl font-display font-bold">Network <br /> Statistics.</h2>
                <div className="space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex justify-between items-end gap-4 h-8 bg-cyan-500/5 rounded-sm p-1">
                      <div className="h-full bg-cyan-500/30 rounded-xs" style={{ width: `${Math.random() * 80 + 20}%` }} />
                      <span className="text-[8px] font-bold opacity-30">SEG_0{i}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-12 bg-black/40 p-6 rounded-2xl border border-white/5">
                <p className="text-[10px] leading-relaxed text-white/30 italic">
                  Systems running at peak efficiency. All nodes verified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Terminal */}
      <section id="terminal" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <Terminal className="text-cyan-500 mb-8" size={32} />
              <h2 className="text-5xl font-bold tracking-tighter mb-12">System Origin <br /> & Mission.</h2>
              <p className="text-lg text-white/50 mb-12 leading-relaxed">
                {COMPANY_DATA.about}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <h4 className="text-[10px] uppercase tracking-widest text-cyan-400 mb-2">Protocol</h4>
                  <p className="text-[11px] leading-relaxed opacity-70 italic">{COMPANY_DATA.mission}</p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <h4 className="text-[10px] uppercase tracking-widest text-cyan-400 mb-2">Outcome</h4>
                  <p className="text-[11px] leading-relaxed opacity-70 italic">{COMPANY_DATA.vision}</p>
                </div>
              </div>
              <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg inline-block">
                <span className="text-[10px] font-bold uppercase tracking-widest">Base Address: {COMPANY_DATA.address}</span>
              </div>
            </div>
            
            <div className="relative group">
               <div className="absolute -inset-4 bg-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
               <GoogleMap />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center">
        <div className="flex justify-center gap-8 mb-8 text-[10px] font-bold uppercase tracking-[0.5em] opacity-20">
          <span>Secure</span>
          <span>Integrated</span>
          <span>Future</span>
        </div>
        <p className="text-[9px] font-mono opacity-30 uppercase tracking-widest">
          &copy; 2026 {COMPANY_DATA.name} &bull; ROOT_ACCESS_GRANTED
        </p>
      </footer>
    </div>
  );
}
