import React from 'react';
import { CATEGORIES, MOCK_PRODUCTS } from '../services/mockData';
import { ProductCard } from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { ChevronRight, Zap } from 'lucide-react';

export const Home: React.FC = () => {
  const hotProducts = MOCK_PRODUCTS.filter(p => p.isHot);
  const laptopProducts = MOCK_PRODUCTS.filter(p => p.category === 'laptop');
  const cameraProducts = MOCK_PRODUCTS.filter(p => p.category === 'camera');

  return (
    <div className="min-h-screen bg-secondary">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Sidebar Menu - Desktop */}
          <aside className="hidden md:block w-64 bg-white rounded-lg shadow-sm overflow-hidden flex-shrink-0 h-fit border border-amber-100">
            <div className="bg-amber-100 p-3 font-bold text-primary uppercase text-sm">Danh mục sản phẩm</div>
            <ul className="divide-y divide-gray-100">
              {CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <Link 
                    to={`/category/${cat.id}`} 
                    className="flex items-center justify-between px-4 py-3 hover:bg-amber-50 hover:text-primary transition-colors text-sm font-medium text-gray-700"
                  >
                    <span>{cat.name}</span>
                    <ChevronRight size={14} className="text-gray-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Banner Area */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[300px] md:h-[380px]">
              {/* Main Slider (Mocked as static image for now) */}
              <div className="md:col-span-2 bg-gray-200 rounded-lg overflow-hidden relative group">
                <img 
                  src="https://picsum.photos/800/600?random=10" 
                  alt="Banner Main" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                   <div className="text-white">
                     <h2 className="text-3xl font-bold mb-2">Đại tiệc công nghệ</h2>
                     <p className="mb-4">Giảm tới 50% cho Laptop Gaming</p>
                     {/* Button Fire Red for Action */}
                     <button className="bg-accent text-white px-6 py-2 rounded font-medium hover:bg-red-700 transition shadow-lg">Mua ngay</button>
                   </div>
                </div>
              </div>

              {/* Right Side Banners */}
              <div className="hidden md:flex flex-col gap-4 h-full">
                <div className="flex-1 bg-gray-200 rounded-lg overflow-hidden relative border border-amber-200">
                   <img src="https://picsum.photos/400/300?random=11" className="w-full h-full object-cover" />
                   <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 text-xs font-bold rounded text-primary">IPHONE 15 SERIES</div>
                </div>
                <div className="flex-1 bg-gray-200 rounded-lg overflow-hidden relative border border-amber-200">
                   <img src="https://picsum.photos/400/300?random=12" className="w-full h-full object-cover" />
                   <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 text-xs font-bold rounded text-primary">GEAR GAMING</div>
                </div>
              </div>
            </div>
            
            {/* Mobile Category Grid (Horizontal Scroll) */}
            <div className="md:hidden overflow-x-auto no-scrollbar pb-2">
              <div className="flex gap-3">
                 {CATEGORIES.map(cat => (
                   <Link key={cat.id} to={`/category/${cat.id}`} className="flex-shrink-0 bg-white p-3 rounded shadow-sm w-28 text-center text-xs font-medium border border-amber-100">
                     {cat.name}
                   </Link>
                 ))}
              </div>
            </div>
          </div>
        </div>

        {/* Flash Sale Section */}
        {/* Border Red (Fire) */}
        <section className="mt-8 bg-white p-4 rounded-lg shadow-sm border-t-4 border-accent">
           <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-accent">
                 <Zap className="fill-current animate-pulse" />
                 <h2 className="text-xl font-bold uppercase italic">Flash Sale</h2>
              </div>
              <div className="text-sm font-medium text-gray-500">Kết thúc trong: 02:15:30</div>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {hotProducts.map(product => (
                 <ProductCard key={product.id} product={product} />
              ))}
           </div>
        </section>

        {/* Laptop Section */}
        <section className="mt-8">
           <div className="flex items-center justify-between mb-4">
              {/* Border Primary (Earth/Gold) */}
              <h2 className="text-xl font-bold text-gray-800 uppercase border-l-4 border-primary pl-3">Laptop Nổi Bật</h2>
              <Link to="/category/laptop" className="text-sm text-primary hover:underline">Xem tất cả</Link>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {laptopProducts.map(product => (
                 <ProductCard key={product.id} product={product} />
              ))}
           </div>
        </section>

         {/* Camera Section */}
         <section className="mt-8 mb-8">
           <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800 uppercase border-l-4 border-primary pl-3">Máy ảnh chuyên nghiệp</h2>
              <Link to="/category/camera" className="text-sm text-primary hover:underline">Xem tất cả</Link>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cameraProducts.map(product => (
                 <ProductCard key={product.id} product={product} />
              ))}
           </div>
        </section>
      </div>
    </div>
  );
};