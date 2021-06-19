import React, { useContext } from 'react';
import projectContex from '../../context/projects/projectContext';
import taskContex from '../../context/tasks/taskContext';

const Project = ({project}) => {

    const projectsContext = useContext(projectContex);
    const { setActualProject } = projectsContext;

    const tasksContext = useContext(taskContex);
    const { getTasks } = tasksContext;

    const selectProject = projectSelected => {
        setActualProject(projectSelected);
        getTasks(projectSelected);
    }

    return ( 

        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => selectProject(project)}
            >
                {project.nameProject}
            </button>
        </li>

     );
}
 
export default Project;