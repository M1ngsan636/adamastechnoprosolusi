import { motion } from 'motion/react';
import { COMPANY_DATA } from '../../constants';
import { 
  ArrowRight, 
  CheckCircle2,
  Users,
  Monitor,
  Video,
  Home,
  MapPin,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';

export default function MinimalProfessionalTemplate() {
  const solutions = [
    { title: "Meeting Rooms", desc: "High-performance collaboration spaces with integrated video conferencing.", icon: Users },
    { title: "Command Centers", desc: "Mission-critical visualization hubs designed for 24/7 reliability.", icon: Monitor },
    { title: "LED Displays", desc: "Bespoke large-format digital canvases that transform architecture.", icon: Video },
    { title: "Home Theater", desc: "Cinematic excellence brought home through professional-grade acoustics.", icon: Home },
  ];

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen">
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-bold text-xl text-blue-700 tracking-tight">
            PT Adamas Tekno Prosolusi
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#solutions" className="hover:text-blue-600 transition-colors">Solutions</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About Us</a>
            <a href="#news" className="hover:text-blue-600 transition-colors">News</a>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-bold hover:bg-blue-700 transition-all">
            Get a Quote
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-6 block">Advanced AV & IT Solutions</span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-10 max-w-3xl">
            Engineering Future-Proof <br /> Ecosystems.
          </h1>
          <div className="flex gap-4">
            <button className="bg-blue-700 text-white px-8 py-3.5 rounded font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-700/20">
              Explore Solutions
            </button>
            <button className="bg-white border border-slate-200 text-slate-600 px-8 py-3.5 rounded font-bold hover:bg-slate-50 transition-all">
              View Projects
            </button>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Specialized Solutions</h2>
            <p className="text-slate-500 max-w-xl">
              Precision-engineered systems designed for seamless integration and absolute reliability in corporate and residential environments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((s, i) => (
              <div key={i} className="p-10 border border-slate-100 rounded-lg hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <s.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <img src="https://images.unsplash.com/photo-1558444479-c8f010524782?auto=format&fit=crop&q=80&w=1200" className="rounded-2xl shadow-2xl grayscale" alt="Server Room" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Leading with Integrity, Delivering with Precision.</h2>
            <div className="space-y-8 mb-12">
              {[
                { title: "Trustworthy", desc: "Building lasting partnerships through consistent excellence and transparent communication in every phase." },
                { title: "Integrity", desc: "Our solutions are guided by technical honesty, ensuring we recommend the right hardware for your specific needs." },
                { title: "Committed", desc: "We take full ownership of the ecosystem's lifecycle, from initial design through to long-term maintenance." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-6 border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-medium text-slate-800 italic leading-relaxed mb-10">
            "The level of technical sophistication PT Adamas Tekno Prosolusi brought to our regional headquarters was unprecedented. Their ability to fuse complex AV systems with our existing IT backbone was flawless."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full" />
            <div className="text-left">
              <div className="font-bold text-slate-900">Director of Infrastructure</div>
              <div className="text-slate-500 text-xs uppercase tracking-widest font-bold">Global Financial Services Firm</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg text-blue-700 mb-6">PT Adamas Tekno Prosolusi</h3>
            <p className="text-slate-500 text-sm max-w-sm mb-6 leading-relaxed">
              Providing world-class IT and AV solutions with a focus on precision, reliability, and technical innovation.
            </p>
            <div className="text-slate-400 text-xs">© 2024 PT Adamas Tekno Prosolusi. All rights reserved.</div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-widest mb-6">Sitemap</h4>
            <div className="flex flex-col gap-4 text-sm text-slate-500">
              <a href="#" className="hover:text-blue-600 transition-colors">Solutions</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#" className="hover:text-blue-600 transition-colors">About Us</a>
              <a href="#" className="hover:text-blue-600 transition-colors">News</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-widest mb-6">Legal</h4>
            <div className="flex flex-col gap-4 text-sm text-slate-500">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
