import { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring'
import LogoCogni from './LogoCogni';
import LogoNvidia from './LogoNvidia';

const PerformanceBar = (props: any) => {
    const { data, type, cat, tolerance } = props
    const [progress, setProgress] = useState(0)
    const [accuracy, setAccuracy] = useState(data)
    const [animate, setAnimate] = useState(false)
    useEffect(() => {

        if (progress < data) {
            const timer = setInterval(() => {
                setProgress(progress + 1);
            }, (20000 / data));
            return () => clearInterval(timer);
        }
    }, [progress])

    useEffect(() => {
        if (type === 'cognifiber') {
            if (accuracy < data && !animate) {
                const timer = setInterval(() => {
                    setAccuracy(Number((accuracy + 0.1).toFixed(1)));
                }, 1);
                return () => clearInterval(timer);
            }
            else if (accuracy >= data - tolerance && accuracy <= data + tolerance) {
                setAnimate(true)
                if ((Math.random() < 0.5 || accuracy >= data + tolerance) && accuracy > data - tolerance) {
                    const timer = setInterval(() => {
                        // setAccuracy(Number((accuracy - 0.1).toFixed(1)));
                        setAccuracy(Number((accuracy - 0.1).toFixed(1)));
                    }, 200);
                    return () => clearInterval(timer);
                }
                else {
                    const timer = setInterval(() => {
                        setAccuracy(Number((accuracy + 0.1).toFixed(1)));
                    }, 200);
                    return () => clearInterval(timer);
                }
            }
        }
        if (type === 'nvidia') {
            if (accuracy < data && !animate) {
                const timer = setInterval(() => {
                    setAccuracy(Number((accuracy + 0.1).toFixed(1)));
                }, 1);
                return () => clearInterval(timer);
            }
            else if (accuracy >= data - tolerance && accuracy <= data + tolerance) {
                setAnimate(true)
                if ((Math.random() < 0.5 || accuracy >= data + tolerance) && accuracy > data - tolerance) {
                    const timer = setInterval(() => {
                        setAccuracy(Number((accuracy - 0.1).toFixed(1)));
                    }, 500);
                    return () => clearInterval(timer);
                }
                else {
                    const timer = setInterval(() => {
                        setAccuracy(Number((accuracy + 0.1).toFixed(1)));
                    }, 500);
                    return () => clearInterval(timer);
                }
            }
        }
    }, [accuracy])


    const styleEff = useSpring({
        from: { width: '0%' },
        // to: { width: `${(data / 4)}%` },
        to: { width: `${(data / 400) * (90) + 10}%` },
        config: { mass: 100, tension: 80, friction: 150, clamp: true },
    })
    const styleBench = useSpring({
        from: { width: '0%' },
        // to: { width: `${(data / 4)}%` },
        to: { width: `${(data / 165) * (90) + 10}%` },
        config: { duration: 20000 },
        // config: { mass: 100, tension: 80, friction: 150, clamp: true },
    })
    const styleAccuracy = useSpring({
        from: { width: '0%' },
        // to: { width: `${(data / 4)}%` },
        to: { width: `${(data / 165) * (90) + 10}%` },
        config: { mass: 100, tension: 80, friction: 150, clamp: true },
    })
    const styleSimple = useSpring({
        loop: { reverse: true },
        from: { width: `${(data / 165) * (90) + 5}%` },
        // to: { width: `${(data / 4)}%` },
        to: { width: `${(data / 165) * (90) - 5}%` },
        config: { mass: 100, tension: 200, friction: 150, clamp: true },
    })

    let style;
    if (cat === 'efficiency') {
        // style = styleEff;
        style = { width: `${(data / 400) * (90) + 10}%` }
    }
    if (cat === 'benchmark') {
        style = styleBench;
        // style = { width: `${(data / 165) * (90) + 10}%` }
    }
    if (cat === 'accuracy') {
        // style = styleAccuracy;
        if (type === 'cognifiber') {
            style = { width: `${((accuracy - 80) * 3) + 32}%` }
        }
        else {
            style = { width: `${((accuracy - 80) * 3) + 15}%` }
        }
        // style = styleSimple;
    }


    return (
        <div className='performance-bar'>
            <div className='fill-bar-wrapper' >
                {type === 'cognifiber' ? <LogoCogni /> : <LogoNvidia />}
                <animated.div
                    style={style}
                    className='fill-bar' >
                </animated.div>
                {cat === 'efficiency' ?
                    <h4 style={{ color: type === 'cognifiber' ? '#3fcef9' : 'white' }} className={type === 'nvidia' ? 'pop_font' : ''}>
                        x{data}</h4> :
                    cat === 'benchmark' ?
                        <h4 style={{ color: type === 'cognifiber' ? '#3fcef9' : 'white' }} className={type === 'nvidia' ? 'pop_font' : ''}>
                            %{progress}</h4> :
                        <h4 style={{ color: type === 'cognifiber' ? '#3fcef9' : 'white' }} className={type === 'nvidia' ? 'pop_font' : ''}>
                            %{accuracy}</h4>
                }
            </div>
        </div>
    )
}

export default PerformanceBar