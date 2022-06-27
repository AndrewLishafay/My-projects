import { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring'

const PerformanceBar = (props: any) => {
    const { efficiency } = props

    const style = useSpring({
        from: { width: '0%' },
        to: { width: `${(efficiency / 4)}%` },
        config: { mass: 100, tension: 80, friction: 150, clamp: true },
    })
    


    return (
        <div className='performance-bar'>
            <animated.div  style={style} className='fill-bar' >
                <h4>X{efficiency}</h4>
            </animated.div>
        </div>
    )
}

export default PerformanceBar