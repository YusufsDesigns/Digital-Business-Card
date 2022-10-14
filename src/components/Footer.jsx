import '../style.css'
import TwitterIcon from '../assets/Twitter Icon.png'
import FacebookIcon from '../assets/Facebook Icon.png'
import InstagramIcon from '../assets/Instagram Icon.png'
import GithubIcon from '../assets/GitHub Icon.png'

export default function Footer(){
    return(
        <footer className="footer">
            <a href="https://twitter.com/yusuf_Designs"><img src={TwitterIcon} alt="" /></a>
            <a href="https://web.facebook.com/profile.php?id=100043648393737"><img src={FacebookIcon} alt="" /></a>
            <a href="https://www.instagram.com/yusufs_dev/"><img src={InstagramIcon} alt="" /></a>
            <a href="https://github.com/YusufsDesigns"><img src={GithubIcon} alt="" /></a>
        </footer>
    )
}