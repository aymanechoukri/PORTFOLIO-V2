"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";

type SceneState = { progress: number; scene: number; active: boolean };

function Cable({ points, radius = 0.035, color = "#26070d" }: { points: THREE.Vector3[]; radius?: number; color?: string }) {
  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);
  return <mesh><tubeGeometry args={[curve, 32, radius, 8, false]} /><meshStandardMaterial color={color} metalness={0.82} roughness={0.28} /></mesh>;
}

function MechanicalRobot({ progress, active }: { progress: React.MutableRefObject<number>; active: React.MutableRefObject<boolean> }) {
  const root = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);
  const leftEye = useRef<THREE.Mesh>(null);
  const rightEye = useRef<THREE.Mesh>(null);
  const leftShoulder = useRef<THREE.Group>(null);
  const rightShoulder = useRef<THREE.Group>(null);
  const pointer = useRef(new THREE.Vector2());
  const smoothPointer = useRef(new THREE.Vector2());
  const { camera } = useThree();

  const blackMetal = useMemo(() => new THREE.MeshStandardMaterial({ color: "#111014", metalness: 0.92, roughness: 0.24 }), []);
  const edgeMetal = useMemo(() => new THREE.MeshStandardMaterial({ color: "#343039", metalness: 0.96, roughness: 0.2 }), []);
  const dark = useMemo(() => new THREE.MeshStandardMaterial({ color: "#050406", metalness: 0.7, roughness: 0.34 }), []);
  const red = useMemo(() => new THREE.MeshStandardMaterial({ color: "#ff183b", emissive: "#e5092a", emissiveIntensity: 3.2, metalness: 0.25, roughness: 0.18 }), []);

  useEffect(() => {
    const move = (event: PointerEvent) => {
      pointer.current.set((event.clientX / window.innerWidth) * 2 - 1, -((event.clientY / window.innerHeight) * 2 - 1));
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    smoothPointer.current.lerp(pointer.current, 1 - Math.exp(-delta * 3.4));
    if (head.current) {
      const reveal = THREE.MathUtils.smoothstep(progress.current, 0.28, 0.66);
      head.current.rotation.y = THREE.MathUtils.lerp(head.current.rotation.y, smoothPointer.current.x * 0.34 + Math.sin(t * 0.42) * 0.035, 1 - Math.exp(-delta * 3.2));
      head.current.rotation.x = THREE.MathUtils.lerp(head.current.rotation.x, -smoothPointer.current.y * 0.18 + Math.sin(t * 0.7) * 0.018, 1 - Math.exp(-delta * 3));
      head.current.rotation.z = Math.sin(t * 0.31) * 0.018;
      head.current.scale.setScalar(0.001 + reveal * 0.999);
    }
    if (root.current) {
      root.current.position.y = -0.72 + Math.sin(t * 1.1) * 0.035;
      root.current.rotation.y = Math.sin(t * 0.22) * 0.035;
    }
    if (leftEye.current && rightEye.current) {
      const eyeX = smoothPointer.current.x * 0.045;
      const eyeY = smoothPointer.current.y * 0.035;
      leftEye.current.position.x = -0.39 + eyeX;
      rightEye.current.position.x = 0.39 + eyeX;
      leftEye.current.position.y = 2.18 + eyeY;
      rightEye.current.position.y = 2.18 + eyeY;
      const pulse = 2.6 + Math.sin(t * 2.2) * 0.5;
      (leftEye.current.material as THREE.MeshStandardMaterial).emissiveIntensity = pulse;
      (rightEye.current.material as THREE.MeshStandardMaterial).emissiveIntensity = pulse;
    }
    if (leftShoulder.current && rightShoulder.current) {
      const idle = Math.sin(t * 1.05) * 0.018;
      leftShoulder.current.rotation.z = idle;
      rightShoulder.current.rotation.z = -idle;
    }
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, active.current ? smoothPointer.current.x * 0.12 : 0, 1 - Math.exp(-delta * 1.2));
  });

  return (
    <group ref={root}>
      {/* Upper torso and chest armour */}
      <mesh position={[0, 0.12, 0]} scale={[1.36, 0.92, 0.62]} material={blackMetal}><sphereGeometry args={[1, 48, 32]} /></mesh>
      <mesh position={[0, 0.16, 0.48]} scale={[1.02, 0.56, 0.2]} material={edgeMetal}><boxGeometry args={[1, 1, 1]} /></mesh>
      <mesh position={[0, 0.12, 0.69]} scale={[0.58, 0.22, 0.08]} material={red}><boxGeometry args={[1, 1, 1]} /></mesh>
      <mesh position={[0, -0.36, 0.58]} scale={[0.72, 0.16, 0.12]} material={dark}><boxGeometry args={[1, 1, 1]} /></mesh>
      <mesh position={[0, -0.03, 0.72]} scale={[0.12, 0.38, 0.08]} material={red}><boxGeometry args={[1, 1, 1]} /></mesh>

      {/* Shoulder assemblies */}
      <group ref={leftShoulder} position={[-1.12, 0.32, 0]}>
        <mesh scale={[0.54, 0.72, 0.58]} material={edgeMetal}><sphereGeometry args={[1, 32, 24]} /></mesh>
        <mesh position={[0, -0.1, 0.28]} rotation={[0, 0, -0.24]} scale={[0.58, 0.19, 0.12]} material={blackMetal}><boxGeometry args={[1, 1, 1]} /></mesh>
        <mesh position={[0, -0.46, 0]} scale={[0.28, 0.48, 0.3]} material={dark}><cylinderGeometry args={[0.22, 0.3, 1, 12]} /></mesh>
        <mesh position={[0, 0.05, 0.5]} material={red}><torusGeometry args={[0.13, 0.025, 8, 24]} /></mesh>
      </group>
      <group ref={rightShoulder} position={[1.12, 0.32, 0]}>
        <mesh scale={[0.54, 0.72, 0.58]} material={edgeMetal}><sphereGeometry args={[1, 32, 24]} /></mesh>
        <mesh position={[0, -0.1, 0.28]} rotation={[0, 0, 0.24]} scale={[0.58, 0.19, 0.12]} material={blackMetal}><boxGeometry args={[1, 1, 1]} /></mesh>
        <mesh position={[0, -0.46, 0]} scale={[0.28, 0.48, 0.3]} material={dark}><cylinderGeometry args={[0.22, 0.3, 1, 12]} /></mesh>
        <mesh position={[0, 0.05, 0.5]} material={red}><torusGeometry args={[0.13, 0.025, 8, 24]} /></mesh>
      </group>

      {/* Articulated neck */}
      <mesh position={[0, 1.08, 0]} scale={[0.34, 0.54, 0.34]} material={dark}><cylinderGeometry args={[0.72, 0.9, 1, 16]} /></mesh>
      {[0.78, 0.98, 1.18, 1.38].map((y) => <mesh key={y} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]} material={edgeMetal}><torusGeometry args={[0.28, 0.045, 8, 24]} /></mesh>)}
      <Cable points={[new THREE.Vector3(-0.25, 1.35, 0.1), new THREE.Vector3(-0.44, 1.08, 0.35), new THREE.Vector3(-0.31, 0.72, 0.55), new THREE.Vector3(-0.18, 0.52, 0.6)]} radius={0.045} />
      <Cable points={[new THREE.Vector3(0.25, 1.35, 0.1), new THREE.Vector3(0.44, 1.08, 0.35), new THREE.Vector3(0.31, 0.72, 0.55), new THREE.Vector3(0.18, 0.52, 0.6)]} radius={0.045} />

      {/* Head and helmet */}
      <group ref={head} position={[0, 2.28, 0]}>
        <mesh position={[0, 0.08, 0]} scale={[0.82, 1.02, 0.66]} material={blackMetal}><sphereGeometry args={[1, 64, 48]} /></mesh>
        <mesh position={[0, -0.32, 0.42]} rotation={[0.13, 0, 0]} scale={[0.68, 0.48, 0.27]} material={edgeMetal}><sphereGeometry args={[1, 40, 24]} /></mesh>
        <mesh position={[0, -0.66, 0.5]} rotation={[0.08, 0, 0]} scale={[0.48, 0.22, 0.22]} material={blackMetal}><coneGeometry args={[0.55, 0.48, 6]} /></mesh>
        {/* brow plates */}
        <mesh position={[-0.38, 0.2, 0.56]} rotation={[0, 0, -0.2]} scale={[0.48, 0.16, 0.12]} material={edgeMetal}><boxGeometry args={[1, 1, 1]} /></mesh>
        <mesh position={[0.38, 0.2, 0.56]} rotation={[0, 0, 0.2]} scale={[0.48, 0.16, 0.12]} material={edgeMetal}><boxGeometry args={[1, 1, 1]} /></mesh>
        {/* eye sockets and glowing eyes */}
        <mesh position={[-0.39, -0.04, 0.61]} rotation={[0, 0, 0.08]} scale={[0.3, 0.16, 0.08]} material={dark}><sphereGeometry args={[1, 24, 16]} /></mesh>
        <mesh position={[0.39, -0.04, 0.61]} rotation={[0, 0, -0.08]} scale={[0.3, 0.16, 0.08]} material={dark}><sphereGeometry args={[1, 24, 16]} /></mesh>
        <mesh ref={leftEye} position={[-0.39, 2.18, 0.69]} scale={[0.2, 0.055, 0.045]} material={red}><sphereGeometry args={[1, 24, 16]} /></mesh>
        <mesh ref={rightEye} position={[0.39, 2.18, 0.69]} scale={[0.2, 0.055, 0.045]} material={red}><sphereGeometry args={[1, 24, 16]} /></mesh>
        {/* temple discs */}
        {[-1, 1].map((side) => <group key={side} position={[side * 0.78, -0.02, 0]}>
          <mesh rotation={[0, 0, Math.PI / 2]} material={blackMetal}><cylinderGeometry args={[0.29, 0.29, 0.18, 32]} /></mesh>
          <mesh position={[0, 0, 0.1]} rotation={[0, 0, Math.PI / 2]} material={red}><torusGeometry args={[0.2, 0.025, 8, 32]} /></mesh>
          <mesh position={[0, 0, 0.13]} rotation={[0, 0, Math.PI / 2]} material={edgeMetal}><cylinderGeometry args={[0.12, 0.12, 0.06, 24]} /></mesh>
        </group>)}
        {/* helmet segmentation */}
        <mesh position={[0, 0.74, 0.08]} rotation={[0.28, 0, 0]} scale={[0.58, 0.12, 0.5]} material={edgeMetal}><boxGeometry args={[1, 1, 1]} /></mesh>
        <mesh position={[-0.63, 0.38, 0.08]} rotation={[0, 0, -0.48]} scale={[0.12, 0.55, 0.42]} material={edgeMetal}><boxGeometry args={[1, 1, 1]} /></mesh>
        <mesh position={[0.63, 0.38, 0.08]} rotation={[0, 0, 0.48]} scale={[0.12, 0.55, 0.42]} material={edgeMetal}><boxGeometry args={[1, 1, 1]} /></mesh>
        {/* cheek armour */}
        <mesh position={[-0.53, -0.4, 0.47]} rotation={[0, 0, -0.28]} scale={[0.2, 0.42, 0.14]} material={blackMetal}><boxGeometry args={[1, 1, 1]} /></mesh>
        <mesh position={[0.53, -0.4, 0.47]} rotation={[0, 0, 0.28]} scale={[0.2, 0.42, 0.14]} material={blackMetal}><boxGeometry args={[1, 1, 1]} /></mesh>
        {/* forehead sensor */}
        <mesh position={[0, 0.49, 0.61]} material={red}><sphereGeometry args={[0.045, 16, 12]} /></mesh>
      </group>
    </group>
  );
}

