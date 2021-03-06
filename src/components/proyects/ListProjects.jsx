import React, {useContext, useEffect} from 'react';
import Project from './Project';
import projectContex from '../../context/projects/projectContext';

const ListProjects = () => {

    const projectsContext = useContext(projectContex);
    const { projects, getProjects } = projectsContext;

    useEffect(()=> {
        getProjects();
    },[])

    if(projects.length === 0) return <p>There is not project yet. Let's create one!</p>;

    return (

        <ul className="listado-proyectos">
            { projects.map(project => (
                <Project
                    key={project.id}
                    project={project}
                />
            ))}
        </ul>

    );
}

export default ListProjects;