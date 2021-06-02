import React, { useContext } from 'react';

import projectContex from '../../context/projects/projectContext';

const FormTask = () => {

    const projectsContext = useContext(projectContex);
    const { actualproject } = projectsContext;

    if(!actualproject) return null;

    const [ selectedPoject ] = actualproject;

    return (

        <div className="formulario">

            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Name Task"
                        name="nameTask"
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

        </div>

    );
}

export default FormTask;