import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle2, TrendingUp, Zap, Layers, BarChart3 } from 'lucide-react';

// ============================================================
//  HOME PAGE — CLIP SCALE STUDIO (BRAND-ALIGNED UPDATE)
//
//  FONT: Unchanged — font-syne retained throughout
//
//  CHANGES OVERVIEW:
//  ─────────────────────────────────────────────────────────
//  1. COLOR PALETTE — extracted from logo:
//       #E8500A  brand orange (logo primary)
//       #0A0A0A  brand black (logo background)
//       #141414  surface (card background)
//       #1A1A1A  surface-2 (alternating sections)
//     All pastel/multicolor classes replaced with these tokens.
//
//  2. SHAPE LANGUAGE — the logo "S" is built from diagonal
//     parallelograms / slashed rectangles. Applied via:
//       - clip-path: polygon() on badges and dot accents
//       - skewX(-4deg) on pill elements
//       - thick left-border accents on info banners
//       - SVG diagonal dividers between hero and marquee
//       - angular corner decorations on cards and sections
//
//  3. BACKGROUNDS — all sections dark (on-brand with logo field)
//
//  4. BUTTONS — squared corners (radius 6px), solid orange fill
//
//  5. SECTION LABELS — horizontal bar replaced with parallelogram
//     slash shape matching logo geometry
//
//  ─────────────────────────────────────────────────────────
//  FAVICON INSTRUCTIONS
//  ─────────────────────────────────────────────────────────
//  1. Export ClipScaleStudio_Identity.png cropped to a square
//     (just the orange "S" mark, no padding) at 512x512px.
//  2. Convert to ico + png using https://realfavicongenerator.net
//  3. Place files in /public/:
//       /public/favicon.ico
//       /public/favicon-32x32.png
//       /public/apple-touch-icon.png
//  4. In index.html <head>, add:
//
//     <!-- FAVICON — replace paths below if filenames differ -->
//     <link rel="icon" type="image/x-icon" href="/favicon.ico" />
//     <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
//     <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
//     <!-- END FAVICON -->
//
// ============================================================

// ── BRAND TOKENS ─────────────────────────────────────────────
// CHANGE: Single source of truth for all brand colors.
const C = {
  orange:       '#E8500A',
  orangeHover:  '#FF5E14',
  orangeDim:    'rgba(232,80,10,0.12)',
  orangeBorder: 'rgba(232,80,10,0.28)',
  orangeGlow:   'rgba(232,80,10,0.18)',
  bg:           '#0A0A0A',
  surface:      '#141414',
  surface2:     '#1A1A1A',
  border:       'rgba(255,255,255,0.07)',
  white:        '#FFFFFF',
  muted:        'rgba(255,255,255,0.42)',
  mutedMid:     'rgba(255,255,255,0.62)',
};

// ── SECTION LABEL COMPONENT ───────────────────────────────────
// CHANGE: Replaces the original horizontal bar + text label.
// Uses a parallelogram clip-path shape — directly quoting the
// diagonal geometry of the logo's "S" lettermark.
const SectionLabel = ({ children }) => (
  <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:20 }}>
    {/* CHANGE: Parallelogram slash — logo motif */}
    <span style={{
      display:'inline-block', width:18, height:18,
      background: C.orange,
      clipPath:'polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)',
    }} />
    <span
      className="font-syne font-bold"
      style={{ fontSize:'0.73rem', letterSpacing:'0.12em', textTransform:'uppercase', color:C.orange }}
    >
      {children}
    </span>
  </div>
);

