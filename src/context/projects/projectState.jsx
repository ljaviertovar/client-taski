import React, {useReducer} from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer'
import { 
    FORM_PROJECT,
    GET_PROJECTS
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
        form: false
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

    return(
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                showForm,
                getProjects
            }}
        >
            {props.children}
        </projectContext.Provider>
    )

}

export default ProjectState;