import React from 'react';
import { Product } from '../types';
import { Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group bg-white rounded-lg border border-amber-100 hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden h-full relative"
    >
      {discount > 0 && (
        <span className="absolute top-2 left-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded-sm z-10 shadow-sm">
          -{discount}%
        </span>
      )}
      
      <div className="p-4 flex items-center justify-center h-48 bg-white relative overflow-hidden">
         <img 
           src={product.image} 
           alt={product.name} 
           className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-500"
         />
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-medium text-gray-800 line-clamp-2 mb-2 group-hover:text-primary transition-colors text-sm md:text-base">
          {product.name}
        </h3>
        
        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-1">
            {/* Price in Red (Fire) is standard for sales and lucky */}
            <span className="text-accent font-bold text-base md:text-lg">
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-gray-400 text-xs line-through">
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.originalPrice)}
              </span>
            )}
          </div>
          
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-1">
              {/* Stars Gold/Amber (Earth) */}
              <Star size={12} className="text-yellow-500 fill-yellow-500" />
              <span className="text-xs text-gray-500">({product.reviews})</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Add Overlay - Earth/Gold theme */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary text-white p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center items-center gap-2 cursor-pointer" onClick={handleAddToCart}>
         <ShoppingCart size={16} />
         <span className="text-sm font-medium">Thêm vào giỏ</span>
      </div>
    </Link>
  );
};