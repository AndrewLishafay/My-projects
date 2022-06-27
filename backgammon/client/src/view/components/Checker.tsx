import { useTexture } from "@react-three/drei"


interface checker {
    position: any
    color: string
}


const Checker = (props: checker) => {
    const { position, color } = props

    const textureMarble: any = useTexture({
        map: 'textures/marble/Marble020_1K_Color.png',
        displacementMap: 'textures/marble/Marble020_1K_Displacement.png',
        normalMap: 'textures/marble/Marble020_1K_NormalGL.png',
        roughnessMap: 'textures/marble/Marble020_1K_Roughness.png',
    })



    return (
        <>
            <mesh castShadow receiveShadow position={position}>
                <cylinderGeometry args={[0.1, 0.1, 0.05, 32]} />
                <meshStandardMaterial color={color} {...textureMarble} roughness={0.1} metalness={0.1} displacementScale={0.0001} />
            </mesh>
        </>
    )
}

export default Checker