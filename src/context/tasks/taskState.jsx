import React, { useReducer } from 'react';
import taskContext from './taskContext';
import taskReducer from './taskReducer';

import {
    TASKS_PROJECT,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK
} from '../../types';

const TaskState = props => {

    const initialState = {
        tasks: [
            { id: 1, nameTask: "task1", state: true, projectId: 1 },
            { id: 2, nameTask: "task2", state: false, projectId: 2 },
            { id: 3, nameTask: "task3", state: true, projectId: 3 },
            { id: 4, nameTask: "task1", state: true, projectId: 2 },
            { id: 5, nameTask: "task2", state: false, projectId: 3 },
            { id: 6, nameTask: "task3", state: true, projectId: 1 },
            { id: 7, nameTask: "task1", state: true, projectId: 1 },
            { id: 8, nameTask: "task2", state: false, projectId: 2 },
            { id: 9, nameTask: "task3", state: true, projectId: 2 },
            { id: 10, nameTask: "task1", state: true, projectId: 3 },
            { id: 11, nameTask: "task2", state: false, projectId: 2 },
            { id: 12, nameTask: "task3", state: true, projectId: 3 }
        ],
        tasksProject: null,
        "errorTask": false
    }

    const [state, dispatch] = useReducer(taskReducer, initialState);


    const getTasks = projectSelected => {

        dispatch({
            type: TASKS_PROJECT,
            payload: projectSelected.id
        })

    }

    const addTask = task => {

        dispatch({
            type: ADD_TASK,
            payload: task
        })

    }

    const validateTask = () => {
        
        dispatch({
            type: VALIDATE_TASK
        })

    }

    const deleteTask = selectedTask => {

        dispatch({
            type: DELETE_TASK,
            payload: selectedTask.id
        })
    }

    return (
        <taskContext.Provider
            value={{
                tasks: state.tasks,
                tasksproject: state.tasksProject,
                errortask: state.errorTask,
                getTasks,
                addTask,
                validateTask,
                deleteTask
            }}
        >
            {props.children}
        </taskContext.Provider>
    )

}

export default TaskState;