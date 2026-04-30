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
          ? 'bg-charcoal/85 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center">
  <img
    src="/logo.png"
    alt="ClipScale Studio logo"
    className="h-20 md:h-24 w-auto object-contain -my-5"
  />
</Link>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-9 list-none">
        <li>
          <Link
            to="/#how"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            How It Works
          </Link>
        </li>
        <li>
          <Link
            to="/#services"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/results"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Results
          </Link>
        </li>
      </ul>

      {/* CTA Button */}
      <Link
        to="/#cta"
        className="bg-white text-charcoal px-6 py-2.5 rounded-full font-syne font-bold text-[0.88rem] tracking-wide hover:translate-y-[-2px] hover:shadow-xl hover:shadow-black/30 transition-all"
      >
        Let's Scale Your Content
      </Link>
    </nav>
  );
}