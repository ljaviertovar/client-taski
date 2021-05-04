import React from 'react';
import Sidebar from '../layout/Sidebar'
import InfoBar from '../layout/InfoBar'
import FormTask from '../tasks/FormTask'
import ListTasks from '../tasks/ListTasks'

const Proyects = () => {
    return (
        <div className="contenedor-app">

            <Sidebar />

            <div className="seccion-principal">

                <InfoBar />

                <main>

                    <FormTask />

                    <div className="contenedor-tareas">
                        <ListTasks />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Proyects;