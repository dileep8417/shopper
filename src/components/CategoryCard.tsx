import { categoryCardProps } from "../types/reduxTypes";

const CategoryCard = ({ category }: categoryCardProps) => {
    return (
        <div className="col-6 col-md-4 col-lg-2">
            <div className="category-card">
                <img src={category.icon} alt="" />
                <p>{category.name}</p>
            </div>
        </div>
    );
}

export default CategoryCard;