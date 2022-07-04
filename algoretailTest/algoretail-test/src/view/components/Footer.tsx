import twitter from '../images/twitter.svg'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import whatsapp from '../images/whatsapp.svg'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__iconWrapper'>
                <img src={twitter} alt="twitter-icon" />
                <img src={github} alt="github-icon" />
                <img src={linkedin} alt="linkedin-icon" />
                <img src={whatsapp} alt="whatsapp-icon" />
            </div>
            <h2>©copyright all rights reserved</h2>
        </div>
    )
}

export default Footer