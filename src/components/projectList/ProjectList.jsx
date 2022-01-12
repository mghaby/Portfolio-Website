import "./projectList.css";
import Project from "../project/Project";
import {Data, projects} from "../../data.js";

const ProjectList = () => {
    return (
        <div className="ProjectList">
            <div className="ProjectList-Text">
                <h1 className="ProjectList-Title">Previous Projects</h1>
                <p className="ProjectList-Description">
                    write something about ur projects and that 
                    they are here to show ur skills etc
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