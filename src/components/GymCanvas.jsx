import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import GymHuman from "./GymHuman";

export default function GymCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 1.6, 5], fov: 35 }}
      shadows
    >
      <ambientLight intensity={2} />

      <directionalLight
        position={[5, 8, 5]}
        intensity={3}
        castShadow
      />

      <pointLight
        position={[-5, 4, 5]}
        intensity={2}
        color="#22d3ee"
      />

      <Environment preset="city" />

      <GymHuman />

      <OrbitControls
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}