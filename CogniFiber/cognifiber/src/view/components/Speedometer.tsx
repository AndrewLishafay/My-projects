import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring'
import SVG from './speed.svg';
import dial from './dial.svg';
import LogoCogni from './LogoCogni';
import LogoNvidia from './LogoNvidia';


const Speedometer = (props: any) => {
    const { speed, type, tolerance } = props
    const style = useSpring({
        loop: true,

        from: { rotateZ: 0 },
        to: { rotateZ: 15 },
        // config: { mass: 50, tension: 100, friction: 30, },

    })
    const cogniAnimation = useSpring({
        loop: true,
        // reverse:true,
        from: { rotateZ: 0 },
        to: { rotateZ: 360 },
        config: { duration: 800 }
    })
    const nvidiaAnimation = useSpring({
        loop: true,
        from: { rotateZ: 0 },
        to: { rotateZ: 360 },
        config: { duration: 15000 }
    })
    const [speedProgress, setSpeedProgress] = useState(speed)
    const [speedAVG, setSpeedAVG] = useState(speed)

    const [animateAVG, setAnimateAVG] = useState(false)
    const [animate, setAnimate] = useState(false)
    useEffect(() => {

        if (type === 'cognifiber') {
            if (speedProgress <= speed && !animate) {
                const timer = setInterval(() => {
                    setSpeedProgress(Number((speedProgress + 0.1).toFixed(1)));
                }, 1);
                return () => clearInterval(timer);
            }
            else if (speedProgress >= speed - tolerance && speedProgress <= speed + tolerance) {
                setAnimate(true);
                if ((Math.random() < 0.1 || speedProgress >= speed + tolerance) && speedProgress > speed - tolerance) {
                    const timer = setInterval(() => {
                        setSpeedProgress(Number((speedProgress - (Math.random() / 2)).toFixed(1)));
                    }, 200);
                    return () => clearInterval(timer);
                }
                else {
                    const timer = setInterval(() => {
                        setSpeedProgress(Number((speedProgress + (Math.random() / 2)).toFixed(1)));
                    }, 200);
                    return () => clearInterval(timer);
                }
            }
            if (speedProgress < speed - tolerance) {
                setSpeedProgress(Number((speedAVG + 0.1).toFixed(1)));
            }
            if (speedProgress > speed + tolerance) {
                setSpeedProgress(Number((speedAVG - 0.1).toFixed(1)));
            }
        }


        if (type === 'nvidia') {
            if (speedProgress <= speed && !animate) {
                const timer = setInterval(() => {
                    setSpeedProgress(Number((speedProgress + 0.1).toFixed(1)));
                }, 1);
                return () => clearInterval(timer);
            }
            else if (speedProgress >= speed - tolerance && speedProgress <= speed + tolerance) {
                setAnimate(true);
                if ((Math.random() < 0.1 || speedProgress >= speed + tolerance) && speedProgress > speed - tolerance) {
                    const timer = setInterval(() => {
                        setSpeedProgress(Number((speedProgress - 0.1).toFixed(1)));
                    }, 500);
                    return () => clearInterval(timer);
                }
                else {
                    const timer = setInterval(() => {
                        setSpeedProgress(Number((speedProgress + 0.1).toFixed(1)));
                    }, 500);
                    return () => clearInterval(timer);
                }
            }
            if (speedProgress < speed - tolerance) {
                
                setSpeedProgress(Number((speedAVG + 0.1).toFixed(1)));
            }
            if (speedProgress > speed + tolerance) {
                setSpeedProgress(Number((speedAVG - 0.1).toFixed(1)));
            }
        }

    }, [speedProgress])

    useEffect(() => {

        if (type === 'cognifiber') {
            if (speedAVG <= 98 && !animateAVG) {
                const timer = setInterval(() => {
                    setSpeedAVG(Number((speedAVG + 1).toFixed(1)));
                }, 1);
                return () => clearInterval(timer);
            }
            else if (speedAVG >= 98 - 2 && speedAVG <= 98 + 2) {
                setAnimateAVG(true);
                if (Math.random() < 0.5 || speedAVG >= 98 + 2) {
                    const timer = setInterval(() => {
                        setSpeedAVG(Number((speedAVG - 1).toFixed(1)));
                    }, 1000);
                    return () => clearInterval(timer);
                }
                else {
                    const timer = setInterval(() => {
                        setSpeedAVG(Number((speedAVG + 1).toFixed(1)));
                    }, 1000);
                    return () => clearInterval(timer);
                }
            }
            else if (speedAVG < 98 - 2) {
                setSpeedAVG(Number((speedAVG + 1).toFixed(1)));
            }
            else if (speedAVG < 98 + 2) {
                setSpeedAVG(Number((speedAVG - 1).toFixed(1)));
            }
        }


        if (type === 'nvidia') {
            if (speedAVG <= 4.8 && !animateAVG) {
                const timer = setInterval(() => {
                    setSpeedAVG(Number((speedAVG + 0.1).toFixed(1)));
                }, 1);
                return () => clearInterval(timer);
            }
            else if (speedAVG >= 4.8 - 0.2 && speedAVG <= 4.8 + 0.2) {
                setAnimateAVG(true);
                if (Math.random() < 0.5 || speedAVG >= 4.8 + 0.2) {
                    const timer = setInterval(() => {
                        setSpeedAVG(Number((speedAVG - 0.1).toFixed(1)));
                    }, 3000);
                    return () => clearInterval(timer);
                }
                else {
                    const timer = setInterval(() => {
                        setSpeedAVG(Number((speedAVG + 0.1).toFixed(1)));
                    }, 3000);
                    return () => clearInterval(timer);
                }
            }
            else if (speedAVG < 4.8 - 0.2) {
                setSpeedAVG(Number((speedAVG + 0.1).toFixed(1)));
            }
            else if (speedAVG < 4.8 + 0.2) {
                setSpeedAVG(Number((speedAVG - 0.1).toFixed(1)));
            }
        }

    }, [speedAVG])

    return (
        <div className='speedometer'>
            {/* <animated.div style={style} className='dial dial-animate-forward'></animated.div> */}
            {type === 'cognifiber' ? <LogoCogni /> : <LogoNvidia />}
            <div className='animation'>
                <img className='svg' src={SVG} alt="" />
                <animated.img style={type === 'cognifiber' ? cogniAnimation : nvidiaAnimation} className='dial' src={dial} alt="" />
            </div>
            <h2 className='kmph-speed'>{speedProgress}</h2>
            <div className='avg-max-wrapper'>
                <h3 className='avg'>{speedAVG}</h3>
                <h3 className='max'>{type === 'cognifiber' ? 100 : 5}</h3>
            </div>
        </div>
    )
}

export default Speedometer