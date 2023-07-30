import { Link } from 'react-router-dom';
import { baseUrl } from '../utils';
import '../styles/components/Navbar.css';

const Navbar = () => {    
    return (
        <header>
            <nav className='navbar navbar-expand-sm bg-secondary'>
                <div className="navbar-content container-fluid">
                    <div className="navbar-brand"><i><Link to={baseUrl()}>Shopper</Link></i></div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={baseUrl('/login')} className="btn btn-primary">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={baseUrl('/register')} className="btn btn-treitory text-white">Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;