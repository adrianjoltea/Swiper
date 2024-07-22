import { useState } from "react";
import { ProductProps } from "./productCard.types";

function ProductCard({ product }: ProductProps) {
  const [quantity, setQuantity] = useState(0);
  const calculateDiscountPercentage = () => {
    if (product.discounted_price) {
      const discount =
        ((product.original_price - product.discounted_price) /
          product.original_price) *
        100;
      return discount.toFixed(2);
    }
    return null;
  };

  const discountPercentage = calculateDiscountPercentage();
  return (
    <div className="product-info">
      <h2 className="product-name">{product.name}</h2>

      <div className="product-price">
        {product.discounted_price ? (
          <div className="prices">
            <span className="discounted-price">
              ${product.discounted_price.toFixed(2)}
            </span>
            <span className="original-price">
              ${product.original_price.toFixed(2)}
            </span>
            {discountPercentage && (
              <span className="discount-percentage">
                {discountPercentage}% off
              </span>
            )}
          </div>
        ) : (
          <div className="prices">
            <span className="discounted-price">
              ${product.original_price.toFixed(2)}
            </span>
          </div>
        )}
      </div>
      <div className="quantity-container">
        <span>Quantity</span>
        <div>
          <button
            onClick={() => setQuantity(quantity - 1)}
            className="quantity-button"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="quantity-button"
          >
            +
          </button>
        </div>
      </div>
      <div className="product-actions">
        <button className="button-action add-to-cart">Add to cart</button>
        <button className="button-action add-to-wishlist">
          Add to wishlist
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
