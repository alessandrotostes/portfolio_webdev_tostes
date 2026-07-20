"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment, Stars } from "@react-three/drei";
import * as THREE from "three";

function FloatingElement() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={2} floatIntensity={2.5}>
      <mesh ref={meshRef} position={[2.5, 0.5, 0]} scale={1.6}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#8b5cf6"
          roughness={0.05}
          metalness={0.9}
          wireframe={true}
        />
      </mesh>
      <mesh position={[-2.5, 1.2, -1]} scale={0.9}>
        <torusKnotGeometry args={[0.6, 0.2, 100, 16]} />
        <meshStandardMaterial
          color="#10b981"
          roughness={0.1}
          metalness={1}
          emissive="#8b5cf6"
          emissiveIntensity={0.6}
        />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full opacity-70 dark:opacity-50">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <Environment preset="city" />
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={2.5} color="#8b5cf6" />
          <Stars radius={100} depth={50} count={3500} factor={5} saturation={0} fade speed={1.5} />
          <FloatingElement />
        </Suspense>
      </Canvas>
    </div>
  );
}
