import smallSVG from './small-logo.svg';

const LogoCogni = () => {
  return (
    <div className='cogni-logo'>
        <img className='logo' src={smallSVG} alt="Logo" />
        <h2>CogniFiber</h2>
        <h3 className='pop_font'>Aurora 1.0</h3>
    </div>
  )
}

export default LogoCogni