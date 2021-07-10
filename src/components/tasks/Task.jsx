import React, { useContext } from 'react';
import taskContext from '../../context/tasks/taskContext';
import projectContex from '../../context/projects/projectContext';

const Task = ({ task }) => {

    const tasksContext = useContext(taskContext);
    const { deleteTask, getTasks } = tasksContext;
    const projectsContext = useContext(projectContex);
    const { actualproject } = projectsContext;

    const [selectedProject] = actualproject;

    const taskDelete = selectedTask => {
        
        deleteTask(selectedTask);
        getTasks(selectedProject)
    }

    return (

        <li className="tarea sombra">
            <p>{task.nameTask}</p>

            <div className="estado">
                {task.state
                    ? (
                        <button
                            type="button"
                            className="completo"
                        >
                            Complete
                        </button>
                    )
                    : (
                        <button
                            type="button"
                            className="incompleto"
                        >
                            Incomplete
                        </button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >
                    Edit
                </button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick = { () => taskDelete(task) }
                >
                    Delete
                </button>
            </div>

        </li>

    );
}

export default Task;