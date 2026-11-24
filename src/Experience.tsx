"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";

const entries = [
  {
    icon: FiBriefcase,
    type: "Experience",
    title: "Freelance Front-End Developer",
    organization: "Self-employed",
    description: "Creating responsive web interfaces and client-focused websites, with attention to usability, visual consistency, and maintainable front-end code.",
    tags: ["Frontend Development", "Responsive Web Design", "JavaScript"],
  },
  {
    icon: FiBookOpen,
    type: "Education",
    title: "Web Development",
    organization: "YouCode Maroc",
    description: "Developing practical web development skills through hands-on projects, collaborative work, and continuous technical learning.",
    tags: ["React.js", "PHP", "Laravel", "SQL", "Jira"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#39CEED] text-sm font-semibold tracking-[0.28em] uppercase mb-3">My journey</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-12">Experience & education<span className="text-[#39CEED]">.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {entries.map((entry, index) => {
            const Icon = entry.icon;
            return (
              <motion.article
                key={entry.title}
                initial={{ opacity: 0, y: 25, rotateX: 5 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                whileHover={{ y: -6, rotateY: index === 0 ? 2 : -2 }}
                style={{ transformStyle: "preserve-3d", perspective: 900 }}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#111c2d] to-[#080d17] p-7 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,.2)] hover:border-[#39CEED]/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-7">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#39CEED]">{entry.type}</span>
                  <span className="w-12 h-12 rounded-2xl bg-[#39CEED]/10 border border-[#39CEED]/20 flex items-center justify-center text-[#39CEED]"><Icon size={22} /></span>
                </div>
                <h3 className="text-2xl font-bold text-white">{entry.title}</h3>
                <p className="text-gray-400 mt-1">{entry.organization}</p>
                <p className="text-gray-300 leading-7 mt-5">{entry.description}</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {entry.tags.map((tag) => <span key={tag} className="rounded-full px-3 py-1.5 bg-white/[0.06] border border-white/10 text-gray-300 text-xs">{tag}</span>)}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
