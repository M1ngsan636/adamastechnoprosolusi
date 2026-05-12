import { motion } from 'motion/react';
import { Monitor, Rocket, Zap, Cpu, Building2, Layout, Shield, Chrome } from 'lucide-react';
import { TemplateType } from '../types';
import { cn } from '../lib/utils';

const templates: { id: TemplateType; title: string; description: string; icon: any; color: string }[] = [
  {
    id: 'minimal',
    title: 'Sleek Minimal',
    description: 'Clean, professional, and focuses on technical excellence.',
    icon: Monitor,
    color: 'bg-zinc-900 border-zinc-800'
  },
  {
    id: 'immersive',
    title: 'Futuristic Immersive',
    description: 'Advanced animations and atmospheric experiences.',
    icon: Rocket,
    color: 'bg-blue-950 border-blue-900'
  },
  {
    id: 'bold',
    title: 'Charismatic Fusion',
    description: 'A powerful, magnetic aesthetic with deep gradients and striking energy.',
    icon: Zap,
    color: 'bg-indigo-950 border-indigo-900'
  },
  {
    id: 'sophisticated',
    title: 'Cyber Kinetic',
    description: 'High-energy tech aesthetic with neon accents and fast-paced digital rhythms.',
    icon: Cpu,
    color: 'bg-zinc-950 border-cyan-500/30'
  },
  {
    id: 'corporate',
    title: 'Professional Corporate',
    description: 'A classic, clean, and trustworthy business layout with high integrity.',
    icon: Building2,
    color: 'bg-blue-900 border-blue-800'
  },
  {
    id: 'minimal-professional',
    title: 'Light Professional',
    description: 'Clean, airy, and high-trust aesthetic with a corporate focus.',
    icon: Layout,
    color: 'bg-white border-zinc-200 !text-zinc-900'
  },
  {
    id: 'premium-v1',
    title: 'Premium Tech V1',
    description: 'Dark, cinematic, and high-precision technical integration focus.',
    icon: Shield,
    color: 'bg-black border-cyan-900'
  },
  {
    id: 'premium-v2',
    title: 'Premium Tech V2',
    description: 'Editorial-style layout with high-performance AV architecture focus.',
    icon: Chrome,
    color: 'bg-zinc-950 border-zinc-800'
  }
];

export default function Onboarding({ onSelect }: { onSelect: (t: TemplateType) => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="max-w-6xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">Initialization</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Choose Your Visual Portal</h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Experience Adamas Techno Prosolusi through different lenses. 
            Each template is crafted to highlight a unique facet of our IT integration expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((t, i) => (
            <motion.button
              key={t.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => onSelect(t.id)}
              className={cn(
                "p-8 rounded-3xl border text-left transition-all group overflow-hidden relative",
                t.color,
                (t.id === 'sophisticated' || t.id === 'minimal-professional') ? 'text-stone-900' : 'text-white'
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-12",
                (t.id === 'sophisticated' || t.id === 'minimal-professional') ? 'bg-zinc-100 border border-zinc-200 shadow-sm' : 'bg-white/10'
              )}>
                <t.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{t.title}</h3>
              <p className={cn(
                "text-sm leading-relaxed mb-8",
                (t.id === 'sophisticated' || t.id === 'minimal-professional') ? 'text-zinc-600' : 'text-zinc-400'
              )}>
                {t.description}
              </p>
              
              <div className="flex items-center text-xs font-mono tracking-tighter uppercase">
                <span>Select Template</span>
                <motion.div 
                  animate={{ x: [0, 5, 0] }} 
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="ml-2"
                >
                  →
                </motion.div>
              </div>

              {/* Decorative backgrounds */}
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <t.icon size={120} />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
