import * as THREE from "three";
import { useTexture } from "@react-three/drei"

const Scene = () => {

    const textureTile: any = useTexture({
        map: 'textures/tiles/Tiles074_1K_Color.jpg',
        displacementMap: 'textures/tiles/Tiles074_1K_Displacement.jpg',
        normalMap: 'textures/tiles/Tiles074_1K_NormalGL.jpg',
        roughnessMap: 'textures/tiles/Tiles074_1K_Roughness.jpg',
    })
    const textureCeiling: any = useTexture({
        map: 'textures/ceiling/OfficeCeiling003_1K_Color.jpg',
        displacementMap: 'textures/ceiling/OfficeCeiling003_1K_Displacement.jpg',
        normalMap: 'textures/ceiling/OfficeCeiling003_1K_NormalGL.jpg',
        roughnessMap: 'textures/ceiling/OfficeCeiling003_1K_Roughness.jpg',
        aoMap: 'textures/ceiling/OfficeCeiling003_1K_AmbientOcclusion.jpg'

    })
    const textureWall: any = useTexture({
        map: 'textures/wall/Concrete008_1K_Color.jpg',
        displacementMap: 'textures/wall/Concrete008_1K_Displacement.jpg',
        normalMap: 'textures/wall/Concrete008_1K_NormalGL.jpg',
        roughnessMap: 'textures/wall/Concrete008_1K_Roughness.jpg',
    })
    const displacement = 0.01

    return (
        <mesh receiveShadow>
            <boxGeometry args={[100, 50, 100]} />
            <meshStandardMaterial {...textureWall} attach={'material-0'} displacementScale={displacement} side={THREE.BackSide} />
            <meshStandardMaterial {...textureWall} attach={'material-1'} displacementScale={displacement} side={THREE.BackSide} />
            <meshStandardMaterial {...textureCeiling} attach={'material-2'} displacementScale={displacement} side={THREE.BackSide} />
            <meshStandardMaterial {...textureTile} attach={'material-3'} displacementScale={displacement} side={THREE.BackSide} />
            <meshStandardMaterial {...textureWall} attach={'material-4'} displacementScale={displacement} side={THREE.BackSide} />
            <meshStandardMaterial {...textureWall} attach={'material-5'} displacementScale={displacement} side={THREE.BackSide} />
        </mesh>
    )
}

export default Scene