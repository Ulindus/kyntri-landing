import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function GymHuman() {
  const group = useRef();

  const { scene, animations } = useGLTF("/models/gym-burpee.glb");

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const names = Object.keys(actions);

    console.log("Animations:", names);

    if (names.length > 0) {
      actions[names[0]]
        .reset()
        .fadeIn(0.4)
        .play();
    }
  }, [actions]);

  return (
    <group ref={group}>
      <primitive
        object={scene}
        scale={1.4}
        position={[0, -1.5, 0]}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/gym-burpee.glb");