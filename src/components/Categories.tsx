import '../styles/components/Categories.css';
import CategoryCard from "./CategoryCard";
import { categoriesData } from '../constants/categories.data';

const Categories = () => {
    return (
        <section className="categories container">
            <h3>Categories</h3>
            <div className="row">
                {categoriesData.map(category => {
                    return <CategoryCard key={category.name} category={category} />
                })}
            </div>
        </section>
    );
}

export default Categories;