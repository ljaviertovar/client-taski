import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

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
                <h1>Sign in to Taski</h1>

                <form
                    onSubmit={onSubmit}
                >
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

                    <div className="camplo-form">
                        <input
                            type="submit"
                            value="Sign in"
                            className="btn btn-primario btn-block"
                        />
                    </div>
                </form>

                <div>
                    <span>New to Taski? </span>
                    <Link
                        to={'/new-account'}
                        className="enlace-cuenta"
                    >
                        Create an account
                </Link>
                </div>
            </div>

        </div>
    );
}

export default Login;