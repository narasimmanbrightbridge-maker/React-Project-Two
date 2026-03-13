import { useState } from 'react';
import Logo from './components/clients-7.webp';
import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
            <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    {/* Logo Section */}
                    <div className="flex-shrink-0 w-24">
                        <Link to="/"><img src={Logo} alt="Logo" className="w-full h-auto" /></Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <ul className="flex space-x-8 items-center font-medium text-black">
                            <li className="font-bold text-black hover: cursor-pointer transition-colors">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="font-bold text-black hover: cursor-pointer transition-colors">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="font-bold text-black hover: cursor-pointer transition-colors">
                                <Link to="/products">Products</Link>
                            </li>
                            <li className="font-bold text-black hover: cursor-pointer transition-colors">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className=" hover:text-black focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-slate-50 border-t border-slate-100`}>
                <ul className="px-2 pt-2 pb-3 space-y-1">
                    <li>
                        <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-slate-100 hover:text-blue-600">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-slate-100 hover:text-blue-600">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-slate-100 hover:text-blue-600">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-slate-100 hover:text-blue-600">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;