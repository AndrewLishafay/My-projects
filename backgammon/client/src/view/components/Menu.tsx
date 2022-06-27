import { Html } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useState } from 'react'
import { io } from 'socket.io-client'
import * as THREE from 'three'
interface menuProps {
    position: any
    size: any
    handleForm: any
    joinRoom: Function
    status:any
    gameRooms:any
}
const Menu = (props: menuProps) => {
    const { position, size, handleForm, joinRoom, status, gameRooms } = props
    
    function deg2rad(deg: number) {
        return deg * (Math.PI / 180)
    }
    const threeState = useThree()

    useFrame(state => {
        if (status === 'joined' || status === 'host') {
            const cameraPositionVector = new THREE.Vector3()
            const cameraQuaternion1 = new THREE.Quaternion().copy(threeState.camera.quaternion)
            threeState.camera.lookAt(0, -0.5, 2);
            const cameraQuaternion2 = new THREE.Quaternion().copy(threeState.camera.quaternion)
            // THREE.Quaternion.slerp(cameraQuaternion1, cameraQuaternion2, threeState.camera.quaternion, 0.05); //deprecated code, still works but generates warnings new method bellow
            state.camera.quaternion.slerpQuaternions(cameraQuaternion1, cameraQuaternion2, 0.05);
            state.camera.position.lerp(cameraPositionVector.set(0, 5.5, -3.5), 0.05)
            // state.camera.updateProjectionMatrix();
            // return null
        }
    })



    return (
        <mesh position={position} rotation={[deg2rad(10), deg2rad(180), deg2rad(0)]}>
            <boxGeometry args={size} />
            <meshStandardMaterial color="#AAAAAA" />
            <Html wrapperClass={'html'} occlude center position={[0, 0, 0.1]} transform>
                <div className='menu'>
                    {status === '' &&
                        <>
                            <h3>Welcome to 3D Backgammon</h3>
                            <form onSubmit={handleForm}>
                                <label htmlFor="name">Enter your name</label>
                                <input type="text" id='name' />
                                <div>
                                    <input type="radio" id='create' name='option' />
                                    <label htmlFor="create">Create game</label>
                                </div>
                                <div>
                                    <input type="radio" id='join' name='option' />
                                    <label htmlFor="join">Join game</label>
                                </div>
                                <input type="submit" />
                            </form>
                        </>
                    }
                    {status === 'join' &&
                        <>
                            <h3>Room List</h3>
                            {gameRooms.map((room: any, i: number) => (
                                <div className='room' key={i}>
                                    <h4>{room.name}</h4>
                                    <button onClick={() => joinRoom(room.id)}>Join</button>
                                </div>
                            ))}
                        </>
                    }
                </div>
            </Html>
        </mesh>
    )
}

export default Menu