import { useRef } from 'react';
import '../../styles/pages/Auth.css';

const Login = () => {

    const emailRef = useRef(null);
    const pwdRef = useRef(null);

    function loginSubmit(e) {
        e.preventDefault();
        const emailField = emailRef.current! as HTMLInputElement;
        const passwordField = pwdRef.current!;
        if (emailField.value) {

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
                        <input ref={pwdRef} type="password" className="form-control" />
                    </div>

                    <button className="btn btn-primary ml-auto" onClick={loginSubmit}>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;