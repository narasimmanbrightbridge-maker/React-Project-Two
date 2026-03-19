import { useEffect, useState } from 'react';

function RelatedProduct() {

    const [ products, SetProducts ] = useState ([]);
    useEffect(() => {
        fetch('http://localhost:8000/post')
        .then((res) => {
            if(!res.ok) {
                throw new Error ("Failed To Load")
            }return res.json();
        })
        .then((data) => {
            SetProducts(data.post || data);
        }).catch((err) => console.error("Failed To Data:", err))
    })
   
    return(
        <section className="m-10">
            <h1 className="font-bold text-3xl mb-5">Related Products</h1>
            <div className="container">
                <div className="grid grid-cols-4 gap-5">

                    {products.map((item) =>
                    <div className="cards_sec p-10 bg-[#FFF] P-5 rounded-3xl">
                        <div className="img_sec">
                            <img className="w-50 block m-auto" src={item.image} />
                        </div>
                        <div className="cont_sec">
                            <div className="procts_name">
                                <h2 className="font-bold text-left pt-5 pb-5 text-2xl">{item.name}</h2>
                            </div>
                            <div className="pricetags flex gap-5 align-center">
                                <span className="font-bold line-through">₹{item.priceOne}</span>
                            <span className="font-bold text-2xl" >₹{item.priceTwo}</span>
                            </div>
                        </div>
                    </div>
                    )}
                   
                </div>
            </div>
        </section>
    )
}

export default RelatedProduct