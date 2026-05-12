import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function StarField({ count = 2000, color = "#ffffff" }) {
  const ref = useRef<THREE.Points>(null!);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.0005;
      ref.current.rotation.y += 0.0003;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

function FloatingShapes({ template = 'minimal' }) {
  const ref = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.1;
      ref.current.children.forEach((child, i) => {
        child.position.y += Math.sin(t + i) * 0.002;
      });
    }
  });

  const shapes = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 20; i++) {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 30;
      arr.push({ x, y, z });
    }
    return arr;
  }, []);

  return (
    <group ref={ref}>
      {shapes.map((pos, i) => (
        <mesh key={i} position={[pos.x, pos.y, pos.z]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial 
            color={template === 'bold' ? '#ff3e00' : '#444'} 
            wireframe={template === 'minimal'}
            opacity={0.3}
            transparent
          />
        </mesh>
      ))}
    </group>
  );
}

function TechGrid({ color = "#ffffff" }) {
  const ref = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = -Math.PI / 2.5 + Math.sin(t * 0.1) * 0.1;
      ref.current.position.y = -5 + Math.sin(t * 0.5) * 0.2;
    }
  });

  return (
    <group ref={ref}>
      <gridHelper args={[100, 40, color, color]} position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <meshBasicMaterial transparent opacity={0.15} color={color} />
      </gridHelper>
    </group>
  );
}

function TechNodes({ color = "#ffffff" }) {
  const ref = useRef<THREE.Group>(null!);
  const count = 40;
  
  const nodes = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [(Math.random() - 0.5) * 40, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10],
      size: Math.random() * 0.2 + 0.1,
      speed: Math.random() * 0.5 + 0.2
    }));
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.children.forEach((child, i) => {
        child.position.y += Math.sin(t * nodes[i].speed) * 0.005;
        child.rotation.y += 0.01;
      });
    }
  });

  return (
    <group ref={ref}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position as [number, number, number]}>
          <octahedronGeometry args={[node.size, 0]} />
          <meshStandardMaterial color={color} wireframe transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
}

export default function WebGLBackground({ template = 'minimal' }: { template?: string }) {
  const colors: Record<string, string> = {
    minimal: "#000000",
    immersive: "#050505",
    bold: "#0d0121",
    sophisticated: "#020617",
    corporate: "#ffffff",
    "premium-v2": "#050505",
    "premium-v1": "#000000",
    "minimal-professional": "#f8fafc"
  };

  const starColor = template === 'sophisticated' || template === 'premium-v2' ? '#22d3ee' : (template === 'bold' ? '#a78bfa' : (template === 'corporate' ? '#3b82f6' : '#fff'));

  return (
    <div className="fixed inset-0 -z-10 bg-current transition-colors duration-1000" style={{ color: colors[template] || colors.minimal }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <StarField color={starColor} />
        {template === 'premium-v2' && (
          <>
            <TechGrid color="#22d3ee" />
            <TechNodes color="#22d3ee" />
          </>
        )}
        {template !== 'minimal' && template !== 'premium-v2' && <FloatingShapes template={template} />}
      </Canvas>
    </div>
  );
}
