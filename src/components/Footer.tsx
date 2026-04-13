import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/10 px-[6%] py-10 flex flex-col md:flex-row items-center justify-between gap-5">
      <Link to="/" className="font-syne font-extrabold text-[1.3rem] text-white tracking-tighter">
        Clip<span className="text-gradient-coral">Scale</span>
      </Link>
      
      <div className="flex gap-7">
        <a href="#" className="text-[0.85rem] text-white/45 hover:text-white/90 transition-colors">Contact</a>
        <a href="#" className="text-[0.85rem] text-white/45 hover:text-white/90 transition-colors">Facebook</a>
        <a href="#" className="text-[0.85rem] text-white/45 hover:text-white/90 transition-colors">TikTok</a>
        <a href="#" className="text-[0.85rem] text-white/45 hover:text-white/90 transition-colors">Instagram</a>
      </div>
      
      <span className="text-[0.78rem] text-white/25">© 2026 ClipScale. All rights reserved.</span>
    </footer>
  );
}
