import { useEffect, useState } from 'react'

const AccuracyMeter = (props: any) => {
    const { data } = props;
    const [fiberAccuracy, setFiberAccuracy] = useState(0)
    const [nvidiaAccuracy, setNvidiaAccuracy] = useState(0)


    useEffect(() => {

        const timer = setInterval(() => {
            if (fiberAccuracy < data.cognifiber.accuracy) setFiberAccuracy(fiberAccuracy + 1)
            if (nvidiaAccuracy < data.nvidia.accuracy) setNvidiaAccuracy(nvidiaAccuracy + 1)
        }, 50);
        return () => clearInterval(timer);
    }, [fiberAccuracy])

    return (
        <div className='accuracy-block'>
            <h1 className='accuracy' style={{ color: 'rgba(99, 16, 187, 1)' }}>{fiberAccuracy}%</h1>
            <h1 className='accuracy' style={{ color: '#76b900' }}>{nvidiaAccuracy}%</h1>
        </div>
    )
}

export default AccuracyMeter