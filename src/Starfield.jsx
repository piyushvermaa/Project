import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Starfield = () => {
  const stars = useRef();

  useFrame(() => {
    // Rotate the stars slowly over time
    stars.current.rotation.x += 0.0005;
    stars.current.rotation.y += 0.0005;
  });

  return (
    <Canvas>
      <Stars ref={stars} />
    </Canvas>
  );
};

export default Starfield;
