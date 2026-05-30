import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer
      className="border-t relative overflow-hidden"
      style={{ borderColor: 'rgba(255,90,31,0.12)', background: '#080808' }}
    >
      {/* LEFT — oversized animated logo */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 pointer-events-none select-none"
        animate={{ 
          rotate: [0, 3, -2, 1, 0],
          scale: [1, 1.03, 0.98, 1.01, 1],
          opacity: [0.07, 0.11, 0.07, 0.10, 0.07],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img src="/CSS.png" alt="" className="w-[340px] h-[340px] object-contain" />
      </motion.div>

      {/* RIGHT — oversized animated logo, mirrored */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none"
        animate={{ 
          rotate: [0, -3, 2, -1, 0],
          scale: [1, 0.97, 1.03, 0.99, 1],
          opacity: [0.07, 0.10, 0.07, 0.11, 0.07],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        style={{ transform: 'translateX(25%) translateY(-50%) scaleX(-1)' }}
      >
        <img src="/CSS.png" alt="" className="w-[340px] h-[340px] object-contain" />
      </motion.div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 px-[6%] py-12 flex flex-col items-center gap-6">
        <Link to="/" className="flex items-center">
          <img
            src="/CSS.png"
            alt="Clip Scale Studio logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="flex gap-7">
          <Link to="/contact" className="text-[0.85rem] text-white/40 hover:text-white transition-colors">Contact</Link>
          <a href="#" className="text-[0.85rem] text-white/40 hover:text-white transition-colors">Facebook</a>
          <a href="#" className="text-[0.85rem] text-white/40 hover:text-white transition-colors">TikTok</a>
          <a href="#" className="text-[0.85rem] text-white/40 hover:text-white transition-colors">Instagram</a>
        </div>

        <span className="text-[0.78rem] text-white/20">
          © 2026 ClipScale. All rights reserved.
        </span>
      </div>
    </footer>
  );
}