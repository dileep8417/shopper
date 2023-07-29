import { ProductType } from "../types/reduxTypes";
import { AiTwotoneStar } from 'react-icons/ai';

type productProps = {
    key: number,
    productDetails: ProductType
};

const ProductCard = ({ productDetails }: productProps) => {
    return (
        <div className="product-card">
            <div className="img-container">
            <img src={productDetails.image} />
            </div>
            <div className="content">
                <div className="title">
                    {productDetails.title.substring(0, 54).concat(productDetails.title.length > 54 ? '...' : '')}
                </div>
                <div className="info">
                    <div className="rating">
                        <div className="rate-container">
                            <AiTwotoneStar />
                            <span>{productDetails.rating.rate}</span>
                            <span className="reviews-count">({productDetails.rating.count})</span>
                        </div>
                    </div>
                    <div className="price">
                        ${productDetails.price}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;