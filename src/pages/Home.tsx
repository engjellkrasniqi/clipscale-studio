import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle2, TrendingUp, Zap, Layers, BarChart3 } from 'lucide-react';

// ============================================================
//  HOME PAGE — EDITABLE CONTENT
//
//  Most of this page is design/layout. The sections below
//  marked with "CHANGE" are the ones you'll want to update
//  as your business grows (stats, services, steps, etc).
//
//  For video/thumbnail changes → see Results.jsx
// ============================================================

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
          {/* CHANGE: top pill label text */}
          Revenue-Focused Content Scaling
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative z-1 text-[clamp(2.5rem,5vw,5.2rem)] font-black leading-[1.04] tracking-[-0.03em] text-white max-w-none"
        >
          {/* CHANGE: hero headline */}
          Turn Your YouTube Content <br /> Into a Multi-Platform <br />
          <span style={{background: 'linear-gradient(135deg, #FF5A1F, #ff8c5a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Revenue Machine</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-1 text-[clamp(1rem,1.8vw,1.2rem)] text-white/50 max-w-[600px] leading-[1.7] mt-7 font-light"
        >
          {/* CHANGE: hero subheading */}
          ClipScale takes your existing videos and deploys them across Facebook, TikTok, and Snapchat — turning content you already have into new income streams.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative z-1 flex flex-wrap justify-center gap-3.5 mt-11"
        >
          <Link to="/#cta" className="text-white px-9 py-4 rounded-full font-syne font-bold text-base tracking-tight shadow-2xl shadow-[#FF5A1F]/30 hover:translate-y-[-3px] hover:shadow-[#FF5A1F]/50 transition-all" style={{background: 'linear-gradient(135deg, #FF5A1F, #c43a00)'}}>
            {/* CHANGE: primary CTA button text */}
            Let's Scale Your Content
          </Link>
          <Link to="/results" className="bg-white/5 text-white px-9 py-4 rounded-full border border-[#FF5A1F]/30 font-syne font-bold text-base tracking-tight backdrop-blur-md hover:translate-y-[-3px] hover:shadow-lg hover:border-[#FF5A1F]/60 hover:bg-white/10 transition-all">
            {/* CHANGE: secondary CTA button text */}
            See Our Results
          </Link>
        </motion.div>

        {/* -------------------------------------------------------
            HERO STATS — update these as your numbers grow
        ------------------------------------------------------- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative z-1 flex flex-wrap justify-center items-center gap-10 mt-14"
        >
          <div className="flex flex-col items-center">
            <span className="font-syne text-[1.8rem] font-extrabold leading-none" style={{background: 'linear-gradient(135deg, #FF5A1F, #ff8c5a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
              4,000+  {/* CHANGE: stat number */}
            </span>
            <span className="text-[0.78rem] text-white/40 font-medium mt-1 tracking-wider">
              Videos Deployed  {/* CHANGE: stat label */}
            </span>
          </div>
          <div className="w-[1px] h-10 bg-white/10 hidden sm:block" />
          <div className="flex flex-col items-center">
            <span className="font-syne text-[1.8rem] font-extrabold leading-none" style={{background: 'linear-gradient(135deg, #FF5A1F, #ff8c5a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
              2B+  {/* CHANGE: stat number */}
            </span>
            <span className="text-[0.78rem] text-white/40 font-medium mt-1 tracking-wider">
              Views Generated  {/* CHANGE: stat label */}
            </span>
          </div>
          <div className="w-[1px] h-10 bg-white/10 hidden sm:block" />
          <div className="flex flex-col items-center">
            <span className="font-syne text-[1.8rem] font-extrabold leading-none" style={{background: 'linear-gradient(135deg, #FF5A1F, #ff8c5a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
              150+  {/* CHANGE: stat number */}
            </span>
            <span className="text-[0.78rem] text-white/40 font-medium mt-1 tracking-wider">
              Creators Scaled  {/* CHANGE: stat label */}
            </span>
          </div>
        </motion.div>
      </section>

      {/* MARQUEE — scrolling text banner */}
      <div className="py-[18px] overflow-hidden relative border-y border-white/5" style={{background: '#0a0a0a'}}>
        <div className="absolute inset-y-0 left-0 w-20 z-2 pointer-events-none" style={{background: 'linear-gradient(to right, #0a0a0a, transparent)'}} />
        <div className="absolute inset-y-0 right-0 w-20 z-2 pointer-events-none" style={{background: 'linear-gradient(to left, #0a0a0a, transparent)'}} />
        <div className="flex w-max animate-marquee">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center">
              {/* CHANGE: marquee text items — update labels as needed */}
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
            className="reveal"
          >
            <div className="inline-flex items-center gap-2 text-[0.74rem] font-bold tracking-[0.12em] uppercase text-[#FF5A1F] mb-5">
              <span className="w-5 h-[2px] rounded-full" style={{background: '#FF5A1F'}} />
              The Problem
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-extrabold tracking-[-0.03em] leading-[1.1] text-white mb-7">
              {/* CHANGE: problem section headline */}
              You're only monetizing a <em className="not-italic text-[#FF5A1F]">fraction</em> of your content
            </h2>
            <p className="text-[1.05rem] leading-[1.8] text-white/50 mb-4 font-light">
              {/* CHANGE: problem paragraph 1 */}
              Most YouTube creators earn exclusively from their main channel — while the same content could be generating revenue on three other platforms <strong className="text-white/80">right now.</strong>
            </p>
            <p className="text-[1.05rem] leading-[1.8] text-white/50 font-light">
              {/* CHANGE: problem paragraph 2 */}
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
            {/* CHANGE: bar chart data — adjust pct values to match your claims */}
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
            {/* CHANGE: solution headline */}
            We build your content <em className="not-italic text-[#FF5A1F]">monetization engine</em>
          </h2>
          <p className="text-[1.05rem] leading-[1.8] text-white/40 max-w-[560px] mb-4 font-light">
            {/* CHANGE: solution paragraph 1 */}
            ClipScale takes your YouTube content and deploys it across the highest-revenue social platforms. We handle everything — distribution, page management, and monetization strategy.
          </p>
          <p className="text-[1.05rem] leading-[1.8] text-white/40 max-w-[560px] mb-16 font-light">
            {/* CHANGE: solution paragraph 2 */}
            <strong className="text-white/70">We don't edit for YouTube. We take what you already have and make it earn more.</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* CHANGE: platform cards — update title, desc, tag as needed */}
            {[
              { id: 'fb', icon: 'fb', title: 'Facebook', desc: 'The single most powerful platform for video monetization. We manage your page, optimize for Facebook Ad Breaks, and unlock content licensing revenue.', tag: 'Highest Rev Potential' },
              { id: 'tk', icon: 'TK', title: 'TikTok', desc: 'Massive organic reach with Creator Fund and TikTok Series monetization. We handle repurposing and consistent publishing to grow your presence fast.', tag: 'Organic Reach' },
              { id: 'sc', icon: 'SC', title: 'Snapchat', desc: 'Snapchat Spotlight and Discover are underutilized revenue channels. We deploy your content there and tap into Snap\'s creator monetization programs.', tag: 'Underutilized Revenue' },
            ].map((card) => (
              <motion.div 
                key={card.id}
                whileHover={{ y: -6 }}
                className="border rounded-[20px] p-8 relative overflow-hidden group transition-all duration-300"
                style={{background: 'linear-gradient(135deg, #161616, #111)', borderColor: 'rgba(255,90,31,0.1)'}}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,90,31,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,90,31,0.1)'}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[20px]" style={{background: 'radial-gradient(circle at 30% 30%, rgba(255,90,31,0.06), transparent 70%)'}} />
                <div className="relative z-1 w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mb-5 font-syne font-extrabold text-[1.1rem] text-white" style={{background: 'linear-gradient(135deg, #FF5A1F, #c43a00)'}}>
                  {card.icon}
                </div>
                <h3 className="relative z-1 text-[1.15rem] font-bold text-white mb-2.5">{card.title}</h3>
                <p className="relative z-1 text-[0.88rem] text-white/40 leading-[1.7]">{card.desc}</p>
                <span className="relative z-1 inline-block mt-4 px-3 py-1.5 rounded-full text-[0.72rem] font-bold tracking-[0.06em] uppercase text-[#FF5A1F]" style={{background: 'rgba(255,90,31,0.1)', border: '1px solid rgba(255,90,31,0.2)'}}>
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
            {/* CHANGE: how it works headline */}
            Four steps.<br /> Zero extra work for you.
          </h2>
          <p className="text-base text-white/40 max-w-[480px] leading-[1.7] mb-16">
            {/* CHANGE: how it works subheading */}
            You keep creating. We turn every video into a multi-platform revenue asset.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CHANGE: steps — update name, title, desc for each of the 4 steps */}
            {[
              { num: '01', name: 'Analysis', title: 'We audit your content', desc: 'We analyze your existing videos to identify top-performing moments and the highest monetization opportunities across platforms.' },
              { num: '02', name: 'Repurposing', title: 'Content gets reshaped', desc: 'We adapt your videos into platform-native formats — optimized for Facebook\'s algorithm, TikTok\'s feed, and Snapchat\'s Spotlight.' },
              { num: '03', name: 'Distribution', title: 'We publish and manage', desc: 'We run your pages on Facebook, TikTok, and Snapchat. Consistent publishing, scheduling, and community management — fully handled.' },
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
              {/* CHANGE: bottom banner text */}
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
            {/* CHANGE: services headline */}
            Everything needed to <em className="not-italic text-[#FF5A1F]">scale your revenue</em> across platforms
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* CHANGE: service cards — update title and desc for each */}
            {[
              { title: 'Content Repurposing', desc: 'Your YouTube videos transformed into platform-native formats for Facebook, TikTok, and Snapchat.' },
              { title: 'Multi-Platform Publishing', desc: 'Consistent, strategic content deployment across all three platforms on an optimized schedule.' },
              { title: 'Page Management', desc: 'Full management of your Facebook pages, TikTok accounts, and Snapchat profiles — top to bottom.' },
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
            {/* CHANGE: final CTA headline */}
            Stop leaving <em className="not-italic text-[#FF5A1F]">revenue</em> on the table
          </h2>
          <p className="text-[1.05rem] text-white/40 mb-12 leading-[1.7]">
            {/* CHANGE: final CTA subtext */}
            Your content is already done. Let's make it earn across every platform it should be on.
          </p>
          <button className="text-white text-lg px-12 py-5 rounded-full font-syne font-extrabold shadow-2xl hover:translate-y-[-4px] transition-all" style={{background: 'linear-gradient(135deg, #FF5A1F, #c43a00)', boxShadow: '0 20px 60px rgba(255,90,31,0.35)'}}>
            {/* CHANGE: final CTA button text */}
            Let's Scale Your Content
          </button>
        </div>
      </section>
    </div>
  );
}
