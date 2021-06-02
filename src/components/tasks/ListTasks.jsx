import React, { Fragment, useContext } from 'react';
import Task from '../tasks/Task'

import projectContex from '../../context/projects/projectContext';

const ListTasks = () => {

    const projectsContext = useContext(projectContex);
    const { actualproject, deleteProject } = projectsContext;

    if(!actualproject) return <h2>Select one project</h2>

    const [ selectedPoject ] = actualproject;
    
    const tasksProject = [
        { nameTask: "task1", state: true },
        { nameTask: "task2", state: false },
        { nameTask: "task3", state: true }
    ];

    const onClickDeleteProject = () => {
        deleteProject(selectedPoject.id);
    }

    return (

        <Fragment>

            <h2>Project: { selectedPoject.nameProject }</h2>

            <ul className="listado-tareas">

                {tasksProject.length === 0
                    ? (
                        <li className="tarea">
                            <p>No Tasks yet</p>
                        </li>
                    )
                    : tasksProject.map(task => (
                        <Task
                            task={task}
                        />
                    ))
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick= { onClickDeleteProject }
            >
                Delete Project &times;
            </button>

        </Fragment>
    );
}

export default ListTasks;