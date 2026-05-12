import { motion } from 'motion/react';
import { COMPANY_DATA } from '../../constants';
import { 
  ShieldAlert, 
  Cloud, 
  CodeXml, 
  Activity, 
  Monitor, 
  Users, 
  Building2, 
  Presentation, 
  Video, 
  Home, 
  CheckCircle2, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  ExternalLink
} from 'lucide-react';
import GoogleMap from '../GoogleMap';

const iconMap: Record<string, any> = {
  Cloud,
  ShieldAlert,
  CodeXml,
  Activity
};

// Mocking additional services to match the corporate image look
const CORPORATE_SERVICES = [
  { title: "Executive Meeting Room", desc: "High-end boardroom systems with seamless integration for flawless communication.", icon: Users },
  { title: "S-M Meeting Room", desc: "Scalable AV solutions for huddle spaces and medium-sized collaboration zones.", icon: Users },
  { title: "Auditorium", desc: "Professional audio systems and large-format displays for impactful presentations.", icon: Building2 },
  { title: "Command Center", desc: "Mission-critical visualization and control systems for 24/7 operations monitoring.", icon: Monitor },
  { title: "Hybrid Classroom", desc: "Bridging the gap between physical and remote learning with interactive tech.", icon: Presentation },
  { title: "Indoor/Outdoor LED", desc: "Vibrant high-resolution LED walls for dynamic digital signage and branding.", icon: Monitor },
  { title: "CCTV", desc: "Advanced surveillance and security network systems for total infrastructure protection.", icon: Video },
  { title: "Home Theater", desc: "Immersive cinematic experiences for luxury residential properties.", icon: Home },
];

export default function CorporateTemplate() {
  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-blue-100">
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-2xl tracking-tight text-blue-900">
              Adamas <span className="text-slate-500 font-normal">Tekno</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
            <a href="#solutions" className="hover:text-blue-700 transition-colors">Solutions</a>
            <a href="#projects" className="hover:text-blue-700 transition-colors">Projects</a>
            <a href="#about" className="hover:text-blue-700 transition-colors">About Us</a>
            <a href="#news" className="hover:text-blue-700 transition-colors">News</a>
          </div>
          <button className="bg-blue-900 text-white px-6 py-2.5 rounded text-sm font-bold hover:bg-blue-800 transition-all shadow-md shadow-blue-900/10">
            Get a Quote
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover brightness-50"
            alt="Corporate Environment"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6 inline-block px-4 py-1.5 rounded bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 text-blue-100 text-xs font-bold uppercase tracking-widest"
          >
            Excellence in AV & IT
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 max-w-3xl"
          >
            Engineering Future-Proof <br />
            Corporate Ecosystems
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-50/80 max-w-2xl mb-12"
          >
            Specializing in high-end Executive Meeting Rooms and mission-critical Command Centers with absolute reliability.
          </motion.p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">
              Explore Solutions
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded font-bold hover:bg-white/20 transition-all">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 relative inline-block">
            Our Specialized Solutions
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-600" />
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-6">
            We deliver integrated technology infrastructures tailored to the specific needs of modern corporate, education, and public sectors.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORPORATE_SERVICES.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-700">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                <div className="flex items-center text-blue-600 font-bold text-xs uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight size={14} className="ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="bg-blue-900 rounded-3xl p-12 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 opacity-20 object-cover" alt="Building" />
                <div className="relative z-10">
                  <span className="text-blue-400 font-bold text-sm uppercase tracking-widest block mb-6">About Adamas Tekno</span>
                  <h2 className="text-4xl font-bold text-white mb-8 leading-tight">Leading with Integrity, Delivering with Precision</h2>
                  <p className="text-blue-100/70 mb-10 leading-relaxed text-lg">
                    {COMPANY_DATA.about}
                  </p>
                  <div className="space-y-6 mb-12">
                    {[
                      { title: "Trustworthy", desc: "Consistent delivery that exceeds technical requirements and client expectations." },
                      { title: "Integrity", desc: "Honesty in our engineering approach and transparency in our business relations." },
                      { title: "Committed", desc: "Dedicated to long-term success and continuous support for all our installations." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="mt-1"><CheckCircle2 className="text-blue-400" size={20} /></div>
                        <div>
                          <h4 className="font-bold text-white text-sm uppercase tracking-wide">{item.title}</h4>
                          <p className="text-blue-100/50 text-sm mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="bg-white text-blue-900 px-8 py-3.5 rounded font-bold hover:bg-blue-50 transition-all">
                    Read Our Story
                  </button>
                </div>
                <div className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-white text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-blue-200 mt-1">Years of Integrity</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Strategic Mission</h2>
              <p className="text-slate-600 mb-12 leading-relaxed">
                {COMPANY_DATA.mission}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50">
                  <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <Globe size={18} /> Vision
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{COMPANY_DATA.vision}</p>
                </div>
                <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50">
                  <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <MapPin size={18} /> Location
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{COMPANY_DATA.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">Latest Projects</h2>
              <p className="text-slate-400">See how we transform spaces through technology.</p>
            </div>
            <a href="#" className="flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors uppercase tracking-widest text-sm">
              View All Projects <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMPANY_DATA.projects.map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative h-[500px] rounded-3xl overflow-hidden"
              >
                <img src={project.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75" alt={project.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-slate-300 text-sm mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.description}
                  </p>
                  <button className="w-full py-4 border border-white/20 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    Read More <ExternalLink size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Modernize Your Infrastructure?</h2>
          <p className="text-blue-100/70 mb-12 text-lg">
            Connect with our consultants to design a tailored solution that aligns with your organization's vision.
          </p>
          <button className="bg-blue-400 text-blue-900 px-12 py-5 rounded font-bold text-lg hover:bg-white hover:text-blue-900 transition-all shadow-2xl shadow-blue-400/20">
            Schedule a Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-950 text-slate-400 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-white font-bold text-xl mb-8">Adamas Tekno</h3>
            <p className="text-sm leading-relaxed mb-8">
              Empowering business growth through integrated technical excellence.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-blue-900 hover:border-blue-900 transition-all cursor-pointer">
                <Globe size={18} />
              </div>
              <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-blue-900 hover:border-blue-900 transition-all cursor-pointer">
                <Users size={18} />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Solutions</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Latest Projects</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">News & Insights</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Get in Touch</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-blue-500"><MapPin size={20} /></div>
                <div className="text-sm">
                   {COMPANY_DATA.address}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-blue-500"><Phone size={20} /></div>
                <div className="text-sm">+6281210000820</div>
              </div>
              <div className="flex gap-4">
                <div className="text-blue-500"><Mail size={20} /></div>
                <div className="text-sm">info@adamastechno.com</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-slate-900 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-bold uppercase tracking-widest">
          <span>&copy; 2024 PT Adamas Tekno Prosolusi. All Rights Reserved.</span>
          <div className="flex items-center gap-2">
            <img src="https://flagcdn.com/id.svg" className="w-5" alt="Indonesia" />
            <span>Jakarta, Indonesia</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
