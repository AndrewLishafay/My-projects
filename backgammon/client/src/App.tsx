import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky, } from '@react-three/drei';
import { io } from 'socket.io-client'
import { Physics, useBox } from '@react-three/cannon'

import './App.css';

import Ocean from './view/components/Ocean'
import Beach from './view/components/Beach';
import Board from './view/components/Board';
import Checker from './view/components/Checker';
import CheckerLayout from './view/components/CheckerLayout';
import Menu from './view/components/Menu'
import Dice from './view/components/Dice'
import Tree from './view/components/Tree';
import Button from './view/components/Button';
import CollisionBox from './view/components/CollisionBox';

function App() {
  function deg2rad(deg: number) {
    return deg * (Math.PI / 180)
  }

  const [layout, setLayout] = useState<any>([])
  const [button, setButton] = useState<number>(1.5)
  const [cameraPos, setCameraPos] = useState<any>([0, 0, 0])
  const [gameState, setGameState] = useState<any>('')
  // const [rooms, setRooms] = useState<any>([])
  const [gameRooms, setGameRooms] = useState([]);
  const [status, setStatus] = useState('');
  const [roll, setRoll] = useState(false);

  useEffect(() => {
    const array: any = []
    array[27] = { count: 0, color: '#EEEEEE' }
    array[26] = { count: 0, color: '#FF0000' }
    array[25] = { count: 0, color: '#EEEEEE' }
    array[24] = { count: 0, color: '#FF0000' }
    array.fill({ count: 0 }, 0, 27);
    array[0] = { count: 2, color: '#EEEEEE' }
    array[5] = { count: 5, color: '#FF0000' }
    array[7] = { count: 3, color: '#FF0000' }
    array[11] = { count: 5, color: '#EEEEEE' }
    array[12] = { count: 5, color: '#FF0000' }
    array[16] = { count: 3, color: '#EEEEEE' }
    array[18] = { count: 5, color: '#EEEEEE' }
    array[23] = { count: 2, color: '#FF0000' }
    setLayout([...array])
    // setCamera([-3, 14, -20])
    setCameraPos([-3, 14, -20])
    // console.table(array)
  }, [])
  function onRoll() {
    if (gameState === 'init') {
    }
  }

  function handleRoll() {
    console.log('click');
    
    if (gameState === 'init') {
      setRoll(!roll);

    }
  }

  function joinRoom(id: string) {
    var socket = io();
    socket.emit("join-room", id)
    setGameState('init');
    setButton(2);
    setStatus('joined');
  }
  function handleForm(ev: any) {
    ev.preventDefault();
    const create = ev.target.create.checked
    const join = ev.target.join.checked
    const name = ev.target.name.value
    if (name === '') return;
    if (create) {
      var socket = io();
      socket.emit("create-room", name)
      setStatus('host');

      socket.on('game-init', () => {
        setGameState('init');
        setButton(2);

      })
    }
    if (join) {
      var socket = io();
      socket.emit('get-rooms')
      socket.on('rooms', (rooms: any) => {
        setGameRooms(rooms)
        console.log(rooms);

      })
      setStatus('join');

    }
    else return;

  }

  return (
    <div className='canvas'>

      <Canvas shadows camera={{ position: cameraPos, fov: 45, rotation: [deg2rad(20), deg2rad(180), deg2rad(0)] }}>
        <Sky turbidity={2} azimuth={0.75} inclination={0.52} />
        <ambientLight intensity={0.2} color='#FFFFFF' />
        <directionalLight intensity={0.3} position={[3, -5, 30]} />
        <pointLight intensity={0.6} position={[3, 5, -3]} castShadow shadow-mapSize-height={512} shadow-mapSize-width={512} />
        <Physics>
          <Dice position={[1, 8, 1]} roll={roll} />
          <Dice position={[1, 8, 1]} roll={roll} />
          <CollisionBox />
        </Physics>
        <Board position={[0, 1.82, 0]} rotation={[deg2rad(-86), 0, 0]} />
        <Menu position={[-2, 10, -6]} size={[8, 4.8, 0.1]} handleForm={handleForm} joinRoom={joinRoom} status={status} gameRooms={gameRooms} />
        <Button position={[0, button, -2]} handleRoll={handleRoll} />
        <Ocean />
        <CheckerLayout layout={layout} position={[-1.45, 1.93, -1.29]} rotation={[deg2rad(4), 0, 0]} />
        <Beach position={[0, 1.75, 0]} size={[200, 50]} rotation={[deg2rad(-86), 0, 0]} />
        <OrbitControls />
      </Canvas>

    </div>
  );
}

export default App;
