import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type RelatedProductItem = {
  name: string;
  image: string;
  priceOne: number | string;
  priceTwo: number | string;
};

function RelatedProduct() {
  const [products, setProducts] = useState<RelatedProductItem[]>([]);
  useEffect(() => {
    fetch("http://localhost:8000/post")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to Load");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.post || data);
      })
      .catch((err) => console.error("Error to load:", err));
  }, []);

  return (
    <section className="m-10">
      <h1 className="font-bold text-3xl mb-5">Related Products</h1>
      <Swiper
        modules={[Pagination, Navigation, Autoplay, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        pagination={{ clickable: true }}
      >
        {products.map((item) => (
          <SwiperSlide>
            <div
              key={item.name}
              className="cards_sec p-10 bg-[#FFF] P-5 rounded-3xl"
            >
              <div className="img_sec">
                <img className="w-50 block m-auto" src={item.image} />
              </div>
              <div className="cont_sec">
                <div className="procts_name">
                  <h2 className="font-bold text-left pt-5 pb-5 text-2xl">
                    {item.name}
                  </h2>
                </div>
                <div className="pricetags flex gap-5 align-center">
                  <span className="font-bold line-through">
                    {item.priceOne}
                  </span>
                  <span className="font-bold text-2xl">{item.priceTwo}</span>
                </div>
              </div>

              <button className="block">
                <Link
                  to={`/productsdetails/${item.name.toLocaleLowerCase().replace(/\s+/g, "-")}`}
                >
                  View Products
                </Link>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default RelatedProduct;
