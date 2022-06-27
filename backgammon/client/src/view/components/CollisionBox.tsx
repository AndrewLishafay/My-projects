import { useBox, usePlane } from "@react-three/cannon";

const CollisionBox = () => {
    interface Collider {
        args: any,
        position: any,
        rotation: any
    }
    const opacity = 0;

    function deg2rad(deg: number) {
        return deg * (Math.PI / 180)
    }

    const bottomProps: Collider = {
        args: [4, 3],
        position: [0, 1.82, 0],
        rotation: [deg2rad(274), 0, 0]
    }
    const [refBottom] = usePlane(() => ({
        mass: 100,
        type: "Static",
        position: bottomProps.position,
        rotation: bottomProps.rotation,
        args: bottomProps.args
    }))

    const frontProps: Collider = {
        args: [4, 3],
        position: [0, 3.4, -1.45],
        rotation: [deg2rad(0), 0, 0]
    }
    const [refFront] = usePlane(() => ({
        mass: 100,
        type: "Static",
        position: frontProps.position,
        rotation: frontProps.rotation,
        args: frontProps.args
    }))
    
    const backProps: Collider = {
        args: [4, 3],
        position: [0, 3.2, 1.45],
        rotation: [deg2rad(180), 0, 0]
    }
    const [refBack] = usePlane(() => ({
        mass: 100,
        type: "Static",
        position: backProps.position,
        rotation: backProps.rotation,
        args: backProps.args
    }))
    const leftProps: Collider = {
        args: [4, 3],
        position: [1.6, 3.2, 0],
        rotation: [deg2rad(180), deg2rad(270), deg2rad(0)]
    }
    const [refLeft] = usePlane(() => ({
        mass: 100,
        type: "Static",
        position: leftProps.position,
        rotation: leftProps.rotation,
        args: leftProps.args
    }))
    const rightProps: Collider = {
        args: [4, 3],
        position: [-1.6, 3.2, 0],
        rotation: [deg2rad(180), deg2rad(90), deg2rad(0)]
    }
    const [refRight] = usePlane(() => ({
        mass: 100,
        type: "Static",
        position: rightProps.position,
        rotation: rightProps.rotation,
        args: rightProps.args
    }))

    return (
        <>
            {/* @ts-ignore */}
            <mesh ref={refBottom} position={bottomProps.position} rotation={bottomProps.rotation} >
                <planeGeometry args={bottomProps.args} />
                <meshStandardMaterial color='#C4A484'
                    opacity={opacity} transparent
                />
            </mesh>

            {/* @ts-ignore */}
            <mesh ref={refFront} position={frontProps.position} rotation={frontProps.rotation} >
                <planeGeometry args={frontProps.args} />
                <meshStandardMaterial color='#C4A484'
                    opacity={opacity} transparent
                />
            </mesh>
            {/* @ts-ignore */}
            <mesh ref={refBack} position={backProps.position} rotation={backProps.rotation} >
                <planeGeometry args={backProps.args} />
                <meshStandardMaterial color='#C4A484'
                    opacity={opacity} transparent
                />
            </mesh>
            {/* @ts-ignore */}
            <mesh ref={refLeft} position={leftProps.position} rotation={leftProps.rotation} >
                <planeGeometry args={leftProps.args} />
                <meshStandardMaterial color='#C4A484'
                    opacity={opacity} transparent
                />
            </mesh>
            {/* @ts-ignore */}
            <mesh ref={refRight} position={leftProps.position} rotation={leftProps.rotation} >
                <planeGeometry args={leftProps.args} />
                <meshStandardMaterial color='#C4A484'
                    opacity={opacity} transparent
                />
            </mesh>
        </>
    )
}

export default CollisionBox