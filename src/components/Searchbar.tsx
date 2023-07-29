import { BsSearch } from 'react-icons/bs';
import '../styles/components/Searchbar.css';

const Searchbar = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 search-container">
                    <input type="text" className="form-control search-field" placeholder="Mobile"/>
                    <button className="btn btn-secondary"><BsSearch /></button>
                </div>
            </div>
        </div>
    );
}

export default Searchbar;