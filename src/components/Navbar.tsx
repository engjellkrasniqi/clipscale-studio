import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-[6%] py-5 transition-all duration-300 ${isScrolled ? 'bg-cream/85 backdrop-blur-lg border-b border-black/10 shadow-lg shadow-black/5' : 'bg-transparent'}`}>
      <Link to="/" className="font-montserrat font-extrabold text-[1.4rem] text-charcoal tracking-tighter">
        Clip<span className="text-gradient-coral">Scale Studio</span>
      </Link>
      
      <ul className="hidden md:flex gap-9 list-none">
        <li><Link to="/#how" className="text-sm font-medium text-muted hover:text-charcoal transition-colors">How It Works</Link></li>
        <li><Link to="/#services" className="text-sm font-medium text-muted hover:text-charcoal transition-colors">Services</Link></li>
        <li><Link to="/results" className="text-sm font-medium text-muted hover:text-charcoal transition-colors">Results</Link></li>
      </ul>

      <Link to="/#cta" className="bg-charcoal text-white px-6 py-2.5 rounded-full font-syne font-bold text-[0.88rem] tracking-wide hover:translate-y-[-2px] hover:shadow-xl hover:shadow-charcoal/25 transition-all">
        Let's Scale Your Content
      </Link>
    </nav>
  );
}
