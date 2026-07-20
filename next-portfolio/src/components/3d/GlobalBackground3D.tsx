"use client";

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const SECTION_IDS = ['home', 'services', 'pwa-showcase', 'analytics', 'projects', 'about', 'github'];

function SceneController() {
  const { size } = useThree();
  const mousePos = useRef({ x: 0, y: 0 });
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    // Locate visible DOM sections dynamically
    if (elementsRef.current.length === 0) {
      const found = SECTION_IDS.map(id => document.getElementById(id));
      if (found.some(el => el !== null)) {
        elementsRef.current = found;
      }
    }

    const elements = elementsRef.current.filter((el): el is HTMLElement => el !== null);
    const scrollTop = window.scrollY;
    const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);

    const keyframes = [
      { pos: [0, 0, 5.5], rot: [0, 0, 0] },             // Home (y=0)
      { pos: [1.2, -1.8, 4.2], rot: [0, -0.3, 0] },       // Services (y=-1.8)
      { pos: [-1.2, -3.2, 4.0], rot: [0, 0.3, 0] },       // PWA Showcase (y=-3.2)
      { pos: [1.5, -4.5, 4.0], rot: [0, -0.4, 0] },       // Analytics (y=-4.5)
      { pos: [-1.5, -5.8, 4.2], rot: [0, 0.3, 0] },       // Projects (y=-5.8)
      { pos: [1.2, -7.2, 4.0], rot: [0, -0.3, 0] },       // About (y=-7.2)
      { pos: [0, -8.5, 5.5], rot: [0, 0, 0] }             // Github (y=-8.5)
    ];

    let pageIndex = 0;
    let pageProgress = 0;

    if (elements.length < 2) {
      const p = (scrollTop / maxScroll) * (keyframes.length - 1);
      pageIndex = Math.max(0, Math.min(Math.floor(p), keyframes.length - 2));
      pageProgress = p - pageIndex;
    } else {
      for (let i = 0; i < elements.length - 1; i++) {
        const start = elements[i].offsetTop - 100;
        const end = elements[i + 1].offsetTop - 100;

        if (scrollTop >= start && scrollTop < end) {
          pageIndex = i;
          pageProgress = Math.max(0, Math.min((scrollTop - start) / Math.max(end - start, 1), 1));
          break;
        }
        if (i === elements.length - 2 && scrollTop >= end) {
          pageIndex = elements.length - 2;
          pageProgress = Math.min((scrollTop - end) / 500, 1.0);
        }
      }
    }

    const current = keyframes[pageIndex] || keyframes[0];
    const next = keyframes[pageIndex + 1] || current;

    const targetX = THREE.MathUtils.lerp(current.pos[0], next.pos[0], pageProgress);
    const targetY = THREE.MathUtils.lerp(current.pos[1], next.pos[1], pageProgress);
    const targetZ = THREE.MathUtils.lerp(current.pos[2], next.pos[2], pageProgress);

    const targetRotX = THREE.MathUtils.lerp(current.rot[0], next.rot[0], pageProgress);
    const targetRotY = THREE.MathUtils.lerp(current.rot[1], next.rot[1], pageProgress);
    const targetRotZ = THREE.MathUtils.lerp(current.rot[2], next.rot[2], pageProgress);

    // Mouse parallax factor
    const aspectFactor = Math.min(size.width / 1200, 1);
    const mouseX = mousePos.current.x * 0.4 * aspectFactor;
    const mouseY = mousePos.current.y * 0.4 * aspectFactor;

    // Smooth camera positional lerp
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX + mouseX, 0.06);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY + mouseY, 0.06);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.06);

    // Smooth camera rotational lerp
    state.camera.rotation.x = THREE.MathUtils.lerp(state.camera.rotation.x, targetRotX - mouseY * 0.06, 0.06);
    state.camera.rotation.y = THREE.MathUtils.lerp(state.camera.rotation.y, targetRotY + mouseX * 0.06, 0.06);
    state.camera.rotation.z = THREE.MathUtils.lerp(state.camera.rotation.z, targetRotZ, 0.06);
  });

  return null;
}

