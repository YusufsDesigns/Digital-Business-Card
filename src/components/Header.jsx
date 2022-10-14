import '../style.css'
import CardImage from '../assets/pic2.jpg'
import EmailIcon from '../assets/Icon.png'

export default function Header(){
    return(
        <div className='header'>
            <img src={CardImage} className="card-image"/>
            <div className="content">
                <h2>Yusuf Lawal</h2>
                <p>Frontend Developer</p>
                <a href="https://yusuflawal.netlify.app">yusuflawal.netlify.app</a>
                <button>
                    <img src={EmailIcon} alt="" />
                    <span>Email</span>
                </button>
            </div>
            
        </div>
    )
}