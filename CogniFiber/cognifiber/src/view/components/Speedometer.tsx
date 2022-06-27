import { useSpring, animated } from 'react-spring'

const Speedometer = (props: any) => {
    const { speed } = props
    const style = useSpring({
        to: { transform: `rotateZ(${speed}deg)` },
        from: { transform: 'rotateZ(-135deg)' },
        config: { mass: 10, tension: 150, friction: 30 }
    })
    return (
        <div className='speedometer'>
            <animated.div style={style} className='dial dial-animate-forward'>
            </animated.div>
        </div>
    )
}

export default Speedometer