import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-black">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-[2%] py-[140px] overflow-hidden bg-black">
        <div className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none" style={{background: 'radial-gradient(circle, #FF5A1F, #c43a00)'}} />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 pointer-events-none" style={{background: 'radial-gradient(circle, #FF5A1F, transparent)'}} />
        <div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,90,31,0.05) 0%, transparent 70%)'}} />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-1 inline-flex items-center gap-2 bg-white/5 border border-[#FF5A1F]/30 px-[18px] py-[7px] rounded-full text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#FF5A1F] mb-8 shadow-lg shadow-[#FF5A1F]/10 backdrop-blur-sm"
        >
          <span className="w-[7px] h-[7px] bg-[#FF5A1F] rounded-full animate-pulse-custom" />
          Revenue-Focused Content Scaling
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative z-1 text-[clamp(2.5rem,5vw,5.2rem)] font-black leading-[1.04] tracking-[-0.03em] text-white max-w-none"
        >
          Turn Your YouTube Content <br /> Into a Multi-Platform <br />
          <span style={{background: 'linear-gradient(135deg, #FF5A1F, #ff8c5a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Revenue Machine</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-1 text-[clamp(1rem,1.8vw,1.2rem)] text-white/50 max-w-[600px] leading-[1.7] mt-7 font-light"
        >
          ClipScale takes your existing videos and deploys them across Facebook, TikTok, and Snapchat — turning content you already have into new income streams.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative z-1 flex flex-wrap justify-center gap-3.5 mt-11"
        >
          {/* PRIMARY — solid orange parallelogram */}
          <Link
            to="/contact"
            className="text-white px-10 py-4 font-syne font-bold text-base tracking-tight hover:translate-y-[-3px] transition-all"
            style={{
              clipPath: 'polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%)',
              background: 'linear-gradient(135deg, #FF5A1F, #c43a00)',
              boxShadow: '0 8px 30px rgba(255,90,31,0.35)',
            }}
          >
            Let's Scale Your Content
          </Link>

          {/* SECONDARY — outlined parallelogram */}
          <Link
            to="/results"
            className="text-white px-10 py-4 font-syne font-bold text-base tracking-tight hover:translate-y-[-3px] transition-all relative"
            style={{
              clipPath: 'polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%)',
              background: 'rgba(255,255,255,0.05)',
              outline: '1px solid rgba(255,90,31,0.35)',
              backdropFilter: 'blur(8px)',
            }}
          >
            See Our Results
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative z-1 flex flex-wrap justify-center items-center gap-10 mt-14"
        >
          <div className="flex flex-col items-center">
            <span className="font-syne text-[1.8rem] font-extrabold leading-none" style={{background: 'linear-gradient(135deg, #FF5A1F, #ff8c5a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
              THOUSANDS
            </span>
            <span className="text-[0.78rem] text-white/40 font-medium mt-1 tracking-wider">Videos Deployed</span>
          </div>
          <div className="w-[1px] h-10 bg-white/10 hidden sm:block" />
          <div className="flex flex-col items-center">
            <span className="font-syne text-[1.8rem] font-extrabold leading-none" style={{background: 'linear-gradient(135deg, #FF5A1F, #ff8c5a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
              BILLIONS
            </span>
            <span className="text-[0.78rem] text-white/40 font-medium mt-1 tracking-wider">Views Generated</span>
          </div>
          <div className="w-[1px] h-10 bg-white/10 hidden sm:block" />
          <div className="flex flex-col items-center">
            <span className="font-syne text-[1.8rem] font-extrabold leading-none" style={{background: 'linear-gradient(135deg, #FF5A1F, #ff8c5a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
              HUNDREDS
            </span>
            <span className="text-[0.78rem] text-white/40 font-medium mt-1 tracking-wider">Creators Scaled</span>
          </div>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <div className="py-[18px] overflow-hidden relative border-y border-white/5" style={{background: '#0a0a0a'}}>
        <div className="absolute inset-y-0 left-0 w-20 z-2 pointer-events-none" style={{background: 'linear-gradient(to right, #0a0a0a, transparent)'}} />
        <div className="absolute inset-y-0 right-0 w-20 z-2 pointer-events-none" style={{background: 'linear-gradient(to left, #0a0a0a, transparent)'}} />
        <div className="flex w-max animate-marquee">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center">
              <span className="flex items-center gap-4 px-9 font-syne font-bold text-[0.85rem] tracking-[0.05em] uppercase whitespace-nowrap text-[#FF5A1F]">Multi-Platform Monetization <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40" /></span>
              <span className="flex items-center gap-4 px-9 font-syne font-bold text-[0.85rem] tracking-[0.05em] uppercase whitespace-nowrap text-white/40">Revenue Expansion <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40" /></span>
              <span className="flex items-center gap-4 px-9 font-syne font-bold text-[0.85rem] tracking-[0.05em] uppercase whitespace-nowrap text-[#FF5A1F]">Facebook Licensing <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40" /></span>
              <span className="flex items-center gap-4 px-9 font-syne font-bold text-[0.85rem] tracking-[0.05em] uppercase whitespace-nowrap text-white/40">TikTok Distribution <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40" /></span>
              <span className="flex items-center gap-4 px-9 font-syne font-bold text-[0.85rem] tracking-[0.05em] uppercase whitespace-nowrap text-[#FF5A1F]">Snapchat Growth <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40" /></span>
            </div>
          ))}
        </div>
      </div>

      {/* PROBLEM */}
      <section className="py-28 px-[6%]" style={{background: 'linear-gradient(135deg, #0d0d0d, #111)'}}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-[0.74rem] font-bold tracking-[0.12em] uppercase text-[#FF5A1F] mb-5">
              <span className="w-5 h-[2px] rounded-full" style={{background: '#FF5A1F'}} />
              The Problem
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-extrabold tracking-[-0.03em] leading-[1.1] text-white mb-7">
              You're only monetizing a <em className="not-italic text-[#FF5A1F]">fraction</em> of your content
            </h2>
            <p className="text-[1.05rem] leading-[1.8] text-white/50 mb-4 font-light">
              Most YouTube creators earn exclusively from their main channel — while the same content could be generating revenue on other platforms <strong className="text-white/80">right now.</strong>
            </p>
            <p className="text-[1.05rem] leading-[1.8] text-white/50 font-light">
              Your content has more reach. More lifespan. <strong className="text-white/80">More revenue potential.</strong> Without a system to deploy it everywhere, that money stays on the table.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[24px] p-9 border border-white/5 shadow-2xl shadow-black/50"
            style={{background: 'linear-gradient(135deg, #161616, #111)'}}
          >
            <div className="text-[0.72rem] tracking-[0.08em] uppercase text-white/30 font-semibold mb-5">Revenue by platform — typical creator</div>
            {[
              { label: 'YouTube', pct: 88, color: 'linear-gradient(90deg, #FF5A1F, #ff8c5a)' },
              { label: 'Facebook', pct: 12, color: 'linear-gradient(90deg, #FF5A1F80, #FF5A1F40)' },
              { label: 'TikTok', pct: 8, color: 'linear-gradient(90deg, #FF5A1F60, #FF5A1F30)' },
              { label: 'Snapchat', pct: 5, color: 'linear-gradient(90deg, #FF5A1F40, #FF5A1F20)' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center justify-between py-4.5 border-b border-white/5 last:border-0">
                <span className="text-[0.9rem] text-white/50 font-normal w-20">{stat.label}</span>
                <div className="flex-1 mx-5 h-2 rounded-full overflow-hidden" style={{background: 'rgba(255,255,255,0.05)'}}>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.pct}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{background: stat.color}}
                  />
                </div>
                <span className="font-syne font-bold text-[0.9rem] text-white">{stat.pct}%</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-28 px-[6%] relative overflow-hidden" style={{background: '#0a0a0a'}}>
        <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full pointer-events-none opacity-10" style={{background: 'radial-gradient(circle, #FF5A1F, transparent)'}} />
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none opacity-5" style={{background: 'radial-gradient(circle, #FF5A1F, transparent)'}} />
        
        <div className="max-w-7xl mx-auto relative z-1">
          <div className="inline-flex items-center gap-2 text-[0.74rem] font-bold tracking-[0.12em] uppercase text-[#FF5A1F] mb-5">
            <span className="w-5 h-[2px] rounded-full" style={{background: '#FF5A1F'}} />
            The Solution
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-extrabold tracking-[-0.03em] leading-[1.1] text-white mb-7 max-w-[700px]">
            We build your content <em className="not-italic text-[#FF5A1F]">monetization engine</em>
          </h2>
          <p className="text-[1.05rem] leading-[1.8] text-white/40 max-w-[560px] mb-4 font-light">
            ClipScale takes your YouTube content and deploys it across the highest-revenue social platforms. We handle everything — distribution, page management, and monetization strategy.
          </p>
          <p className="text-[1.05rem] leading-[1.8] text-white/40 max-w-[560px] mb-16 font-light">
            <strong className="text-white/70">We don't edit for YouTube.<br /> We take what you already have and make it earn more.</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                id: 'fb',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                ),
                title: 'Facebook',
                desc: 'The single most powerful platform for video monetization. We manage your page, optimize for Facebook Ad Breaks, and unlock content licensing revenue.',
                tag: 'Highest Rev Potential'
              },
              {
                id: 'tk',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
                  </svg>
                ),
                title: 'TikTok',
                desc: 'Massive organic reach with Creator Fund and TikTok Series monetization. We handle repurposing and consistent publishing to grow your presence fast.',
                tag: 'Organic Reach'
              },
              {
                id: 'sc',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.165-.015h-.104c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.45-.166-.54-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/>
                  </svg>
                ),
                title: 'Snapchat',
                desc: "Snapchat Spotlight and Discover are underutilized revenue channels. We deploy your content there and tap into Snap's creator monetization programs.",
                tag: 'Underutilized Revenue'
              },
            ].map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ y: -6 }}
                className="border rounded-[20px] p-8 relative overflow-hidden group transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #161616, #111)', borderColor: 'rgba(255,90,31,0.1)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,90,31,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,90,31,0.1)'}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[20px]" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,90,31,0.06), transparent 70%)' }} />
                <div className="relative z-1 w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mb-5" style={{ background: 'linear-gradient(135deg, #FF5A1F, #c43a00)' }}>
                  {card.icon}
                </div>
                <h3 className="relative z-1 text-[1.15rem] font-bold text-white mb-2.5">{card.title}</h3>
                <p className="relative z-1 text-[0.88rem] text-white/40 leading-[1.7]">{card.desc}</p>
                <span className="relative z-1 inline-block mt-4 px-3 py-1.5 rounded-full text-[0.72rem] font-bold tracking-[0.06em] uppercase text-[#FF5A1F]" style={{ background: 'rgba(255,90,31,0.1)', border: '1px solid rgba(255,90,31,0.2)' }}>
                  {card.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-28 px-[6%]" style={{background: 'linear-gradient(180deg, #111, #0d0d0d)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[0.74rem] font-bold tracking-[0.12em] uppercase text-[#FF5A1F] mb-5">
            <span className="w-5 h-[2px] rounded-full" style={{background: '#FF5A1F'}} />
            How It Works
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.03em] text-white mb-4">
            Four steps.<br /> Zero extra work for you.
          </h2>
          <p className="text-base text-white/40 max-w-[480px] leading-[1.7] mb-16">
            You keep creating. We turn every video into a multi-platform revenue asset.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', name: 'Analysis', title: 'We audit your content', desc: 'We analyze your existing videos to identify top-performing moments and the highest monetization opportunities for your content.' },
              { num: '02', name: 'Repurposing', title: 'Content gets reshaped', desc: 'We adapt your videos into platform-native formats — optimized for the selected platforms to maximize reach, engagement, and revenue.' },
              { num: '03', name: 'Distribution', title: 'We publish and manage', desc: 'We run and manage your presence on the platforms that best fit your content strategy. Consistent publishing, scheduling, and community management — fully handled.' },
              { num: '04', name: 'Monetization', title: 'Revenue starts flowing', desc: 'We activate every available monetization layer: ad revenue, content licensing, platform partner programs, and more.' },
            ].map((step) => (
              <motion.div 
                key={step.num}
                whileHover={{ y: -6 }}
                className="border rounded-[20px] p-9 relative overflow-hidden shadow-lg group transition-all duration-300"
                style={{background: 'linear-gradient(135deg, #161616, #111)', borderColor: 'rgba(255,255,255,0.05)'}}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,90,31,0.2)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
              >
                <div className="absolute bottom-[-10px] right-4 font-syne font-extrabold text-[5rem] leading-none pointer-events-none select-none" style={{color: 'rgba(255,255,255,0.03)'}}>
                  {step.num}
                </div>
                <div className="w-11 h-11 rounded-[12px] flex items-center justify-center font-syne font-extrabold text-base text-white mb-6" style={{background: 'linear-gradient(135deg, #FF5A1F, #c43a00)'}}>
                  {step.num}
                </div>
                <div className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase mb-4 text-[#FF5A1F]">
                  {step.name}
                </div>
                <h3 className="text-base font-bold text-white mb-1.5 tracking-tight">{step.title}</h3>
                <p className="text-[0.88rem] text-white/40 leading-[1.75]">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-9 rounded-[16px] flex items-center gap-4 border" style={{background: 'rgba(255,90,31,0.05)', borderColor: 'rgba(255,90,31,0.15)'}}>
            <div className="w-10 h-10 rounded-[10px] flex-shrink-0 flex items-center justify-center" style={{background: 'linear-gradient(135deg, #FF5A1F, #c43a00)'}}>
              <Zap className="text-white" size={18} />
            </div>
            <p className="text-[0.9rem] text-white/60 font-normal leading-[1.6]">
              <strong className="text-white">You stay focused on creating.</strong> We handle distribution, page management, and scaling across every platform.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-[6%]" style={{background: '#0a0a0a'}}>
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[0.74rem] font-bold tracking-[0.12em] uppercase text-[#FF5A1F] mb-5">
            <span className="w-5 h-[2px] rounded-full" style={{background: '#FF5A1F'}} />
            Services
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.03em] text-white mb-14 max-w-[600px]">
            Everything needed to <em className="not-italic text-[#FF5A1F]">scale your revenue</em> across platforms
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Content Repurposing', desc: 'Your YouTube videos transformed into platform-native formats tailored to the channels that best fit your content and audience.' },
              { title: 'Multi-Platform Publishing', desc: 'Consistent, strategic content deployment across selected platforms on an optimized schedule designed for maximum reach and revenue.' },
              { title: 'Page Management', desc: 'Full management of your social media pages and accounts — handled from start to finish.' },
              { title: 'Monetization Strategy', desc: 'We activate every revenue stream available — ad breaks, creator funds, and partner programs.' },
              { title: 'Content Licensing', desc: 'Especially powerful on Facebook — we handle licensing deals that generate passive recurring revenue.' },
              { title: 'Performance Reporting', desc: 'Clear revenue and growth reports so you always know exactly what your content is earning.' },
            ].map((service) => (
              <motion.div 
                key={service.title}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[20px] border transition-all duration-300 group"
                style={{background: 'linear-gradient(135deg, #141414, #111)', borderColor: 'rgba(255,255,255,0.05)'}}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,90,31,0.25)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(255,90,31,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div className="w-3 h-3 rounded-full mb-5" style={{background: '#FF5A1F'}} />
                <h3 className="text-[1.05rem] font-bold text-white mb-2.5">{service.title}</h3>
                <p className="text-[0.87rem] text-white/40 leading-[1.7]">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta" className="text-center relative overflow-hidden py-36 px-[6%]" style={{background: '#0d0d0d'}}>
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse at 50% 100%, rgba(255,90,31,0.15), transparent 70%)'}} />
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{background: 'linear-gradient(90deg, transparent, rgba(255,90,31,0.3), transparent)'}} />
        <div className="relative z-1 max-w-[700px] mx-auto">
          <div className="inline-flex items-center gap-2 text-[0.74rem] font-bold tracking-[0.12em] uppercase text-[#FF5A1F] mb-6 justify-center">
            <span className="w-5 h-[2px] rounded-full" style={{background: '#FF5A1F'}} />
            Ready to Scale
          </div>
          <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold tracking-[-0.04em] text-white leading-[1.06] mb-5">
            Stop leaving <em className="not-italic text-[#FF5A1F]">revenue</em> on the table
          </h2>
          <p className="text-[1.05rem] text-white/40 mb-12 leading-[1.7]">
            Your content is already done.<br />
            Let's make it earn across every platform it should be on.
          </p>

          {/* FINAL CTA — parallelogram button */}
          <Link
            to="/contact"
            className="inline-block text-white text-lg px-14 py-5 font-syne font-extrabold hover:translate-y-[-4px] transition-all"
            style={{
              clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)',
              background: 'linear-gradient(135deg, #FF5A1F, #c43a00)',
              boxShadow: '0 20px 60px rgba(255,90,31,0.35)',
            }}
          >
            Let's Scale Your Content
          </Link>
        </div>
      </section>
    </div>
  );
}