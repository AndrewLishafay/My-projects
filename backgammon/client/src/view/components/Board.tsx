
import { useTexture } from "@react-three/drei"
import * as THREE from "three";

interface BoxProps {
    position: any
    rotation: any
}
const Board = (props: BoxProps) => {
    const { position, rotation } = props

    function deg2rad(deg: number) {
        return deg * (Math.PI / 180)
    }

    const textureBoard: any = useTexture({
        map: 'textures/board.jpg',
    })
    const textureWood: any = useTexture({
        map: 'textures/wood/Wood066_1K_Color.png',
        displacementMap: 'textures/wood/Wood066_1K_Displacement.png',
        normalMap: 'textures/wood/Wood066_1K_NormalGL.png',
        roughnessMap: 'textures/wood/Wood066_1K_Roughness.png',
    })

    textureBoard.map.repeat.set(1, 1)
    textureBoard.map.wrapS = THREE.RepeatWrapping;
    textureBoard.map.wrapT = THREE.RepeatWrapping;
    const displacement = 0.001;
    const roughness = 0.1;
    for (const texture in textureWood) {
        textureWood[texture].repeat.set(8, 2)
        textureWood[texture].wrapS = THREE.RepeatWrapping;
        textureWood[texture].wrapT = THREE.RepeatWrapping;
    }
    return (
        <>
        {/* @ts-ignore */}
            <group  position={position} rotation={rotation} >
                
                <mesh  castShadow receiveShadow position={[0, 0, 0]} rotation={[deg2rad(0), deg2rad(0), deg2rad(0)]} >
                    <planeBufferGeometry args={[4, 3]} />
                    <meshStandardMaterial color='#C4A484' {...textureBoard} />
                </mesh>
                <mesh castShadow receiveShadow position={[0, 0, 0.05]}>
                    <boxGeometry args={[0.1, 2.9, 0.1]} />
                    <meshStandardMaterial  {...textureWood} roughness={roughness} displacementScale={displacement} />
                </mesh>
                <mesh castShadow receiveShadow position={[1.65, 0, 0.05]}>
                    <boxGeometry args={[0.04, 2.9, 0.1]} />
                    <meshStandardMaterial  {...textureWood} displacementScale={displacement} />
                </mesh>
                <mesh castShadow receiveShadow position={[-1.65, 0, 0.05]}>
                    <boxGeometry args={[0.04, 2.9, 0.1]} />
                    <meshStandardMaterial  {...textureWood} displacementScale={displacement} />
                </mesh>
                <mesh castShadow receiveShadow position={[2, 0, 0.05]}>
                    <boxGeometry args={[0.1, 2.9, 0.1]} />
                    <meshStandardMaterial  {...textureWood} displacementScale={displacement} />
                </mesh>
                <mesh castShadow receiveShadow position={[-2, 0, 0.05]}>
                    <boxGeometry args={[0.1, 2.9, 0.1]} />
                    <meshStandardMaterial  {...textureWood} displacementScale={displacement} />
                </mesh>
                <mesh castShadow receiveShadow position={[0, 1.5, 0.05]}>
                    <boxGeometry args={[4.1, 0.1, 0.1]} />
                    <meshStandardMaterial  {...textureWood} displacementScale={displacement} />
                </mesh>
                <mesh castShadow receiveShadow position={[0, -1.5, 0.05]}>
                    <boxGeometry args={[4.1, 0.1, 0.1]} />
                    <meshStandardMaterial  {...textureWood} displacementScale={displacement} />
                </mesh>
            </group>
        </>
    )
}

export default Board