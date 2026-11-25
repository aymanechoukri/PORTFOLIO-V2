"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowDownRight, FiGithub, FiLinkedin, FiMail, FiSkipForward } from "react-icons/fi";

const INTRO_MS = 7200;

function Robot({ x, y }: { x: number; y: number }) {
  return (
    <div className="robot-wrap" style={{ ["--look-x" as string]: `${x}px`, ["--look-y" as string]: `${y}px` }}>
      <svg className="robot" viewBox="0 0 440 500" role="img" aria-label="Futuristic guardian robot">
        <defs>
          <linearGradient id="shell" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#5d2632"/><stop offset=".45" stopColor="#171014"/><stop offset="1" stopColor="#080608"/></linearGradient>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ff5367"/><stop offset="1" stopColor="#5d0018"/></linearGradient>
          <radialGradient id="eye"><stop stopColor="#fff"/><stop offset=".2" stopColor="#ff9aa5"/><stop offset=".55" stopColor="#f10b35"/><stop offset="1" stopColor="#7b001b"/></radialGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <ellipse cx="220" cy="468" rx="170" ry="20" fill="#e5092a" opacity=".15"/>
        <path d="M78 440 Q90 350 142 330 L142 270 Q96 234 103 160 Q112 54 220 42 Q328 54 337 160 Q344 234 298 270 L298 330 Q350 350 362 440 L320 465 H120Z" fill="url(#shell)" stroke="url(#edge)" strokeWidth="5"/>
        <path d="M118 150 Q125 55 220 50 Q315 55 322 150 L300 245 Q220 286 140 245Z" fill="#100b10" stroke="#7e2537" strokeWidth="5"/>
        <path d="M143 151 Q220 105 297 151 L282 224 Q220 252 158 224Z" fill="#050407" stroke="#3c1822" strokeWidth="4"/>
        <g filter="url(#glow)">
          <ellipse cx="176" cy="181" rx="27" ry="15" fill="url(#eye)"/>
          <ellipse cx="264" cy="181" rx="27" ry="15" fill="url(#eye)"/>
          <ellipse cx="176" cy="181" rx="8" ry="11" fill="#fff" opacity=".9"/>
          <ellipse cx="264" cy="181" rx="8" ry="11" fill="#fff" opacity=".9"/>
        </g>
        <path d="M189 235 Q220 250 251 235" fill="none" stroke="#9a3449" strokeWidth="5" strokeLinecap="round"/>
        <path d="M142 287 L112 329 L96 404 M298 287 L328 329 L344 404" fill="none" stroke="#5c2532" strokeWidth="16" strokeLinecap="round"/>
        <path d="M160 310 L280 310 M145 354 L295 354 M130 400 L310 400" stroke="#9e3448" strokeWidth="3" opacity=".7"/>
        <path d="M220 280 L220 432" stroke="#e5092a" strokeWidth="4" opacity=".65"/>
        <circle cx="220" cy="354" r="12" fill="#e5092a" filter="url(#glow)"/>
        <path d="M110 125 L72 100 L82 190 L112 210 M330 125 L368 100 L358 190 L328 210" fill="url(#shell)" stroke="#9a3045" strokeWidth="5"/>
      </svg>
    </div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [intro, setIntro] = useState(!reduceMotion);
  const [scene, setScene] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduceMotion) { setIntro(false); return; }
    const started = Date.now();
    const tick = window.setInterval(() => {
      const elapsed = Date.now() - started;
      setScene(Math.min(3, Math.floor((elapsed / INTRO_MS) * 4)));
      if (elapsed >= INTRO_MS) { setIntro(false); window.clearInterval(tick); }
    }, 80);
    return () => window.clearInterval(tick);
  }, [reduceMotion]);

  const handlePointer = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: Math.max(-12, Math.min(12, (event.clientX - rect.left - rect.width / 2) / 28)),
      y: Math.max(-10, Math.min(10, (event.clientY - rect.top - rect.height / 2) / 38)),
    });
  };

  return (
    <section id="home" onMouseMove={handlePointer} className="hero relative isolate min-h-[100svh] overflow-hidden flex items-center px-5 sm:px-8 lg:px-12">
      <div className="ambient" aria-hidden="true" />
      <div className="grid-lines" aria-hidden="true" />
      <div className="robot-backdrop" aria-hidden="true"><Robot x={pointer.x} y={pointer.y} /></div>

      {intro && (
        <div className="intro-screen" aria-label="Portfolio introduction">
          <div className="intro-grain" />
          <div className="intro-orbit orbit-one" /><div className="intro-orbit orbit-two" />
          <div className="intro-copy">
            <span className="intro-kicker">AYMANE CHOKRI · DIGITAL PORTFOLIO</span>
            <p key={scene} className="intro-line">
              {["A NEW SIGNAL IS AWAKENING", "ENTERING THE RED ZONE", "THE GUARDIAN HAS ARRIVED", "MEET THE DEVELOPER"][scene]}
            </p>
            <span className="intro-progress"><i style={{ width: `${Math.min(100, ((scene + 1) / 4) * 100)}%` }} /></span>
          </div>
          <button className="skip-intro" onClick={() => setIntro(false)}><FiSkipForward /> Skip intro</button>
        </div>
      )}

      <div className={`hero-content relative z-10 mx-auto w-full max-w-7xl ${intro ? "content-hidden" : "content-visible"}`}>
        <div className="hero-copy max-w-2xl">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="eyebrow">
            <span className="status-dot" /> AVAILABLE FOR INTERNSHIP · FULL-STACK DEVELOPMENT
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .7 }}>
            Building digital<br />experiences with <span>purpose.</span>
          </motion.h1>
          <motion.p className="role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }}>
            Hi, I’m <strong>Aymane Chokri</strong> — Web Developer
          </motion.p>
          <motion.p className="description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}>
            I craft modern, responsive web experiences and turn ideas into thoughtful, functional products.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .65 }}>
            <a className="primary-action" href="#Project">Explore my work <FiArrowDownRight /></a>
            <a className="secondary-action" href="#Contact">Let’s connect</a>
          </motion.div>
          <motion.div className="socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }}>
            <a href="https://github.com/aymanechoukri" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/aymane-chokri-8750a6321/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="mailto:chokriaymane2000@gmail.com" aria-label="Email"><FiMail /></a>
          </motion.div>
        </div>
        <motion.div className="portrait-stage" initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .35, duration: .9 }}>
          <div className="portrait-ring" />
          <Image src="/image/aymane-portrait.png" alt="Aymane Chokri" width={880} height={1117} priority className="portrait" />
          <span className="portrait-index">01 <i /> DEVELOPER</span>
        </motion.div>
      </div>

      <style jsx>{`
        .hero{background:#100406;color:#fff;isolation:isolate}
        .ambient{position:absolute;inset:-15%;z-index:-3;background:radial-gradient(ellipse at 75% 48%,rgba(101,0,20,.46),transparent 42%),radial-gradient(ellipse at 15% 85%,rgba(229,9,42,.13),transparent 35%);pointer-events:none}
        .grid-lines{position:absolute;inset:0;z-index:-2;opacity:.13;background-image:linear-gradient(rgba(229,9,42,.18) 1px,transparent 1px),linear-gradient(90deg,rgba(229,9,42,.18) 1px,transparent 1px);background-size:72px 72px;mask-image:linear-gradient(90deg,transparent,black 55%,black)}
        .robot-backdrop{position:absolute;z-index:-1;right:-2%;bottom:-18%;width:min(52vw,650px);opacity:.23;filter:drop-shadow(0 0 35px rgba(229,9,42,.25));pointer-events:none}
        .robot{width:100%;height:auto;transform:translate(var(--look-x),var(--look-y));transition:transform .2s ease-out;animation:robot-idle 6s ease-in-out infinite}
        .hero-content{display:grid;grid-template-columns:1.1fr .9fr;align-items:center;gap:2rem;padding-top:7rem;padding-bottom:5rem;transition:opacity .6s,transform .8s}
        .content-hidden{opacity:0;transform:translateY(22px);pointer-events:none}.content-visible{opacity:1;transform:none}
        .eyebrow{font-size:.68rem;letter-spacing:.22em;color:#e9a5b0;font-weight:700;display:flex;align-items:center;gap:.7rem;margin-bottom:2rem}
        .status-dot{width:7px;height:7px;border-radius:50%;background:#e5092a;box-shadow:0 0 14px #e5092a}
        h1{font-size:clamp(3.1rem,6.4vw,6.6rem);line-height:.98;letter-spacing:-.065em;font-weight:800}
        h1 span{color:#e5092a;text-shadow:0 0 38px rgba(229,9,42,.24)}
        .role{font-size:1.15rem;color:#e8dadd;margin-top:2rem}.role strong{color:#fff}
        .description{max-width:34rem;color:#a9959a;line-height:1.8;margin-top:1rem}
        .hero-actions{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin-top:2rem}
        .primary-action,.secondary-action{display:inline-flex;align-items:center;gap:.8rem;padding:1rem 1.3rem;border-radius:3px;font-size:.85rem;font-weight:700;transition:.25s}
        .primary-action{background:#e5092a;color:white;box-shadow:0 12px 35px rgba(229,9,42,.2)}.primary-action:hover{background:#ff1c3d;transform:translateY(-3px)}
        .secondary-action{border:1px solid #63303b;color:#eadde0}.secondary-action:hover{border-color:#e5092a;color:#fff}
        .socials{display:flex;gap:1.2rem;margin-top:2.2rem}.socials a{color:#927d83;font-size:1.15rem;transition:.2s}.socials a:hover{color:#e5092a;transform:translateY(-3px)}
        .portrait-stage{position:relative;justify-self:center;width:min(100%,470px);display:flex;align-items:end;justify-content:center;min-height:540px}
        .portrait{position:relative;z-index:1;width:100%;height:auto;max-height:76vh;object-fit:contain;object-position:bottom;filter:drop-shadow(0 20px 60px rgba(0,0,0,.55))}
        .portrait-ring{position:absolute;width:86%;aspect-ratio:1;border:1px solid rgba(229,9,42,.45);border-radius:50%;top:14%;box-shadow:0 0 65px rgba(229,9,42,.12),inset 0 0 55px rgba(229,9,42,.08)}
        .portrait-index{position:absolute;bottom:1rem;right:-1rem;color:#987d84;font-size:.62rem;letter-spacing:.2em;display:flex;align-items:center;gap:.6rem}.portrait-index i{display:block;width:36px;height:1px;background:#e5092a}
        .intro-screen{position:absolute;inset:0;z-index:20;background:#080204;display:grid;place-items:center;overflow:hidden;animation:intro-out .7s ease 6.5s forwards}
        .intro-grain{position:absolute;inset:0;opacity:.2;background-image:radial-gradient(#a53a4d 1px,transparent 1px);background-size:5px 5px;mask-image:radial-gradient(ellipse,black,transparent 75%)}
        .intro-orbit{position:absolute;width:min(75vw,720px);aspect-ratio:1;border:1px solid rgba(229,9,42,.2);border-radius:50%;animation:orbit 14s linear infinite}
        .orbit-two{width:min(52vw,500px);border-style:dashed;animation-direction:reverse;animation-duration:20s}
        .intro-copy{position:relative;text-align:center;padding:2rem}
        .intro-kicker{font-size:.65rem;letter-spacing:.3em;color:#9f5361}
        .intro-line{font-size:clamp(1.25rem,3vw,2.6rem);font-weight:800;letter-spacing:.12em;margin:1.4rem 0;color:#fff;animation:line-in .55s ease both}
        .intro-progress{display:block;width:min(280px,65vw);height:2px;background:#32111a;margin:2rem auto 0}.intro-progress i{display:block;height:100%;background:#e5092a;box-shadow:0 0 15px #e5092a;transition:width .25s}
        .skip-intro{position:absolute;right:2rem;bottom:2rem;display:flex;align-items:center;gap:.55rem;color:#bdaab0;font-size:.75rem;letter-spacing:.08em}.skip-intro:hover{color:white}
        @keyframes orbit{to{transform:rotate(360deg)}}@keyframes line-in{from{opacity:0;transform:translateY(12px);filter:blur(8px)}to{opacity:1;transform:none;filter:blur(0)}}@keyframes robot-idle{0%,100%{translate:0 0}50%{translate:0 -12px}}@keyframes intro-out{to{opacity:0;visibility:hidden;pointer-events:none}} 
        @media(max-width:800px){.hero-content{grid-template-columns:1fr;gap:0;padding-top:7rem;padding-bottom:4rem}.hero-copy{text-align:center;margin:auto}.eyebrow{justify-content:center;letter-spacing:.12em;font-size:.58rem}.hero-actions,.socials{justify-content:center}.portrait-stage{min-height:0;width:min(72vw,340px);margin:1.8rem auto 0}.portrait{max-height:42vh}.portrait-index{right:-1.5rem}.robot-backdrop{width:90vw;right:-24%;bottom:0;opacity:.14}.description{margin-left:auto;margin-right:auto}h1{font-size:clamp(2.8rem,11vw,4.8rem)}}
        @media(max-width:420px){.hero{padding-left:1rem;padding-right:1rem}.hero-content{padding-top:6rem}.portrait-stage{width:78vw}.eyebrow{font-size:.52rem}.skip-intro{right:1rem;bottom:1.2rem}}
        @media(prefers-reduced-motion:reduce){.intro-screen{display:none}.robot,.intro-orbit{animation:none}.hero-content{opacity:1;transform:none;transition:none}}
      `}</style>
    </section>
  );
}
