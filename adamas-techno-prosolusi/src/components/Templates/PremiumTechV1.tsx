import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight, 
  Monitor, 
  Shield, 
  Cpu, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink
} from 'lucide-react';

export default function PremiumTechV1Template() {
  return (
    <div className="bg-[#050505] text-white font-sans selection:bg-cyan-500 selection:text-black">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-8 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400 font-black text-xl tracking-tighter">Adamas Tekno</span>
        </div>
        <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
          <a href="#" className="hover:text-cyan-400 transition-colors">Meeting Rooms</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Command Centers</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">LED Displays</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">CCTV</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Home Theater</a>
        </div>
        <button className="bg-cyan-400 text-black px-6 py-2.5 text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all rounded-sm">
          Consult Now
        </button>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 brightness-75 grayscale group-hover:grayscale-0 transition-all duration-1000"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-cyan-400 font-bold text-[10px] uppercase tracking-[0.3em] mb-8 flex items-center gap-3"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Future of Workspace
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black leading-none tracking-tighter mb-10"
          >
            Engineering the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Future of Workspace</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-stone-400 max-w-md text-sm leading-relaxed mb-12 border-l border-stone-800 pl-8"
          >
            Adamas Tekno Prosolusi delivers next-generation AV integration and intelligent infrastructure for high-performance environments.
          </motion.p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-cyan-400 text-black px-10 py-5 font-black uppercase tracking-widest text-[11px] hover:bg-white transition-all">
              Explore Solutions
            </button>
            <button className="border border-stone-800 text-white px-10 py-5 font-black uppercase tracking-widest text-[11px] hover:bg-stone-900 transition-all">
              View Portfolio
            </button>
          </div>
        </div>
        
        {/* Editorial Scroll Indicator */}
        <div className="absolute bottom-12 left-12 flex items-center gap-4">
          <div className="w-12 h-[1px] bg-cyan-400/30" />
          <div className="text-[9px] font-bold uppercase tracking-widest text-stone-600">Scroll to Explore</div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6 md:px-12 bg-[#080808]">
        <div className="flex justify-between items-end mb-24 border-b border-stone-900 pb-12">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">Core Services</h2>
            <p className="text-stone-500 text-xs tracking-widest uppercase">Precision-engineered audiovisual solutions for enterprise.</p>
          </div>
          <a href="#" className="text-cyan-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
            All Services <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Meeting Rooms", desc: "Seamless hybrid meeting experiences with intelligent audio and automated control systems.", icon: Cpu },
            { title: "Command Centers", desc: "Mission-critical visualization solutions for 24/7 monitoring and data-driven decision making.", icon: Monitor },
            { title: "LED Displays", desc: "High-fidelity direct view LED installations for immersive digital signage and executive presentations.", icon: Shield },
          ].map((s, i) => (
            <div key={i} className="bg-[#0c0c0c] p-12 border border-stone-900 hover:border-cyan-400/50 transition-all group relative overflow-hidden">
              <div className="relative z-10">
                <s.icon className="text-cyan-400 mb-8" size={32} />
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-10">{s.desc}</p>
                <button className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 flex items-center gap-2 hover:translate-x-2 transition-transform">
                  Configure <ChevronRight size={14} />
                </button>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-5 text-stone-600 group-hover:opacity-10 transition-opacity">
                <s.icon size={120} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrity Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-cyan-400 -m-4 -z-10 opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
              className="rounded-3xl brightness-50 grayscale hover:grayscale-0 transition-all duration-1000"
              alt=""
            />
            <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-2xl">
               <div className="text-2xl font-black text-white">15+</div>
               <div className="text-[9px] uppercase font-bold tracking-widest text-cyan-400">Years Expertise</div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 leading-none">
              Leading with <br />
              <span className="text-cyan-400 italic">Integrity</span> & Mastery
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed mb-12">
              PT Adamas Tekno Prosolusi stands at the intersection of technological innovation and professional integrity. We don't just install hardware; we architect infrastructure that powers modern enterprise.
            </p>
            <div className="grid grid-cols-2 gap-12 mb-16">
               <div>
                 <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-stone-500 mb-2">Certified</h4>
                 <div className="text-xs font-bold text-white uppercase tracking-widest">Global Standards</div>
               </div>
               <div>
                 <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-stone-500 mb-2">Reliable</h4>
                 <div className="text-xs font-bold text-white uppercase tracking-widest">24/7 Support</div>
               </div>
            </div>
            <a href="#" className="inline-block border-b-2 border-cyan-400 pb-2 text-[11px] font-black uppercase tracking-widest hover:text-cyan-400 transition-colors">
              Learn More About Our Standards
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center border-t border-stone-900">
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-10 uppercase">
          Ready to Modernize Your <br />
          <span className="text-cyan-400">Infrastructure?</span>
        </h2>
        <p className="text-stone-500 max-w-2xl mx-auto mb-16">
          Our engineering experts are ready to design a custom solution that aligns with your operational goals and budgetary requirements.
        </p>
        <div className="flex justify-center gap-6">
           <button className="bg-cyan-400 text-black px-12 py-5 font-black uppercase tracking-widest text-xs hover:bg-white transition-all">
             Schedule a Consultation
           </button>
           <button className="border border-stone-800 text-white px-12 py-5 font-black uppercase tracking-widest text-xs hover:bg-stone-900 transition-all">
             Contact Sales
           </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 border-t border-stone-900 bg-[#030303]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-1">
             <h3 className="text-cyan-400 font-black text-2xl tracking-tighter mb-8">Adamas Tekno</h3>
             <p className="text-stone-500 text-xs leading-relaxed mb-8">
               PT Adamas Tekno Prosolusi provides world-class AV integration and IT solutions for high-end enterprise clients.
             </p>
             <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full border border-stone-800 flex items-center justify-center hover:border-cyan-400 transition-colors cursor-pointer"><Globe size={14} /></div>
                <div className="w-8 h-8 rounded-full border border-stone-800 flex items-center justify-center hover:border-cyan-400 transition-colors cursor-pointer"><Mail size={14} /></div>
                <div className="w-8 h-8 rounded-full border border-stone-800 flex items-center justify-center hover:border-cyan-400 transition-colors cursor-pointer"><Phone size={14} /></div>
             </div>
          </div>
          <div>
            <h4 className="text-stone-500 text-[9px] uppercase font-bold tracking-[0.3em] mb-10">Solutions</h4>
            <div className="flex flex-col gap-4 text-xs font-bold text-stone-400">
               <a href="#" className="hover:text-cyan-400 transition-colors">Executive Meeting Rooms</a>
               <a href="#" className="hover:text-cyan-400 transition-colors">Command Centers</a>
               <a href="#" className="hover:text-cyan-400 transition-colors">Hybrid Classrooms</a>
            </div>
          </div>
          <div>
            <h4 className="text-stone-500 text-[9px] uppercase font-bold tracking-[0.3em] mb-10">Products</h4>
            <div className="flex flex-col gap-4 text-xs font-bold text-stone-400">
               <a href="#" className="hover:text-cyan-400 transition-colors">LED Displays</a>
               <a href="#" className="hover:text-cyan-400 transition-colors">CCTV</a>
               <a href="#" className="hover:text-cyan-400 transition-colors">Home Theater</a>
            </div>
          </div>
          <div>
            <h4 className="text-stone-500 text-[9px] uppercase font-bold tracking-[0.3em] mb-10">Office</h4>
            <div className="text-stone-400 text-xs leading-relaxed">
              Jakarta Barat Office <br /> Indonesia
            </div>
          </div>
        </div>
        <div className="mt-24 pt-8 border-t border-stone-900 text-center">
           <p className="text-[9px] font-bold text-stone-700 uppercase tracking-widest">© 2024 PT Adamas Tekno Prosolusi. All Rights Reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </footer>
    </div>
  );
}
