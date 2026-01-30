import Image from "next/image";

export default function Hero() {
  return (
    <section id="Home" className="h-[99vh] overflow-hidden">
      {/* Content */}
      <div className="relative flex min-h-screen items-center px-6 md:px-10">
        <div className="flex w-full flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text */}
          <div className="w-full lg:w-[60%] flex flex-col space-y-5 text-center lg:text-left">
            <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I’m <span className="text-[#39CEED]">Aymane Chokri</span>
            </h1>

            <span className="text-white text-xl sm:text-2xl md:text-3xl">
              Frontend Web Developer
            </span>

            <p className="text-gray-400 max-w-xl mx-auto lg:mx-0">
              I craft modern, responsive, and user-friendly web experiences.
              Currently expanding my skills to become a Full-Stack Developer.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <a href="#Project">
                <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 cursor-pointer">
                  <span>My Project</span>
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                    <div className="relative h-full w-8 bg-white/20"></div>
                  </div>
                </button>
              </a>
              <a href="#skills">
                <button className="group cursor-pointer relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#39CEED] px-6 font-medium text-neutral-200">
                  <span>My Skills</span>
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                    <div className="relative h-full w-8 bg-white/20"></div>
                  </div>
                </button>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Image
              src="/image/Me1.png"
              alt="Aymane Chokri"
              width={400}
              height={400}
              className="w-[220px] sm:w-[260px] md:w-[340px] border-4 border-[#39CEED] shadow-[0_0_40px_rgba(57,206,237,0.2)] drop-shadow-[0_0_60px_rgba(57,206,237,0.4)] rounded-lg hover:scale-105 transition-transform duration-300"
              priority
            />
            <div className="absolute inset-0 border-2 border-[#39CEED] rounded-lg blur-md opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
