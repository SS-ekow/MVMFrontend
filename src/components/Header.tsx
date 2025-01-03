import React, { useState } from 'react';
import { Menu, Phone, Person, ShoppingCart, Search } from '@mui/icons-material';
import { PiDevicesDuotone } from "react-icons/pi";
import { Select, MenuItem, TextField, IconButton } from '@mui/material';
import ModalManager from './LoginModal';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <header className="border-b border-gray-200 bg-white text-gray-800">
      {/* Top Header */}
      <div className="container mx-auto flex flex-wrap items-center justify-between py-2 px-4">
        {/* Logo Section */}
        <Link href="/">
          <div className="flex items-center">
            <div className='w-10 h-10 rounded-full bg-blue-300 text-blue-800 text-xl text-center font-extrabold flex items-center justify-center'><PiDevicesDuotone /></div>
            <span className="ml-2 text-xl font-bold text-blue-600">teckZone</span>
          </div>
        </Link>

        {/* Search and Category Section */}
        <div className="flex items-center space-x-4 flex-wrap">
          <IconButton sx={{ color: 'gray' }}>
            <Menu />
          </IconButton>
          <Select
            defaultValue="ALL CATEGORIES"
            sx={{ border: '1px solid', borderColor: 'gray.300', borderRadius: '4px', py: '4px', px: '8px' }}
          >
            <MenuItem value="ALL CATEGORIES">ALL CATEGORIES</MenuItem>
            {/* Add other categories dynamically */}
          </Select>
          <TextField
            variant="outlined"
            placeholder="I'm shopping for..."
            size="small"
            sx={{ width: { xs: '12rem', md: '24rem' } }}
          />
          <IconButton sx={{ color: 'gray' }}>
            <Search />
          </IconButton>
        </div>

        {/* Contact, Sign In, and Cart Section */}
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <div className="flex items-center space-x-1">
            <Phone sx={{ color: 'blue' }} />
            <span className="text-sm">(+233) 1234-56789</span>
          </div>
          
          <button className="flex items-center space-x-1 rounded-lg p-1" onClick={() => setIsModalOpen(true)}>
            <Person sx={{ color: 'gray' }} />
            <ModalManager/>
          </button>
          <div className="px-4 py-2 rounded-lg hover:text-white hover:bg-blue-600 transition-all">
            <Link href="/cart">
              <ShoppingCart sx={{ color: 'gray' }} />
              <span className="text-sm">Cart</span>
            </Link>
          </div>
        </div>
      </div>
      <hr />

      {/* Navigation Links */}
      <div className="container mx-auto flex flex-wrap items-center justify-between py-2 px-4">
        <div className="flex items-center flex-wrap space-x-4">
          <Link className="text-gray-600 hover:text-blue-600" href="/products">Top Popular</Link>
          <Link className="text-gray-600 hover:text-blue-600" href="/products">Flash Sale</Link>
          <Link className="text-gray-600 hover:text-blue-600" href="/products">TV & Video</Link>
          <Link className="text-gray-600 hover:text-blue-600" href="/products">Cell Phones</Link>
          <Link className="text-gray-600 hover:text-blue-600" href="/products">iPad & Tablets</Link>
          <Link className="text-gray-600 hover:text-blue-600" href="/products">Computer</Link>
        </div>
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <Link className="text-gray-600 hover:text-blue-600" href="/productlisting">List a Product</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