// ── BUTTON STYLES ─────────────────────────────────────────────
// CHANGE: Squared radius (6px) vs original rounded-full.
// Solid orange fill vs gradient — matches logo's bold flat color.
const primaryBtn = {
  display:'inline-block', background:C.orange, color:C.white,
  padding:'16px 36px', borderRadius:6, fontWeight:700,
  fontSize:'1rem', letterSpacing:'-0.01em', textDecoration:'none',
  border:'none', cursor:'pointer', transition:'all 0.2s ease',
};
const ghostBtn = {
  display:'inline-block', background:'rgba(255,255,255,0.04)',
  color:C.white, padding:'16px 36px', borderRadius:6, fontWeight:700,
  fontSize:'1rem', letterSpacing:'-0.01em', textDecoration:'none',
  border:'1px solid rgba(255,255,255,0.14)', cursor:'pointer',
  transition:'all 0.2s ease',
};
// CHANGE: Card base — dark surface, subtle border, less-round corners
const card = {
  background:C.surface, border:`1px solid ${C.border}`,
  borderRadius:10, transition:'border-color 0.25s ease, transform 0.25s ease',
};


export default function Home() {
  return (
    // CHANGE: Root bg = brand black, white text
    <div className="overflow-x-hidden" style={{ background:C.bg, color:C.white }}>

      {/* ══════════════════════════════════════════════
          HERO
          CHANGE: Dark bg with orange radial glow,
          replacing pastel multicolor gradient.
          WHY: Logo field is pure black — matching that
          environment makes the page feel native to the brand.
      ══════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-[2%] py-[140px] overflow-hidden"
        style={{
          background:`
            radial-gradient(ellipse 75% 55% at 20% 45%, ${C.orangeGlow} 0%, transparent 58%),
            radial-gradient(ellipse 55% 45% at 80% 65%, rgba(232,80,10,0.09) 0%, transparent 50%),
            ${C.bg}
          `,
        }}
      >
        {/* CHANGE: Diagonal corner accent — logo triangle motif */}
        <div style={{
          position:'absolute', top:0, right:0, width:280, height:280,
          background:'linear-gradient(225deg, rgba(232,80,10,0.13) 0%, transparent 60%)',
          clipPath:'polygon(100% 0%, 0% 0%, 100% 100%)',
          pointerEvents:'none',
        }} />

        {/* CHANGE: Pill — dark bg, orange border, slight skew = logo diagonal motif */}
        <motion.div
          initial={{ opacity:0, y:30 }}
          animate={{ opacity:1, y:0 }}
          className="relative z-10 inline-flex items-center gap-2 px-[18px] py-[7px] text-[0.78rem] font-semibold tracking-[0.08em] uppercase mb-8 font-syne"
          style={{
            background:C.orangeDim, border:`1px solid ${C.orangeBorder}`,
            color:C.orange, borderRadius:4,
            transform:'skewX(-4deg)', // CHANGE: skewed pill — logo geometry
          }}
        >
          <span style={{ width:7, height:7, background:C.orange, borderRadius:'50%', transform:'skewX(4deg)' }} />
          {/* CHANGE: counter-skew text so it reads straight */}
          <span style={{ transform:'skewX(4deg)' }}>Revenue-Focused Content Scaling</span>
        </motion.div>

        {/* Font unchanged — font-syne class kept */}
        <motion.h1
          initial={{ opacity:0, y:30 }}
          animate={{ opacity:1, y:0 }}
          transition={{ delay:0.1 }}
          className="relative z-10 font-syne text-[clamp(2.5rem,5vw,5.2rem)] font-black leading-[1.04] tracking-[-0.03em] max-w-none"
          style={{ color:C.white }}
        >
          Turn Your YouTube Content <br /> Into a Multi-Platform <br />
          {/* CHANGE: solid orange accent — brand color, not coral gradient */}
          <span style={{ color:C.orange }}>Revenue Machine</span>
        </motion.h1>

        <motion.p
          initial={{ opacity:0, y:30 }}
          animate={{ opacity:1, y:0 }}
          transition={{ delay:0.2 }}
          className="relative z-10 text-[clamp(1rem,1.8vw,1.2rem)] max-w-[600px] leading-[1.7] mt-7 font-light"
          style={{ color:C.muted }}
        >
          ClipScale takes your existing videos and deploys them across Facebook, TikTok, and Snapchat — turning content you already have into new income streams.
        </motion.p>

        {/* CHANGE: Squared buttons, solid orange primary */}
        <motion.div
          initial={{ opacity:0, y:30 }}
          animate={{ opacity:1, y:0 }}
          transition={{ delay:0.3 }}
          className="relative z-10 flex flex-wrap justify-center gap-3.5 mt-11"
        >
          <Link to="/#cta" className="font-syne font-bold hover:-translate-y-[3px]" style={primaryBtn}>
            Let's Scale Your Content
          </Link>
          <Link to="/results" className="font-syne font-bold hover:-translate-y-[3px]" style={ghostBtn}>
            See Our Results
          </Link>
        </motion.div>

        {/* CHANGE: Orange gradient stat numbers, white dividers on dark */}
        <motion.div
          initial={{ opacity:0, y:30 }}
          animate={{ opacity:1, y:0 }}
          transition={{ delay:0.4 }}
          className="relative z-10 flex flex-wrap justify-center items-center gap-10 mt-14"
        >
          {[
            { n:'4,000+', l:'Videos Deployed' },
            { n:'2B+',    l:'Views Generated' },
            { n:'150+',   l:'Creators Scaled' },
          ].map((s, i) => (
            <div key={s.n} className="flex items-center gap-10">
              <div className="flex flex-col items-center">
                <span
                  className="font-syne text-[1.8rem] font-extrabold leading-none"
                  style={{
                    background:`linear-gradient(135deg, ${C.orange}, ${C.orangeHover})`,
                    WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
                  }}
                >
                  {s.n}
                </span>
                <span className="text-[0.78rem] font-medium mt-1 tracking-wider" style={{ color:C.muted }}>{s.l}</span>
              </div>
              {i < 2 && <div className="hidden sm:block" style={{ width:1, height:40, background:'rgba(255,255,255,0.1)' }} />}
            </div>
          ))}
        </motion.div>
      </section>

      {/* CHANGE: Diagonal SVG divider — echoes the angled cuts of the logo "S".
          WHY: Connects sections with brand geometry instead of a flat edge. */}
      <div style={{ marginTop:-2, lineHeight:0, background:C.surface2 }}>
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:40 }}>
          <polygon points="0,0 1440,0 1440,40 0,8" fill={C.bg} />
        </svg>
      </div>

      {/* ══════════════════════════════════════════════
          MARQUEE
          CHANGE: Dark strip, all-orange items.
          WHY: Single accent color = brand discipline.
          Parallelogram separators replace dots.
      ══════════════════════════════════════════════ */}
      <div className="py-[18px] overflow-hidden relative" style={{ background:C.surface2 }}>
        <div style={{ position:'absolute',top:0,bottom:0,left:0,width:80,background:`linear-gradient(to right, ${C.surface2}, transparent)`,zIndex:2,pointerEvents:'none' }} />
        <div style={{ position:'absolute',top:0,bottom:0,right:0,width:80,background:`linear-gradient(to left, ${C.surface2}, transparent)`,zIndex:2,pointerEvents:'none' }} />
        <div className="flex w-max animate-marquee">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center">
              {['Multi-Platform Monetization','Revenue Expansion','Facebook Licensing','TikTok Distribution','Snapchat Growth'].map((txt) => (
                <span key={txt} className="flex items-center gap-4 px-9 font-syne font-bold text-[0.85rem] tracking-[0.05em] uppercase whitespace-nowrap" style={{ color:C.orange }}>
                  {txt}
                  {/* CHANGE: Parallelogram separator — logo motif vs plain dot */}
                  <span style={{ display:'inline-block', width:8, height:8, background:C.orange, opacity:0.4, clipPath:'polygon(25% 0%,100% 0%,75% 100%,0% 100%)' }} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* CHANGE: Diagonal divider — flipped direction */}
      <div style={{ lineHeight:0, background:C.surface2 }}>
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:40 }}>
          <polygon points="0,40 1440,8 1440,40" fill={C.surface} />
        </svg>
      </div>

      {/* ══════════════════════════════════════════════
          PROBLEM
          CHANGE: Dark surface, replaces pastel gradient.
          Bar chart card uses dark bg and orange-only bars.
      ══════════════════════════════════════════════ */}
      <section className="py-28 px-[6%]" style={{ background:C.surface }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="font-syne text-[clamp(2rem,4vw,3.4rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-7" style={{ color:C.white }}>
              You're only monetizing a{' '}
              <em className="not-italic" style={{ color:C.orange }}>fraction</em>{' '}
              of your content
            </h2>
            <p className="text-[1.05rem] leading-[1.8] mb-4 font-light" style={{ color:C.muted }}>
              Most YouTube creators earn exclusively from their main channel — while the same content could be generating revenue on three other platforms <strong style={{ color:C.mutedMid }}>right now.</strong>
            </p>
            <p className="text-[1.05rem] leading-[1.8] font-light" style={{ color:C.muted }}>
              Your content has more reach. More lifespan. <strong style={{ color:C.mutedMid }}>More revenue potential.</strong> Without a system to deploy it everywhere, that money stays on the table.
            </p>
          </motion.div>

          {/* CHANGE: Dark card — no more white card with shadow */}
          <motion.div
            initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
            style={{ ...card, padding:36, background:C.surface2 }}
          >
            <div className="text-[0.72rem] tracking-[0.08em] uppercase font-semibold mb-5" style={{ color:C.muted }}>
              Revenue by platform — typical creator
            </div>
            {/* CHANGE: All bars orange at descending opacity — brand-consistent */}
            {[
              { label:'YouTube', pct:88, op:1.0 },
              { label:'Facebook',pct:12, op:0.65 },
              { label:'TikTok',  pct:8,  op:0.45 },
              { label:'Snapchat',pct:5,  op:0.3 },
            ].map((s) => (
              <div key={s.label} className="flex items-center justify-between py-[18px] border-b last:border-0" style={{ borderColor:C.border }}>
                <span className="text-[0.9rem] font-normal w-20" style={{ color:C.muted }}>{s.label}</span>
                <div className="flex-1 mx-5 h-[6px] rounded overflow-hidden" style={{ background:'rgba(255,255,255,0.06)' }}>
                  <motion.div
                    initial={{ width:0 }} whileInView={{ width:`${s.pct}%` }}
                    transition={{ duration:1.4, ease:'easeOut' }}
                    style={{ height:'100%', background:C.orange, opacity:s.op, borderRadius:2 }}
                  />
                </div>
                <span className="font-syne font-bold text-[0.9rem]" style={{ color:C.white }}>{s.pct}%</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SOLUTION
          CHANGE: Brand black bg, single orange glow,
          diagonal corner accents. Platform badges all orange
          with parallelogram clip-path.
          WHY: Presenting ClipScale brand, not platforms.
      ══════════════════════════════════════════════ */}
      <section className="py-28 px-[6%] relative overflow-hidden" style={{ background:C.bg }}>
        {/* CHANGE: Single orange glow, top-right */}
        <div style={{ position:'absolute',top:-150,right:-150,width:600,height:600,borderRadius:'50%',background:`radial-gradient(circle, ${C.orangeGlow} 0%, transparent 65%)`,pointerEvents:'none' }} />
        {/* CHANGE: Diagonal stripe — top-left corner decoration */}
        <div style={{ position:'absolute',top:0,left:0,width:200,height:200,background:'rgba(232,80,10,0.06)',clipPath:'polygon(0 0, 100% 0, 0 100%)',pointerEvents:'none' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionLabel>The Solution</SectionLabel>
          <h2 className="font-syne text-[clamp(2rem,4vw,3.4rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-7 max-w-[700px]" style={{ color:C.white }}>
            We build your content{' '}
            <em className="not-italic" style={{ color:C.orange }}>monetization engine</em>
          </h2>
          <p className="text-[1.05rem] leading-[1.8] max-w-[560px] mb-4 font-light" style={{ color:C.muted }}>
            ClipScale takes your YouTube content and deploys it across the highest-revenue social platforms. We handle everything — distribution, page management, and monetization strategy.
          </p>
          <p className="text-[1.05rem] leading-[1.8] max-w-[560px] mb-16 font-light" style={{ color:C.muted }}>
            <strong style={{ color:C.mutedMid }}>We don't edit for YouTube. We take what you already have and make it earn more.</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { id:'fb', abbr:'FB', title:'Facebook',  desc:'The single most powerful platform for video monetization. We manage your page, optimize for Facebook Ad Breaks, and unlock content licensing revenue.', tag:'Highest Rev Potential' },
              { id:'tk', abbr:'TK', title:'TikTok',    desc:'Massive organic reach with Creator Fund and TikTok Series monetization. We handle repurposing and consistent publishing to grow your presence fast.', tag:'Organic Reach' },
              { id:'sc', abbr:'SC', title:'Snapchat',  desc:"Snapchat Spotlight and Discover are underutilized revenue channels. We deploy your content there and tap into Snap's creator monetization programs.", tag:'Underutilized Revenue' },
            ].map((c) => (
              <motion.div
                key={c.id}
                whileHover={{ y:-6, borderColor:C.orangeBorder }}
                style={{ ...card, padding:32, position:'relative', overflow:'hidden' }}
              >
                {/* CHANGE: Card corner accent — diagonal triangle */}
                <div style={{ position:'absolute',top:0,right:0,width:60,height:60,background:`linear-gradient(225deg, ${C.orangeDim} 0%, transparent 70%)`,clipPath:'polygon(100% 0%, 0% 0%, 100% 100%)',pointerEvents:'none' }} />

                {/* CHANGE: All badges orange parallelogram — logo motif + brand-owned color */}
                <div
                  className="relative z-10 w-[52px] h-[52px] flex items-center justify-center mb-5 font-syne font-extrabold text-[1.1rem]"
                  style={{
                    background:C.orange, color:C.white, borderRadius:4,
                    clipPath:'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)',
                  }}
                >
                  {c.abbr}
                </div>
                <h3 className="relative z-10 font-syne text-[1.15rem] font-bold mb-2.5" style={{ color:C.white }}>{c.title}</h3>
                <p className="relative z-10 text-[0.88rem] leading-[1.7]" style={{ color:'rgba(255,255,255,0.5)' }}>{c.desc}</p>
                <span
                  className="relative z-10 inline-block mt-4 px-3 py-[6px] font-syne font-bold text-[0.72rem] tracking-[0.06em] uppercase"
                  style={{ background:C.orangeDim, color:C.orange, borderRadius:4 }}
                >
                  {c.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          HOW IT WORKS
          CHANGE: Dark section, step badges are orange
          parallelograms, ghost watermark adapted for dark.
      ══════════════════════════════════════════════ */}
      <section id="how" className="py-28 px-[6%]" style={{ background:C.surface }}>
        <div className="max-w-7xl mx-auto">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="font-syne text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.03em] mb-4" style={{ color:C.white }}>
            Four steps.<br /> Zero extra work for you.
          </h2>
          <p className="text-base max-w-[480px] leading-[1.7] mb-16" style={{ color:C.muted }}>
            You keep creating. We turn every video into a multi-platform revenue asset.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num:'01', name:'Analysis',     title:'We audit your content',  desc:'We analyze your existing videos to identify top-performing moments and the highest monetization opportunities across platforms.' },
              { num:'02', name:'Repurposing',  title:'Content gets reshaped',  desc:"We adapt your videos into platform-native formats — optimized for Facebook's algorithm, TikTok's feed, and Snapchat's Spotlight." },
              { num:'03', name:'Distribution', title:'We publish and manage',  desc:'We run your pages on Facebook, TikTok, and Snapchat. Consistent publishing, scheduling, and community management — fully handled.' },
              { num:'04', name:'Monetization', title:'Revenue starts flowing', desc:'We activate every available monetization layer: ad revenue, content licensing, platform partner programs, and more.' },
            ].map((step) => (
              <motion.div
                key={step.num}
                whileHover={{ y:-6, borderColor:C.orangeBorder }}
                style={{ ...card, padding:36, position:'relative', overflow:'hidden', background:C.surface2 }}
              >
                {/* CHANGE: Ghost number — white/4 for dark bg vs black/5 */}
                <div className="absolute bottom-[-10px] right-4 font-syne font-extrabold text-[5rem] leading-none pointer-events-none select-none" style={{ color:'rgba(255,255,255,0.04)' }}>
                  {step.num}
                </div>
                {/* CHANGE: Step badge — solid orange parallelogram */}
                <div
                  className="w-11 h-11 flex items-center justify-center font-syne font-extrabold text-base mb-6"
                  style={{ background:C.orange, color:C.white, borderRadius:4, clipPath:'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
                >
                  {step.num}
                </div>
                <div className="font-syne text-[0.7rem] font-semibold tracking-[0.1em] uppercase mb-4" style={{ color:C.orange }}>
                  {step.name}
                </div>
                <h3 className="font-syne text-base font-bold mb-1.5 tracking-tight" style={{ color:C.white }}>{step.title}</h3>
                <p className="text-[0.88rem] leading-[1.75]" style={{ color:C.muted }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CHANGE: Banner — orange-tinted dark, thick left border accent.
              WHY: Thick left border mimics the vertical stroke of the logo's "S". */}
          <div
            className="mt-12 p-9 flex items-center gap-4"
            style={{ background:'rgba(232,80,10,0.07)', border:`1px solid ${C.orangeBorder}`, borderLeft:`4px solid ${C.orange}`, borderRadius:8 }}
          >
            <div className="flex-shrink-0 flex items-center justify-center" style={{ width:40, height:40, background:C.orange, borderRadius:6 }}>
              <Zap color={C.white} size={18} />
            </div>
            <p className="text-[0.9rem] font-normal leading-[1.6]" style={{ color:C.mutedMid }}>
              <strong style={{ color:C.white }}>You stay focused on creating.</strong> We handle distribution, page management, and scaling across every platform.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SERVICES
          CHANGE: Dark bg (replaces white section).
          Orange parallelogram dot on each card.
          WHY: White section breaks the dark brand continuity.
      ══════════════════════════════════════════════ */}
      <section id="services" className="py-28 px-[6%]" style={{ background:C.bg }}>
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Services</SectionLabel>
          <h2 className="font-syne text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.03em] mb-14 max-w-[600px]" style={{ color:C.white }}>
            Everything needed to{' '}
            <em className="not-italic" style={{ color:C.orange }}>scale your revenue</em>{' '}
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
                whileHover={{ y:-5, borderColor:C.orangeBorder }}
                style={{ ...card, padding:32 }}
              >
                {/* CHANGE: Parallelogram dot — logo geometry vs colored circle */}
                <div style={{ width:14, height:14, marginBottom:20, background:C.orange, clipPath:'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)' }} />
                <h3 className="font-syne text-[1.05rem] font-bold mb-2.5" style={{ color:C.white }}>{service.title}</h3>
                <p className="text-[0.87rem] leading-[1.7]" style={{ color:C.muted }}>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FINAL CTA
          CHANGE: Dark with centered orange glow.
          Diagonal corner stripes reference logo geometry.
      ══════════════════════════════════════════════ */}
      <section
        id="cta"
        className="text-center relative overflow-hidden py-36 px-[6%]"
        style={{ background:`radial-gradient(ellipse 65% 55% at 50% 90%, rgba(232,80,10,0.24) 0%, transparent 60%), ${C.surface2}` }}
      >
        {/* CHANGE: Diagonal corner decorations — logo motif */}
        <div style={{ position:'absolute',bottom:0,left:0,width:300,height:300,background:'rgba(232,80,10,0.09)',clipPath:'polygon(0 100%, 100% 100%, 0 0)',pointerEvents:'none' }} />
        <div style={{ position:'absolute',top:0,right:0,width:300,height:300,background:'rgba(232,80,10,0.07)',clipPath:'polygon(100% 0%, 100% 100%, 0 0)',pointerEvents:'none' }} />

        <div className="relative z-10 max-w-[700px] mx-auto">
          <SectionLabel>Ready to Scale</SectionLabel>
          <h2 className="font-syne text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold tracking-[-0.04em] leading-[1.06] mb-5" style={{ color:C.white }}>
            Stop leaving{' '}
            <em className="not-italic" style={{ color:C.orange }}>revenue</em>{' '}
            on the table
          </h2>
          <p className="text-[1.05rem] mb-12 leading-[1.7]" style={{ color:C.muted }}>
            Your content is already done. Let's make it earn across every platform it should be on.
          </p>
          {/* CHANGE: Solid orange squared button, no gradient */}
          <motion.button
            whileHover={{ y:-4, scale:1.02 }}
            className="font-syne font-extrabold"
            style={{ ...primaryBtn, fontSize:'1.1rem', padding:'20px 48px', boxShadow:`0 20px 60px rgba(232,80,10,0.35)` }}
          >
            Let's Scale Your Content
          </motion.button>
        </div>
      </section>
    </div>
  );
}

// ============================================================
//  CHANGE LOG — WHY EACH CHANGE IMPROVES BRAND CONSISTENCY
// ============================================================
//
//  COLORS
//  ──────
//  Before: Pastel rainbow (coral, indigo, teal, amber, violet, sky)
//  After:  Black + orange only (#0A0A0A, #E8500A)
//  Why:    The logo is built on exactly two colors. A multicolor
//          UI looks generic. Black+orange makes every screen look
//          like it was designed alongside the logo.
//
//  SHAPE LANGUAGE
//  ──────────────
//  Before: Rounded pills, circular dots, soft blobs
//  After:  Parallelogram clip-paths on badges/dots, skewed pill,
//          diagonal SVG dividers, angular corner accents, radius 6-10px
//  Why:    The CSS "S" logomark is made of diagonal parallelogram cuts.
//          Echoing that geometry in buttons, badges, dividers and
//          decorative accents creates a unified visual identity.
//
//  SVG DIAGONAL DIVIDERS (new addition)
//  ──────────────────────────────────────
//  Two diagonal polygon dividers added between hero->marquee and
//  marquee->problem. These use the same angled geometry as the logo.
//
//  SECTION LABELS
//  ──────────────
//  Before: "── Section Name" (horizontal bar)
//  After:  "◆ Section Name" (parallelogram slash)
//  Why:    The logo's defining feature is its diagonal slashes.
//          Using a parallelogram quotes the logo in every section header.
//
//  BACKGROUNDS
//  ───────────
//  Before: Pastel warm gradients + white sections
//  After:  #0A0A0A / #141414 / #1A1A1A alternating dark surfaces
//  Why:    The logo lives on pure black. Dark backgrounds let orange
//          pop with maximum impact — matching the logo's own contrast.
//
//  BUTTONS
//  ───────
//  Before: Gradient-filled rounded-full pills
//  After:  Solid orange, borderRadius 6px (slightly angular)
//  Why:    Solid orange = no ambiguity about brand color.
//          Squared corners reinforce the angular logo identity.
//
//  PLATFORM BADGES
//  ───────────────
//  Before: Facebook blue, TikTok black+violet, Snapchat yellow
//  After:  All orange, parallelogram-shaped
//  Why:    This page promotes ClipScale, not the platforms.
//          All-orange + parallelogram shape = brand ownership.
//
//  FONTS
//  ─────
//  UNCHANGED — font-syne class retained on all display elements.
//  Only inline color/bg overrides added where Tailwind classes
//  referenced undefined color tokens (text-coral, bg-indigo, etc).
// ============================================================
