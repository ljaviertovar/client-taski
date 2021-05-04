import React from 'react';
import Sidebar from '../layout/Sidebar'
import InfoBar from '../layout/InfoBar'

const Proyects = () => {
    return (
        <div className="contenedor-app">

            <Sidebar />

            <div className="seccion-principal">

                <InfoBar />

                <main>
                    <div className="contenedor-tareas">

                    </div>
                </main>
            </div>
        </div>
    );
}

export default Proyects;