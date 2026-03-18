import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useLocation, useParams } from "react-router-dom";
function productDetails() {
  const location = useLocation();
  const { id } = useParams();

  const product = location.state?.product;

  if (!product) {
    return;
    <div className="font-bold">Products Not Found!</div>;
  }
  return (
    <>
      <section className="Single_Products">
        <div className="container grid grid-cols-1 md:grid-cols-2">
          <div className="imagesSec block w-1xl bg-[#FFF] m-10 rounded-3xl md:ml-10 mr-10 mt-10">
            <Swiper
              modules={[Pagination, Navigation, Autoplay, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {product.variant.map((v, index) => (
                <SwiperSlide>
                  <img
                    className="w-2xs block mx-auto p-5"
                    src={v.image}
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="content_sec mr-10 ml-10 mb-10 md:m-10">
            <h2 className="font-bold text-4xl text-left">{product.name}</h2>
            <p className="text-left pt-5">{product.phara}</p>
            <div className="price_col mt-5 flex gap-3 align-bottom">
              <p className="text-left pb-5 font-bold text-2xl line-through">
                ₹{product.price}
              </p>
              <p className="text-left font-bold text-4xl">
                ₹{product.priceOne}
              </p>
            </div>
            <div className="cardts flex gap-5">
              <button>Add to cart</button>
              <button>Buy Now</button>
            </div>
          </div>
        </div>

        {/* related-products */}

        {/* <div className="related-product">
          <h2 className="font-bold text-3xl">Related Products</h2>
          <Swiper
            modules={[Pagination, Navigation, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{ clickable: true }}
            nested={true}
          >
            <SwiperSlide>
              <div className="cards grid grid-cols-1 mr-20 ml-20 gap-5 md:grid-cols-3 lg:grid-cols-5">
                {typeof ProductsCont !== 'undefined' && ProductsCont.map((item) => (
                  <div
                    className="prod-sec bg-[#FFF] p-5 rounded-2xl shadow-2xl shadow-amber-100 cursor-pointer"
                    key={item.id}
                  >
                    <div className="imgSect">
                      <Swiper
                        modules={[Pagination, Navigation, Autoplay, A11y]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                      >
                        {item.variant.map((v, idx) => (
                          <SwiperSlide key={idx}>
                            <img src={v.image} />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>

                    <div className="conts">
                      <h2 className="font-bold text-1xl mt-5 text-left">
                        {item.name}
                      </h2>
                      <div className="TwoCard flex justify-between mb-5">
                        <p className="none">{item.phara}</p>
                        <h2 className="font-bold line-through">{item.price}</h2>
                        <h2 className="font-bold">{item.priceOne}</h2>
                      </div>
                      <img className="w-24 mb-5" src={Star} alt="" />
                      <button className="block">
                        <>
                          <Link
                            to={`/productsdetails/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                            state={{ product: item }}
                          >
                            View Product
                          </Link>
                        </>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </div> */}

      </section>
    </>
  );
}
export default productDetails;
