import { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'

const ProgressBar = (props: any) => {
    const { progress, type } = props
    const style = useSpring({
        from: { width: '0%' },
        to: { width: `${(progress / 100 * 95) + 5}%` },
        config: { mass: 90, tension: 110, friction: 200, clamp: true }
    })
    const [fiberProgress, setFiberProgress] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
            if (fiberProgress < progress) setFiberProgress(fiberProgress + 1)
        }, 42);
        return () => clearInterval(timer);
    }, [fiberProgress])
    return (
        <div className='progress'>
            <div className='progress-bar-wrapper'>
                <animated.div style={style} className='progress-bar'></animated.div>
            </div>
            <h3 style={{ color: type === 'cognifiber' ? '#3fcef9' : 'white' }}>{fiberProgress}%</h3>
        </div>
    )
}

export default ProgressBar