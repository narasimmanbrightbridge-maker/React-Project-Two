import { useState } from 'react';
import Logo from './components/clients-7.webp';


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = ['Home', 'About', 'Products', 'Contact'];

    return (
        <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
            <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    {/* Logo Section */}
                    <div className="flex-shrink-0 w-24">
                        <img src={Logo} alt="Logo" className="w-full h-auto" />
                    </div>

                    {/* Desktop Menu (Hidden on mobile) */}
                    <div className="hidden md:block">
                        <ul className="flex space-x-8 items-center font-medium text-slate-600">
                            {navLinks.map((link) => (
                                <li key={link} className="hover:text-blue-600 cursor-pointer transition-colors">
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-black focus:outline-none"
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
                    {navLinks.map((link) => (
                        <li 
                            key={link} 
                            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-blue-600"
                        >
                            {link}
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Header;