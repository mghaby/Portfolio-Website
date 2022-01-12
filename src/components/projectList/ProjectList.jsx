import "./projectList.css";
import Project from "../project/Project";
import {projects} from "../../data.js";

const ProjectList = () => {
    return (
        <div className="ProjectList">
            <div className="ProjectList-Text">
                <h1 className="ProjectList-Title">Previous Projects</h1>
                <p className="ProjectList-Description">
                    Below are a compilation of projects I have created to showcase my skills and interests
                   in the world of Software Development. The first is an Automated Trading Algorithm for a client,
                   the second is a CLI program that can be used to store data regarding trades made in the Foreign Exchange Market,
                   the third is a Solidity Smart Contract aiming to provide Multi-Signature Wallet capabilities, the fourth is a 
                   Hotel Management System and finally the portfolio website that you're on right now.
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