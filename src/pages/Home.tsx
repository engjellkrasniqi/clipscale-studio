// ============================================================
//  HOME PAGE — CLIP SCALE STUDIO (BRAND-UPDATED)
//
//  BRAND CHANGES SUMMARY:
//  1. COLOR PALETTE — Extracted from logo:
//     - Primary orange: #E8500A (logo orange)
//     - Background: #0A0A0A (logo black)
//     - Surface: #141414 (slightly lighter dark)
//     - White: #FFFFFF
//     - Muted: rgba(255,255,255,0.45)
//     All "coral", "indigo", "teal", "amber", "violet" utility
//     classes replaced with CSS custom property tokens that map
//     to the brand palette (orange + white on black).
//
//  2. TYPOGRAPHY — Changed to "Zen Dots" (as requested).
//     Zen Dots is a bold, geometric display font that matches
//     the logo's sharp, angular identity perfectly.
//     Add this to your <head> in index.html:
//       <link href="https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap" rel="stylesheet">
//     All font-syne classes replaced with font-zen-dots.
//     Body/paragraph text uses system sans for readability.
//
//  3. BUTTONS — Solid orange fills replace coral gradients.
//     Sharp, high-contrast, matches logo energy.
//
//  4. SHAPES & BORDERS — Rounded corners reduced (less bubbly,
//     more angular to match the geometric logo mark).
//     Border colors changed to orange/20 opacity.
//
//  5. GLOWS / BLOBS — Changed from pastel multicolor blobs to
//     single-color deep orange glows on dark — more on-brand.
//
//  ============================================================
//
//  FAVICON INSTRUCTIONS:
//  ──────────────────────────────────────────────────────────
//  In your project's /public folder, place your logo file as:
//    /public/favicon.ico        (32×32 or 64×64 .ico)
//    /public/favicon.png        (any size .png works too)
//
//  Then in index.html <head>, add/replace:
//
//    <!-- FAVICON — replace href with your logo file path -->
//    <link rel="icon" type="image/png" href="/favicon.png" />
//    <link rel="shortcut icon" href="/favicon.ico" />
//    <link rel="apple-touch-icon" href="/favicon.png" />
//
//  To convert ClipScaleStudio_Identity.png → favicon:
//    Use https://realfavicongenerator.net  (free, paste your PNG)
//    Or: crop to square, export as 64×64 PNG, save to /public/
//  ──────────────────────────────────────────────────────────

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

// ─── BRAND TOKEN CONSTANTS ────────────────────────────────────
// CHANGE: All brand colors live here. Update once, applies everywhere.
const B = {
  orange:       '#f15a24',   // logo primary orange
  orangeLight:  '#FF6B28',   // slightly brighter orange for hover/glow
  orangeDim:    'rgba(232,80,10,0.15)',
  orangeBorder: 'rgba(232,80,10,0.25)',
  bg:           '#0A0A0A',   // logo black
  surface:      '#141414',   // card background
  surface2:     '#1C1C1C',   // slightly lighter surface
  border:       'rgba(255,255,255,0.08)',
  white:        '#FFFFFF',
  muted:        'rgba(255,255,255,0.45)',
  mutedLight:   'rgba(255,255,255,0.65)',
};

