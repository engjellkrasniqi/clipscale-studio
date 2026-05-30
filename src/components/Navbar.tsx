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
    <nav
      className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-[6%] py-5 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-lg border-b shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
      style={isScrolled ? { background: 'rgba(10,10,10,0.85)', borderColor: 'rgba(255,90,31,0.12)' } : {}}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center relative">
        <img
          src="/logo.png"
          alt="ClipScale Studio logo"
          className="h-36 md:h-44 w-auto object-contain -my-12"
        />
      </Link>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-9 list-none">
        <li>
          <Link
            to="/#how"
            className="text-sm font-medium text-white/50 hover:text-white transition-colors"
          >
            How It Works
          </Link>
        </li>
        <li>
          <Link
            to="/#services"
            className="text-sm font-medium text-white/50 hover:text-white transition-colors"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/results"
            className="text-sm font-medium text-white/50 hover:text-white transition-colors"
          >
            Results
          </Link>
        </li>
      </ul>

      {/* CTA Button */}
      <Link
  to="/contact"
  className="text-white px-6 py-2.5 rounded-full font-syne font-bold text-[0.88rem] tracking-wide hover:translate-y-[-2px] transition-all"
  style={{
    background: 'linear-gradient(135deg, #FF5A1F, #c43a00)',
    boxShadow: '0 4px 20px rgba(255,90,31,0.25)',
  }}
  onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 30px rgba(255,90,31,0.45)')}
  onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,90,31,0.25)')}
>
  Let's Scale Your Content
</Link>
    </nav>
  );
}
