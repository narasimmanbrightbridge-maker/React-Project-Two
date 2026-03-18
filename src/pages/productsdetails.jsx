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
        <div className="container grid grid-cols-2">
          <div className="imagesSec block w-1xl bg-[#FFF] mr-10 ml-10 mt-10 rounded-3xl">
            <img className="w-2xs block mx-auto p-5" src={product.id} alt="" />
          </div>
          <div className="content_sec m-10">
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
      </section>
    </>
  );
}
export default productDetails;
