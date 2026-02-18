import React from 'react';
import { Search, ShoppingCart, User, Menu, Phone, MapPin, Eye, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { UserRole } from '../types';

export const Header: React.FC = () => {
  const { cartTotal, cart, userRole, switchRole } = useStore();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Banner - Red (Fire) generates Earth - Good Feng Shui */}
      <div className="bg-accent text-xs text-center py-1 font-bold text-white hidden sm:block tracking-wide">
        KHUYẾN MÃI ĐẶC BIỆT: GIẢM GIÁ 50% LINH KIỆN PC HÔM NAY!
      </div>

      {/* Main Header - Primary Color (Amber/Earth) */}
      <div className="bg-primary text-white shadow-md">
        <div className="container mx-auto px-4 h-16 sm:h-20 flex items-center gap-4 justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center flex-shrink-0">
            {/* White text on Amber bg creates good contrast. Red accent for 'SOLUTION' (Fire) */}
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tighter italic">T2T<span className="text-accent text-white">SOLUTION</span></h1>
            <span className="text-[10px] hidden sm:block tracking-widest uppercase text-yellow-100">Giải pháp công nghệ</span>
          </Link>

          {/* Search Bar - Hidden on mobile, shown on md+ */}
          <div className="flex-1 max-w-xl mx-4 hidden md:block relative">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Bạn cần tìm gì hôm nay?" 
                className="w-full pl-4 pr-12 py-2.5 rounded border-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent shadow-inner bg-white"
              />
              <button className="absolute right-0 top-0 h-full px-4 text-gray-500 hover:text-accent bg-yellow-50 rounded-r border-l border-gray-100 transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-6 text-xs sm:text-sm">
             {/* Admin Toggle (Demo Only) */}
             <button onClick={switchRole} className="flex flex-col items-center gap-1 hover:bg-primaryLight p-2 rounded transition-colors">
               <Eye size={20} />
               <span className="hidden sm:block">{userRole === UserRole.ADMIN ? 'View as User' : 'Admin View'}</span>
             </button>

            {/* User */}
            {userRole === UserRole.ADMIN ? (
               <Link to="/admin" className="flex flex-col items-center gap-1 hover:bg-primaryLight p-2 rounded transition-colors">
                <User size={20} />
                <span className="hidden sm:block">Quản trị</span>
              </Link>
            ) : (
              <div className="flex flex-col items-center gap-1 hover:bg-primaryLight p-2 rounded cursor-pointer transition-colors">
                <User size={20} />
                <span className="hidden sm:block">Đăng nhập</span>
              </div>
            )}

            {/* Cart */}
            <Link to="/cart" className="flex flex-col items-center gap-1 hover:bg-primaryLight p-2 rounded relative transition-colors">
              <div className="relative">
                <ShoppingCart size={20} />
                {cart.length > 0 && (
                  /* Red badge (Fire) */
                  <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full shadow-sm">
                    {cart.length}
                  </span>
                )}
              </div>
              <span className="hidden sm:block">Giỏ hàng</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Sub Header / Navigation - Mobile Only Search */}
      <div className="bg-primaryLight text-white md:hidden p-2">
         <div className="relative">
            <input 
              type="text" 
              placeholder="Tìm kiếm sản phẩm..." 
              className="w-full pl-3 pr-10 py-2 rounded text-sm text-gray-800 focus:outline-none"
            />
            <button className="absolute right-0 top-0 h-full px-3 text-gray-500">
              <Search size={16} />
            </button>
          </div>
      </div>
    </header>
  );
};