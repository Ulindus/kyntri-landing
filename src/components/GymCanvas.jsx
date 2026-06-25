import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import GymRobot from "./GymRobot";

export default function GymCanvas() {
  return (
    <Canvas
  camera={{
    position: [0, 1.5, 7],
    fov: 40,
  }}
>
      <ambientLight intensity={1.8} />

      <directionalLight
        position={[5, 8, 5]}
        intensity={3}
        castShadow
      />

      <pointLight
        position={[-5, 3, 5]}
        intensity={1.5}
        color="#22d3ee"
      />

      <GymRobot />

      <Environment preset="city" />

      
    </Canvas>
  );
}