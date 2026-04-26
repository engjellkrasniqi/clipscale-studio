import { motion } from 'motion/react';
import { Play, ExternalLink, Users, Video, BarChart3, ArrowRight } from 'lucide-react';

// ============================================================
//  EDIT YOUR PORTFOLIO PROJECTS HERE
//  Each object = one project card on the page.
//
//  HOW TO UPDATE:
//  - "thumbnail": paste the URL of the thumbnail image
//      e.g. "https://i.ytimg.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg"
//      or a local path like "/images/project1.jpg"
//
//  - "videoUrl": paste the URL that opens when the play button is clicked
//      Facebook: "https://www.facebook.com/watch/?v=YOUR_VIDEO_ID"
//      YouTube:  "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
//      TikTok:   "https://www.tiktok.com/@handle/video/YOUR_VIDEO_ID"
//
//  - "title": the project/campaign name shown on the card
//  - "creator": the creator or brand you worked with
//  - "stats": the headline result (e.g. "45M+ Views")
//  - "platforms": which platforms were used — ["Facebook", "TikTok", "Snapchat"]
//
//  ADD MORE PROJECTS: just copy one { ... } block, paste it below,
//  and update the fields. Make sure to increment the "id".
// ============================================================
const projects = [
  {
    id: 1,
    title: "True Crime",         // CHANGE: project title
    creator: "True 911 Calls",           // CHANGE: creator name
    thumbnail: "/image1.png",                   // CHANGE: thumbnail URL or local path
    videoUrl: "https://www.facebook.com/watch/?v=792110205219679", // CHANGE: video link
    stats: "2.7+ Views",                        // CHANGE: headline stat
    platforms: ["Facebook"]           // CHANGE: platforms used
  },
  {
    id: 2,
    title: "Lifestyle Vlogs Scaling",           // CHANGE: project title
    creator: "Placeholder Creator 2",           // CHANGE: creator name
    thumbnail: "/images/image1.jpg",            // CHANGE: thumbnail URL or local path
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // CHANGE: video link
    stats: "12M+ Views",                        // CHANGE: headline stat
    platforms: ["Snapchat", "Facebook"]         // CHANGE: platforms used
  },
  {
    id: 3,
    title: "Educational Content Engine",        // CHANGE: project title
    creator: "Placeholder Creator 3",           // CHANGE: creator name
    thumbnail: "https://picsum.photos/seed/edu/800/450", // CHANGE: thumbnail URL
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // CHANGE: video link
    stats: "8M+ Views",                         // CHANGE: headline stat
    platforms: ["TikTok", "Snapchat"]           // CHANGE: platforms used
  },
  {
    id: 4,
    title: "Tech Reviews Distribution",         // CHANGE: project title
    creator: "Placeholder Creator 4",           // CHANGE: creator name
    thumbnail: "https://picsum.photos/seed/tech/800/450", // CHANGE: thumbnail URL
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // CHANGE: video link
    stats: "20M+ Views",                        // CHANGE: headline stat
    platforms: ["Facebook", "TikTok", "Snapchat"] // CHANGE: platforms used
  }
];
// ============================================================
//  END OF EDITABLE SECTION — don't edit below unless you want
//  to change the layout or design.
// ============================================================

export default function Results() {
  return (
    <div className="pt-32 pb-20 px-[6%] min-h-screen bg-linear-to-b from-[#0D1B2A] via-[#1A1A2E] to-[#0F2A24] text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto text-center mb-20"
      >
        <div className="inline-flex items-center gap-2 bg-white/5 border border-amber/20 px-4 py-1.5 rounded-full text-amber text-xs font-bold tracking-widest uppercase mb-6">
          <span className="w-2 h-2 bg-amber rounded-full animate-pulse"></span>
          Our Portfolio
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
          Real Results for <br />
          <span className="text-amber">Top Creators</span>
        </h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          See how we've transformed YouTube libraries into multi-platform revenue machines. 
          Every project below represents a successful scaling operation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500"
          >
            {/* Thumbnail + Play Button */}
            <div className="relative aspect-video bg-black overflow-hidden">
              <img 
                src={project.thumbnail} 
                alt={project.title}
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button 
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => window.open(project.videoUrl, "_blank")}
                  className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-coral group-hover:border-coral transition-colors duration-300"
                >
                  <Play className="fill-white text-white ml-1" size={24} />
                </motion.button>
              </div>
              
              <div className="absolute top-4 left-4 flex gap-2">
                {project.platforms.map(p => (
                  <span key={p} className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-coral transition-colors">{project.title}</h3>
                  <div className="flex items-center gap-2 text-white/40 text-sm">
                    <Users size={14} />
                    <span>Worked with: <span className="text-white/80 font-medium">{project.creator}</span></span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-coral font-syne font-black text-xl">{project.stats}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Growth</div>
                </div>
              </div>

              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Full distribution across {project.platforms.join(', ')} with optimized native formatting and strategic page management.
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-white/60">
                    <Video size={14} className="text-sky" />
                    <span>40+ Clips</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/60">
                    <BarChart3 size={14} className="text-teal" />
                    <span>3.5x ROI</span>
                  </div>
                </div>
                <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/80 hover:text-coral transition-colors">
                  View Case Study <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-32 max-w-4xl mx-auto bg-linear-to-r from-coral/10 to-orange/10 border border-coral/20 rounded-[2rem] p-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to see these numbers on your dashboard?</h2>
        <button className="bg-gradient-coral px-10 py-4 rounded-full font-syne font-extrabold text-lg hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-coral/40 transition-all">
          Apply to Scale Now
        </button>
      </motion.div>
    </div>
  );
}
