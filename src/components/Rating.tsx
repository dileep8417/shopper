import { AiTwotoneStar } from "react-icons/ai";
import { RatingProps } from "../types/reduxTypes";
import '../styles/components/Rating.css';

const Rating = ({ rating, reviewCount }: RatingProps) => {
    return (
        <div className="rating">
            <div className="rate-container">
                <AiTwotoneStar />
                <span>{rating}</span>
                <span className="reviews-count">({reviewCount})</span>
            </div>
        </div>
    );
}

export default Rating