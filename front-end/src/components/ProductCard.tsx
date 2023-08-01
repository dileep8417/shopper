import { ProductType } from "../types/reduxTypes";
import Rating from "./Rating";

type productProps = {
    productDetails: ProductType
};

const ProductCard = ({ productDetails }: productProps) => {
    return (
        <>
            <div className="img-container">
            <img src={productDetails.image} />
            </div>
            <div className="content">
                <div className="title">
                    {productDetails.title.substring(0, 54).concat(productDetails.title.length > 54 ? '...' : '')}
                </div>
                <div className="info">
                    <Rating rating={productDetails.rating.rate} reviewCount={productDetails.rating.count} />
                    <div className="price">
                        ${productDetails.price}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;