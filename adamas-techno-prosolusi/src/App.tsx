/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { TemplateType } from './types';
import Onboarding from './components/Onboarding';
import MinimalTemplate from './components/Templates/Minimal';
import ImmersiveTemplate from './components/Templates/Immersive';
import BoldTemplate from './components/Templates/Bold';
import SophisticatedTemplate from './components/Templates/Sophisticated';
import CorporateTemplate from './components/Templates/Corporate';
import MinimalProfessionalTemplate from './components/Templates/MinimalProfessional';
import PremiumTechV1Template from './components/Templates/PremiumTechV1';
import PremiumTechV2Template from './components/Templates/PremiumTechV2';
import WebGLBackground from './components/WebGLBackground';
import { motion, AnimatePresence } from 'motion/react';
import { Settings2 } from 'lucide-react';

export default function App() {
  const [template, setTemplate] = useState<TemplateType | null>(() => {
    // 1. Check URL parameters first (e.g., ?template=corporate)
    const params = new URLSearchParams(window.location.search);
    const templateParam = params.get('template') as TemplateType;
    if (templateParam && ['minimal', 'immersive', 'bold', 'sophisticated', 'corporate', 'minimal-professional', 'premium-v1', 'premium-v2'].includes(templateParam)) {
      localStorage.setItem('adamas_template', templateParam);
      return templateParam;
    }
    
    // 2. Check localStorage
    const saved = localStorage.getItem('adamas_template');
    return (saved as TemplateType) || null;
  });

  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    if (template) {
      localStorage.setItem('adamas_template', template);
      setShowPicker(false);
    }
  }, [template]);

  if (!template) {
    return <Onboarding onSelect={setTemplate} />;
  }

  const renderTemplate = () => {
    switch (template) {
      case 'minimal': return <MinimalTemplate />;
      case 'immersive': return <ImmersiveTemplate />;
      case 'bold': return <BoldTemplate />;
      case 'sophisticated': return <SophisticatedTemplate />;
      case 'corporate': return <CorporateTemplate />;
      case 'minimal-professional': return <MinimalProfessionalTemplate />;
      case 'premium-v1': return <PremiumTechV1Template />;
      case 'premium-v2': return <PremiumTechV2Template />;
      default: return <MinimalTemplate />;
    }
  };

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={template}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Subtle WebGL layer for all templates, styled differently */}
          <WebGLBackground template={template} />
          
          {renderTemplate()}
        </motion.div>
      </AnimatePresence>

      {/* Floating Settings to change template for demo */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <button 
          onClick={() => setShowPicker(!showPicker)}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-xl"
          title="Switch Template"
        >
          <Settings2 size={20} />
        </button>
        
        <AnimatePresence>
          {showPicker && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute bottom-16 right-0 bg-zinc-900 border border-white/10 p-4 rounded-2xl shadow-3xl w-48 space-y-2"
            >
              <div className="text-[10px] uppercase tracking-widest text-zinc-500 px-2 mb-2 font-bold">Switch Vibe</div>
              {(['minimal', 'immersive', 'bold', 'sophisticated', 'corporate', 'minimal-professional', 'premium-v1', 'premium-v2'] as TemplateType[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTemplate(t)}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${template === t ? 'bg-white/10 text-white' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
              <button 
                onClick={() => setTemplate(null)}
                className="w-full text-left px-4 py-2 rounded-lg text-sm text-red-400 hover:bg-red-400/10 transition-colors"
              >
                Reset Onboarding
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

