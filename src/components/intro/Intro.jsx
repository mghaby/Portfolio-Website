import "./intro.css"
import Me from "../../images/me.png"

const Intro = () => {
    return (
        <div className="Intro">
            <div className="Intro-Left">
                <div className="Intro-Left-Wrapper">
                    <h2 className="Intro-Intro">Hello, my name is</h2>
                    <h1 className="Intro-Name">Mark Ghaby.</h1>
                    <div className="Intro-Title">
                        <div className="Intro-Title-Wrapper">
                            <div className="Intro-Title-Item">Software Engineer</div>
                            <div className="Intro-Title-Item">Blockchain Developer</div>
                            <div className="Intro-Title-Item">Full-Stack Web Developer</div>
                        </div>
                    </div>
                    <p className="Intro-Description">
                        I am a University Student currently studying at Macquarie University, Sydney, Australia. 
                        I am currently enrolled in a Bachelor of Engineering (Honours) with a Specialisation in Software Engineering.
                    </p>
                </div>
                
            </div>

            <div className="Intro-Right">
                <div className="Intro-Image-Shape"></div>
                <img src={Me} alt="photo of Mark Ghaby" className="Intro-Image" />
                {/* <div className="Intro-Right-Wrapper">
                    intro right wrap
                </div> */}
            </div>
        </div>
    )
}

export default Intro