import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Link } from "react-router-dom";
import ImageOne from "../product-10.webp";
import ImageTwo from "../product-4.webp";
import ImageThree from "../product-4.webp";
// import ImageFour from "../product-4.webp";
// import ImageFive from "../product-4.webp";
import Star from "../5star.png";
import slideOne from "../product-3.webp";
import slideTwo from "../product-8.webp";
import slideThree from "../product-11.webp";
// import slideFour from "../product-12.webp";
import slideFive from "../product-6.webp";

function OuProducts() {
  const ProductsCont = [
    {
      defaultImg: ImageOne,
      id: 1,
      starimg: Star,
      tag: "Top Rated",
      name: "Product-One",
      price: "₹750",
      priceOne: "₹600",
      phara:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula.",

      variant: [
        {
          id: "v1",
          color: "red",
          price: "₹800",
          discoutPrice: "750",
          image: slideFive,
        },
        {
          id: "v2",
          color: "blue",
          price: "₹900",
          discoutPrice: "850",
          image: slideOne,
        },
      ],
    },
    {
      defaultImg: ImageTwo,
      id: 1,
      starimg: Star,
      tag: "Top Rated",
      name: "Product-One",
      price: "₹750",
      priceOne: "₹600",
      phara:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula.",

      variant: [
        {
          id: "v1",
          color: "red",
          price: "₹1000",
          discoutPrice: "850",
          image: slideTwo,
        },
        {
          id: "v1",
          color: "red",
          price: "₹1000",
          discoutPrice: "850",
          image: slideThree,
        },
      ],
    },
    {
      defaultImg: ImageThree,
      id: 1,
      starimg: Star,
      tag: "Top Rated",
      name: "Product-One",
      price: "₹800",
      priceOne: "₹700",
      phara:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula.",

      variant: [
        {
          id: "v1",
          color: "red",
          price: "₹1000",
          discoutPrice: "850",
          image: slideThree,
        },
        {
          id: "v1",
          color: "red",
          price: "₹1000",
          discoutPrice: "850",
          image: slideThree,
        },
      ],
    },
  ];
  return (
    <section className="ProductsSlider">
      <div className="container mx-auto px-0">
        <h2 className="font-bold text-4xl m-10">Our Products</h2>

        <div className="cards grid grid-cols-1 mr-20 ml-20 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {ProductsCont.map((item) => (
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
                    {item.variant.map((v) => (
                      <SwiperSlide key={v.id}>
                        <img src={v.image}  />
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

      </div>
    </section>
  );
}

export default OuProducts;
