import '../styles/components/Navbar.css';

const Navbar = () => {
    return (
        <header>
            <nav className='navbar navbar-expand-sm bg-secondary'>
                <div className="navbar-content container-fluid">
                    <div className="navbar-brand"><i>Shopper</i></div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className="btn btn-primary">Login</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-treitory text-white">Register</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;