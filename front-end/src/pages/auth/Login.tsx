import React, { useRef } from 'react';
import '../../styles/pages/Auth.css';

const Login = () => {

    const emailRef = useRef(null);
    const pwdRef = useRef(null);

    function loginSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const emailField = emailRef.current! as HTMLInputElement;
        const passwordField = pwdRef.current! as HTMLInputElement;

        if (emailField.value && passwordField.value) {
            // submit login
        }
    }

    return (
        <div className="container form">
            <div className="row">
                <h3 className="heading">Login</h3>
                <form className="login-form form">
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input ref={emailRef} type="email" className="form-control" placeholder="abc@gmail.com" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input ref={pwdRef} type="password" className="form-control" placeholder='Password' />
                    </div>

                    <button className="btn btn-primary ml-auto" onClick={loginSubmit}>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;