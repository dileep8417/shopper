import { useSelector } from 'react-redux';
import '../styles/components/Products.css';
import ProductCard from "./ProductCard";
import { ApplicationState, ProductType } from '../types/reduxTypes';

const Products = () => {

    const products = useSelector((state: ApplicationState) =>  state.products.products);
    const isLoading = useSelector((state: ApplicationState) => state.products.isLoading);

    return (
        <section className="products container">
            <h3>Products</h3>
            {isLoading && <h4>Loading...</h4> }
            {!isLoading && (
                <div className="row">
                    {products.length > 0 && products.map((product: ProductType) => {
                        return <ProductCard key={product.id} productDetails={product} />
                    })}
                </div>
            )}
        </section>
    );
}

export default Products;