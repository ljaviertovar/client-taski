import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewAccount = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { name, email, password, confirmPassword } = user;

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();

    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Create your account</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            id="name"
                            value={name}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            id="email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Your Password"
                            id="password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Your Password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={onChange}
                        />
                    </div>
                    <div className="camplo-form">
                        <input
                        type="submit"
                        value="Create account"
                        className="btn btn-primario btn-block"
                    />
                    </div>
                </form>
                <div>
                    <span>Already on Taski? </span>
                    <Link
                        to={'/new-account'}
                        className="enlace-cuenta"
                    >
                        Sign In
                </Link>
                </div>
            </div>

        </div>
    );
}
export default NewAccount;