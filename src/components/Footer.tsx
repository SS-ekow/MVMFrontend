import React from 'react'
import Link from 'next/link'
import { PiDevicesDuotone } from 'react-icons/pi'

const Footer = () => {
    return (
        <div className="bg-blue-800 text-sm text-white p-8">
            <Link href="/" passHref>
                <div className="flex items-center cursor-pointer">
                    <div className='w-10 h-10 rounded-full bg-white text-blue-800 text-xl text-center font-extrabold flex items-center justify-center'>
                        <PiDevicesDuotone />
                    </div>
                    <span className="ml-2 text-xl font-bold text-white">teckZone</span>
                </div>
            </Link>
            <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-white font-bold mb-2">Get to Know Us</h3>
                    <ul>
                        <li><Link href="#" className="hover:underline">Careers</Link></li>
                        <li><Link href="#" className="hover:underline">Blog</Link></li>
                        <li><Link href="#" className="hover:underline">About teckZone</Link></li>
                        <li><Link href="#" className="hover:underline">Investor Relations</Link></li>
                        <li><Link href="#" className="hover:underline">teckZone Devices</Link></li>
                        <li><Link href="#" className="hover:underline">teckZone Science</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-2">Make Money with Us</h3>
                    <ul>
                        <li><Link href="#" className="hover:underline">Sell products on teckZone</Link></li>
                        <li><Link href="#" className="hover:underline">Sell on teckZone Business</Link></li>
                        <li><Link href="#" className="hover:underline">Become an Affiliate</Link></li>
                        <li><Link href="#" className="hover:underline">Advertise Your Products</Link></li>
                        <li><Link href="#" className="hover:underline">Self-Publish with Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-2">teckZone Payment Products</h3>
                    <ul>
                        <li><Link href="#" className="hover:underline">teckZone Business Card</Link></li>
                        <li><Link href="#" className="hover:underline">Shop with Points</Link></li>
                        <li><Link href="#" className="hover:underline">Reload Your Balance</Link></li>
                        <li><Link href="#" className="hover:underline">teckZone Currency Converter</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-2">Let Us Help You</h3>
                    <ul>
                        <li><Link href="#" className="hover:underline">Your Account</Link></li>
                        <li><Link href="#" className="hover:underline">Your Orders</Link></li>
                        <li><Link href="#" className="hover:underline">Shipping Rates & Policies</Link></li>
                        <li><Link href="#" className="hover:underline">Returns & Replacements</Link></li>
                        <li><Link href="#" className="hover:underline">Help</Link></li>
                    </ul>
                </div>
            </div>
            <div className="bg-gray-700 py-4">
                <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
                    <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-globe"></i>
                            <span>English</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-dollar-sign"></i>
                            <span>GHS- Ghana Cedis</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-flag-ghana"></i>
                            <span>Ghana</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer