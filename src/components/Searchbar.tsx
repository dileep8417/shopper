import { BsSearch } from 'react-icons/bs';
import '../styles/components/Searchbar.css';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../slices/productsSlice';


type SearchBarProps = {
    searchValue?: string
};

const Searchbar = ({ searchValue }: SearchBarProps) => {

    const searchRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const searchField: HTMLInputElement = searchRef.current!;
        searchField.value = searchValue ? searchValue : '';
    });

    function searchSubmitHandler() {
        const searchField: HTMLInputElement = searchRef.current!;
        const searchTerm = searchField.value.trim();
        if (searchTerm.length === 0) {
            return;
        }
        dispatch(setIsLoading());
        navigate('/search?product=' + searchTerm);
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 col-md-6 search-container">
                    <input type="text" className="form-control search-field" placeholder="Mobile" ref={searchRef}/>
                    <button className="btn btn-secondary" onClick={searchSubmitHandler}><BsSearch /></button>
                </div>
            </div>
        </div>
    );
}

export default Searchbar;