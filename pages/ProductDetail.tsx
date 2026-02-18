import React from 'react';
import { useParams } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../services/mockData';
import { Star, CheckCircle, ShoppingCart, Truck, ShieldCheck, RefreshCcw } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  const { addToCart } = useStore();

  if (!product) return <div className="p-10 text-center">Không tìm thấy sản phẩm</div>;

  return (
    <div className="min-h-screen bg-secondary py-6">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-amber-100">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left: Images */}
            <div className="md:col-span-5">
              <div className="border border-gray-200 rounded-lg p-4 mb-4">
                <img src={product.image} alt={product.name} className="w-full h-auto object-contain" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="border border-gray-200 rounded p-1 cursor-pointer hover:border-primary">
                      <img src={product.image} alt="thumbnail" className="w-full h-full object-cover" />
                   </div>
                 ))}
              </div>
            </div>

            {/* Middle: Info */}
            <div className="md:col-span-4">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" className="text-gray-300" />
                </div>
                <span className="text-sm text-gray-500">{product.reviews} đánh giá</span>
                <span className="text-sm text-primary">SKU: {product.id}</span>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg mb-6 border border-amber-100">
                <p className="text-3xl font-bold text-accent mb-1">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                </p>
                {product.originalPrice && (
                  <p className="text-gray-400 line-through text-sm">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.originalPrice)}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Thông số nổi bật:</h3>
                <ul className="space-y-1">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <li key={key} className="text-sm flex">
                      <span className="font-medium min-w-[100px] text-gray-600">{key}:</span>
                      <span>{val}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-accent text-white py-3 rounded-lg font-bold hover:bg-red-700 transition flex items-center justify-center gap-2 shadow-md"
                >
                  <ShoppingCart size={20} />
                  MUA NGAY
                </button>
                <button className="px-4 py-3 border-2 border-primary text-primary rounded-lg font-bold hover:bg-amber-50 transition">
                  TRẢ GÓP
                </button>
              </div>
            </div>

            {/* Right: Policies */}
            <div className="md:col-span-3">
               <div className="border border-amber-200 rounded-lg p-4 bg-white">
                  <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">Yên tâm mua sắm</h3>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="text-primary flex-shrink-0" size={20} />
                      <span>Bảo hành chính hãng 12-24 tháng</span>
                    </li>
                     <li className="flex items-start gap-3">
                      <RefreshCcw className="text-primary flex-shrink-0" size={20} />
                      <span>Đổi trả miễn phí trong 7 ngày nếu lỗi</span>
                    </li>
                     <li className="flex items-start gap-3">
                      <Truck className="text-primary flex-shrink-0" size={20} />
                      <span>Giao hàng tận nơi toàn quốc</span>
                    </li>
                  </ul>
               </div>
            </div>
          </div>
          
          <div className="mt-10 border-t pt-6">
             <h2 className="text-xl font-bold mb-4">Mô tả sản phẩm</h2>
             <div className="prose max-w-none text-gray-700">
               <p>{product.description}</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};