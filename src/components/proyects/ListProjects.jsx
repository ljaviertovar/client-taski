import React from 'react';
import Project from './Project';

const ListProjects = () => {

    const projects = [
        { nameProject: 'pro1' },
        { nameProject: 'pro2' },
        { nameProject: 'pro3' }
    ];

    return (

        <ul className="listado-proyectos">
            { projects.map(project => (
                <Project
                    project={project}
                />
            ))}
        </ul>

    );
}

export default ListProjects;