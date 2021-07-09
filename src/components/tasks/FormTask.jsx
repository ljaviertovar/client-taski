import React, { useState, useContext } from 'react';

import projectContex from '../../context/projects/projectContext';
import taskContex from '../../context/tasks/taskContext';

const FormTask = () => {

    const projectsContext = useContext(projectContex);
    const { actualproject } = projectsContext;
    const tasksContext = useContext(taskContex);
    const { errortask, addTask, validateTask, getTasks } = tasksContext;

    const [task, setTask] = useState({
        nameTask: ''
    })

    const { nameTask } = task;

    if (!actualproject) return null;

    const [selectedProject] = actualproject;


    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        if (nameTask.trim() === '') {
            validateTask();
            return;
        }

        task.projectId = selectedProject.projectId;
        task.estate = false;
        addTask(task);
console.log(selectedProject)
        getTasks(selectedProject)

        setTask({
            nameTask: ''
        })
    }

    return (

        <div className="formulario">

            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Name Task"
                        name="nameTask"
                        value={nameTask}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Add Task"
                    />
                </div>
            </form>

            {errortask
                ? <p className="mensaje error">All fields are required.</p>
                : null
            }

        </div>

    );
}

export default FormTask;