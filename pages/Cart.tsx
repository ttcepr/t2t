import React from 'react';
import { useStore } from '../context/StoreContext';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useStore();

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Giỏ hàng trống</h2>
        <p className="text-gray-500 mb-6">Bạn chưa thêm sản phẩm nào vào giỏ hàng.</p>
        {/* Hover red -> blue */}
        <Link to="/" className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Tiếp tục mua sắm
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
           <Link to="/" className="text-gray-400 hover:text-primary"><ArrowLeft size={24} /></Link>
           Giỏ hàng của bạn
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm flex gap-4 items-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-contain border border-gray-100 rounded" />
                
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800 line-clamp-2">{item.name}</h3>
                  <p className="text-primary font-bold mt-1">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-gray-300 rounded">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-gray-100"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                     <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-100"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 p-2"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <h3 className="font-bold text-lg mb-4 border-b pb-2">Tổng quan đơn hàng</h3>
              
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Tạm tính:</span>
                <span className="font-medium">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cartTotal)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Giảm giá:</span>
                <span className="font-medium text-green-600">0đ</span>
              </div>
              
              <div className="flex justify-between mb-6 pt-4 border-t">
                <span className="font-bold text-lg">Tổng cộng:</span>
                <span className="font-bold text-xl text-primary">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cartTotal)}</span>
              </div>

              {/* Hover red -> blue */}
              <button className="w-full bg-primary text-white py-3 rounded font-bold hover:bg-blue-700 transition uppercase">
                Tiến hành đặt hàng
              </button>
              
              <p className="text-xs text-center mt-4 text-gray-500">
                (Chức năng thanh toán chỉ là demo)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};