import { useEffect } from "react";
import Products from "../components/Products";
import Searchbar from "../components/Searchbar";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../slices/productsSlice";
import { AppDispatch, AppState } from "../app/store";

const Search = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const searchTerm: (string | null) = searchParams.get('product');
    const isLoading = useSelector((state: AppState) => state.products.isLoading);

    console.log(searchTerm);
    
    
    useEffect(() => {
        if (searchTerm === null) {
            navigate('/');
            return;
        }

        dispatch(fetchProducts(searchTerm));
    });
    
    return (
        <>
            <Searchbar searchValue={searchTerm ? searchTerm : ''} />

            {isLoading && <h3>Loading...</h3>}
            {!isLoading && <Products />}
        </>
    );
}

export default Search;