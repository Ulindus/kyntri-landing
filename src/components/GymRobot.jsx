import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function GymRobot() {
  const { scene } = useGLTF("/models/kyntri-robot.glb");

  const robotRef = useRef();

  useFrame(({ clock }) => {
    if (robotRef.current) {
      robotRef.current.position.y =
        -0.3 + Math.sin(clock.elapsedTime * 2) * 0.08;

      robotRef.current.rotation.y =
        Math.sin(clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <primitive
      ref={robotRef}
      object={scene}
      scale={1.9}
      position={[0, -0.3, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

useGLTF.preload("/models/kyntri-robot.glb");