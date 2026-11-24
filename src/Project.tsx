"use client";

import { Projects } from "./Data/data";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function MyProjects() {
  return (
    <section className="relative w-full py-24 px-4 sm:px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <p className="text-[#39CEED] text-sm font-semibold tracking-[0.28em] uppercase mb-3">Selected work</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            Projects<span className="text-[#39CEED]">.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mt-5 leading-relaxed">
            A selection of applications and websites I have built, from API-powered products to responsive client experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7"
        >
          {Projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -9, rotateX: 3, rotateY: -2, scale: 1.012 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              style={{ transformStyle: "preserve-3d", perspective: 1200 }}
              className="group relative rounded-3xl bg-[#0b1220]/90 border border-white/10 overflow-hidden shadow-[0_18px_55px_rgba(0,0,0,0.28)] hover:border-[#39CEED]/50 hover:shadow-[0_24px_70px_rgba(57,206,237,0.12)]"
            >
              <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.accent}`}>
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                <div className="absolute -right-10 -top-16 w-56 h-56 rounded-full border border-white/20 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute -right-2 -top-8 w-40 h-40 rounded-full border border-white/20 group-hover:rotate-12 transition-transform duration-700" />
                <div className="absolute left-7 bottom-6 [transform:translateZ(36px)]">
                  <span className="text-white/70 text-xs tracking-[0.25em] uppercase">{project.category}</span>
                  <div className="text-6xl sm:text-7xl font-black tracking-tight text-white drop-shadow-[0_12px_22px_rgba(0,0,0,.3)]">{project.symbol}</div>
                </div>
                <div className="absolute right-6 bottom-6 w-12 h-12 rounded-2xl bg-black/20 border border-white/25 backdrop-blur-md flex items-center justify-center text-white group-hover:-translate-y-2 group-hover:rotate-6 transition-all duration-500">
                  <FiArrowUpRight size={23} />
                </div>
              </div>

              <div className="p-6 [transform:translateZ(18px)]">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#39CEED] transition-colors">{project.title}</h3>
                  <span className="text-xs text-gray-500 font-mono">0{project.id}</span>
                </div>
                <p className="text-gray-400 text-sm leading-6 min-h-[96px]">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.stack.map((skill) => (
                    <span key={skill} className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-gray-300 text-[11px]">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-7 pt-5 border-t border-white/10">
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                    <FiGithub /> Frontend / Source
                  </a>
                  {project.secondaryRepoUrl && (
                    <a href={project.secondaryRepoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                      <FiGithub /> Backend
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#39CEED] hover:text-white transition-colors">
                      <FiExternalLink /> Live
                    </a>
                  )}
                  {project.secondaryLiveUrl && (
                    <a href={project.secondaryLiveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#39CEED] hover:text-white transition-colors">
                      <FiExternalLink /> API
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
