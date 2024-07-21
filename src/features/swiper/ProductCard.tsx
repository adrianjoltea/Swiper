import { ProductProps } from "./productCard.types";

function ProductCard({ product }: ProductProps) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <a href={product.link}>
          <h2 className="product-name">{product.name}</h2>
        </a>
        <div className="product-price">
          {product.discounted_price ? (
            <>
              <span className="original-price">
                ${product.original_price.toFixed(2)}
              </span>
              <span className="discounted-price">
                ${product.discounted_price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="original-price">
              ${product.original_price.toFixed(2)}
            </span>
          )}
        </div>
        <div className="product-actions">
          <button className="add-to-cart">Add to cart</button>
          <button className="add-to-wishlist">Add to wishlist</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
