import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      className="border-t px-[6%] py-10 flex flex-col md:flex-row items-center justify-between gap-5 bg-transparent backdrop-blur-md"
      style={{ borderColor: 'rgba(255,90,31,0.12)' }}
    >
      <Link to="/" className="font-syne font-extrabold text-[1.3rem] text-white tracking-tighter">
        Clip
        <span
          style={{
            background: 'linear-gradient(135deg, #FF5A1F, #ff8c5a)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Scale
        </span>
      </Link>

      <div className="flex gap-7">
        <a href="#" className="text-[0.85rem] text-white/40 hover:text-white transition-colors">Contact</a>
        <a href="#" className="text-[0.85rem] text-white/40 hover:text-white transition-colors">Facebook</a>
        <a href="#" className="text-[0.85rem] text-white/40 hover:text-white transition-colors">TikTok</a>
        <a href="#" className="text-[0.85rem] text-white/40 hover:text-white transition-colors">Instagram</a>
      </div>

      <span className="text-[0.78rem] text-white/20">
        © 2026 ClipScale. All rights reserved.
      </span>
    </footer>
  );
}