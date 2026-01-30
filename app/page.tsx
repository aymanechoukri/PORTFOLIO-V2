'use client';

import { About } from "@/src/About";
import Hero from "@/src/Hero";
import Project from "@/src/Project";

export default function Home() {
  return(
    <main>
      <Hero />
      <Project/>
      <About />
    </main>
  )
}

