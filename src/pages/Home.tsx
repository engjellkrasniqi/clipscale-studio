import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle2, TrendingUp, Zap, Layers, BarChart3 } from 'lucide-react';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-[2%] py-[140px] overflow-hidden bg-linear-to-br from-[#fff8f0] via-[#fce4ff] to-[#dff6ff]">
        {/* Blob decorations */}
        <div className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] bg-radial-to-c from-orange to-coral rounded-full blur-[80px] opacity-45 pointer-events-none" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-radial-to-c from-indigo to-sky rounded-full blur-[80px] opacity-45 pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-1 inline-flex items-center gap-2 bg-white border border-coral/25 px-[18px] py-[7px] rounded-full text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-coral mb-8 shadow-lg shadow-coral/10"
        >
          <span className="w-[7px] h-[7px] bg-coral rounded-full animate-pulse-custom" />
          Revenue-Focused Content Scaling
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative z-1 text-[clamp(2.5rem,5vw,5.2rem)] font-black leading-[1.04] tracking-[-0.03em] text-charcoal max-w-none"
        >
          Turn Your YouTube Content <br /> Into a Multi-Platform <br />
          <span className="text-gradient-coral">Revenue Machine</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-1 text-[clamp(1rem,1.8vw,1.2rem)] text-muted max-w-[600px] leading-[1.7] mt-7 font-light"
        >
          ClipScale takes your existing videos and deploys them across Facebook, TikTok, and Snapchat — turning content you already have into new income streams.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative z-1 flex flex-wrap justify-center gap-3.5 mt-11"
        >
          <Link to="/#cta" className="bg-gradient-coral text-white px-9 py-4 rounded-full font-syne font-bold text-base tracking-tight shadow-2xl shadow-coral/35 hover:translate-y-[-3px] hover:shadow-coral/40 transition-all">
            Let's Scale Your Content
          </Link>
          <Link to="/results" className="bg-white/90 text-charcoal px-9 py-4 rounded-full border border-black/10 font-syne font-bold text-base tracking-tight backdrop-blur-md hover:translate-y-[-3px] hover:shadow-lg hover:border-black/20 transition-all">
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
            <span className="font-syne text-[1.8rem] font-extrabold bg-linear-to-br from-indigo to-teal bg-clip-text text-transparent leading-none">4,000+</span>
            <span className="text-[0.78rem] text-muted font-medium mt-1 tracking-wider">Videos Deployed</span>
          </div>
          <div className="w-[1px] h-10 bg-black/10 hidden sm:block" />
          <div className="flex flex-col items-center">
            <span className="font-syne text-[1.8rem] font-extrabold bg-linear-to-br from-indigo to-teal bg-clip-text text-transparent leading-none">2B+</span>
            <span className="text-[0.78rem] text-muted font-medium mt-1 tracking-wider">Views Generated</span>
          </div>
          <div className="w-[1px] h-10 bg-black/10 hidden sm:block" />
          <div className="flex flex-col items-center">
            <span className="font-syne text-[1.8rem] font-extrabold bg-linear-to-br from-indigo to-teal bg-clip-text text-transparent leading-none">150+</span>
            <span className="text-[0.78rem] text-muted font-medium mt-1 tracking-wider">Creators Scaled</span>
          </div>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <div className="bg-charcoal py-[18px] overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-charcoal to-transparent z-2 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-charcoal to-transparent z-2 pointer-events-none" />
        <div className="flex w-max animate-marquee">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center">
              <span className="flex items-center gap-4 px-9 font-syne font-bold text-[0.85rem] tracking-[0.05em] uppercase whitespace-nowrap text-coral">Multi-Platform Monetization <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40" /></span>
              <span className="flex items-center gap-4 px-9 font-syne font-bold text-[0.85rem] tracking-[0.05em] uppercase whitespace-nowrap text-amber">Revenue Expansion <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40" /></span>
              <span className="flex items-center gap-4 px-9 font-syne font-bold text-[0.85rem] tracking-[0.05em] uppercase whitespace-nowrap text-teal">Facebook Licensing <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40" /></span>
              <span className="flex items-center gap-4 px-9 font-syne font-bold text-[0.85rem] tracking-[0.05em] uppercase whitespace-nowrap text-sky">TikTok Distribution <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40" /></span>
              <span className="flex items-center gap-4 px-9 font-syne font-bold text-[0.85rem] tracking-[0.05em] uppercase whitespace-nowrap text-[#C084FC]">Snapchat Growth <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40" /></span>
            </div>
          ))}
        </div>
      </div>

      {/* PROBLEM */}
      <section className="bg-linear-to-br from-[#fff6ed] to-[#fff0f9] py-28 px-[6%]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="reveal"
          >
            <div className="inline-flex items-center gap-2 text-[0.74rem] font-bold tracking-[0.12em] uppercase text-coral mb-5">
              <span className="w-5 h-[2px] bg-coral rounded-full" />
              The Problem
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-extrabold tracking-[-0.03em] leading-[1.1] text-charcoal mb-7">
              You're only monetizing a <em className="not-italic text-coral">fraction</em> of your content
            </h2>
            <p className="text-[1.05rem] leading-[1.8] text-muted mb-4 font-light">
              Most YouTube creators earn exclusively from their main channel — while the same content could be generating revenue on three other platforms <strong>right now.</strong>
            </p>
            <p className="text-[1.05rem] leading-[1.8] text-muted font-light">
              Your content has more reach. More lifespan. <strong>More revenue potential.</strong> Without a system to deploy it everywhere, that money stays on the table.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[24px] p-9 shadow-2xl shadow-black/10 border border-black/5"
          >
            <div className="text-[0.72rem] tracking-[0.08em] uppercase text-muted font-semibold mb-5">Revenue by platform — typical creator</div>
            {[
              { label: 'YouTube', pct: 88, color: 'bg-gradient-coral' },
              { label: 'Facebook', pct: 12, color: 'bg-gradient-indigo' },
              { label: 'TikTok', pct: 8, color: 'bg-gradient-violet' },
              { label: 'Snapchat', pct: 5, color: 'bg-gradient-teal' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center justify-between py-4.5 border-b border-black/5 last:border-0">
                <span className="text-[0.9rem] text-muted font-normal w-20">{stat.label}</span>
                <div className="flex-1 mx-5 h-2 bg-[#F0EDE8] rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.pct}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={`h-full rounded-full ${stat.color}`} 
                  />
                </div>
                <span className="font-syne font-bold text-[0.9rem] text-charcoal">{stat.pct}%</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-charcoal py-28 px-[6%] relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] bg-radial-to-c from-indigo/25 to-transparent rounded-full pointer-events-none" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-radial-to-c from-teal/20 to-transparent rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-1">
          <div className="inline-flex items-center gap-2 text-[0.74rem] font-bold tracking-[0.12em] uppercase text-teal mb-5">
            <span className="w-5 h-[2px] bg-teal rounded-full" />
            The Solution
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-extrabold tracking-[-0.03em] leading-[1.1] text-white mb-7 max-w-[700px]">
            We build your content <em className="not-italic text-teal">monetization engine</em>
          </h2>
          <p className="text-[1.05rem] leading-[1.8] text-white/60 max-w-[560px] mb-4 font-light">
            ClipScale takes your YouTube content and deploys it across the highest-revenue social platforms. We handle everything — distribution, page management, and monetization strategy.
          </p>
          <p className="text-[1.05rem] leading-[1.8] text-white/60 max-w-[560px] mb-16 font-light">
            <strong>We don't edit for YouTube. We take what you already have and make it earn more.</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { id: 'fb', icon: 'fb', title: 'Facebook', desc: 'The single most powerful platform for video monetization. We manage your page, optimize for Facebook Ad Breaks, and unlock content licensing revenue.', tag: 'Highest Rev Potential', color: 'indigo' },
              { id: 'tk', icon: 'TK', title: 'TikTok', desc: 'Massive organic reach with Creator Fund and TikTok Series monetization. We handle repurposing and consistent publishing to grow your presence fast.', tag: 'Organic Reach', color: 'violet' },
              { id: 'sc', icon: 'SC', title: 'Snapchat', desc: 'Snapchat Spotlight and Discover are underutilized revenue channels. We deploy your content there and tap into Snap\'s creator monetization programs.', tag: 'Underutilized Revenue', color: 'amber' },
            ].map((card) => (
              <motion.div 
                key={card.id}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 rounded-[20px] p-8 relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-linear-to-br from-${card.color}/15 to-${card.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className={`relative z-1 w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mb-5 font-syne font-extrabold text-[1.1rem] ${card.id === 'fb' ? 'bg-linear-to-br from-[#1877F2] to-indigo text-white' : card.id === 'tk' ? 'bg-linear-to-br from-[#010101] to-violet text-white' : 'bg-linear-to-br from-[#FFFC00] to-orange text-charcoal'}`}>
                  {card.icon}
                </div>
                <h3 className="relative z-1 text-[1.15rem] font-bold text-white mb-2.5">{card.title}</h3>
                <p className="relative z-1 text-[0.88rem] text-white/55 leading-[1.7]">{card.desc}</p>
                <span className={`relative z-1 inline-block mt-4 px-3 py-1.5 rounded-full text-[0.72rem] font-bold tracking-[0.06em] uppercase ${card.id === 'fb' ? 'bg-indigo/25 text-[#A5B4FF]' : card.id === 'tk' ? 'bg-violet/25 text-[#C084FC]' : 'bg-amber/20 text-amber'}`}>
                  {card.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-linear-to-b from-[#f8f4ff] to-[#fff9f0] py-28 px-[6%]">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[0.74rem] font-bold tracking-[0.12em] uppercase text-coral mb-5">
            <span className="w-5 h-[2px] bg-coral rounded-full" />
            How It Works
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.03em] text-charcoal mb-4">
            Four steps.<br /> Zero extra work for you.
          </h2>
          <p className="text-base text-muted max-w-[480px] leading-[1.7] mb-16">
            You keep creating. We turn every video into a multi-platform revenue asset.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', name: 'Analysis', title: 'We audit your content', desc: 'We analyze your existing videos to identify top-performing moments and the highest monetization opportunities across platforms.', color: 'coral' },
              { num: '02', name: 'Repurposing', title: 'Content gets reshaped', desc: 'We adapt your videos into platform-native formats — optimized for Facebook\'s algorithm, TikTok\'s feed, and Snapchat\'s Spotlight.', color: 'indigo' },
              { num: '03', name: 'Distribution', title: 'We publish and manage', desc: 'We run your pages on Facebook, TikTok, and Snapchat. Consistent publishing, scheduling, and community management — fully handled.', color: 'teal' },
              { num: '04', name: 'Monetization', title: 'Revenue starts flowing', desc: 'We activate every available monetization layer: ad revenue, content licensing, platform partner programs, and more.', color: 'violet' },
            ].map((step) => (
              <motion.div 
                key={step.num}
                whileHover={{ y: -6 }}
                className="bg-white border border-black/5 rounded-[20px] p-9 relative overflow-hidden shadow-lg shadow-black/5 group"
              >
                <div className="absolute bottom-[-10px] right-4 font-syne font-extrabold text-[5rem] text-black/5 leading-none pointer-events-none select-none">
                  {step.num}
                </div>
                <div className={`w-11 h-11 rounded-[12px] flex items-center justify-center font-syne font-extrabold text-base text-white mb-6 bg-gradient-${step.color}`}>
                  {step.num}
                </div>
                <div className={`text-[0.7rem] font-semibold tracking-[0.1em] uppercase mb-4 text-${step.color}`}>
                  {step.name}
                </div>
                <h3 className="text-base font-bold text-charcoal mb-1.5 tracking-tight">{step.title}</h3>
                <p className="text-[0.88rem] text-muted leading-[1.75]">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-9 bg-linear-to-r from-indigo/10 to-teal/5 border border-indigo/15 rounded-[16px] flex items-center gap-4">
            <div className="w-10 h-10 rounded-[10px] flex-shrink-0 bg-linear-to-br from-indigo to-teal flex items-center justify-center">
              <Zap className="text-white" size={18} />
            </div>
            <p className="text-[0.9rem] text-ink font-normal leading-[1.6]">
              <strong>You stay focused on creating.</strong> We handle distribution, page management, and scaling across every platform.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white py-28 px-[6%]">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[0.74rem] font-bold tracking-[0.12em] uppercase text-orange mb-5">
            <span className="w-5 h-[2px] bg-orange rounded-full" />
            Services
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.03em] text-charcoal mb-14 max-w-[600px]">
            Everything needed to <em className="not-italic text-orange">scale your revenue</em> across platforms
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Content Repurposing', desc: 'Your YouTube videos transformed into platform-native formats for Facebook, TikTok, and Snapchat.', color: 'coral' },
              { title: 'Multi-Platform Publishing', desc: 'Consistent, strategic content deployment across all three platforms on an optimized schedule.', color: 'indigo' },
              { title: 'Page Management', desc: 'Full management of your Facebook pages, TikTok accounts, and Snapchat profiles — top to bottom.', color: 'teal' },
              { title: 'Monetization Strategy', desc: 'We activate every revenue stream available — ad breaks, creator funds, and partner programs.', color: 'amber' },
              { title: 'Content Licensing', desc: 'Especially powerful on Facebook — we handle licensing deals that generate passive recurring revenue.', color: 'violet' },
              { title: 'Performance Reporting', desc: 'Clear revenue and growth reports so you always know exactly what your content is earning.', color: 'orange' },
            ].map((service) => (
              <motion.div 
                key={service.title}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[20px] border border-black/5 shadow-sm hover:shadow-2xl hover:shadow-black/10 transition-all bg-linear-to-br from-offwhite to-white"
              >
                <div className={`w-3 h-3 rounded-full mb-5 bg-${service.color}`} />
                <h3 className="text-[1.05rem] font-bold text-charcoal mb-2.5">{service.title}</h3>
                <p className="text-[0.87rem] text-muted leading-[1.7]">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS PREVIEW */}
      <section id="results" className="bg-linear-to-br from-[#0D1B2A] via-[#1A1A2E] to-[#0F2A24] py-28 px-[6%] relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-to-c from-indigo/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-1">
          <div className="inline-flex items-center gap-2 text-[0.74rem] font-bold tracking-[0.12em] uppercase text-amber mb-5">
            <span className="w-5 h-[2px] bg-amber rounded-full" />
            Results
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-extrabold tracking-[-0.03em] text-white mb-16">
            Proven growth across <br /> every platform
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { num: '3.2x', label: 'Average Revenue Increase', color: 'coral' },
              { num: '450M+', label: 'Monthly Impressions', color: 'teal' },
              { num: '85%', label: 'Retention Rate', color: 'violet' },
            ].map((metric) => (
              <div key={metric.label} className="bg-white/5 border border-white/10 rounded-[24px] p-10 text-center relative overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-${metric.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                <div className={`font-syne text-[clamp(2.5rem,5vw,3.8rem)] font-extrabold tracking-[-0.04em] leading-none mb-3 text-${metric.color}`}>
                  {metric.num}
                </div>
                <div className="text-[0.9rem] text-white/60 font-normal">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[24px] p-7 overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
              <div className="text-[0.8rem] text-white/40 ml-auto font-medium tracking-widest uppercase">Analytics Dashboard</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {[
                { label: 'Total Revenue', val: '$142,500', trend: '+24%', color: 'up' },
                { label: 'New Followers', val: '842K', trend: '+18%', color: 'up' },
                { label: 'Engagement', val: '12.4%', trend: '+4%', color: 'med' },
              ].map((card) => (
                <div key={card.label} className="bg-white/5 rounded-[14px] p-5 border border-white/10">
                  <div className="text-[0.68rem] text-white/40 tracking-[0.07em] uppercase mb-2.5">{card.label}</div>
                  <div className="font-syne text-2xl font-extrabold text-white mb-1.5">{card.val}</div>
                  <div className={`text-[0.75rem] font-semibold ${card.color === 'up' ? 'text-teal' : 'text-amber'}`}>{card.trend} this month</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/results" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm">
              View Full Portfolio <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta" className="bg-charcoal text-center relative overflow-hidden py-36 px-[6%]">
        <div className="absolute inset-0 bg-radial-to-t from-coral/20 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-1 max-w-[700px] mx-auto">
          <div className="inline-flex items-center gap-2 text-[0.74rem] font-bold tracking-[0.12em] uppercase text-amber mb-6 justify-center">
            <span className="w-5 h-[2px] bg-amber rounded-full" />
            Ready to Scale
          </div>
          <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold tracking-[-0.04em] text-white leading-[1.06] mb-5">
            Stop leaving <em className="not-italic text-amber">revenue</em> on the table
          </h2>
          <p className="text-[1.05rem] text-white/60 mb-12 leading-[1.7]">
            Your content is already done. Let's make it earn across every platform it should be on.
          </p>
          <button className="bg-gradient-coral text-white text-lg px-12 py-5 rounded-full font-syne font-extrabold shadow-2xl shadow-coral/40 hover:translate-y-[-4px] transition-all">
            Let's Scale Your Content
          </button>
        </div>
      </section>
    </div>
  );
}
