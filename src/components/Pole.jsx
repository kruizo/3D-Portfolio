import React from "react";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";

const Pole = () => {
  const pole = useGLTF("./3d/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <pointLight intensity={5} />
      <spotLight
        position={[-20, 10, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={pole.scene}
        position={[-3.5, -6, -1.5]}
        rotation={[0, 7, 0]}
      />
    </mesh>
  );
};

const PoleCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [0, 15, 0], fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          rotateSpeed={1}
        />
        <Pole />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default PoleCanvas;
