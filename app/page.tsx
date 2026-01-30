'use client';

import { About } from "@/src/About";
import Hero from "@/src/Hero";
import Project from "@/src/Project";
import Services from "@/src/Servece";

export default function Home() {
  return(
    <main>
      <Hero />
      <Project/>
      <About />
      <Services />
    </main>
  )
}

