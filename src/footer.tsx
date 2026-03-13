import logo from './components/clients-7.webp';

function footer () {
    return (

        <footer className="foots m-10 bg-liner bg-linear-to-br from-[#FFFBF1] to-[#FFF2D0] p-10 rounded-3xl">
            <div className="container">
                <div className="grid grid-cols-4">
                    <div className="abt">
                        <img className="logo" src={logo} />
                    </div>
                    <div className="links">
                        <h3 className='font-bold text-2xl text-left'>Links</h3>
                        <hr className='w-10 mb-5' />
                        <ul className='font-semibold text-left cursor-pointer'>
                            <li className='pb-2'>About</li>
                            <li className='pb-2'>Products</li>
                            <li className='pb-2'>Contact</li>
                        </ul>
                    </div>
                    <div className="adres">
                        <h3 className='font-bold text-2xl text-left'>Address</h3>
                        <hr className='w-10 mb-5' />
                        <ul className='font-semibold text-left cursor-pointer'>
                            <li className='pb-2'>test@gmail.com</li>
                            <li className='pb-2'>+(112)-90988</li>
                            <li className='pb-2'>St.Josh St, uk</li>
                        </ul>
                    </div>
                    <div className="payMent">
                        <h3 className='font-bold text-2xl text-left'>Payments</h3>
                        <hr className='w-10 mb-5' />
                        <ul className='font-semibold text-left cursor-pointer'>
                            <li className='pb-2'>PayPal</li>
                            <li className='pb-2'>RazerPay</li>
                            <li className='pb-2'>Stripe</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyRightSec mt-5">
                <hr className='pb-5' />
                <h4 className='text-center text-1xl font-bold'>2026@Eco-Ecomm</h4>
            </div>
        </footer>
        

    ) 
}

export default footer