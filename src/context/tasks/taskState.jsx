import React, { useReducer } from 'react';
import taskContext from './taskContext';
import taskReducer from './taskReducer';

import {
    TASKS_PROJECT,
    ADD_TASK,
    VALIDATE_TASK
} from '../../types';

const TaskState = props => {

    const initialState = {
        tasks: [
            { nameTask: "task1", state: true, projectId: 1 },
            { nameTask: "task2", state: false, projectId: 2 },
            { nameTask: "task3", state: true, projectId: 3 },
            { nameTask: "task1", state: true, projectId: 2 },
            { nameTask: "task2", state: false, projectId: 3 },
            { nameTask: "task3", state: true, projectId: 1 },
            { nameTask: "task1", state: true, projectId: 1 },
            { nameTask: "task2", state: false, projectId: 2 },
            { nameTask: "task3", state: true, projectId: 2 },
            { nameTask: "task1", state: true, projectId: 3 },
            { nameTask: "task2", state: false, projectId: 2 },
            { nameTask: "task3", state: true, projectId: 3 }
        ],
        tasksProject: null,
        "errorTask": false
    }

    const [state, dispatch] = useReducer(taskReducer, initialState);


    const getTasks = projectSelected => {

        dispatch({
            type: TASKS_PROJECT,
            payload: projectSelected.projectId
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

    return (
        <taskContext.Provider
            value={{
                tasks: state.tasks,
                tasksproject: state.tasksProject,
                errortask: state.errorTask,
                getTasks,
                addTask,
                validateTask
            }}
        >
            {props.children}
        </taskContext.Provider>
    )

}

export default TaskState;