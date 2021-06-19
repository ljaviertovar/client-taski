import React, { Fragment, useContext } from 'react';
import Task from '../tasks/Task'

import projectContex from '../../context/projects/projectContext';
import taskContex from '../../context/tasks/taskContext';

const ListTasks = () => {

    const projectsContext = useContext(projectContex);
    const { actualproject, deleteProject } = projectsContext;

    const tasksContext = useContext(taskContex);
    const { tasksproject } = tasksContext;

    if(!actualproject) return <h2>Select one project</h2>

    const [ selectedPoject ] = actualproject;

    const onClickDeleteProject = () => {
        deleteProject(selectedPoject.id);
    }

    return (

        <Fragment>

            <h2>Project: { selectedPoject.nameProject }</h2>

            <ul className="listado-tareas">

                {tasksproject.length === 0
                    ? (
                        <li className="tarea">
                            <p>No Tasks yet</p>
                        </li>
                    )
                    : tasksproject.map(task => (
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