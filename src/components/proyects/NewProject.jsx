import React, { Fragment, useState, useContext } from 'react';
import projectContex from '../../context/projects/projectContext';

const NewProject = () => {

    const projectsContext = useContext(projectContex);
    const { form, showForm } = projectsContext;

    const [project, setProject] = useState({
        nameProject: ''
    });

    const onChangeProject = e => {

        setProject({
            ...project,
            [e.target.name]: e.target.value
        });
    }

    const { nameProject } = project;

    const onSubmitProject = e => {

        e.preventDefauly();
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={showForm}
            >
                New Project
        </button>

            { form
                ? (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProject}
                    >
                        <input
                            className="input-text"
                            type="text"
                            name="nameProject"
                            placeholder="Name Project"
                            value={nameProject}
                            onChange={onChangeProject}
                        />

                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Add Project"
                        />

                    </form>
                )
                : null
            }

        </Fragment>
    );
}

export default NewProject;