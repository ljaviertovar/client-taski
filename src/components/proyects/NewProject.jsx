import React, { Fragment, useState, useContext } from 'react';
import projectContex from '../../context/projects/projectContext';

const NewProject = () => {

    const projectsContext = useContext(projectContex);
    const { form, errorform, showForm, addProject, showError } = projectsContext;

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

        e.preventDefault();

        //validate data
        if(nameProject === '') {
            showError(true);
            return
        };

        // add data to context
        addProject(project);

        // clean form
        setProject({
            nameProject: ''
        })
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

            {errorform
            ? (
                <p className="mensaje error">All fields are required.</p>
            )
            : null
            }

        </Fragment>
    );
}

export default NewProject;