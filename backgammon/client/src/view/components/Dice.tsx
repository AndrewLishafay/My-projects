import { useTexture } from "@react-three/drei"
import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

interface BoxProps {
    position: any,
    roll: boolean
}

const Dice = (props: BoxProps) => {
    const { position, roll } = props

    function deg2rad(deg: number) {
        return deg * (Math.PI / 180)
    }

    const textures = useTexture([
        'textures/dice/dice1.jpeg',
        'textures/dice/dice2.jpeg',
        'textures/dice/dice3.jpeg',
        'textures/dice/dice4.jpeg',
        'textures/dice/dice5.jpeg',
        'textures/dice/dice6.jpeg',
    ]);
    const [ref, api] = useBox(() => ({
        mass: 0.1,
        position: position,
        rotation: [deg2rad(30), deg2rad(30), deg2rad(0)],
        args: [0.1, 0.1, 0.1]
    }))


    useFrame(() => {
        if (roll) {
            api.position.set(0.5, 5, 5)
            
        }
        
        
    });

    return (
        <>
            {/* @ts-ignore */}
            <mesh ref={ref} position={position} rotation={[deg2rad(30), deg2rad(30), deg2rad(0)]} castShadow receiveShadow >
                <boxGeometry args={[0.1, 0.1, 0.1]} />
                {textures.map((texture, idx) =>{
                    <meshBasicMaterial key={texture.id} attach={`material-${idx}`} map={texture} />
                    console.log(idx)
                }
                )}
            </mesh>
        </>
    )
}

export default Dice