import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ArrowRight, ShieldCheck, HeartHandshake, Handshake, 
  Mail, Phone, MapPin, Globe, User, LayoutDashboard, Lightbulb, 
  ClipboardList, LayoutGrid, Settings, TrendingUp, Search, Plus, 
  Edit, Trash2, CloudUpload, SortAsc, Users, Building, School, 
  Monitor, Tv, Camera, MonitorCheck, Megaphone, Building2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { VisualCore } from './components/VisualCore';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Solutions', path: '/solutions' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/#about' },
    { name: 'News', path: '/#news' },
  ];

  if (location.pathname.startsWith('/admin')) return null;

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline h-24">
      <nav className="flex justify-between items-center h-full px-6 md:px-12 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-black tracking-tighter text-white">
          Adamas Techno Prosolusi
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-16">
          <div className="flex gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "micro-label transition-colors hover:text-white",
                  location.pathname === link.path && "text-primary border-b border-primary pb-1"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button className="bg-white text-black px-8 py-3 rounded-none font-bold text-xs uppercase tracking-widest hover:bg-primary transition-colors">
            Get a Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-surface border-b border-outline overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="micro-label text-lg"
                >
                  {link.name}
                </Link>
              ))}
              <button className="bg-primary text-black px-6 py-4 font-bold uppercase tracking-widest">
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  const location = useLocation();
  if (location.pathname.startsWith('/admin')) return null;

  return (
    <footer className="bg-background border-t border-outline py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
          <div className="text-3xl font-black tracking-tighter text-white mb-6">Adamas Techno Prosolusi</div>
          <p className="text-muted text-sm leading-relaxed max-w-xs mb-8">
            Engineered AV & IT infrastructures built on trust, integrity, and absolute commitment.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:border-primary transition-colors">
              <Globe size={18} />
            </a>
            <Link to="/admin" className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:border-primary transition-colors">
              <User size={18} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="micro-label mb-8">Quick Links</h4>
          <div className="flex flex-col gap-4 text-sm font-medium">
            <Link to="/solutions" className="text-muted hover:text-white transition-colors">Solutions</Link>
            <Link to="/projects" className="text-muted hover:text-white transition-colors">Projects Archive</Link>
            <a href="#" className="text-muted hover:text-white transition-colors">Privacy Infrastructure</a>
            <a href="#" className="text-muted hover:text-white transition-colors">Terms of Engagement</a>
          </div>
        </div>

        <div>
          <h4 className="micro-label mb-8">Connect</h4>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin size={18} className="text-primary mt-1" />
              <span className="text-muted text-sm leading-relaxed">Ruko Permata Regency Blok D No. 37, Srengseng, Jakarta Barat 11630</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={18} className="text-primary" />
              <span className="text-muted text-sm">+62 812 1000 0820</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail size={18} className="text-primary" />
              <span className="text-muted text-sm">core@adamastekno.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-outline mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="micro-label opacity-40">© 2024 PT Adamas Tekno Prosolusi</div>
        <div className="micro-label opacity-40">Est. Jakarta, ID</div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <main className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden border-b border-outline">
        <VisualCore />
        <div className="editorial-number left-12 top-24">01</div>
        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-8">
            <h2 className="micro-label text-primary mb-8">Executive Tech Ecosystems</h2>
            <h1 className="text-6xl md:text-9xl font-light italic leading-[0.85] text-white mb-12">
              Engineering<br/><span className="font-black not-italic">Futures.</span>
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-muted border-l-2 border-primary pl-6 mb-12">
              Specializing in high-performance AV architecture and mission-critical IT integration for global corporate leaders. Delivering precision, reliability, and technical integrity.
            </p>
            <div className="flex gap-4">
              <Link to="/solutions" className="bg-primary text-black px-12 py-5 font-bold uppercase tracking-widest hover:brightness-110 transition-all">Explore</Link>
              <div className="w-14 h-14 rounded-full border border-outline flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                <ArrowRight size={24} />
              </div>
            </div>
          </div>
          <div className="hidden md:flex col-span-4 flex-col gap-6 items-end pb-12">
            <div className="w-full aspect-square border border-outline bg-surface-bright flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
               <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-50" />
            </div>
            <span className="micro-label">Infrastructure Engineering / 2024</span>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span>Trustworthy Architecture</span>
          <span>Integrity in Design</span>
          <span>Commitment to Scale</span>
          <span>Trustworthy Architecture</span>
          <span>Integrity in Design</span>
          <span>Commitment to Scale</span>
          <span>Trustworthy Architecture</span>
          <span>Integrity in Design</span>
          <span>Commitment to Scale</span>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 border-b border-outline h-screen flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5">
            <h3 className="micro-label text-primary mb-6">About Adamas Tekno Prosolusi</h3>
            <h2 className="text-5xl md:text-7xl font-light italic text-white mb-8">Leading With<br/><span className="not-italic font-black">Integrity.</span></h2>
            <p className="text-muted leading-relaxed text-lg mb-12">
              PT Adamas Tekno Prosolusi is built on the bedrock of three core values: <span className="text-white font-bold">Trustworthy, Integrity, and Committed</span>. We serve as strategic partners for organizations seeking to elevate their technological presence through state-of-the-art AV and IT integration.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-light text-white mb-2">15<span className="text-primary text-sm font-bold uppercase ml-1">+ Years</span></div>
                <div className="micro-label">Industry Tenure</div>
              </div>
              <div>
                <div className="text-4xl font-light text-white mb-2">200<span className="text-primary text-sm font-bold uppercase ml-1">Units</span></div>
                <div className="micro-label">Annual Deployment</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 relative h-[600px] w-full border border-outline p-4 bg-surface">
            <img 
              alt="Professional Infrastructure" 
              className="w-full h-full object-cover grayscale brightness-50" 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" 
            />
            <div className="absolute top-12 -right-8 w-64 h-64 border border-primary bg-background p-10 flex flex-col justify-center gap-4">
              <ShieldCheck size={40} className="text-primary" />
              <div className="micro-label">Security Standards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects Preview */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-6xl font-black text-white italic">Latest Projects</h2>
          </div>
          <Link to="/projects" className="micro-label border-b border-primary pb-1 hover:text-white transition-colors">See Archive</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline">
          {[
            {
              title: "Global HQ Executive Boardroom",
              category: "Banking Sector",
              image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=1200",
              desc: "Multi-system AV integration with automated lighting and environmental controls."
            },
            {
              title: "Integrated Smart City Command Center",
              category: "Government",
              image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
              desc: "Mission-critical 24/7 video wall and centralized data visualization hub."
            }
          ].map((project, i) => (
            <div key={i} className="group relative overflow-hidden h-[500px] bg-background">
              <img 
                src={project.image} 
                className="w-full h-full object-cover opacity-30 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-60" 
              />
              <div className="absolute inset-0 flex flex-col justify-end p-12 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                <span className="micro-label text-primary mb-4">{project.category}</span>
                <h3 className="text-4xl text-white font-bold leading-tight mb-6">{project.title}</h3>
                <div className="h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-700 mb-6"></div>
                <p className="text-muted text-sm max-w-xs">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
const Solutions = () => {
  const solutions = [
    { 
      title: "Executive Meeting Room", 
      icon: Building2, 
      desc: "High-end boardroom systems with seamless integration for flawless executive communication.",
      features: ["4K Video Conferencing", "Acoustic Treatment", "Automated Lighting", "Touch-Panel Control"]
    },
    { 
      title: "S-M Meeting Room", 
      icon: Users, 
      desc: "Scalable AV solutions for huddle spaces and medium-sized collaboration zones.",
      features: ["Plug-and-Play Setup", "Wireless Sharing", "Optimized Audio", "Room Booking Integration"]
    },
    { 
      title: "Auditorium", 
      icon: Megaphone, 
      desc: "Professional audio systems and large-format displays for impactful presentations.",
      features: ["Line Array Audio", "Stage Management", "Broadcast Integration", "Large Format Screens"]
    },
    { 
      title: "Command Center", 
      icon: MonitorCheck, 
      desc: "Mission-critical visualization and control systems for 24/7 operations monitoring.",
      features: ["LED Video Walls", "KVM Management", "Redundant Power", "24/7 Reliability"]
    },
    { 
      title: "Hybrid Classroom", 
      icon: School, 
      desc: "Bridging the gap between physical and remote learning with interactive tech.",
      features: ["Auto-Tracking Cameras", "Smart Whiteboards", "Remote Management", "Multi-Zone Audio"]
    },
    { 
      title: "Indoor/Outdoor LED", 
      icon: Tv, 
      desc: "Vibrant high-resolution LED walls for dynamic digital signage and branding.",
      features: ["Weather Resistance", "High Brightness", "Seamless Scaling", "Cloud Content Mgmt"]
    },
    { 
      title: "CCTV & Security", 
      icon: Camera, 
      desc: "Advanced surveillance and security network systems for total infrastructure protection.",
      features: ["AI Facial Recognition", "Thermal Mapping", "Cloud Recording", "Encrypted Backhaul"]
    },
    { 
      title: "Home Theater", 
      icon: Monitor, 
      desc: "Immersive cinematic experiences for luxury residential properties.",
      features: ["Dolby Atmos Audio", "Laser Projection", "Custom Seating", "Smart Home Integration"]
    },
  ];

  const process = [
    { step: "01", name: "Assessment", desc: "Deep analysis of your space and operational requirements." },
    { step: "02", name: "Engineering", desc: "Custom architectural design and hardware specification." },
    { step: "03", name: "Integration", desc: "Precision onsite installation and network configuration." },
    { step: "04", name: "Longevity", desc: "Continuous monitoring and proactive technical support." },
  ];

  return (
    <main className="pt-24 min-h-screen">
      {/* Header Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-outline">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="micro-label text-primary mb-6">Technical Infrastructure</h2>
            <h1 className="text-6xl md:text-8xl font-light italic text-white leading-none">Specialized<br/><span className="not-italic font-black">Solutions.</span></h1>
          </div>
          <p className="text-muted max-w-xs text-sm leading-relaxed border-l border-outline pl-6">
            We deliver integrated technology infrastructures tailored to the specific needs of modern corporate, education, and public sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-outline border border-outline">
          {solutions.map((s, i) => (
            <div key={i} className="bg-background p-10 group hover:bg-surface transition-colors">
              <div className="w-14 h-14 border border-outline text-primary flex items-center justify-center mb-8 group-hover:border-primary transition-colors">
                <s.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-8 opacity-60 group-hover:opacity-100 transition-opacity">{s.desc}</p>
              
              <ul className="space-y-3 mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {s.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted">
                    <div className="w-1 h-1 bg-primary" /> {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 micro-label text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                Inquire <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="micro-label text-primary mb-6">The Engineering Path</h2>
          <h3 className="text-5xl font-black italic text-white">How We Deploy</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {process.map((p, i) => (
            <div key={i} className="relative pt-12 border-t border-outline">
              <div className="absolute top-0 left-0 -translate-y-1/2 text-4xl font-black italic text-[#121212]">{p.step}</div>
              <h4 className="text-lg font-bold text-white mb-4">{p.name}</h4>
              <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ/CTA Style Section */}
      <section className="bg-surface py-32 border-y border-outline">
        <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-12 lg:col-span-8">
            <h2 className="text-6xl md:text-8xl font-black italic text-white mb-8 tracking-tighter leading-none">Ready to Begin Your<br/><span className="text-primary not-italic">Technical Evolution?</span></h2>
            <p className="text-muted text-xl max-w-2xl leading-relaxed mb-12">
              Our consultants are ready to bridge the gap between your requirements and high-performance reality.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="bg-white text-black px-12 py-5 font-bold uppercase tracking-widest hover:bg-primary transition-all">Schedule Consultation</button>
              <button className="border border-outline text-white px-12 py-5 font-bold uppercase tracking-widest hover:border-white transition-all flex items-center gap-3">
                Download Specs <CloudUpload size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};


const Projects = () => {
  const projects = [
    {
      title: "Integrated Command Center for City Monitoring",
      location: "Jakarta, Indonesia",
      category: "IT Solutions",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      desc: "A full-scale AV and network implementation featuring 24/7 monitoring capabilities and secure data encryption."
    },
    {
      title: "Enterprise Data Center Network Expansion",
      location: "Surabaya, East Java",
      category: "Network Infrastructure",
      image: "https://images.unsplash.com/photo-1558444479-c8f010524782?auto=format&fit=crop&q=80&w=800",
      desc: "Scalable network architecture redesign for a leading financial institution, ensuring 99.99% uptime and reliability."
    },
    {
      title: "Smart Corporate Headquarters AV Ecosystem",
      location: "Tangerang, Banten",
      category: "AV Solutions",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
      desc: "Unified communication systems integrated across 15 floors, featuring automated boardroom environments."
    }
  ];

  return (
    <main className="pt-24 min-h-screen">
      <header className="relative py-40 border-b border-outline overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-10 grayscale" 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600" 
          />
        </div>
        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="micro-label text-primary mb-8">Selected Case Studies</h2>
            <h1 className="text-6xl md:text-9xl font-black text-white italic tracking-tighter leading-[0.85] mb-12">Projects<br/><span className="not-italic">Archive</span></h1>
            <p className="text-muted text-xl max-w-xl leading-relaxed">Explore our portfolio of high-impact technical implementations across Indonesia, from secure command centers to large-scale network infrastructure.</p>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-20 gap-8">
          <div className="flex flex-wrap gap-4 font-bold text-[10px] tracking-widest uppercase">
            <button className="px-6 py-2 border-b-2 border-primary text-white">All Work</button>
            <button className="px-6 py-2 border-b-2 border-transparent text-muted hover:text-white transition-colors">IT Solutions</button>
            <button className="px-6 py-2 border-b-2 border-transparent text-muted hover:text-white transition-colors">AV Architecture</button>
          </div>
          <div className="relative min-w-[300px] border-b border-outline">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-muted" size={16} />
            <input 
              className="w-full pl-8 pr-4 py-3 bg-transparent text-white outline-none micro-label" 
              placeholder="QUERY ARCHIVE..." 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((p, i) => (
            <article key={i} className="group flex flex-col border border-outline hover:border-primary transition-colors">
              <div className="h-64 overflow-hidden border-b border-outline">
                <img src={p.image} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-2 mb-6 micro-label">
                  <MapPin size={12} className="text-primary" />
                  {p.location}
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 leading-tight group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-10 flex-grow">{p.desc}</p>
                <div className="pt-6 border-t border-outline flex justify-between items-center">
                  <span className="micro-label text-primary">{p.category}</span>
                  <div className="w-10 h-10 rounded-full border border-outline flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};
const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-background text-on-surface overflow-hidden">
      {/* Sidebar - Artistic Rail Style */}
      <aside className="w-24 border-r border-outline flex flex-col items-center py-12 justify-between">
        <div className="text-2xl font-black tracking-tighter text-white transform -rotate-90 origin-center whitespace-nowrap">
          Adamas Techno Prosolusi
        </div>
        <nav className="flex flex-col gap-12">
          {[
            { icon: LayoutDashboard, active: true },
            { icon: Lightbulb },
            { icon: ClipboardList },
            { icon: LayoutGrid },
            { icon: Settings },
          ].map((item, i) => (
            <button 
              key={i} 
              className={cn(
                "group relative w-10 h-10 rounded-full flex items-center justify-center transition-all",
                item.active ? "text-primary" : "text-muted hover:text-white"
              )}
            >
              <item.icon size={20} />
              {item.active && <div className="absolute -right-12 w-1.5 h-1.5 rounded-full bg-primary" />}
            </button>
          ))}
        </nav>
        <div className="flex flex-col gap-4 items-center">
          <div className="w-8 h-8 rounded-full border border-outline flex items-center justify-center micro-label text-[8px] tracking-normal">EN</div>
          <div className="w-[1px] h-12 bg-outline"></div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-24 flex items-center justify-between px-12 border-b border-outline">
          <div className="flex gap-16 micro-label">
            <span className="text-white border-b border-primary pb-1">Overview</span>
            <span className="hover:text-white cursor-pointer">Archive</span>
            <span className="hover:text-white cursor-pointer">Security</span>
            <span className="hover:text-white cursor-pointer">Analytics</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-6 h-[1px] bg-white group-hover:w-10 transition-all"></div>
              <span className="micro-label text-white">New Entry</span>
            </div>
            <div className="w-12 h-12 bg-white flex items-center justify-center text-black">
              <Plus size={24} />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-12 space-y-16">
          {/* Hero-style Stats Section */}
          <div className="relative">
            <div className="absolute -top-12 -left-4 text-[160px] font-black italic text-[#121212] leading-none pointer-events-none opacity-50">
              ST
            </div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-outline">
              <div className="bg-background p-10 flex flex-col gap-8">
                <h3 className="micro-label">Total Performance</h3>
                <div className="text-6xl font-light text-white italic">84<span className="text-xs text-primary font-bold uppercase ml-1">%</span></div>
                <div className="micro-label text-muted">Systemic Efficiency</div>
              </div>
              <div className="bg-background p-10 flex flex-col gap-8">
                <h3 className="micro-label">Network Latency</h3>
                <div className="text-6xl font-light text-white italic">0.12<span className="text-xs text-primary font-bold uppercase ml-1">MS</span></div>
                <div className="micro-label text-muted">Response Delta</div>
              </div>
              <div className="bg-background p-10 flex flex-col gap-8">
                <h3 className="micro-label">Infrastructures</h3>
                <div className="text-6xl font-light text-white italic">24</div>
                <div className="micro-label text-muted">Active Global Nodes</div>
              </div>
            </div>
          </div>

          {/* Table - Editorial Style */}
          <div className="space-y-8">
            <div className="flex justify-between items-end border-b border-outline pb-6">
              <h3 className="micro-label text-white">Project Archive Listing</h3>
              <div className="flex gap-4">
                <Search size={16} className="text-muted" />
                <span className="micro-label">Query...</span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="micro-label text-muted border-b border-outline">
                  <tr>
                    <th className="px-6 py-4 font-bold uppercase tracking-wider">Identifier / Client</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-wider">Operational Area</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-wider">Timestamp</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline text-sm">
                  {[
                    { title: "Enterprise AV Overhaul", location: "Jakarta", cat: "IT Solutions", date: "Oct 24, 2023" },
                    { title: "Smart City Infrastructure", location: "Tangerang", cat: "Infrastructure", date: "Nov 12, 2023" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-surface transition-colors cursor-pointer group">
                      <td className="px-6 py-8">
                        <div className="text-lg font-bold text-white group-hover:text-primary transition-colors tracking-tight">{row.title}</div>
                        <div className="micro-label text-[8px] opacity-40 mt-1">{row.location}</div>
                      </td>
                      <td className="px-6 py-8">
                        <span className="micro-label text-[9px] text-primary bg-primary/5 px-3 py-1 border border-primary/20">{row.cat}</span>
                      </td>
                      <td className="px-6 py-8 text-muted micro-label">{row.date}</td>
                      <td className="px-6 py-8 text-right space-x-1">
                        <button className="w-10 h-10 rounded-full border border-outline hover:border-white transition-colors inline-flex items-center justify-center"><Edit size={16} /></button>
                        <button className="w-10 h-10 rounded-full border border-outline hover:border-red-500 transition-colors inline-flex items-center justify-center text-red-500"><Trash2 size={16} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};


// --- App Root ---

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </>
  );
}
