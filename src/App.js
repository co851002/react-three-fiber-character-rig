import React, { Suspense, useState } from "react";
import { Canvas } from "react-three-fiber";
import Clown from "./Clown.js";
import { OrbitControls } from "@react-three/drei";

import "./styles.css";

export default function App() {
  return (
    <Canvas>
      <OrbitControls />
      <directionalLight intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Suspense fallback={null}>
        <Clown />
      </Suspense>
    </Canvas>
  );
}
