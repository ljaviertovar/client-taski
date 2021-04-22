import React from 'react';

const Login = () => {

    const onChange=() =>{

    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Login</h1>

                <form>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            id="email"
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
                            onChange={onChange}
                        />
                    </div>

                    <div className="camplo-form">
                        <input
                            type="submit"
                            value="Login"
                            className="btn btn-primario btn-block"
                        />
                    </div>
                </form>
            </div>

        </div>
     );
}
 
export default Login;