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
                I am currently a University Student studying Software Engineering with a passion for programming. As a child I aspired to be where I am today however growing up it was not so consistent.
                Around the age of 10 I attempted to learn C# using free resources online and to no avail I struggled to pick it up. During high school the Technology classes barely tapped into this interest
                as the deepest we achieved was HTML. I continued my high schooling with a disinterest in programming due to the early negative interactions I had, therefore I pursued a career in Medical Sciences.
                Two years into my study I had enough, I disliked the content and knew a career in this industry would not be sustainable. I went with my gut feeling and blindly applied for a Web Development Bootcamp.
                This was the career turning point of my life. Despite the struggles I faced attempting to pick up and apply syntax I was deeply interested and accepted the challenges with open arms. I decided I would
                continue my pursuit and undergo a Bachelor of Engineering to truly be a Software Engineer, which leads me to where I am today.
                </p>
            </div>
        </div>
    )
}


export default About