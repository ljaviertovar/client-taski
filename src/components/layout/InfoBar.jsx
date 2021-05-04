import React from 'react';

const InfoBar = () => {
    return (
        <header className="app-header">
            <p className="nombre-usuario">
                Hi, <strong>Taviz</strong>
            </p>
            <nav className="nav-principal">
                <a href="#!">Log out</a>
            </nav>
        </header>
    );
}

export default InfoBar;