function World({ progress, active }: { progress: React.MutableRefObject<number>; active: React.MutableRefObject<boolean> }) {
  const { camera } = useThree();
  const world = useRef<THREE.Group>(null);
  const tunnel = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    const p = progress.current;
    const targetZ = THREE.MathUtils.lerp(8.6, 6.4, THREE.MathUtils.smoothstep(p, 0.12, 0.55));
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 1 - Math.exp(-delta * 2.2));
    camera.lookAt(0, 1.0, 0);
    if (world.current) world.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.12) * 0.025;
    if (tunnel.current) tunnel.current.position.z = -2.5 + Math.sin(state.clock.elapsedTime * 0.18) * 0.06;
  });
  return (
    <>
      <color attach="background" args={["#080204"]} />
      <fog attach="fog" args={["#100406", 7, 19]} />
      <ambientLight intensity={0.48} />
      <spotLight position={[-4, 6, 5]} intensity={95} angle={0.58} penumbra={0.8} color="#e5092a" />
      <spotLight position={[4, 4, -3]} intensity={70} angle={0.7} penumbra={0.8} color="#650014" />
      <pointLight position={[0, 2.5, 3]} intensity={38} distance={8} color="#ff263f" />
      <group ref={world}>
        <group ref={tunnel}>
          {Array.from({ length: 8 }, (_, i) => <mesh key={i} position={[0, 1, -i * 1.8]} rotation={[Math.PI / 2, 0, 0]} material={new THREE.MeshStandardMaterial({ color: "#26070d", emissive: "#650014", emissiveIntensity: 0.35, metalness: 0.8, roughness: 0.4 })}><torusGeometry args={[3.6 + i * 0.08, 0.025, 6, 64]} /></mesh>)}
          {[-1, 1].map((side) => <group key={side}>
            {Array.from({ length: 7 }, (_, i) => <mesh key={i} position={[side * (2.5 + i * 0.1), 1, -i * 1.8]} rotation={[0, 0, side * -0.18]}><boxGeometry args={[0.045, 2.6, 0.06]} /><meshStandardMaterial color="#650014" emissive="#e5092a" emissiveIntensity={0.7} /></mesh>)}
          </group>)}
        </group>
        <MechanicalRobot progress={progress} active={active} />
      </group>
      <ParticleField />
    </>
  );
}

