function ProductImage({ image, name }: { image: string; name: string }) {
  return (
    <div className="product-image">
      <img src={image} alt={name} />
    </div>
  );
}

export default ProductImage;
