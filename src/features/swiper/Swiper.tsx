import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper as SwiperJs, SwiperSlide } from "swiper/react";
import { PRODUCTS } from "../../utils/products";
import "./_swiper.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import ProductCard from "./ProductCard";

function Swiper() {
  return (
    <div className="swiper-container">
      <SwiperJs
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {PRODUCTS.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </SwiperJs>
    </div>
  );
}

export default Swiper;
