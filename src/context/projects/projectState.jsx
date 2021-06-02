import React, {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';

import projectContext from './projectContext';
import projectReducer from './projectReducer'

import { 
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    GET_ACTUAL_PROJECT
} from '../../types';


const ProjectState = props => {

    const projects = [
        { id: 1, nameProject: 'pro1' },
        { id: 2, nameProject: 'pro2' },
        { id: 3, nameProject: 'pro3' },
        { id: 4, nameProject: 'pro4' },
    ];

    const initialState = {
        projects: [],
        form: false,
        errorform: false,
        actualproject: null
    };

    //dispatch to exect actions
    const [state, dispatch] = useReducer(projectReducer, initialState);

    // CRUD 
    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        });
    }

    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        });
    }

    const addProject =  project => {
        project.id = uuidv4();

        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    const showError= () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }

    const setActualProject = project => {
        dispatch({
            type: GET_ACTUAL_PROJECT,
            payload: project
        })
    }


    return(
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                errorform: state.errorform,
                actualproject: state.actualproject,
                showForm,
                getProjects,
                addProject,
                showError,
                setActualProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    )

}

export default ProjectState;