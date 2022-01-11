import "./projectList.css"
import Project from "../project/Project"

const ProjectList = () => {
    return (
        <div className="ProjectList">
            <div className="ProjectList-Text">
                <h1 className="ProjectList-Title">Previous Projects</h1>
                <p className="ProjectList-Description">
                    Description
                </p>
            </div>

            <div className="ProjectList-List">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    )
}

export default ProjectList