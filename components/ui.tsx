import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur border-b border-ruby/30">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-display text-xl text-ruby tracking-wide no-underline">Dana Point Disco</a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="text-ink hover:text-ruby no-underline">Home</a>
          <a href="#packages" className="text-ink hover:text-ruby no-underline">Packages</a>
          <a href="#whats" className="text-ink hover:text-ruby no-underline">What’s a Silent Disco?</a>
          <a href="#contact" className="text-ink hover:text-ruby no-underline">Contact Us</a>
          <a href="#about" className="text-ink hover:text-ruby no-underline">About Us</a>
        </div>
      </div>
    </nav>
  );
}

export function Section({ className, children, id }: { className?: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className={`w-full py-20 ${className || ''}`}>
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-4xl text-ink text-center mb-10">{children}</h2>;
}

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white border border-sand rounded-2xl shadow-dpd p-6 text-center">{children}</div>;
}

export function ButtonLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-block bg-sunset hover:bg-coral transition-colors text-white text-lg px-6 py-4 rounded-2xl shadow-dpd no-underline">
      {children}
    </a>
  );
}

/** Decorative SVGs (inline, license-safe) **/
export function SunWave() {
  return (
    <svg viewBox="0 0 1200 380" className="w-full h-auto">
      <defs>
        <linearGradient id="ray" x1="0" x2="1">
          <stop offset="0%" stopColor="#F7D59B" />
          <stop offset="100%" stopColor="#FF8A3D" />
        </linearGradient>
      </defs>
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI;
        const x = 600 + Math.cos(angle) * 600;
        const y = 120 + Math.sin(angle) * 600;
        return <line key={i} x1="600" y1="120" x2={x} y2={y} stroke="url(#ray)" strokeWidth="18" strokeLinecap="round" />;
      })}
      <circle cx="600" cy="120" r="70" fill="#FFB84D" stroke="#FF8A3D" strokeWidth="10" />
      <path d="M0,260 C180,200 260,260 420,240 C580,220 650,280 840,260 C980,246 1120,260 1200,250 L1200,380 L0,380 Z" fill="#9FD3E9" />
      <path d="M0,280 C220,240 360,300 520,280 C700,258 860,300 1200,280 L1200,380 L0,380 Z" fill="#BEE7F3" />
    </svg>
  );
}

export function DiscoBall() {
  return (
    <svg viewBox="0 0 180 180" className="w-40 h-40">
      <defs>
        <linearGradient id="shine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#BEE7F3" />
        </linearGradient>
      </defs>
      <circle cx="90" cy="90" r="78" fill="url(#shine)" stroke="#9FD3E9" strokeWidth="6" />
      {Array.from({length:6},(_,r)=>r).map(r =>
        Array.from({length:6},(_,c)=>c).map(c => (
          <rect key={`${r}-${c}`} x={30+c*20} y={30+r*20} width="18" height="18"
            fill={['#FF8A3D','#F7D59B','#9FD3E9','#0F766E','#EF6C57','#FFFFFF'][(r+c)%6]} opacity="0.85" />
        ))
      )}
    </svg>
  );
}

export function Daisy({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className}>
      <circle cx="60" cy="60" r="14" fill="#FFB84D" />
      {Array.from({length:16},(_,i)=>i).map(i=>{
        const angle=(i/16)*Math.PI*2;
        const x=60+Math.cos(angle)*36;
        const y=60+Math.sin(angle)*36;
        return <ellipse key={i} cx={x} cy={y} rx="10" ry="24" fill="#FFFFFF" transform={`rotate(${(angle*180/Math.PI)+90}, ${x}, ${y})`} />
      })}
    </svg>
  );
}

export function RetroVan({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 140" className={className}>
      <rect x="20" y="40" width="220" height="60" rx="14" fill="#9FD3E9" stroke="#0F766E" strokeWidth="4"/>
      <rect x="60" y="30" width="180" height="50" rx="10" fill="#FFFFFF" stroke="#0F766E" strokeWidth="4"/>
      <circle cx="80" cy="110" r="18" fill="#1F2937" />
      <circle cx="80" cy="110" r="8" fill="#FFFFFF" />
      <circle cx="200" cy="110" r="18" fill="#1F2937" />
      <circle cx="200" cy="110" r="8" fill="#FFFFFF" />
      <rect x="140" y="55" width="40" height="18" rx="3" fill="#BEE7F3" stroke="#0F766E" strokeWidth="3"/>
      <rect x="190" y="55" width="40" height="18" rx="3" fill="#BEE7F3" stroke="#0F766E" strokeWidth="3"/>
      <rect x="90" y="55" width="40" height="18" rx="3" fill="#BEE7F3" stroke="#0F766E" strokeWidth="3"/>
    </svg>
  );
}
