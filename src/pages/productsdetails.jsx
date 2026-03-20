import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, A11y } from "swiper/modules";
import { useEffect, useState } from "react";

import RelatedProduct from "../components/APIFrontPage";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useLocation, useParams } from "react-router-dom";

const slugifyProductName = (name = "") =>
  name.toLowerCase().trim().replace(/\s+/g, "-");

function ProductDetails() {
  const location = useLocation();
  const { id } = useParams();
  const [product, setProduct] = useState(location.state?.product ?? null);
  const [isLoading, setIsLoading] = useState(!location.state?.product);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (location.state?.product) {
      setProduct(location.state.product);
      setIsLoading(false);
      return;
    }

    let isMounted = true;

    setIsLoading(true);

    fetch("http://localhost:8000/post")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed To Load");
        }
        return res.json();
      })
      .then((data) => {
        if (!isMounted) {
          return;
        }

        const incomingProducts = Array.isArray(data?.post)
          ? data.post
          : Array.isArray(data)
            ? data
            : [];

        const matchedProduct =
          incomingProducts.find((item) => slugifyProductName(item.name) === id) ?? null;

        setProduct(matchedProduct);
      })
      .catch((err) => {
        console.error("Failed To Data:", err);
        if (isMounted) {
          setProduct(null);
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id, location.state]);

  if (isLoading) {
    return <div className="m-10 font-bold">Loading product...</div>;
  }

  if (!product) {
    return <div className="m-10 font-bold">Product not found for "{id}".</div>;
  }

  return (
    <>
      <section className="Single_Products mb-5">
        <div className="container grid grid-cols-1 md:grid-cols-2">
          <div className="imagesSec block w-1xl bg-[#FFF] m-10 rounded-3xl md:ml-10 mr-10 mt-10">
            <Swiper
              modules={[Pagination, Navigation, Autoplay, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {(product.variant ?? []).map((v, index) => (
                <SwiperSlide key={v.id || index}>
                  <img
                    className="w-2xs block mx-auto p-5"
                    src={v.image}
                    alt={product.name}
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

        <>
        <RelatedProduct currentProductName={product.name} />
        </>

      </section>
    </>
  );
}
export default ProductDetails;
