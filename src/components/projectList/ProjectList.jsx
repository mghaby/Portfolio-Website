import "./projectList.css";
import Project from "../project/Project";
import {projects} from "../../data.js";

const ProjectList = () => {
    return (
        <div className="ProjectList">
            <div className="ProjectList-Text">
                <h1 className="ProjectList-Title">Previous Projects</h1>
                <p className="ProjectList-Description">
                   Below is a compilation of some projects I have created to showcase my skills and interests
                   in the world of Software Development. 
                </p>

                <p className="ProjectList-Description">
                    The first is a Client-Side implementation of a scheduling algorithm in a distrubted setting, 
                    the second is a secuirty-oriented Full-Stack Web Application for the uploading and sharding of photos, which I created in a team,
                    the third is a Foreign Exchange Trading Algorithm that I created according to specifications provided by a client, 
                    and finally, the fourth is this website that you're on right now!
                </p>

                <p className="ProjectList-Description">
                    Feel free to click on the images to view the projects in more detail.
                </p>
            </div>

            <div className="ProjectList-List">
                {projects.map((item) => (
                <Project key={item.id} image={item.image} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default ProjectList