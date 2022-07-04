import logo from '../images/logo.svg'
import burger from '../images/burger.svg'

const Header = () => {
    return (
        <div className='header'>
            <div className='header__wrapper'>
                <img src={logo} alt='logo' />
                <h1>Welcome to Comments.io</h1>
                <img src={burger} alt='menu' />
            </div>

        </div>
    )
}

export default Header