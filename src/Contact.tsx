"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";

const links = [
  { label: "GitHub", detail: "Explore my repositories", href: "https://github.com/aymanechoukri", icon: FiGithub },
  { label: "LinkedIn", detail: "Connect professionally", href: "https://www.linkedin.com/in/aymane-chokri-8750a6321/", icon: FiLinkedin },
  { label: "Email", detail: "chokriaymane2000@gmail.com", href: "mailto:chokriaymane2000@gmail.com", icon: FiMail },
];

export default function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-6 py-24">
      <div className="max-w-7xl mx-auto rounded-[2rem] border border-[#39CEED]/20 bg-gradient-to-br from-[#102033] via-[#0b1220] to-[#080d17] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
        <div className="absolute -right-24 -top-32 w-96 h-96 rounded-full bg-[#39CEED]/10 blur-3xl pointer-events-none" />
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[#39CEED] text-sm font-semibold tracking-[0.28em] uppercase mb-3">Have a project in mind?</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">Let’s build something<br /><span className="text-[#39CEED]">meaningful.</span></h2>
            <p className="text-gray-400 text-lg leading-8 mt-6 max-w-xl">I’m open to discussing web development projects, freelance opportunities, and professional collaborations.</p>
            <a href="mailto:chokriaymane2000@gmail.com" className="inline-flex items-center gap-3 mt-8 rounded-xl bg-[#39CEED] px-6 py-3.5 font-bold text-[#06111b] hover:bg-white transition-colors">
              Get in touch <FiArrowUpRight size={19} />
            </a>
          </motion.div>
          <div className="flex flex-col gap-3">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ x: 5 }} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 hover:border-[#39CEED]/40 transition-colors">
                  <span className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center text-[#39CEED]"><Icon size={22} /></span>
                  <span className="flex-1 min-w-0"><span className="block text-white font-semibold">{link.label}</span><span className="block text-gray-500 text-sm truncate">{link.detail}</span></span>
                  <FiArrowUpRight className="text-gray-500" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
