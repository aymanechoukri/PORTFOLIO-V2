"use client";

import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} as const;

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
} as const;

export default function Hero() {
  return (
    <section id="Home" className="min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20"
        >
          
          {/* Text */}
          <div className="w-full lg:w-[60%] flex flex-col space-y-6 text-center lg:text-left">
            <motion.h1 variants={itemVariants} className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Hi, Im <span className="text-[#39CEED]">Aymane Chokri</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="relative">
              <span className="text-white text-xl sm:text-2xl md:text-3xl font-medium inline-block">
                Frontend Web Developer
              </span>
              <div className="w-24 h-1 bg-linear-to-r from-[#39CEED] to-transparent rounded-full mt-2 mx-auto lg:mx-0"></div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I craft modern, responsive, and user-friendly web experiences.
              Currently expanding my skills to become a Full-Stack Developer.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#Project">
                <button className="group relative px-7 py-3.5 bg-linear-to-r from-gray-900 to-black text-white font-medium rounded-xl overflow-hidden border border-gray-800 hover:border-[#39ceed60] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(57,206,237,0.2)]">
                  <span className="relative z-10 flex items-center gap-2">
                    My Projects
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-linear-to-r from-[#39ceed15] to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
                </button>
              </a>
              
              <a href="#skills">
                <button className="group relative px-7 py-3.5 bg-linear-to-r from-[#39CEED] to-[#2dd4bf] text-white font-medium rounded-xl overflow-hidden hover:shadow-[0_10px_30px_rgba(57,206,237,0.4)] transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2">
                    My Skills
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
                </button>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-6 flex justify-center lg:justify-start gap-6">
              {/* GitHub */}
              <a 
                href="https://github.com/aymanechoukri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <div className="p-3 bg-linear-to-br from-gray-900 to-black rounded-full border border-gray-700 group-hover:border-[#39CEED] group-hover:scale-110 transition-all duration-300 mb-2">
                  <FiGithub className="w-6 h-6 text-gray-300 group-hover:text-white" />
                </div>
                <span className="text-gray-400 text-sm font-medium group-hover:text-[#39CEED] transition-colors">
                  GitHub
                </span>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/aymane-chokri-8750a6321/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <div className="p-3 bg-linear-to-br from-blue-900/30 to-black rounded-full border border-gray-700 group-hover:border-blue-500 group-hover:scale-110 transition-all duration-300 mb-2">
                  <FiLinkedin className="w-6 h-6 text-gray-300 group-hover:text-blue-400" />
                </div>
                <span className="text-gray-400 text-sm font-medium group-hover:text-blue-400 transition-colors">
                  LinkedIn
                </span>
              </a>
              
              {/* Email */}
              <a 
                href="mailto:chokriaymane2000@gmail.com" 
                className="group flex flex-col items-center"
              >
                <div className="p-3 bg-linear-to-br from-purple-900/30 to-black rounded-full border border-gray-700 group-hover:border-purple-500 group-hover:scale-110 transition-all duration-300 mb-2">
                  <FiMail className="w-6 h-6 text-gray-300 group-hover:text-purple-400" />
                </div>
                <span className="text-gray-400 text-sm font-medium group-hover:text-purple-400 transition-colors">
                  Email
                </span>
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div variants={imageVariants} className="relative w-full lg:w-[40%] flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-r from-[#39CEED] to-[#2dd4bf] rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
              
              <div className="relative overflow-hidden rounded-xl border-4 border-[#39CEED] p-1">
                <div className="absolute inset-0 bg-linear-to-r from-[#39ceed30] via-transparent to-[#39ceed30] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <Image
                  src="/image/Me1.png"
                  alt="Aymane Chokri"
                  width={400}
                  height={400}
                  className="relative w-[240px] sm:w-[280px] md:w-[340px] rounded-lg group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <a href="#Project" className="animate-bounce flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2">Scroll down</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#39CEED] rounded-full mt-2 animate-pulse"></div>
          </div>
        </a>
      </motion.div>
    </section>
  );
}