// ─── INLINE STYLE HELPERS ────────────────────────────────────
// CHANGE: Replaced Tailwind gradient classes (bg-gradient-coral etc.)
// with inline styles using brand tokens. More reliable cross-env.
const styles = {
  // CHANGE: Hero gradient — dark with deep orange glow, not pastel rainbow
  heroBg: {
    background: `radial-gradient(ellipse 80% 60% at 15% 40%, rgba(232,80,10,0.18) 0%, transparent 60%),
                 radial-gradient(ellipse 60% 50% at 85% 70%, rgba(232,80,10,0.10) 0%, transparent 55%),
                 ${B.bg}`,
  },
  // CHANGE: Orange pill badge
  pill: {
    background: B.orangeDim,
    border: `1px solid ${B.orangeBorder}`,
    color: B.orange,
  },
  // CHANGE: Solid orange CTA button (replaces coral gradient)
  btnPrimary: {
    background: B.orange,
    color: B.white,
    border: 'none',
    transition: 'all 0.2s ease',
  },
  // CHANGE: Ghost secondary button on dark bg
  btnSecondary: {
    background: 'rgba(255,255,255,0.04)',
    color: B.white,
    border: `1px solid rgba(255,255,255,0.15)`,
  },
  // CHANGE: Dark card surface (replaces white cards)
  card: {
    background: B.surface,
    border: `1px solid ${B.border}`,
    borderRadius: '12px',   // CHANGE: less rounded = more angular/brand-aligned
  },
  // CHANGE: Marquee bar matches logo black
  marqueeBg: { background: B.surface2 },
  // CHANGE: Section backgrounds — all dark, consistent brand
  sectionDark: { background: B.bg },
  sectionDark2: { background: B.surface },
  // CHANGE: Stat gradient — orange instead of indigo-to-teal
  statGradient: {
    background: `linear-gradient(135deg, ${B.orange}, ${B.orangeLight})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  // CHANGE: Step number badge
  stepBadge: {
    background: B.orange,
    color: B.white,
    borderRadius: '8px',
  },
  // CHANGE: Orange accent dot for service cards
  dot: {
    background: B.orange,
    width: 10,
    height: 10,
    borderRadius: '2px',  // CHANGE: square dot matches angular logo geometry
    marginBottom: 20,
  },
  // CHANGE: Info banner — orange-tinted on dark
  infoBanner: {
    background: `rgba(232,80,10,0.08)`,
    border: `1px solid rgba(232,80,10,0.2)`,
    borderRadius: '10px',
  },
  zapIcon: {
    background: B.orange,
    borderRadius: '8px',
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
};

// ─── FONT INJECTION ───────────────────────────────────────────
// CHANGE: Injects Zen Dots font if not already in <head>.
// In production, move this to index.html <head> instead.
if (typeof document !== 'undefined' && !document.getElementById('zen-dots-font')) {
  const link = document.createElement('link');
  link.id = 'zen-dots-font';
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap';
  document.head.appendChild(link);
}

// CHANGE: Zen Dots applied to all display/heading text.
// WHY: Zen Dots is geometric + angular, matching the CSS "S" mark in the logo.
const zenDots = { fontFamily: "'Zen Dots', sans-serif" };


export default function Home() {
  return (
    // CHANGE: Page background is now brand black throughout
    <div className="overflow-x-hidden" style={{ background: B.bg, color: B.white }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-[2%] py-[140px] overflow-hidden"
        style={styles.heroBg}
      >
        {/* CHANGE: Single orange glow blob replaces dual pastel blobs */}
        <div style={{
          position: 'absolute', top: '-100px', left: '-100px',
          width: 500, height: 500, borderRadius: '50%',
          background: `radial-gradient(circle, rgba(232,80,10,0.22) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />

        {/* CHANGE: Pill uses orange brand token */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 inline-flex items-center gap-2 px-[18px] py-[7px] rounded-full text-[0.78rem] font-semibold tracking-[0.08em] uppercase mb-8"
          style={{ ...styles.pill, ...zenDots }}
        >
          <span style={{ width: 7, height: 7, background: B.orange, borderRadius: '50%', animation: 'pulse 2s infinite' }} />
          Revenue-Focused Content Scaling
        </motion.div>

        {/* CHANGE: Headline uses Zen Dots — angular, matches logo */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative z-10"
          style={{
            ...zenDots,
            fontSize: 'clamp(2.2rem, 4.5vw, 4.8rem)',
            fontWeight: 400,  // Zen Dots has no weight variants; 400 is its bold
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: B.white,
            maxWidth: 900,
          }}
        >
          Turn Your YouTube Content{' '}
          <br />Into a Multi-Platform{' '}
          <br />
          {/* CHANGE: Accent color is brand orange, not coral gradient */}
          <span style={{ color: B.orange }}>Revenue Machine</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-10"
          style={{
            fontSize: 'clamp(1rem,1.6vw,1.15rem)',
            color: B.muted,
            maxWidth: 580,
            lineHeight: 1.75,
            marginTop: 28,
            fontWeight: 300,
          }}
        >
          ClipScale takes your existing videos and deploys them across Facebook, TikTok, and Snapchat — turning content you already have into new income streams.
        </motion.p>

        {/* CHANGE: Buttons — orange solid primary, ghost secondary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative z-10 flex flex-wrap justify-center gap-3.5 mt-11"
        >
          <Link
            to="/#cta"
            className="px-9 py-4 rounded-lg font-bold text-base tracking-tight transition-all hover:opacity-90 hover:-translate-y-[3px]"
            style={{ ...styles.btnPrimary, ...zenDots, borderRadius: 8 }}
          >
            Let's Scale Your Content
          </Link>
          <Link
            to="/results"
            className="px-9 py-4 rounded-lg font-bold text-base tracking-tight transition-all hover:-translate-y-[3px] hover:border-white/30"
            style={{ ...styles.btnSecondary, ...zenDots, borderRadius: 8 }}
          >
            See Our Results
          </Link>
        </motion.div>

        {/* CHANGE: Stats — orange gradient text instead of indigo-teal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative z-10 flex flex-wrap justify-center items-center gap-10 mt-14"
        >
          {[
            { num: '4,000+', label: 'Videos Deployed' },
            { num: '2B+',    label: 'Views Generated' },
            { num: '150+',   label: 'Creators Scaled' },
          ].map((stat, i) => (
            <div key={stat.num} className="flex items-center gap-10">
              <div className="flex flex-col items-center">
                <span style={{ ...styles.statGradient, ...zenDots, fontSize: '1.9rem' }}>
                  {stat.num}
                </span>
                <span style={{ fontSize: '0.75rem', color: B.muted, marginTop: 4, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {stat.label}
                </span>
              </div>
              {i < 2 && <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.1)' }} className="hidden sm:block" />}
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────── */}
      {/* CHANGE: Dark charcoal surface strip — consistent with logo black */}
      <div className="py-[18px] overflow-hidden relative" style={styles.marqueeBg}>
        <div style={{ position:'absolute',inset:'0 0 auto 0',height:'100%',left:0,width:80,background:`linear-gradient(to right, ${B.surface2}, transparent)`,zIndex:2 }} />
        <div style={{ position:'absolute',inset:'0 auto 0 0',right:0,width:80,height:'100%',background:`linear-gradient(to left, ${B.surface2}, transparent)`,zIndex:2 }} />
        <div className="flex w-max animate-marquee">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center">
              {/* CHANGE: All marquee items use orange — unified brand color, not rainbow */}
              {['Multi-Platform Monetization','Revenue Expansion','Facebook Licensing','TikTok Distribution','Snapchat Growth'].map((text) => (
                <span
                  key={text}
                  className="flex items-center gap-4 px-9 text-[0.85rem] tracking-[0.05em] uppercase whitespace-nowrap font-bold"
                  style={{ ...zenDots, color: B.orange, fontSize: '0.78rem' }}
                >
                  {text}
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: B.orange, opacity: 0.35 }} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── PROBLEM ──────────────────────────────────────────── */}
      {/* CHANGE: Dark section replaces pastel warm gradient */}
      <section className="py-28 px-[6%]" style={styles.sectionDark2}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* CHANGE: Section label uses orange + Zen Dots */}
            <div className="inline-flex items-center gap-2 mb-5" style={{ ...zenDots, color: B.orange, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <span style={{ width: 20, height: 2, background: B.orange, borderRadius: 2 }} />
              The Problem
            </div>
            <h2 style={{ ...zenDots, fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.02em', color: B.white, marginBottom: 28 }}>
              You're only monetizing a{' '}
              {/* CHANGE: Emphasis color = brand orange */}
              <em className="not-italic" style={{ color: B.orange }}>fraction</em>{' '}
              of your content
            </h2>
            <p style={{ fontSize: '1.03rem', lineHeight: 1.8, color: B.muted, marginBottom: 16, fontWeight: 300 }}>
              Most YouTube creators earn exclusively from their main channel — while the same content could be generating revenue on three other platforms <strong style={{ color: B.mutedLight }}>right now.</strong>
            </p>
            <p style={{ fontSize: '1.03rem', lineHeight: 1.8, color: B.muted, fontWeight: 300 }}>
              Your content has more reach. More lifespan. <strong style={{ color: B.mutedLight }}>More revenue potential.</strong> Without a system to deploy it everywhere, that money stays on the table.
            </p>
          </motion.div>

          {/* CHANGE: Bar chart card — dark surface, orange bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ ...styles.card, padding: '36px', background: B.surface2 }}
          >
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: B.muted, marginBottom: 20, fontWeight: 600 }}>
              Revenue by platform — typical creator
            </div>
            {/* CHANGE: All bars orange at varying opacity — brand-consistent vs multicolor */}
            {[
              { label: 'YouTube',  pct: 88, opacity: 1.0 },
              { label: 'Facebook', pct: 12, opacity: 0.7 },
              { label: 'TikTok',   pct: 8,  opacity: 0.5 },
              { label: 'Snapchat', pct: 5,  opacity: 0.35 },
            ].map((stat) => (
              <div key={stat.label} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px 0', borderBottom:`1px solid ${B.border}` }}>
                <span style={{ fontSize: '0.88rem', color: B.muted, width: 80 }}>{stat.label}</span>
                <div style={{ flex:1, margin:'0 16px', height: 6, background:'rgba(255,255,255,0.07)', borderRadius: 4, overflow:'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.pct}%` }}
                    transition={{ duration: 1.4, ease: 'easeOut' }}
                    style={{ height:'100%', borderRadius: 4, background: B.orange, opacity: stat.opacity }}
                  />
                </div>
                <span style={{ ...zenDots, fontWeight: 400, fontSize: '0.88rem', color: B.white }}>{stat.pct}%</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SOLUTION ─────────────────────────────────────────── */}
      {/* CHANGE: Pure brand black section, orange glow top-right */}
      <section className="py-28 px-[6%] relative overflow-hidden" style={styles.sectionDark}>
        <div style={{ position:'absolute', top:-150, right:-150, width:600, height:600, borderRadius:'50%', background:`radial-gradient(circle, rgba(232,80,10,0.14) 0%, transparent 65%)`, pointerEvents:'none' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-5" style={{ ...zenDots, color: B.orange, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            <span style={{ width: 20, height: 2, background: B.orange }} />
            The Solution
          </div>
          <h2 style={{ ...zenDots, fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 400, lineHeight: 1.12, color: B.white, marginBottom: 28, maxWidth: 680 }}>
            We build your content{' '}
            <em className="not-italic" style={{ color: B.orange }}>monetization engine</em>
          </h2>
          <p style={{ fontSize: '1.03rem', lineHeight: 1.8, color: B.muted, maxWidth: 540, marginBottom: 16, fontWeight: 300 }}>
            ClipScale takes your YouTube content and deploys it across the highest-revenue social platforms. We handle everything — distribution, page management, and monetization strategy.
          </p>
          <p style={{ fontSize: '1.03rem', lineHeight: 1.8, color: B.muted, maxWidth: 540, marginBottom: 64, fontWeight: 300 }}>
            <strong style={{ color: B.mutedLight }}>We don't edit for YouTube. We take what you already have and make it earn more.</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* CHANGE: Platform cards — dark surface, orange accents only */}
            {[
              { id:'fb', abbr:'FB', title:'Facebook',  desc:'The single most powerful platform for video monetization. We manage your page, optimize for Facebook Ad Breaks, and unlock content licensing revenue.', tag:'Highest Rev Potential' },
              { id:'tk', abbr:'TK', title:'TikTok',    desc:'Massive organic reach with Creator Fund and TikTok Series monetization. We handle repurposing and consistent publishing to grow your presence fast.', tag:'Organic Reach' },
              { id:'sc', abbr:'SC', title:'Snapchat',  desc:"Snapchat Spotlight and Discover are underutilized revenue channels. We deploy your content there and tap into Snap's creator monetization programs.", tag:'Underutilized Revenue' },
            ].map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ y: -6, borderColor: B.orangeBorder }}
                style={{ ...styles.card, padding: 32, position:'relative', overflow:'hidden', transition:'all 0.25s ease' }}
              >
                {/* CHANGE: Icon badge — all orange, brand-consistent (no platform brand colors) */}
                <div style={{ ...zenDots, width:52, height:52, borderRadius:8, background:B.orange, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:20, fontSize:'1rem', color:B.white, fontWeight:400 }}>
                  {card.abbr}
                </div>
                <h3 style={{ ...zenDots, fontSize:'1.1rem', fontWeight:400, color:B.white, marginBottom:10 }}>{card.title}</h3>
                <p style={{ fontSize:'0.87rem', color:B.muted, lineHeight:1.7 }}>{card.desc}</p>
                {/* CHANGE: Tag uses orange border/text instead of platform-specific colors */}
                <span style={{ display:'inline-block', marginTop:16, padding:'6px 12px', borderRadius:6, background:`rgba(232,80,10,0.12)`, color:B.orange, fontSize:'0.7rem', fontWeight:600, letterSpacing:'0.06em', textTransform:'uppercase', ...zenDots }}>
                  {card.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section id="how" className="py-28 px-[6%]" style={styles.sectionDark2}>
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-5" style={{ ...zenDots, color:B.orange, fontSize:'0.72rem', letterSpacing:'0.12em', textTransform:'uppercase' }}>
            <span style={{ width:20, height:2, background:B.orange }} />
            How It Works
          </div>
          <h2 style={{ ...zenDots, fontSize:'clamp(1.8rem,3.5vw,3rem)', fontWeight:400, lineHeight:1.12, color:B.white, marginBottom:16 }}>
            Four steps.<br />Zero extra work for you.
          </h2>
          <p style={{ fontSize:'1rem', color:B.muted, maxWidth:480, lineHeight:1.7, marginBottom:56 }}>
            You keep creating. We turn every video into a multi-platform revenue asset.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { num:'01', name:'Analysis',     title:'We audit your content',    desc:'We analyze your existing videos to identify top-performing moments and the highest monetization opportunities across platforms.' },
              { num:'02', name:'Repurposing',  title:'Content gets reshaped',    desc:"We adapt your videos into platform-native formats — optimized for Facebook's algorithm, TikTok's feed, and Snapchat's Spotlight." },
              { num:'03', name:'Distribution', title:'We publish and manage',    desc:'We run your pages on Facebook, TikTok, and Snapchat. Consistent publishing, scheduling, and community management — fully handled.' },
              { num:'04', name:'Monetization', title:'Revenue starts flowing',   desc:'We activate every available monetization layer: ad revenue, content licensing, platform partner programs, and more.' },
            ].map((step) => (
              <motion.div
                key={step.num}
                whileHover={{ y: -6 }}
                style={{ ...styles.card, padding:36, position:'relative', overflow:'hidden', background:B.surface }}
              >
                {/* CHANGE: Ghost large step number — white/5 opacity vs black/5 */}
                <div style={{ ...zenDots, position:'absolute', bottom:-8, right:12, fontSize:'5rem', color:'rgba(255,255,255,0.04)', lineHeight:1, pointerEvents:'none', userSelect:'none' }}>
                  {step.num}
                </div>
                {/* CHANGE: Step badge — solid orange square, angular */}
                <div style={{ ...zenDots, ...styles.stepBadge, width:44, height:44, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.95rem', marginBottom:24 }}>
                  {step.num}
                </div>
                <div style={{ ...zenDots, fontSize:'0.68rem', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', color:B.orange, marginBottom:14 }}>
                  {step.name}
                </div>
                <h3 style={{ fontSize:'1rem', fontWeight:700, color:B.white, marginBottom:6, letterSpacing:'-0.01em' }}>{step.title}</h3>
                <p style={{ fontSize:'0.86rem', color:B.muted, lineHeight:1.75 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CHANGE: Info banner — orange-tinted dark, not indigo-teal */}
          <div className="mt-10 p-9 flex items-center gap-4" style={styles.infoBanner}>
            <div style={styles.zapIcon}><Zap color={B.white} size={18} /></div>
            <p style={{ fontSize:'0.9rem', color:B.mutedLight, lineHeight:1.6 }}>
              <strong style={{ color:B.white }}>You stay focused on creating.</strong> We handle distribution, page management, and scaling across every platform.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section id="services" className="py-28 px-[6%]" style={styles.sectionDark}>
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-5" style={{ ...zenDots, color:B.orange, fontSize:'0.72rem', letterSpacing:'0.12em', textTransform:'uppercase' }}>
            <span style={{ width:20, height:2, background:B.orange }} />
            Services
          </div>
          <h2 style={{ ...zenDots, fontSize:'clamp(1.8rem,3.5vw,3rem)', fontWeight:400, lineHeight:1.12, color:B.white, marginBottom:56, maxWidth:600 }}>
            Everything needed to{' '}
            <em className="not-italic" style={{ color:B.orange }}>scale your revenue</em>{' '}
            across platforms
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title:'Content Repurposing',      desc:'Your YouTube videos transformed into platform-native formats for Facebook, TikTok, and Snapchat.' },
              { title:'Multi-Platform Publishing', desc:'Consistent, strategic content deployment across all three platforms on an optimized schedule.' },
              { title:'Page Management',           desc:'Full management of your Facebook pages, TikTok accounts, and Snapchat profiles — top to bottom.' },
              { title:'Monetization Strategy',     desc:'We activate every revenue stream available — ad breaks, creator funds, and partner programs.' },
              { title:'Content Licensing',         desc:'Especially powerful on Facebook — we handle licensing deals that generate passive recurring revenue.' },
              { title:'Performance Reporting',     desc:'Clear revenue and growth reports so you always know exactly what your content is earning.' },
            ].map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ y:-5, borderColor:B.orangeBorder }}
                style={{ ...styles.card, padding:32, background:B.surface, transition:'all 0.25s ease' }}
              >
                {/* CHANGE: Accent dot — orange square (angular brand shape) vs circle */}
                <div style={styles.dot} />
                <h3 style={{ fontSize:'1.03rem', fontWeight:700, color:B.white, marginBottom:10, letterSpacing:'-0.01em' }}>{service.title}</h3>
                <p style={{ fontSize:'0.86rem', color:B.muted, lineHeight:1.7 }}>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      {/* CHANGE: CTA bg — dark with centered orange radial glow */}
      <section
        id="cta"
        className="text-center relative overflow-hidden py-36 px-[6%]"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 100%, rgba(232,80,10,0.22) 0%, transparent 65%), ${B.surface2}`,
        }}
      >
        <div className="relative z-10 max-w-[680px] mx-auto">
          {/* CHANGE: Label — orange, Zen Dots */}
          <div className="inline-flex items-center gap-2 mb-6 justify-center" style={{ ...zenDots, color:B.orange, fontSize:'0.72rem', letterSpacing:'0.12em', textTransform:'uppercase' }}>
            <span style={{ width:20, height:2, background:B.orange }} />
            Ready to Scale
          </div>
          <h2 style={{ ...zenDots, fontSize:'clamp(2.2rem,4.5vw,4rem)', fontWeight:400, lineHeight:1.07, color:B.white, marginBottom:20, letterSpacing:'-0.03em' }}>
            Stop leaving{' '}
            {/* CHANGE: orange accent consistent with rest of page */}
            <em className="not-italic" style={{ color:B.orange }}>revenue</em>{' '}
            on the table
          </h2>
          <p style={{ fontSize:'1.05rem', color:B.muted, marginBottom:48, lineHeight:1.7 }}>
            Your content is already done. Let's make it earn across every platform it should be on.
          </p>
          {/* CHANGE: Big orange CTA button — solid, high contrast, on-brand */}
          <button
            className="text-white text-lg px-12 py-5 font-bold transition-all hover:-translate-y-1 hover:opacity-90"
            style={{ ...zenDots, background:B.orange, borderRadius:8, border:'none', cursor:'pointer', letterSpacing:'0.02em' }}
          >
            Let's Scale Your Content
          </button>
        </div>
      </section>

    </div>
  );
}

// ============================================================
//  CHANGE SUMMARY — WHY EACH CHANGE IMPROVES BRAND CONSISTENCY
// ============================================================
//
//  1. COLOR PALETTE
//     Before: Pastel rainbow (coral + indigo + teal + amber + violet)
//     After:  Black + orange-only
//     Why:    The logo uses EXACTLY two colors — black and orange.
//             A consistent two-color palette across the UI makes every
//             screen feel like it belongs to the same identity system.
//
//  2. TYPOGRAPHY — Zen Dots
//     Before: Font Syne (rounded, modern)
//     After:  Zen Dots (geometric, angular)
//     Why:    The CSS "S" logomark is made of sharp diagonal cuts and
//             angular geometry. Zen Dots mirrors this with its geometric
//             letterforms. Every heading reinforces the logo's visual DNA.
//
//  3. SECTION BACKGROUNDS
//     Before: Warm pastel gradients (cream, lavender, soft pink)
//     After:  Pure black / very dark grey
//     Why:    The logo lives on a black field. Dark backgrounds create
//             the same dramatic, high-contrast environment. Orange pops
//             far more against black than against pastels.
//
//  4. CARD BACKGROUNDS
//     Before: White cards with light shadows
//     After:  #141414 / #1C1C1C surface cards
//     Why:    Keeps the dark-first brand. White cards would break the
//             visual continuity and feel out of place against the logo.
//
//  5. BUTTONS
//     Before: Coral gradient → round pill
//     After:  Solid orange (#E8500A) → slightly angular (borderRadius 8)
//     Why:    Matches the logo color exactly. The slight squareness echoes
//             the angular geometry of the logomark vs overly soft pills.
//
//  6. ACCENT COLOR DOTS (Service cards)
//     Before: Circular colored dots in 6 different colors
//     After:  Small square orange marks
//     Why:    Squares/rectangles mirror the rectangular cuts of the logo.
//             Single orange = brand discipline.
//
//  7. PLATFORM ICON BADGES (Solution section)
//     Before: Facebook blue, TikTok black+violet, Snapchat yellow
//     After:  All orange
//     Why:    We're presenting ClipScale's service, not the platforms'.
//             Using brand-owned orange keeps focus on ClipScale's identity.
//
//  8. MARQUEE ITEMS
//     Before: 5 different platform colors
//     After:  All orange
//     Why:    A banner of 5 different colors looks chaotic. All-orange
//             is bold, recognizable, intentionally branded.
//
//  9. GLOW BLOBS / AMBIENT LIGHT
//     Before: Orange + blue-indigo dual glows on light bg
//     After:  Single orange glow on dark bg
//     Why:    One light source, one color = clarity and focus.
//             Consistent with how the logo photograph is lit.
// ============================================================