function ParticleField() {
  const points = useMemo(() => {
    const values = new Float32Array(420 * 3);
    for (let i = 0; i < 420; i++) {
      values[i * 3] = (Math.sin(i * 127.1) * 0.5 + 0.5 - 0.5) * 10;
      values[i * 3 + 1] = (Math.sin(i * 311.7) * 0.5 + 0.5) * 7 - 2;
      values[i * 3 + 2] = -((i * 0.618) % 13);
    }
    return values;
  }, []);
  const ref = useRef<THREE.Points>(null);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.018;
      const material = ref.current.material as THREE.PointsMaterial;
      material.opacity = 0.38 + Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
    }
  });
  return <points ref={ref}><bufferGeometry><bufferAttribute attach="attributes-position" args={[points, 3]} /></bufferGeometry><pointsMaterial color="#e5092a" size={0.025} transparent opacity={0.42} sizeAttenuation depthWrite={false} /></points>;
}

function CinematicScene({ progress, active }: { progress: React.MutableRefObject<number>; active: React.MutableRefObject<boolean> }) {
  return <Canvas camera={{ position: [0, 1.0, 8.6], fov: 38 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: false, powerPreference: "low-power" }} fallback={<div className="intro-fallback">INITIALIZING VISUAL SYSTEM</div>}><World progress={progress} active={active} /></Canvas>;
}

