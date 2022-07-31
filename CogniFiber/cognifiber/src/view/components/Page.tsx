import AccuracyMeter from './AccuracyMeter'
import PerformanceBar from './PerformanceBar'
import ProgressBar from './ProgressBar'
import Speedometer from './Speedometer'
import Logo from './Logo'
import backHigh from './rectHigh.svg'


const Page = (props: any) => {
    const { data } = props
    return (
        <div>
            <div className='header'>
                <div className='logo'>
                    <Logo />
                </div>
                <h1 className='title'>{data.title}</h1>
            </div>
            <div className='main'>

                <div className='speed-wrapper'>
                    {/* <img className='background' src={backHigh} alt="" /> */}
                    <h2>SPEED: TASK / SEC</h2>
                    <div className='speedometers'>
                        <Speedometer speed={data.cognifiber.speed} tolerance={data.cognifiber.speedTolerance} type={'cognifiber'} />
                        <Speedometer speed={data.nvidia.speed} tolerance={data.nvidia.speedTolerance} type={'nvidia'} />
                    </div>
                </div>

                <div className='right-side'>
                    <div className='efficiency-wrapper wrapper'>
                        <h2>EFFICIENCY: TASK / SEC / WATT &nbsp;</h2>
                        <PerformanceBar data={data.cognifiber.efficiency} type={'cognifiber'} cat={'efficiency'} />
                        <PerformanceBar data={data.nvidia.efficiency} type={'nvidia'} cat={'efficiency'} />
                    </div>
                    <div className='progress-wrapper wrapper'>
                        <h2>BENCHMARK PROGRESS &nbsp;</h2>
                        <PerformanceBar data={data.cognifiber.progress} type={'cognifiber'} cat={'benchmark'} />
                        <PerformanceBar data={data.nvidia.progress} type={'nvidia'} cat={'benchmark'} />
                    </div>
                    <div className='accuracy-wrapper wrapper'>
                        <h2>ACCURACY &nbsp;</h2>
                        <PerformanceBar data={data.cognifiber.accuracy} tolerance={data.cognifiber.accuracyTolerance} type={'cognifiber'} cat={'accuracy'} />
                        <PerformanceBar data={data.nvidia.accuracy} tolerance={data.nvidia.accuracyTolerance} type={'nvidia'} cat={'accuracy'} />
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Page