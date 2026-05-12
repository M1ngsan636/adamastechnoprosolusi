import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float, Sphere } from '@react-three/drei';

const ParticleField = () => {
  const count = 150;
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, []);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.001;
    groupRef.current.rotation.x += 0.0005;
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: count }).map((_, i) => (
        <Float
          key={i}
          speed={2} 
          rotationIntensity={0.5} 
          floatIntensity={0.5}
          position={[
            points[i * 3],
            points[i * 3 + 1],
            points[i * 3 + 2]
          ]}
        >
          <Sphere args={[0.02, 16, 16]}>
            <meshBasicMaterial color="#D1FF00" transparent opacity={0.3} />
          </Sphere>
        </Float>
      ))}
    </group>
  );
};

const Grid = () => {
    return (
        <gridHelper 
            args={[20, 20, "#222222", "#111111"]} 
            rotation={[Math.PI / 2, 0, 0]} 
            position={[0, 0, -2]}
        />
    );
}

export const VisualCore = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <ParticleField />
        <Grid />
      </Canvas>
    </div>
  );
};