// 2. GPU Floating Particles (Starfield)
function FloatingStars({ count = 500 }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const geometryRef = useRef<THREE.BufferGeometry>(null!);

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;      // X
      pos[i * 3 + 1] = (Math.random() - 0.5) * 22;  // Y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;  // Z
      spd[i] = 0.04 + Math.random() * 0.12;        // Speed
    }
    return [pos, spd];
  }, [count]);

  const setGeometry = (node: THREE.BufferGeometry | null) => {
    if (node) {
      geometryRef.current = node;
      node.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    }
  };

  useFrame((state, delta) => {
    if (!geometryRef.current || !pointsRef.current) return;
    const positionAttribute = geometryRef.current.getAttribute('position');
    if (!positionAttribute) return;

    const posArr = positionAttribute.array as Float32Array;

    for (let i = 0; i < count; i++) {
      posArr[i * 3 + 1] -= speeds[i] * delta * 0.4;
      if (posArr[i * 3 + 1] < -12) {
        posArr[i * 3 + 1] = 12;
      }
    }
    positionAttribute.needsUpdate = true;

    pointsRef.current.rotation.y += delta * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry ref={setGeometry} />
      <pointsMaterial
        color="#38bdf8"
        size={0.032}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.35}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// 3. Morphing Hero Blob (y = 0)
function BlobHero() {
  const blobRef = useRef<THREE.Mesh>(null!);
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (blobRef.current) blobRef.current.rotation.y += delta * 0.12;
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.08;
      ring1Ref.current.rotation.y += delta * 0.06;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.1;
      ring2Ref.current.rotation.z += delta * 0.04;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <Float speed={2} floatIntensity={0.5} rotationIntensity={0.3}>
        <mesh ref={blobRef}>
          <icosahedronGeometry args={[1.2, 32]} />
          <MeshDistortMaterial
            color="#0ea5e9"
            distort={0.35}
            speed={1.6}
            roughness={0.15}
            metalness={0.2}
            transmission={0.65}
            thickness={1.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </Float>

      <mesh ref={ring1Ref} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.0, 0.015, 16, 120]} />
        <meshStandardMaterial
          color="#2dd4bf"
          emissive="#2dd4bf"
          emissiveIntensity={0.3}
          roughness={0.2}
        />
      </mesh>

      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, -Math.PI / 3, 0]}>
        <torusGeometry args={[2.3, 0.01, 16, 120]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={0.2}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

// 4. Marketing Radar Dodecahedron (y = -3.2)
function MarketingShape() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= delta * 0.15;
      meshRef.current.rotation.x += delta * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.2;
      ringRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group position={[-1.8, -3.2, 0]}>
      <Float speed={2} floatIntensity={0.6} rotationIntensity={0.4}>
        <mesh ref={meshRef}>
          <dodecahedronGeometry args={[0.65]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={0.5}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
        
        <mesh ref={ringRef} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[0.95, 0.03, 16, 64]} />
          <meshStandardMaterial
            color="#2dd4bf"
            emissive="#2dd4bf"
            emissiveIntensity={0.8}
            roughness={0.1}
          />
        </mesh>
      </Float>
    </group>
  );
}

// 5. Skills WebGL Constellation (y = -5.8)
function SkillsNetwork() {
  const groupRef = useRef<THREE.Group>(null!);

  const nodes = useMemo(() => [
    [0, 0, 0], [0.8, 0.6, -0.4], [-0.8, -0.5, 0.3], [-0.6, 0.7, -0.5],
    [0.5, -0.8, 0.5], [1.1, -0.1, 0.1], [-1.2, 0.2, -0.2], [0.3, 1.2, -0.3],
    [-0.2, -1.1, 0.2], [1.0, 0.8, 0.2], [-0.9, 0.9, 0.4], [0.7, -1.0, -0.3]
  ], []);

  const linePositions = useMemo(() => {
    const connections = [
      [0, 1], [0, 2], [0, 3], [0, 4], [1, 5], [1, 7], [2, 6], [2, 8],
      [3, 6], [3, 10], [4, 5], [4, 11], [5, 9], [7, 9], [8, 11], [10, 7]
    ];
    const pos = new Float32Array(connections.length * 6);
    connections.forEach(([startIdx, endIdx], i) => {
      const start = nodes[startIdx];
      const end = nodes[endIdx];
      pos[i * 6] = start[0];
      pos[i * 6 + 1] = start[1];
      pos[i * 6 + 2] = start[2];
      pos[i * 6 + 3] = end[0];
      pos[i * 6 + 4] = end[1];
      pos[i * 6 + 5] = end[2];
    });
    return pos;
  }, [nodes]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
      groupRef.current.rotation.x += delta * 0.03;
    }
  });

  return (
    <group ref={groupRef} position={[1.8, -5.8, 0]}>
      <Float speed={1.5} floatIntensity={0.3}>
        {nodes.map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#38bdf8" : "#2dd4bf"}
              emissive={i % 2 === 0 ? "#38bdf8" : "#2dd4bf"}
              emissiveIntensity={0.6}
            />
          </mesh>
        ))}

        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[linePositions, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#38bdf8" transparent opacity={0.35} />
        </lineSegments>
      </Float>
    </group>
  );
}

// 6. Contact Footer Vortex (y = -8.0)
function ContactVortex() {
  const pointsRef = useRef<THREE.Points>(null!);

  const [positions] = useMemo(() => {
    const count = 300;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.5 + Math.random() * 2.2;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.6;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return [pos];
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group position={[0, -8.0, 0]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#2dd4bf"
          size={0.04}
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function GlobalBackground3D() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transform-gpu [backface-visibility:hidden] [transform:translateZ(0)]">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 55 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ width: '100vw', height: '100vh' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#2dd4bf" />
        
        <SceneController />
        <FloatingStars count={500} />
        <BlobHero />
        <MarketingShape />
        <SkillsNetwork />
        <ContactVortex />
      </Canvas>
    </div>
  );
}
