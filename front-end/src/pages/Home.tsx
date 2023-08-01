import '../styles/pages/Home.css';
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Searchbar from "../components/Searchbar";
import { useEffect } from 'react';
import { fetchCategories } from '../slices/categoriesSlice';
import { fetchProducts } from '../slices/productsSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchProducts(null));
    }, []);

    return (
        <>
            <Searchbar />
            <Carousel />
            <Categories />
            <Products />
        </>
    );
}

export default Home;