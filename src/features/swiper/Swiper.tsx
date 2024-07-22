import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper as SwiperJs, SwiperSlide } from "swiper/react";
import { PRODUCTS } from "../../utils/products";
import "./_swiper.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import ProductCard from "./ProductCard";
import { useState } from "react";
import ProductImage from "./ProductImage";

function Swiper() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  const activeProduct = PRODUCTS[activeIndex];

  return (
    <div className="product-container">
      <div className="swiper-container">
        <SwiperJs
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={handleSlideChange}
        >
          {PRODUCTS.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductImage image={product.image} name={product.name} />
            </SwiperSlide>
          ))}
        </SwiperJs>
      </div>
      <div className="product-details-container">
        {activeProduct && <ProductCard product={activeProduct} />}
      </div>
    </div>
  );
}

export default Swiper;
