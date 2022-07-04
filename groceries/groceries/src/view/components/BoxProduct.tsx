import { useTexture } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { useDrag, useGesture } from 'react-use-gesture'

const BoxProduct = (props: any) => {
    const { typeOf, setIsDragging, initPosition } = props
    const textures: any = useTexture({
        cereal01: '/textures/products/cereal01.jpeg',
        cereal02: '/textures/products/cereal02.jpg',
        can01: '/textures/products/can01.jpg',
        can02: '/textures/products/can02.jpg',
        can03: '/textures/products/can03.jpg',
    })
    const [position, setPosition] = useState(initPosition);
    let originalPos = initPosition;
    const ref: any = useRef()
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;
    console.log(initPosition);
    const bind = useGesture({
        onDrag: ({ offset: [z, y] }) => {
            setIsDragging(true);
            const [oldX, oldY, oldZ] = originalPos;
            setPosition([oldX, (-y / aspect) + oldY, (z / aspect) + oldZ]);
        },
        onDragEnd: () => {
            if (position[1] < -22.9) setPosition([position[0], -22.9, position[2]])
            else if (position[1] < -19.1) setPosition([position[0], -19.1, position[2]])
            else if (position[1] < -15.2) setPosition([position[0], -15.2, position[2]])
            else if (position[1] < -11.2) setPosition([position[0], -11.2, position[2]])
            else if (position[1] < -7.1) setPosition([position[0], -7.1, position[2]])
            else if (position[1] > -7.1) setPosition([position[0], -7.1, position[2]])
            setIsDragging(false);
        }
    })

    useEffect(() => {
        switch (typeOf) {
            case 'cereal1':
                ref.current.material.map = textures.cereal01
                break;
            case 'cereal2':
                ref.current.material.map = textures.cereal02
                break;
        }
    }, [])


    return (
        <>
            {/* @ts-ignore */}
            <mesh ref={ref} position={position} {...bind()}>
                <boxGeometry args={[1, 3.4, 2.5]} />
                <meshBasicMaterial />
            </mesh>
        </>
    )
}

export default BoxProduct