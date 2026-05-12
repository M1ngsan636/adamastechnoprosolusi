import React, { useState } from 'react';
import { 
  Menu, X, ArrowRight, ShieldCheck, HeartHandshake, Handshake, 
  Mail, Phone, MapPin, Globe, User, LayoutDashboard, Lightbulb, 
  ClipboardList, LayoutGrid, Settings, TrendingUp, Search, Plus, 
  Edit, Trash2, CloudUpload, SortAsc, Users, Building, School, 
  Monitor, Tv, Camera, MonitorCheck, Megaphone, Building2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Sub-components for high-tech feel
const VisualCore = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#22d3ee10_0%,transparent_70%)]" />
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
    {/* Scanning Line */}
    <motion.div 
      animate={{ top: ['0%', '100%'] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute left-0 w-full h-[2px] bg-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.3)] z-10"
    />
  </div>
);

const HUDOverlay = () => (
  <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between text-[8px] font-mono uppercase tracking-[0.2em] text-cyan-400/40 z-20">
    <div className="flex justify-between">
      <div className="flex flex-col gap-1">
        <div>SYS_PORTAL // INFRA_V2.0</div>
        <div>COORDS: 06°11'30"S 106°44'25"E</div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <div className="flex gap-2">
          <div className="w-1 h-1 bg-cyan-400 animate-pulse" />
          <span>NETWORK_STABLE</span>
        </div>
        <div>UPTIME: 99.998%</div>
      </div>
    </div>
    <div className="flex justify-between items-end">
      <div className="flex flex-col gap-1">
        <div>ENCRYPT_LAYER: AES-256</div>
        <div>SIGNAL_LOCK: TRUE</div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <div className="w-24 h-[1px] bg-cyan-400/20 relative">
          <motion.div 
            animate={{ left: ['0%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-0 w-4 h-full bg-cyan-400/40"
          />
        </div>
        <div>ADAMAS_CORE_CORE_SYNC</div>
      </div>
    </div>
  </div>
);

export default function PremiumTechV2Template() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const navLinks = [
    { name: 'Solutions', id: 'solutions' },
    { name: 'Projects', id: 'projects' },
    { name: 'About Us', id: 'about' },
  ];

  const solutions = [
    { title: "Executive Meeting Room", icon: Building2, desc: "High-end boardroom systems with seamless integration for flawless executive communication.", features: ["4K Video Conferencing", "Acoustic Treatment"] },
    { title: "Command Center", icon: MonitorCheck, desc: "Mission-critical visualization and control systems for 24/7 operations monitoring.", features: ["LED Video Walls", "KVM Management"] },
    { title: "Hybrid Classroom", icon: School, desc: "Bridging the gap between physical and remote learning with interactive tech.", features: ["Auto-Tracking Cameras", "Smart Whiteboards"] },
    { title: "Home Theater", icon: Monitor, desc: "Immersive cinematic experiences for luxury residential properties.", features: ["Dolby Atmos Audio", "Laser Projection"] },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white font-sans min-h-screen selection:bg-white selection:text-black">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5 h-20">
        <nav className="flex justify-between items-center h-full px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-xl font-black tracking-tighter text-white uppercase">
            Adamas <span className="text-stone-500">Prosolusi</span>
          </div>

          <div className="hidden md:flex items-center gap-12">
            <div className="flex gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setActiveTab(link.id)}
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${activeTab === link.id ? 'text-white border-b border-white pb-1' : 'text-stone-500 hover:text-white'}`}
                >
                  {link.name}
                </button>
              ))}
            </div>
            <button className="bg-white text-black px-6 py-2.5 text-[10px] font-black uppercase tracking-widest hover:bg-stone-200 transition-colors">
              Get a Quote
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {activeTab === 'home' && (
          <>
            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center overflow-hidden border-b border-white/5">
              <VisualCore />
              <HUDOverlay />
              <div className="absolute left-12 top-24 text-[120px] font-black italic text-cyan-400/[0.03] leading-none select-none">01</div>
              <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full grid grid-cols-12 gap-8 items-center">
                <div className="col-span-12 md:col-span-8">
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-500 mb-8">Executive Tech Ecosystems</h2>
                  <h1 className="text-5xl md:text-8xl font-light italic leading-[0.9] text-white mb-12">
                    Engineering<br /><span className="font-black not-italic text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-white/50">Futures.</span>
                  </h1>
                  <p className="max-w-md text-sm leading-relaxed text-stone-400 border-l border-white/20 pl-6 mb-12">
                    Specializing in high-performance AV architecture and mission-critical IT integration for global corporate leaders. Delivering precision, reliability, and technical integrity.
                  </p>
                  <div className="flex gap-6">
                    <motion.button 
                      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34,211,238,0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveTab('solutions')} 
                      className="bg-white text-black px-10 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-cyan-400 transition-all border border-transparent"
                    >
                      Explore
                    </motion.button>
                    <motion.div 
                      whileHover={{ rotate: 90, borderColor: "#22d3ee" }}
                      className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 hover:text-cyan-400 transition-all cursor-pointer"
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </div>
                </div>
                <div className="hidden md:flex col-span-4 flex-col gap-6 items-end relative">
                  <div className="w-full aspect-[4/5] border border-cyan-400/20 bg-stone-900 p-2 grayscale hover:grayscale-0 transition-all duration-1000 relative group">
                     <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity" />
                     {/* Corner Brackets */}
                     <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/50" />
                     <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50" />
                     <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400/50" />
                     <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400/50" />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-cyan-400/60 italic">Infra Engineering / 2024</span>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-32 px-6 md:px-12">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
                <div className="md:col-span-5">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500 mb-6">About Adamas Prosolusi</h3>
                  <h2 className="text-5xl md:text-7xl font-light italic text-white mb-8">Leading With<br /><span className="not-italic font-black">Integrity.</span></h2>
                  <p className="text-stone-400 leading-relaxed text-sm mb-12">
                    Built on the bedrock of Trustworthy, Integrity, and Committed. We serve as strategic partners for organizations seeking to elevate their technological presence through state-of-the-art AV and IT integration.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-4xl font-light text-white mb-2">15<span className="text-[10px] font-bold uppercase ml-1">Years</span></div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-stone-600">Industry Tenure</div>
                    </div>
                    <div>
                      <div className="text-4xl font-light text-white mb-2">200<span className="text-[10px] font-bold uppercase ml-1">Units</span></div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-stone-600">Annual Deployment</div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-7 relative h-[500px] w-full border border-white/5 p-4 bg-stone-900/50">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale opacity-30" />
                  <div className="absolute top-12 -right-6 w-56 h-56 border border-white/10 bg-black p-10 flex flex-col justify-center gap-4">
                    <ShieldCheck size={32} className="text-white" />
                    <div className="text-[9px] font-bold uppercase tracking-widest">Security Standards</div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === 'solutions' && (
          <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-500 mb-6">Technical Infrastructure</h2>
                <h1 className="text-6xl md:text-8xl font-light italic text-white leading-none">Specialized<br /><span className="not-italic font-black">Solutions.</span></h1>
              </div>
              <p className="text-stone-400 max-w-xs text-sm leading-relaxed border-l border-white/10 pl-6">
                We deliver integrated technology infrastructures tailored to the specific needs of modern corporate, education, and public sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
              {solutions.map((s, i) => (
                <div key={i} className="bg-black p-10 group hover:bg-stone-900 transition-colors">
                  <div className="w-14 h-14 border border-white/10 text-white flex items-center justify-center mb-8 group-hover:border-white transition-colors">
                    <s.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-tighter">{s.title}</h3>
                  <p className="text-stone-500 text-xs leading-relaxed mb-8 group-hover:text-stone-300 transition-colors">{s.desc}</p>
                  
                  <ul className="space-y-3 mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {s.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-stone-500">
                        <div className="w-1 h-1 bg-white" /> {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 cursor-pointer">
                    Inquire <ArrowRight size={12} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'projects' && (
          <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
             <div className="mb-20">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-500 mb-6">Selected Case Studies</h2>
                <h1 className="text-6xl md:text-9xl font-black text-white italic tracking-tighter leading-none">Projects<br /><span className="not-italic">Archive</span></h1>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {[
                 { title: "Global HQ Executive Boardroom", cat: "AV Integration", img: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800" },
                 { title: "Smart City Command Center", cat: "Infrastructure", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" }
               ].map((p, i) => (
                 <div key={i} className="group relative overflow-hidden bg-stone-900 aspect-video border border-white/5 cursor-pointer">
                    <img src={p.img} className="w-full h-full object-cover opacity-30 group-hover:scale-105 group-hover:opacity-60 transition-all duration-1000 grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 p-12 flex flex-col justify-end">
                       <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/50 mb-4">{p.cat}</span>
                       <h3 className="text-3xl font-black italic text-white group-hover:text-stone-300 transition-colors uppercase">{p.title}</h3>
                    </div>
                 </div>
               ))}
             </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/5 py-24 px-6 md:px-12 mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
          <div>
            <div className="text-2xl font-black tracking-tighter text-white mb-8 uppercase">Adamas Prosolusi</div>
            <p className="text-stone-500 text-xs leading-relaxed max-w-xs mb-10">
              Engineered AV & IT infrastructures built on trust, integrity, and absolute commitment. Est. Jakarta, ID.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white transition-colors cursor-pointer"><Globe size={16} /></div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white transition-colors cursor-pointer"><Mail size={16} /></div>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-10">Quick Links</h4>
            <div className="flex flex-col gap-5 text-[10px] font-bold uppercase tracking-widest text-stone-500">
              <button onClick={() => setActiveTab('solutions')} className="text-left hover:text-white transition-colors">Solutions</button>
              <button onClick={() => setActiveTab('projects')} className="text-left hover:text-white transition-colors">Projects Archive</button>
              <a href="#" className="hover:text-white transition-colors">Privacy Infra</a>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-10">Connect</h4>
            <div className="space-y-8 text-xs text-stone-500">
               <div className="flex gap-4">
                 <MapPin size={16} className="text-white shrink-0" />
                 <span className="leading-relaxed">Ruko Permata Regency Blok D No. 37, Srengseng, Jakarta Barat</span>
               </div>
               <div className="flex gap-4">
                 <Phone size={16} className="text-white shrink-0" />
                 <span>+62 812 1000 0820</span>
               </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
