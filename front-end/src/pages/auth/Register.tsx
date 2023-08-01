import '../../styles/pages/Auth.css';

const Register = () => {
    return (
        <div className="container form">
            <div className="row">
                <h3>Register</h3>
                <form className="register-form">
                <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input type="text" className="form-control" placeholder="Dileep Atyam" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="text" className="form-control" placeholder="abc@gmail.com" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" placeholder='Password' />
                    </div>

                    <button className="btn btn-primary ml-auto">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;