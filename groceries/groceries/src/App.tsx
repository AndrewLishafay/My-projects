import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './App.css';
import Scene from './view/components/Scene';
import Shelf from './view/components/Shelf';
import BoxProduct from './view/components/BoxProduct';
import { Vector3 } from 'three';
import Products from './view/components/Products';

function deg2rad(deg: number) {
  return deg * (Math.PI / 180)
}

function App() {
  const [stock, setStock] = useState(['cereal1','cereal2'])
  const [isDragging, setIsDragging] = useState(false)
  return (
    <div className="canvas">
      <Canvas shadows camera={{ position: [-20, -10, 10], fov: 45 }} onCreated={({ camera }) => camera.lookAt(25, -10, 0)}>
        <ambientLight intensity={0.2} color='#FFFFFF' />
        <pointLight intensity={0.1} position={[0, 50, 0]} castShadow shadow-mapSize-height={512} shadow-mapSize-width={512} />
        <pointLight intensity={0.5} position={[-10, 0, 15]} castShadow shadow-mapSize-height={512} shadow-mapSize-width={512} />
        <Scene />
        <Shelf />
        <Products stock={stock} setIsDragging={setIsDragging} />
        {/* <BoxProduct typeOf={'cereal1'} /> */}

        {!isDragging && <OrbitControls target={[25, -10, 0]} />}
      </Canvas>
    </div>
  );
}

export default App;
