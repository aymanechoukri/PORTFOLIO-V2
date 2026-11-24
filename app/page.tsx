"use client";

import { About } from "@/src/About";
import Contact from "@/src/Contact";
import Experience from "@/src/Experience";
import Hero from "@/src/Hero";
import Project from "@/src/Project";
import Services from "@/src/Servece";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <motion.main initial="hidden" animate="visible" variants={sectionVariants}>
      <Hero />
      <Project />
      <About />
      <Experience />
      <Services />
      <Contact />
    </motion.main>
  );
}
