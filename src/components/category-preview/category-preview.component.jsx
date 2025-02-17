import { Link } from "react-router-dom";
import {
  CategoryPreviewContainer,
  CategoryTitle,
  CategoryItemPreview,
} from "./category-preview.styles";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <CategoryTitle>
        <Link className="title" to={title.toLowerCase()}>
          {title.toUpperCase()}
        </Link>
      </CategoryTitle>
      <CategoryItemPreview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryItemPreview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
