"use client";

import Image from "next/image";
import { Skills } from "./Data/data";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, x: -50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export function About() {
  return (
    <section
      id="about"
      className="flex flex-col min-h-screen lg:flex-row justify-between items-center lg:items-start w-[90%] max-w-6xl mx-auto py-16 gap-12 lg:gap-20"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={imageVariants}
        className="relative w-full lg:w-[40%] flex justify-center"
      >
        <div className="relative group">
          <div className="absolute -inset-4 bg-linear-to-r from-[#39CEED] to-[#2dd4bf] rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>

          <div className="relative overflow-hidden rounded-xl border-4 border-[#39CEED] p-1">
            <div className="absolute inset-0 bg-linear-to-r from-[#39ceed30] via-transparent to-[#39ceed30] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <Image
              src="/image/Me2.png"
              alt="Aymane Chokri"
              width={400}
              height={400}
              className="relative w-[240px] sm:w-[280px] md:w-[340px] rounded-lg group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="w-full lg:w-[60%]"
      >
        <motion.div variants={itemVariants} className="relative mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#39CEED] ml-0 lg:ml-20 inline-block relative">
            <span className="relative z-10">About Me</span>
            <span className="absolute left-0 bottom-0 w-20 h-1 bg-linear-to-r from-[#39CEED] to-transparent"></span>
          </h2>
        </motion.div>
        <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          Im a passionate Frontend Developer who enjoys building clean,
          responsive, and user-friendly web interfaces. I focus on turning ideas
          and designs into functional, visually appealing websites using modern
          technologies like React, Next.js, and Tailwind CSS.
        </motion.p>
        <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-300 leading-relaxed mt-6">
          I care deeply about details, performance, and creating smooth user
          experiences across all devices. Every project is an opportunity to
          learn, improve, and deliver something meaningful.
        </motion.p>

        <motion.div variants={containerVariants} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#39CEED] rounded-full"></div>
            <span className="text-gray-400">Clean & Modern Design</span>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#39CEED] rounded-full"></div>
            <span className="text-gray-400">Responsive Development</span>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#39CEED] rounded-full"></div>
            <span className="text-gray-400">Performance Focused</span>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#39CEED] rounded-full"></div>
            <span className="text-gray-400">User Experience</span>
          </motion.div>
        </motion.div>

        <div id="skills">
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative my-10"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#39CEED] ml-0 lg:ml-20 inline-block relative">
              <span className="relative z-10">Skills</span>
              <span className="absolute left-0 bottom-0 w-20 h-1 bg-linear-to-r from-[#39CEED] to-transparent"></span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {Skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={skillVariants}
                whileHover={{ scale: 1.05 }}
                className="group relative px-4 py-2 bg-[#0f172a] border border-[#39CEED]/30 rounded-full cursor-pointer overflow-hidden transition-all duration-300 hover:border-[#39CEED] hover:shadow-[0_0_20px_rgba(57,206,237,0.3)]"
              >
                <div className="absolute inset-0 bg-[#39CEED]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2 text-gray-300 group-hover:text-white transition-colors duration-300">
                  <span>{skill.icon}</span>
                  <span className="font-medium">{skill.name}</span>
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

