import logo from "./components/clients-7.webp";
import { Link } from "react-router-dom";

function footer() {
  return (
    <footer className="foots m-5 bg-liner bg-[#FFF] p-10 rounded-3xl md:m-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="abt">
            <img className="logo" src={logo} />
          </div>
          <div className="links">
            <h3 className="font-bold text-2xl text-left">Links</h3>
            <hr className="w-10 mb-5" />
            <ul className="font-semibold text-left cursor-pointer">
              <li className="pb-2">
                <Link to= "/about" onClick={() => setIsOpen(false)}> About </Link>
            </li>
              <li className="pb-2"><Link to= "/products" onClick={() => setIsOpen(false)}>Products</Link></li>
              <li className="pb-2"><Link to= "/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
          </div>
          <div className="adres">
            <h3 className="font-bold text-2xl text-left">Address</h3>
            <hr className="w-10 mb-5" />
            <ul className="font-semibold text-left cursor-pointer">
              <li className="pb-2">test@gmail.com</li>
              <li className="pb-2">+(112)-90988</li>
              <li className="pb-2">St.Josh St, uk</li>
            </ul>
          </div>
          <div className="payMent">
            <h3 className="font-bold text-2xl text-left">Payments</h3>
            <hr className="w-10 mb-5" />
            <ul className="font-semibold text-left cursor-pointer">
              <li className="pb-2">PayPal</li>
              <li className="pb-2">RazerPay</li>
              <li className="pb-2">Stripe</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyRightSec mt-5">
        <hr className="pb-5" />
        <h4 className="text-center text-1xl font-bold">2026@Eco-Ecomm</h4>
      </div>
    </footer>
  );
}

export default footer;
