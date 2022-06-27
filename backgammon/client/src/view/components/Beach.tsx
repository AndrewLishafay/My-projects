import { useTexture } from "@react-three/drei"
import * as THREE from "three";

interface BoxProps {
    position: any
    size: any
    rotation: any
}
const Beach = (props: BoxProps) => {
    const { position, size, rotation } = props
    

    const textureSand: any = useTexture({
        map: 'textures/sand/Ground035_1K_Color.png',
        displacementMap: 'textures/sand/Ground035_1K_Displacement.png',
        normalMap: 'textures/sand/Ground035_1K_NormalGL.png',
        roughnessMap: 'textures/sand/Ground035_1K_Roughness.png',
        aoMap: 'textures/sand/Ground035_1K_AmbientOcclusion.png',
    })
    for (const texture in textureSand) {
        textureSand[texture].repeat.set(16, 4)
        textureSand[texture].wrapS = THREE.RepeatWrapping;
        textureSand[texture].wrapT = THREE.RepeatWrapping;
    }

    return (
        <>
            <mesh position={position} rotation={rotation}>
                <planeBufferGeometry args={size} />
                <meshStandardMaterial roughness={0.8} {...textureSand} displacementScale={1} />
            </mesh>
        </>
    )
}

export default Beach