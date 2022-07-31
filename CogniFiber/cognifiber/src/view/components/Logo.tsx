import SVG from './logo.svg';

const Logo = () => {
  return (
    <div>
        <img className='logo' src={SVG} alt="Logo" />
    </div>
  )
}

export default Logo