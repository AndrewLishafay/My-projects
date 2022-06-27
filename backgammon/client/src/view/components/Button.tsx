import { Html } from '@react-three/drei'

interface BoxProps {
    position: any,
    handleRoll: any
}

const Button = (props: BoxProps) => {
    const { position, handleRoll } = props

    function deg2rad(deg: number) {
        return deg * (Math.PI / 180)
    }

    return (
        <>
            <mesh castShadow receiveShadow onClick={handleRoll} position={position}>
                <boxGeometry args={[1.3, 0.1, 0.45]} />
                <meshStandardMaterial color='#999999' />
                <Html wrapperClass={'html'} occlude center position={[0, 0.05, 0]} rotation={[deg2rad(90), deg2rad(180), 0]} transform>
                    <div className='button'>
                        Roll Dice
                    </div>
                </Html>
            </mesh>
        </>
    )
}

export default Button