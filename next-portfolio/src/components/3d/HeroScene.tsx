"use client";

import { useRef } from "react";
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
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={[2, 0, 0]} scale={1.5}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#21808d"
          roughness={0.1}
          metalness={0.8}
          wireframe={true}
        />
      </mesh>
      <mesh position={[-2, 1, -2]} scale={0.8}>
        <torusKnotGeometry args={[0.6, 0.2, 100, 16]} />
        <meshStandardMaterial
          color="#32a4b3"
          roughness={0.2}
          metalness={1}
          emissive="#21808d"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full opacity-60">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#21808d" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <FloatingElement />
      </Canvas>
    </div>
  );
}
