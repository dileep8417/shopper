import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"; 
import { fetchProductById, fullDescription, resetProduct } from "../slices/productsSlice";
import '../styles/pages/ProductDetails.css';
import Rating from "../components/Rating";
import { AppDispatch, AppState } from "../app/store";

const ProductDetails = () => {
    const { productId } = useParams();
    const dispatch = useDispatch<AppDispatch>();

    const {product, showFullDescription, isLoading} = useSelector((state: AppState) => state.products);
    const maxDescriptionChars = 140;

    useEffect(() => {
        dispatch(fetchProductById(productId));

        return () => {
            dispatch(resetProduct());
        }
    }, []);
    

    function showMore() {
        dispatch(fullDescription());
    }

    return (
        <div className="container product-details">
            <div className="row">
                {isLoading && <h3>Loading...</h3>}
                {product.title && (
                <>
                    <div className="col-sm-12 col-md-5 product-img-container">
                       <img src={product.image} alt="" />
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-7 product-info">
                        <div className="title">
                            {product.title}
                        </div>
                        <div className="info">
                            <Rating rating={product.rating.rate} reviewCount={product.rating.count} />
                            
                            <div className="price">${product.price}</div>
                        </div>
                        <div className="description">
                            {
                                showFullDescription
                                ? product.description
                                : product.description.substring(0, maxDescriptionChars).concat(product.description.length > maxDescriptionChars ? '...' : '')
                            }
                            {
                                !showFullDescription && product.description.length > maxDescriptionChars && <span className="show-more" onClick={showMore}>Show more</span>
                            }
                        </div>
                        <div className="col-12 btn-container">
                            <button className="btn btn-warning">Add to Cart</button>
                            <button className="btn btn-danger">Buy now</button>
                        </div>
                    </div>
                </>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;