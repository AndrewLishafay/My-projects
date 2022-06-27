import { useSpring, animated } from 'react-spring'

const ProgressBar = (props: any) => {
    const { progress } = props
    const style = useSpring({
        from: { width: '0%' },
        to: { width: `${progress}%` },
        config: { mass: 100, tension: 100, friction: 200, clamp: true }
    })
    return (
        <animated.div style={style} className='progress-bar'></animated.div>
    )
}

export default ProgressBar