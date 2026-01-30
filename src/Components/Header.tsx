"use client";

import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full px-5 bg-white/5 backdrop-blur-2xl h-20 shadow-[0_0_15px_rgb(57,206,237,0.4)] sticky top-0 left-0 z-50">
      <nav className="flex justify-between items-center w-full h-full max-w-7xl mx-auto">
        {/* Logo */}
        <Image src="/image/Logo1.png" alt="Logo" width={100} height={50} />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-[#39CEED] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-cyan-400 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cyan-400 text-3xl"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#0F172A]/95 backdrop-blur-xl">
          <ul className="flex flex-col items-center gap-6 py-6">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-[#39CEED] text-lg"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