const sceneTitles = ["INITIALIZING SYSTEM", "ENTERING THE TECHNOLOGICAL WORLD", "ROBOT SIGNAL DETECTED", "AYMANE CHOKRI — FULL-STACK DEVELOPER"];

export default function CinematicIntro() {
  const [visible, setVisible] = useState(false);
  const [scene, setScene] = useState(0);
  const [reduced, setReduced] = useState(false);
  const progress = useRef(0);
  const active = useRef(true);
  const root = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLDivElement>(null);
  const meterFill = useRef<HTMLIElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(preference.matches);
    if (preference.matches) return;
    setVisible(true);
    document.documentElement.style.overflow = "hidden";
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onUpdate: () => { progress.current = tl.progress(); },
        onComplete: () => {
          active.current = false;
          gsap.to(root.current, { autoAlpha: 0, duration: 0.85, ease: "power3.inOut", onComplete: () => setVisible(false) });
          document.documentElement.style.overflow = "";
        }
      });
      timeline.current = tl;
      tl.set(title.current, { autoAlpha: 0, y: 18 })
        .to(title.current, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" })
        .to(progress, { current: 0.1875, duration: 1.05, ease: "none" }, 0)
        .call(() => setScene(1), [], 1.5)
        .to(title.current, { autoAlpha: 0, y: -12, duration: 0.2 }, 1.35)
        .to(title.current, { autoAlpha: 1, y: 0, duration: 0.35 }, 1.62)
        .to(progress, { current: 0.375, duration: 1.05, ease: "none" }, 1.5)
        .call(() => setScene(2), [], 3)
        .to(title.current, { autoAlpha: 0, y: -12, duration: 0.2 }, 2.85)
        .to(title.current, { autoAlpha: 1, y: 0, duration: 0.35 }, 3.12)
        .to(progress, { current: 0.625, duration: 1.4, ease: "none" }, 3)
        .call(() => setScene(3), [], 5)
        .to(title.current, { autoAlpha: 0, y: -12, duration: 0.2 }, 4.85)
        .to(title.current, { autoAlpha: 1, y: 0, duration: 0.45 }, 5.15)
        .to(progress, { current: 1, duration: 2.1, ease: "none" }, 5)
        .to(meterFill.current, { width: "100%", duration: 7.5, ease: "none" }, 0)
        .to(title.current, { autoAlpha: 0, y: -10, duration: 0.45 }, 7.45);
    }, root);
    return () => {
      ctx.revert();
      timeline.current?.kill();
      document.documentElement.style.overflow = "";
    };
  }, []);

  const skip = () => {
    timeline.current?.progress(1);
    active.current = false;
    document.documentElement.style.overflow = "";
    setVisible(false);
  };

  if (!visible || reduced) return null;
  return (
    <div ref={root} className="cinematic-root" role="dialog" aria-modal="true" aria-label="Aymane Chokri cinematic introduction">
      <div className="cinematic-vignette" />
      <CinematicScene progress={progress} active={active} />
      <div className="cinematic-hud">
        <span className="hud-brand">AC <i /> DIGITAL EXPERIENCE</span>
        <span className="hud-counter">0{scene + 1} / 04</span>
      </div>
      <div ref={title} className="cinematic-title" aria-live="polite">
        <span>AYMANE CHOKRI · SYSTEM ONLINE</span>
        <h2>{sceneTitles[scene]}</h2>
        <div className="cinematic-meter"><i ref={meterFill} /></div>
      </div>
      <button className="cinematic-skip" onClick={skip}>SKIP INTRO <span>↗</span></button>
      <style jsx>{`
        .cinematic-root{position:fixed;inset:0;z-index:10000;background:#080204;color:#fff;overflow:hidden}
        .cinematic-root :global(canvas){position:absolute;inset:0;width:100%;height:100%;display:block}
        .cinematic-vignette{position:absolute;inset:0;z-index:1;pointer-events:none;background:radial-gradient(ellipse at 50% 44%,transparent 24%,rgba(8,2,4,.24) 58%,#080204 100%),linear-gradient(0deg,rgba(16,4,6,.8),transparent 35%,rgba(16,4,6,.35))}
        .cinematic-hud{position:absolute;z-index:2;top:clamp(1.2rem,4vw,3rem);left:clamp(1.2rem,5vw,4rem);right:clamp(1.2rem,5vw,4rem);display:flex;justify-content:space-between;color:#b78b93;font:600 .62rem/1.2 ui-monospace,monospace;letter-spacing:.2em}
        .hud-brand{display:flex;align-items:center;gap:.8rem}.hud-brand:first-letter{color:#e5092a}.hud-brand i{height:1px;width:36px;background:#e5092a}.hud-counter{color:#e5092a}
        .cinematic-title{position:absolute;z-index:2;left:50%;top:72%;transform:translateX(-50%);width:min(90vw,700px);text-align:center;pointer-events:none}
        .cinematic-title span{color:#c36a7a;font:600 .58rem/1.4 ui-monospace,monospace;letter-spacing:.28em}
        .cinematic-title h2{margin:.7rem 0 1.3rem;font-size:clamp(1.1rem,3vw,2rem);font-weight:800;letter-spacing:.12em;text-shadow:0 3px 24px #000}
        .cinematic-meter{height:2px;background:rgba(229,9,42,.18);width:min(300px,70vw);margin:auto}.cinematic-meter i{display:block;height:100%;background:#e5092a;box-shadow:0 0 14px #e5092a}
        .cinematic-skip{position:absolute;z-index:3;right:clamp(1.2rem,5vw,4rem);bottom:clamp(1.2rem,4vw,3rem);color:#d7c4c8;font:600 .65rem/1 ui-monospace,monospace;letter-spacing:.18em;border:1px solid rgba(229,9,42,.5);padding:.85rem 1.1rem;background:rgba(16,4,6,.55);transition:background .2s,color .2s}
        .cinematic-skip:hover{background:#e5092a;color:white}.cinematic-skip span{color:#e5092a;margin-left:.6rem}.cinematic-skip:hover span{color:white}
        .intro-fallback{position:absolute;inset:0;display:grid;place-items:center;background:#100406;color:#e5092a;font:700 1rem monospace;letter-spacing:.2em}
        @media(max-width:700px){.cinematic-title{top:68%}.cinematic-title h2{letter-spacing:.06em}.cinematic-root :global(canvas){opacity:.9}}
        @media(prefers-reduced-motion:reduce){.cinematic-root{display:none}}
      `}</style>
    </div>
  );
}
