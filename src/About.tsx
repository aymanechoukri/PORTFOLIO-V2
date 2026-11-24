"use client";

import Image from "next/image";
import { Skills } from "./Data/data";
import { motion } from "framer-motion";

const skillGroups = ["Frontend", "Backend", "Databases", "Tools & Workflow", "Currently Learning", "Languages"];

export function About() {
  return (
    <section id="about" className="w-[90%] max-w-7xl mx-auto py-24 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -35, rotateY: 8 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        className="relative flex justify-center"
      >
        <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-[#39CEED]/20 to-violet-500/10 blur-2xl" />
        <div className="relative p-2 rounded-[2rem] border border-[#39CEED]/40 bg-white/[0.04] shadow-[0_25px_80px_rgba(57,206,237,.12)]">
          <Image src="/image/Me2.png" alt="Aymane Chokri" width={420} height={480} className="w-[260px] sm:w-[320px] rounded-[1.5rem] object-cover" />
          <div className="absolute -bottom-5 -right-5 rounded-2xl border border-white/15 bg-[#0b1220] px-5 py-3 shadow-xl">
            <p className="text-[#39CEED] text-xs uppercase tracking-widest">Based in</p>
            <p className="text-white font-semibold">Morocco 🇲🇦</p>
          </div>
        </div>
      </motion.div>

      <div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-[#39CEED] text-sm font-semibold tracking-[0.28em] uppercase mb-3">A little about me</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-7">Building useful things<br /><span className="text-[#39CEED]">for the web.</span></h2>
          <p className="text-gray-300 text-lg leading-8">
            I’m a web developer focused on building clean, responsive, and accessible interfaces. I enjoy turning ideas into practical products with React, Next.js, TypeScript, and modern CSS.
          </p>
          <p className="text-gray-400 leading-7 mt-4">
            I’m growing toward full-stack development through hands-on projects, API integration, and continuous learning at YouCode Maroc. I value thoughtful UI, maintainable code, and a smooth experience on every screen.
          </p>
        </motion.div>
      </div>

      <div id="skills" className="lg:col-span-2 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
          <div>
            <p className="text-[#39CEED] text-xs font-semibold tracking-[0.25em] uppercase mb-2">Tools I work with</p>
            <h3 className="text-3xl font-bold text-white">Skills & technologies</h3>
          </div>
          <span className="text-xs text-gray-500">Technologies I use and currently learn</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {skillGroups.map((group) => {
            const groupSkills = Skills.filter((skill) => skill.category === group);
            if (!groupSkills.length) return null;
            return (
              <motion.div key={group} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 hover:border-[#39CEED]/30 transition-colors">
                <h4 className="text-sm font-semibold text-[#39CEED] mb-4">{group}</h4>
                <div className="flex flex-wrap gap-2">
                  {groupSkills.map((skill) => (
                    <span key={skill.name} className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs ${skill.learning ? "border-amber-400/20 bg-amber-400/[0.06] text-amber-100" : "border-white/10 bg-[#0b1220] text-gray-200"}`}>
                      <span>{skill.icon}</span>{skill.name}
                      {skill.learning && <span className="text-[9px] uppercase tracking-wide text-amber-300">Learning</span>}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
