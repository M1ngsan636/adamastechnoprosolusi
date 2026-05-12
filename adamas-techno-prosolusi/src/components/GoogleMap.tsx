import { COMPANY_DATA } from '../constants';

export default function GoogleMap({ className }: { className?: string }) {
  // Using standard Google Maps Embed Iframe which doesn't require a strict Platform Key for basic view
  // We use the address directly for the query
  const mapQuery = encodeURIComponent("Ruko Permata Regency");
  const fallbackUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=17&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group ${className}`} style={{ height: '400px' }}>
      <iframe
        title="Company Location"
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'grayscale(0.5) contrast(1.2)' }}
        src={fallbackUrl}
        allowFullScreen
        loading="lazy"
      />
      
      {/* High-tech overlay decoration */}
      <div className="absolute inset-0 pointer-events-none border-[20px] border-black/5 mix-blend-overlay" />
      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-500/50" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyan-500/50" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-cyan-500/50" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-cyan-500/50" />
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/80 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono text-white/70 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
        HQ COORDINATES: {COMPANY_DATA.coordinates.lat.toFixed(3)}, {COMPANY_DATA.coordinates.lng.toFixed(3)}
      </div>
    </div>
  );
}
