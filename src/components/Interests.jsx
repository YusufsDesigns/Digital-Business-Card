import '../style.css'

export default function Interests(props){
    return(
        <div className={props.lightMode ? 'light' : ''} id='interests'>
            <h3>Interests</h3>
            <p>Food expert. Reader. Internet fanatic. Coffee fanatic. Gamer, Anime otaku</p>
        </div>
    )
}