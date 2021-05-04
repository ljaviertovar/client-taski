import React, { Fragment } from 'react';
import Task from '../tasks/Task'

const ListTasks = () => {

    const tasksProject = [
        { nameTask: "task1", state: true },
        { nameTask: "task2", state: false },
        { nameTask: "task3", state: true }
    ];

    return (

        <Fragment>

            <h2>Project: Pro1</h2>

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
            >
                Delete Project &times;
            </button>

        </Fragment>
    );
}

export default ListTasks;