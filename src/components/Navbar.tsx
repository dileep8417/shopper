import { Link } from 'react-router-dom';
import '../styles/components/Navbar.css';

const Navbar = () => {
    return (
        <header>
            <nav className='navbar navbar-expand-sm bg-secondary'>
                <div className="navbar-content container-fluid">
                    <div className="navbar-brand"><i><Link to="/">Shopper</Link></i></div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/login" className="btn btn-primary">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="btn btn-treitory text-white">Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;