import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ClientOne from "../clients-1.webp";
import ClientTwo from "../clients-2.webp";
import ClientThree from "../clients-3.webp";
import ClientFour from "../clients-4.webp";
import ClientFive from "../clients-5.webp";
import ClientSix from "../clients-6.webp";

function OurClients() {
  const Swiperitem = [
    {
      id: ClientOne,
    },
    {
      id: ClientTwo,
    },
    {
      id: ClientThree,
    },
    {
      id: ClientFour,
    },
    {
      id: ClientFive,
    },
    {
      id: ClientSix,
    },
  ];
  return (
    <section className="OurClients">
      <div className="container">
        <Swiper
          className=""
          modules={[Pagination, Navigation, Autoplay, A11y]}
          spaceBetween={20}
          speed={6000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          loop={true}
          // navigation={{clickable: true}}
          // pagination={{clickable: true}}
          slidesPerView={2}
          breakpoints={{
            767: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {Swiperitem.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="mt-10">
                <img
                  className="imgsec block mr-auto ml-auto w-30"
                  src={item.id}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default OurClients;
