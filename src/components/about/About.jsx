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
                
            </div>
        </div>
    )
}


export default About