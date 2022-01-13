import "./about.css"
import AboutImage from "../../images/about-image.jpg"

const About = () => {
    return(
        <div className="About">
            <div className="About-Left">
                <div className="About-Card Background"></div>
                <div className="About-Card">
                    <img src={AboutImage} alt="stock programming photo" className="About-Image" />
                </div>
            </div>

            <div className="About-Right">
                <h1 className="About-Title">About Me</h1>
                <p className="About-Subtitle">Fitness Enthusiast and Gamer that loves Software Development</p>
                <p className="About-Description"> 
                Currently a University Student studying Software Engineering with a passion for programming. This passion was present even as a child however self-teaching at a young age did not work out for me and neither
                did the Technology curriculum at school. This lead to a two-year pursuit into Medical Sciences which at its peak left me with a decision. I hated the content and knew it was not sustainable. I blindly applied 
                for a Full-Stack Web Development Bootcamp and never looked back.
                </p>
            </div>
        </div>
    )
}


export default About