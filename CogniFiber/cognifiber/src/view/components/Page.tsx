import AccuracyMeter from './AccuracyMeter'
import PerformanceBar from './PerformanceBar'
import ProgressBar from './ProgressBar'
import Speedometer from './Speedometer'

const Page = (props: any) => {
    const { data } = props
    return (
        <div>
            <h1 className='title'>Benchmark: Anomaly Detection (IoT)</h1>
            <div className='main'>

                <div className='efficiency-wrapper'>
                    <h2>Efficiency: Task/Sec/Watt</h2>
                    <PerformanceBar efficiency={data.cognifiber.efficiency}/>
                    <PerformanceBar efficiency={data.nvidia.efficiency}/>
                </div>
                <div className='speed-wrapper'>
                    <h2>Speed: Task/sec</h2>
                    <div className='speedometers'>
                        <Speedometer speed={data.cognifiber.speed}/>
                        <Speedometer speed={data.nvidia.speed}/>
                    </div>
                </div>
                <div className='accuracy-wrapper'>
                    <h2>Accuracy (Top5)</h2>
                    <AccuracyMeter data={data}/>
                </div>
                <div className='progress-wrapper'>
                    <h2>Benchmark Progress</h2>
                    <h3>NVidia DGX A100</h3>
                    <ProgressBar progress={data.cognifiber.progress}/>
                    <h3>CogniFiber Aurora</h3>
                    <ProgressBar progress={data.nvidia.progress}/>
                </div>
            </div>
        </div>
    )
}

export default Page