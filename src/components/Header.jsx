import '../style.css'
import CardImage from '../assets/pic3.jpg'
import EmailIcon from '../assets/Icon.png'

export default function Header(props){
    return(
        <div className={props.lightMode ? 'light' : ''} id='header'>
            <img src={CardImage} className="card-image"/>
            <div className="content">
                <h2>Yusuf Lawal</h2>
                <p>Frontend Developer</p>
                <a href="https://yusuflawal.netlify.app">yusuflawal.netlify.app</a>
                <a href="mailto: yusuf.olaoluwalawal@outlook.com" className='btn'>
                    <img src={EmailIcon} alt="" />
                    <span>Email</span>
                </a>
                <div className="toggler" onClick={props.handleClick}>
                    <span className="toggler-light">Light</span>
                    <div className="toggle-slider">
                        <div className="slider-circle"></div>
                    </div>
                    <span className="toggler-dark">Dark</span>
                </div>
            </div>
            
        </div>
    )
}