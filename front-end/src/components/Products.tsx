import { useSelector } from 'react-redux';
import '../styles/components/Products.css';
import ProductCard from "./ProductCard";
import { ProductType } from '../types/reduxTypes';
import { Link } from 'react-router-dom';
import { baseUrl } from '../utils';
import { AppState } from '../app/store';

const Products = () => {

    const products = useSelector((state: AppState) =>  state.products.products);
    const isLoading = useSelector((state: AppState) => state.products.isLoading);

    return (
        <section className="products container">
            <h3>Products</h3>
            {isLoading && <h4>Loading...</h4>}

            {!isLoading && (
                <div className="row">
                    {products.length > 0 && products.map((product: ProductType) => {
                        return (
                            <Link to={baseUrl(`/product/${product.id}`)} key={product.id} className='product-card'><ProductCard productDetails={product} /></Link>
                        );
                    })}
                </div>
            )}
        </section>
    );
}

export default Products;