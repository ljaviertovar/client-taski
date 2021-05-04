import React, { Fragment, useState } from 'react';

const NewProject = () => {

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
            >
                New project
        </button>

            <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProject}
            >
                <input
                    className="input-text"
                    type="text"
                    name="nameProject"
                    placeholder="Project's name"
                    value={nameProject}
                    onChange= {onChangeProject}
                />

                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Add project"
                />

            </form>
        </Fragment>
    );
}

export default NewProject;