import Image from "next/image";
import { Skills } from "./Data/data";

export function About() {
  return (
    <section
      id="about"
      className="flex flex-col min-h-screen lg:flex-row justify-between items-center lg:items-start w-[90%] max-w-6xl mx-auto py-16 gap-12 lg:gap-20"
    >
      <div className="relative w-full lg:w-[40%] flex justify-center">
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
      </div>

      <div className="w-full lg:w-[60%]">
        <div className="relative mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#39CEED] ml-0 lg:ml-20 inline-block relative">
            <span className="relative z-10">About Me</span>
            <span className="absolute left-0 bottom-0 w-20 h-1 bg-linear-to-r from-[#39CEED] to-transparent"></span>
          </h2>
        </div>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          Im a passionate Frontend Developer who enjoys building clean,
          responsive, and user-friendly web interfaces. I focus on turning ideas
          and designs into functional, visually appealing websites using modern
          technologies like React, Next.js, and Tailwind CSS.
        </p>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mt-6">
          I care deeply about details, performance, and creating smooth user
          experiences across all devices. Every project is an opportunity to
          learn, improve, and deliver something meaningful.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#39CEED] rounded-full"></div>
            <span className="text-gray-400">Clean & Modern Design</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#39CEED] rounded-full"></div>
            <span className="text-gray-400">Responsive Development</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#39CEED] rounded-full"></div>
            <span className="text-gray-400">Performance Focused</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#39CEED] rounded-full"></div>
            <span className="text-gray-400">User Experience</span>
          </div>
        </div>

        <div id="skills">
          <div className="relative my-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#39CEED] ml-0 lg:ml-20 inline-block relative">
              <span className="relative z-10">Skills</span>
              <span className="absolute left-0 bottom-0 w-20 h-1 bg-linear-to-r from-[#39CEED] to-transparent"></span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {Skills.map((skill, index) => (
              <div
                key={index}
                className="group relative px-4 py-2 bg-[#0f172a] border border-[#39CEED]/30 rounded-full cursor-pointer overflow-hidden transition-all duration-300 hover:border-[#39CEED] hover:shadow-[0_0_20px_rgba(57,206,237,0.3)]"
              >
                <div className="absolute inset-0 bg-[#39CEED]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2 text-gray-300 group-hover:text-white transition-colors duration-300">
                  <span>{skill.icon}</span>
                  <span className="font-medium">{skill.name}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
