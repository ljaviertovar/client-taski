import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import projectContex from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const FormTask = () => {

    const projectsContext = useContext(projectContex);
    const { actualproject } = projectsContext;
    const tasksContext = useContext(taskContext);
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

        task.id = uuidv4();
        task.projectId = selectedProject.id;
        task.estate = false;
        addTask(task);

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