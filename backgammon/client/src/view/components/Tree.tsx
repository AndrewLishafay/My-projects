import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from "three"

const Tree = () => {
    const treeObj = useLoader(OBJLoader, '/models/tree/Palm_trees_0003.obj')
    const texturePalm: any = useTexture({
        map: 'models/tree/Palm_trees_0003/Palm_trees_0003_baseColor.png',
        // normalMap: 'models/tree/Palm_trees_0003/Palm_trees_0003_normal.png',
        // roughnessMap: 'models/tree/Palm_trees_0003/Palm_trees_0003_roughness.png',
    })
    const material = new THREE.MeshBasicMaterial({color:"#FF0000"})

    return (
        <group>
            <primitive object={treeObj} material={material}  scale={1} />

        </group>
    )
}

export default Tree