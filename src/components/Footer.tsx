import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      className="border-t px-[6%] py-10 flex flex-col md:flex-row items-center justify-between gap-5 bg-transparent backdrop-blur-md"
      style={{ borderColor: 'rgba(255,90,31,0.12)' }}
    >
      <Link to="/" className="flex items-center">
        <img
          src="/CSS.png"
          alt="Clip Scale Studio logo"
          className="h-8 w-auto object-contain"
        />
      </Link>

      <div className="flex gap-7">
        <Link to="/contact" className="text-[0.85rem] text-white/40 hover:text-white transition-colors">Contact</Link>
      </div>

      
    </footer>
  );
}