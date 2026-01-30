"use client";

import { Projects } from "./Data/data";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function MyProjects() {
  return (
    <section className="w-full min-h-screen py-16 px-4" id="Project">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative my-10"
        >
          <motion.h2 
            variants={titleVariants}
            className="text-3xl sm:text-4xl font-extrabold text-[#39CEED] ml-0 lg:ml-20 inline-block relative"
          >
            <span className="relative z-10">My Projects</span>
            <span className="absolute left-0 bottom-0 w-20 h-1 bg-linear-to-r from-[#39CEED] to-transparent"></span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-6 md:gap-8"
        >
          {Projects.map((project) => (
            <motion.a
              href={project.link}
              key={project.id}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="block relative group"
            >
              <div className="w-full max-w-[380px] bg-gradient-to-b from-[#0f172a] to-[#1e293b] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#39ceed60] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(57,206,237,0.15)] hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={380}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#39CEED] transition-colors pr-2">
                      {project.title}
                    </h3>
                    <svg
                      className="w-5 h-5 text-gray-500 group-hover:text-[#39CEED] transition-colors flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.discription}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.skills.split(", ").map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#334155] text-gray-300 text-xs font-medium rounded-full hover:bg-[#39ceed20] hover:text-[#39CEED] transition-colors"
                      >
                        {skill.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <p className="text-center text-gray-400 text-sm">
            More projects coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  );
}

