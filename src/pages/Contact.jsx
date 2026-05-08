import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Calendar, ArrowRight, CheckCircle2, Clock, Video, Zap } from 'lucide-react';

// ============================================================
//  CONTACT PAGE — EDITABLE CONTENT
//
//  Two paths for prospects:
//    1. Email — fills out a form that sends to your inbox
//    2. Schedule — opens your Calendly (or similar) booking link
//
//  CHANGE markers below indicate copy/config you'll want to update.
// ============================================================

// CHANGE: update this to your actual Calendly (or Cal.com / TidyCal) URL
const CALENDAR_URL = 'https://calendly.com/yourname/30min';

// CHANGE: update to your contact email (shown as fallback and in mailto)
const CONTACT_EMAIL = 'hello@clipscale.com';

export default function Contact() {
  const [activeTab, setActiveTab] = useState('schedule'); // 'schedule' | 'email'
  const [formState, setFormState] = useState({ name: '', email: '', channel: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // CHANGE: replace with your actual form submission logic (Formspree, EmailJS, etc.)
    // Example with Formspree: await fetch('https://formspree.io/f/YOURFORMID', { method: 'POST', body: JSON.stringify(formState) })
    await new Promise((r) => setTimeout(r, 1200)); // simulated delay
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="overflow-x-hidden bg-black min-h-screen">
      {/* BACKGROUND GLOWS */}
      <div className="fixed top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full blur-[140px] opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #FF5A1F, transparent)' }} />
      <div className="fixed bottom-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full blur-[140px] opacity-8 pointer-events-none" style={{ background: 'radial-gradient(circle, #FF5A1F, transparent)' }} />

      <section className="relative pt-[120px] pb-20 px-[6%]">
        <div className="max-w-6xl mx-auto">

          {/* PAGE HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-[#FF5A1F]/30 px-[18px] py-[7px] rounded-full text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#FF5A1F] mb-7 shadow-lg shadow-[#FF5A1F]/10 backdrop-blur-sm">
              <span className="w-[7px] h-[7px] bg-[#FF5A1F] rounded-full animate-pulse" />
              {/* CHANGE: pill label */}
              Let's Scale Your Content
            </div>

            <h1 className="text-[clamp(2.4rem,5vw,4.4rem)] font-black leading-[1.04] tracking-[-0.03em] text-white mb-5">
              {/* CHANGE: headline */}
              Ready to unlock <br />
              <span style={{ background: 'linear-gradient(135deg, #FF5A1F, #ff8c5a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                new revenue streams?
              </span>
            </h1>

            <p className="text-[1.05rem] text-white/45 max-w-[520px] mx-auto leading-[1.75] font-light">
              {/* CHANGE: subheading */}
              Choose how you'd like to connect — book a quick strategy call or send us a message and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          {/* TAB SWITCHER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center mb-10"
          >
            <div className="inline-flex rounded-full p-1 border border-white/8" style={{ background: 'rgba(255,255,255,0.04)' }}>
              {[
                { id: 'schedule', icon: Calendar, label: 'Book a Call' },
                { id: 'email', icon: Mail, label: 'Send a Message' },
              ].map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className="flex items-center gap-2 px-7 py-3 rounded-full font-syne font-bold text-[0.88rem] tracking-tight transition-all duration-300"
                  style={
                    activeTab === id
                      ? { background: 'linear-gradient(135deg, #FF5A1F, #c43a00)', color: '#fff', boxShadow: '0 6px 30px rgba(255,90,31,0.3)' }
                      : { color: 'rgba(255,255,255,0.35)' }
                  }
                >
                  <Icon size={15} />
                  {label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* MAIN CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-start">

            {/* LEFT — TAB CONTENT */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
            >
              {/* ────── SCHEDULE TAB ────── */}
              {activeTab === 'schedule' && (
                <div className="rounded-[24px] p-10 border border-white/6" style={{ background: 'linear-gradient(135deg, #161616, #111)' }}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-11 h-11 rounded-[12px] flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FF5A1F, #c43a00)' }}>
                      <Calendar className="text-white" size={18} />
                    </div>
                    <div>
                      {/* CHANGE: schedule card title */}
                      <h2 className="text-[1.15rem] font-bold text-white">Book a Free Strategy Call</h2>
                      <p className="text-[0.8rem] text-white/35 mt-0.5">30 minutes · No pressure · 100% free</p>
                    </div>
                  </div>

                  {/* WHAT TO EXPECT */}
                  <div className="space-y-4 mb-9">
                    {/* CHANGE: call agenda items */}
                    {[
                      { icon: Video, title: 'Content Audit', desc: 'We review your best-performing YouTube videos and identify multi-platform opportunities.' },
                      { icon: Zap, title: 'Revenue Estimate', desc: 'We give you a real projection of what your content could earn across Facebook, TikTok, and Snapchat.' },
                      { icon: ArrowRight, title: 'Custom Roadmap', desc: 'If it\'s a fit, we outline exactly how we\'d scale your content — no generic pitches.' },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-4 p-5 rounded-[16px] border border-white/4" style={{ background: 'rgba(255,255,255,0.025)' }}>
                        <div className="w-9 h-9 rounded-[10px] flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: 'rgba(255,90,31,0.12)', border: '1px solid rgba(255,90,31,0.2)' }}>
                          <item.icon size={15} className="text-[#FF5A1F]" />
                        </div>
                        <div>
                          <p className="text-[0.9rem] font-semibold text-white mb-0.5">{item.title}</p>
                          <p className="text-[0.83rem] text-white/40 leading-[1.6]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a
                    href={CALENDAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full py-4.5 rounded-full font-syne font-extrabold text-[1rem] text-white transition-all hover:translate-y-[-3px]"
                    style={{ background: 'linear-gradient(135deg, #FF5A1F, #c43a00)', boxShadow: '0 16px 50px rgba(255,90,31,0.3)' }}
                  >
                    <Calendar size={17} />
                    {/* CHANGE: booking button label */}
                    Schedule My Free Call
                    <ArrowRight size={15} />
                  </a>

                  <p className="text-center text-[0.75rem] text-white/20 mt-4">
                    {/* CHANGE: booking footnote */}
                    Powered by Calendly · Slots available Mon–Fri
                  </p>
                </div>
              )}

              {/* ────── EMAIL TAB ────── */}
              {activeTab === 'email' && (
                <div className="rounded-[24px] p-10 border border-white/6" style={{ background: 'linear-gradient(135deg, #161616, #111)' }}>
                  {!submitted ? (
                    <>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-11 h-11 rounded-[12px] flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FF5A1F, #c43a00)' }}>
                          <Mail className="text-white" size={18} />
                        </div>
                        <div>
                          {/* CHANGE: email form title */}
                          <h2 className="text-[1.15rem] font-bold text-white">Send Us a Message</h2>
                          <p className="text-[0.8rem] text-white/35 mt-0.5">We reply within 24 hours · Usually much faster</p>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-[0.75rem] font-semibold tracking-[0.07em] uppercase text-white/30 mb-2">
                              Your Name
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Alex Johnson"
                              value={formState.name}
                              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                              className="w-full px-5 py-3.5 rounded-[12px] text-[0.92rem] text-white placeholder-white/20 outline-none transition-all"
                              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                              onFocus={(e) => e.target.style.borderColor = 'rgba(255,90,31,0.5)'}
                              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                            />
                          </div>
                          <div>
                            <label className="block text-[0.75rem] font-semibold tracking-[0.07em] uppercase text-white/30 mb-2">
                              Email Address
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="you@example.com"
                              value={formState.email}
                              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                              className="w-full px-5 py-3.5 rounded-[12px] text-[0.92rem] text-white placeholder-white/20 outline-none transition-all"
                              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                              onFocus={(e) => e.target.style.borderColor = 'rgba(255,90,31,0.5)'}
                              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[0.75rem] font-semibold tracking-[0.07em] uppercase text-white/30 mb-2">
                            {/* CHANGE: field label */}
                            Your YouTube Channel URL
                          </label>
                          <input
                            type="url"
                            placeholder="https://youtube.com/@yourchannel"
                            value={formState.channel}
                            onChange={(e) => setFormState({ ...formState, channel: e.target.value })}
                            className="w-full px-5 py-3.5 rounded-[12px] text-[0.92rem] text-white placeholder-white/20 outline-none transition-all"
                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                            onFocus={(e) => e.target.style.borderColor = 'rgba(255,90,31,0.5)'}
                            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                          />
                        </div>

                        <div>
                          <label className="block text-[0.75rem] font-semibold tracking-[0.07em] uppercase text-white/30 mb-2">
                            Anything else we should know?
                          </label>
                          <textarea
                            rows={4}
                            placeholder="Monthly views, current monetization setup, goals..."
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            className="w-full px-5 py-3.5 rounded-[12px] text-[0.92rem] text-white placeholder-white/20 outline-none resize-none transition-all"
                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                            onFocus={(e) => e.target.style.borderColor = 'rgba(255,90,31,0.5)'}
                            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="flex items-center justify-center gap-2.5 w-full py-4.5 rounded-full font-syne font-extrabold text-[1rem] text-white transition-all hover:translate-y-[-3px] disabled:opacity-60 disabled:translate-y-0"
                          style={{ background: 'linear-gradient(135deg, #FF5A1F, #c43a00)', boxShadow: '0 16px 50px rgba(255,90,31,0.3)' }}
                        >
                          {loading ? (
                            <>
                              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Mail size={17} />
                              {/* CHANGE: submit button label */}
                              Send My Message
                              <ArrowRight size={15} />
                            </>
                          )}
                        </button>

                        <p className="text-center text-[0.75rem] text-white/20">
                          Or email us directly at{' '}
                          <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#FF5A1F] hover:underline">
                            {CONTACT_EMAIL}
                          </a>
                        </p>
                      </form>
                    </>
                  ) : (
                    /* SUCCESS STATE */
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(255,90,31,0.12)', border: '1px solid rgba(255,90,31,0.3)' }}>
                        <CheckCircle2 className="text-[#FF5A1F]" size={30} />
                      </div>
                      <h3 className="text-[1.4rem] font-extrabold text-white mb-3">
                        {/* CHANGE: success headline */}
                        Message received!
                      </h3>
                      <p className="text-white/45 leading-[1.7] max-w-[340px] mx-auto text-[0.93rem]">
                        {/* CHANGE: success body */}
                        We'll review your channel and be in touch within 24 hours with next steps.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', channel: '', message: '' }); }}
                        className="mt-8 text-[0.82rem] font-semibold text-[#FF5A1F] hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}
                </div>
              )}
            </motion.div>

            {/* RIGHT — TRUST SIDEBAR */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="space-y-5"
            >
              {/* STATS CARD */}
              <div className="rounded-[20px] p-7 border border-white/5" style={{ background: 'linear-gradient(135deg, #161616, #111)' }}>
                <p className="text-[0.72rem] tracking-[0.08em] uppercase text-white/25 font-semibold mb-5">Why creators work with us</p>
                <div className="space-y-5">
                  {/* CHANGE: trust stats */}
                  {[
                    { num: '4,000+', label: 'Videos Deployed' },
                    { num: '2B+', label: 'Views Generated' },
                    { num: '150+', label: 'Creators Scaled' },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                      <span className="text-[0.88rem] text-white/40">{stat.label}</span>
                      <span className="font-syne font-extrabold text-[1.1rem]" style={{ background: 'linear-gradient(135deg, #FF5A1F, #ff8c5a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        {stat.num}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WHAT HAPPENS NEXT */}
              <div className="rounded-[20px] p-7 border border-white/5" style={{ background: 'linear-gradient(135deg, #161616, #111)' }}>
                <p className="text-[0.72rem] tracking-[0.08em] uppercase text-white/25 font-semibold mb-5">What happens next</p>
                <div className="space-y-4">
                  {/* CHANGE: next-steps copy */}
                  {[
                    { step: '01', text: 'We review your channel and content.' },
                    { step: '02', text: 'You get a custom revenue projection.' },
                    { step: '03', text: 'We launch your multi-platform setup.' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3.5">
                      <span className="font-syne font-extrabold text-[0.75rem] text-[#FF5A1F] mt-0.5 leading-none w-5 flex-shrink-0">{item.step}</span>
                      <p className="text-[0.86rem] text-white/40 leading-[1.6]">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* RESPONSE TIME BADGE */}
              <div className="flex items-center gap-3.5 p-5 rounded-[16px] border" style={{ background: 'rgba(255,90,31,0.05)', borderColor: 'rgba(255,90,31,0.15)' }}>
                <div className="w-9 h-9 rounded-[10px] flex-shrink-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FF5A1F, #c43a00)' }}>
                  <Clock className="text-white" size={16} />
                </div>
                <p className="text-[0.83rem] text-white/50 leading-[1.55]">
                  {/* CHANGE: response time note */}
                  <strong className="text-white/80">Average response time: 4 hours.</strong> We review every inquiry personally.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
