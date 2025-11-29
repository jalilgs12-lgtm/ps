import React, { useEffect, useState } from "react";
import '../assets/styles/Project.scss';
import { getProjects, Project as ProjectType } from '../services/api';

function Project() {
    // 1. Create a state to hold the list of projects
    const [projects, setProjects] = useState<ProjectType[]>([]);
    
    // 2. Fetch data when the component loads
    useEffect(() => {
        getProjects()
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error("Error fetching projects:", error);
            });
    }, []);

    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            {/* 3. Loop through the real data from Django */}
            {projects.map((project) => (
                <div className="project" key={project.id}>
                    <a href={project.project_link} target="_blank" rel="noreferrer">
                        <img 
                            src={project.image} 
                            className="zoom" 
                            alt={project.title} 
                            width="100%" 
                            // Simple error handling if image fails
                            onError={(e) => {e.currentTarget.src = "https://via.placeholder.com/300"}}
                        />
                    </a>
                    <a href={project.project_link} target="_blank" rel="noreferrer">
                        <h2>{project.title}</h2>
                    </a>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Project;
