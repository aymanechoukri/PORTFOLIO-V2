"use client";

import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <footer className="bg-black border-t border-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Top Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8"
        >
          {/* Logo/Brand */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">Aymane Chokri</h2>
            <p className="text-gray-400">Frontend Web Developer</p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-4 z-50">
            <motion.a 
              href="https://github.com/aymanechoukri" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={socialVariants}
              whileHover="hover"
              className="p-3 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <FiGithub className="text-white text-xl" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/aymane-chokri-8750a6321/" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={socialVariants}
              whileHover="hover"
              className="p-3 bg-gray-900 rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
            >
              <FiLinkedin className="text-white text-xl" />
            </motion.a>
            <motion.a 
              href="mailto:chokriaymane2000@gmail.com" 
              variants={socialVariants}
              whileHover="hover"
              className="p-3 bg-gray-900 rounded-full hover:bg-red-700 transition-colors cursor-pointer"
            >
              <FiMail className="text-white text-xl" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="h-px bg-gray-800 my-8"
        ></motion.div>

        {/* Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
        >
          <motion.div variants={itemVariants} className="text-center md:text-left z-50">
            <h3 className="text-white font-bold mb-4">Get in Touch</h3>
            <div className="space-y-2">
              <a 
                href="mailto:chokriaymane2000@gmail.com" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                chokriaymane2000@gmail.com
              </a>
              <a 
                href="tel:+212674851005" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                +212 674-851-005
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center md:text-right z-50">
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#Home" className="text-gray-400 hover:text-white transition-colors block">
                Home
              </a>
              <a href="#Project" className="text-gray-400 hover:text-white transition-colors block">
                Projects
              </a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors block">
                services
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-gray-400 mb-4"
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FiHeart className="text-red-500" />
            </motion.div>
            <span>in Morocco</span>
          </motion.div>
          
          <p className="text-gray-500 text-sm">
            © {currentYear} Aymane Chokri. All rights reserved.
          </p>
        </motion.div>

      </div>
    </footer>
  );
}

