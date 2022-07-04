import { useFBX } from '@react-three/drei';

const Shelf = () => {
    const model = useFBX('/models/StoreShelf.fbx')
    return (
        <mesh position={[25, -25, 25]} castShadow receiveShadow>
            <primitive object={model} />
        </mesh>
    )
}

export default Shelf