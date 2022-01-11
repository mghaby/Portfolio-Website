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

                <p className="About-Description"> talk about wanting to code as kid and thinking unachievble
                                                losing interest through highschool and doing med stuff
                                                then having a realisation of how i hated med and then did the bootcamp
                                                and now a degree</p>
            </div>
        </div>
    )
}


export default About