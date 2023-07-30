const Register = () => {
    return (
        <div className="container register">
            <div className="row">
                <form className="register-form form">
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="text" className="form-control" placeholder="abc@gmail.com" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" />
                    </div>

                    <button className="btn btn-primary ml-auto">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;