import '../styles/pages/Home.css';
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Searchbar from "../components/Searchbar";
import { useEffect } from 'react';
import { fetchCategories } from '../slices/categoriesSlice';
import { fetchProducts } from '../slices/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../types/reduxTypes';


const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchProducts());
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