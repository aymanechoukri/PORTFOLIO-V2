"use client";

import { About } from "@/src/About";
import Hero from "@/src/Hero";
import Project from "@/src/Project";
import Services from "@/src/Servece";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Home() {
  return(
    <motion.main
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <Hero />
      <Project />
      <About />
      <Services />
    </motion.main>
  )
}

