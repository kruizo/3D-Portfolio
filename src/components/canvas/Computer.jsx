import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import model from "/scene.gltf";

const Computers = ({ scale }) => {
  const computer = useGLTF(model);

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <spotLight
        position={[20, 1, 20]}
        angle={0.12}
        penumbra={1}
        intensity={200}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={40} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={[0, -1.5, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [scale, setScale] = useState(0.75);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;

      if (width <= 1000) {
        setScale(0.6);
      } else if (width <= 1279) {
        setScale(0.7);
      } else if (width <= 1400) {
        setScale(0.6);
      } else if (width <= 1600) {
        setScale(0.7);
      } else if (width <= 2100) {
        setScale(0.9);
      } else {
        setScale(0.71);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
        />
        <Computers scale={scale} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
