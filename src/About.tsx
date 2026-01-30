import Image from "next/image";
import { Skills } from "./Data/data";

export function About() {
  return (
    <section
      id="about"
      className="flex flex-col min-h-screen lg:flex-row justify-between items-center lg:items-start w-[90%] max-w-6xl mx-auto py-16 gap-12 lg:gap-20"
    >
      <div className="w-full lg:w-[40%] flex justify-center">
        <div className="relative">
          <Image
            src="/image/Me2.png"
            alt="Aymane Chokri"
            width={400}
            height={400}
            className="w-[220px] sm:w-[260px] md:w-[340px] border-4 border-[#39CEED] shadow-[0_0_40px_rgba(57,206,237,0.2)] drop-shadow-[0_0_60px_rgba(57,206,237,0.4)] rounded-lg hover:scale-105 transition-transform duration-300"
            priority
          />
          <div className="absolute inset-0 border-2 border-[#39CEED] rounded-lg blur-md opacity-30 -z-10"></div>
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
