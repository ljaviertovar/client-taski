import { 
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    GET_ACTUAL_PROJECT,
    DELETE_PROJECT
} from '../../types';

export default (state, action) => {

    switch (action.type) {
        case FORM_PROJECT:
            return {
                ...state,
                form: true    
            }
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                form: false,
                errorform: false
            }
        case VALIDATE_FORM:
            return {
                ...state,
                errorform: true
            }
        case GET_ACTUAL_PROJECT:
            return {
                ...state,
                actualproject: state.projects.filter(project => project.projectId === action.payload.projectId)
            }
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(project => project.projectId !== action.payload),
                actualproject: null
            }
        
        default:
            return state;
    }

};