import React, { useContext } from 'react';
import projectContex from '../../context/projects/projectContext';

const Project = ({project}) => {

    const projectsContext = useContext(projectContex);
    const { setActualProject } = projectsContext;

    return ( 

        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => setActualProject(project)}
            >
                {project.nameProject}
            </button>
        </li>

     );
}
 
export default Project;