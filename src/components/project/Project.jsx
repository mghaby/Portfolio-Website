import "./project.css"

const Project = ({image, link}) => {
    return (
        <div className="Project">
            <div className="Project-Header"></div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={image} alt="project related image" className="Project-Image" />
            </a>
        </div>
    )
}

export default Project