"use client";

import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "About", "Services", "Contact"];

  const logoVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <header className="w-full px-5 bg-white/5 backdrop-blur-2xl h-20 shadow-[0_0_15px_rgb(57,206,237,0.4)] sticky top-0 left-0 z-50">
      <nav className="flex justify-between items-center w-full h-full max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={logoVariants}
        >
          <Image src="/image/Logo1.png" alt="Logo" width={100} height={50} />
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={menuVariants}
          className="hidden md:flex items-center gap-6"
        >
          {menuItems.map((item) => (
            <motion.li key={item} variants={itemVariants}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-[#39CEED] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-cyan-400 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setOpen(!open)}
          className="md:hidden text-cyan-400 text-3xl"
        >
          {open ? <FiX /> : <FiMenu />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-0 w-full bg-[#0F172A]/95 backdrop-blur-xl"
          >
            <ul className="flex flex-col items-center gap-6 py-6">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="text-[#39CEED] text-lg"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

