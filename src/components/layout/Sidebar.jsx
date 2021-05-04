import React from 'react';
import NewProject from '../proyects/NewProject'
import ListProjects from '../proyects/ListProjects'

const Sidebar = () => {
    return ( 
        <aside>
            <h1>Taski</h1>
            
            <NewProject/>
            
            <div className="proyectos">
                <h2>Your proyects</h2>

                <ListProjects/>

            </div>
        </aside>
     );
}
 
export default Sidebar;