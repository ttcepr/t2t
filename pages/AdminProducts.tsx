import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../services/mockData';
import { Edit, Trash2, Plus, Search } from 'lucide-react';

export const AdminProducts: React.FC = () => {
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Quản lý sản phẩm</h1>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Tìm kiếm..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full"
            />
          </div>
          {/* Hover red -> blue */}
          <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 whitespace-nowrap">
            <Plus size={18} />
            <span>Thêm mới</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Hình ảnh</th>
                <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Tên sản phẩm</th>
                <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Danh mục</th>
                <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Giá bán</th>
                <th className="px-6 py-4 font-semibold text-gray-600 text-sm text-center">Tồn kho</th>
                <th className="px-6 py-4 font-semibold text-gray-600 text-sm text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredProducts.map(product => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <img src={product.image} alt="" className="w-12 h-12 object-contain rounded border border-gray-200" />
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-800 line-clamp-1">{product.name}</p>
                    <p className="text-xs text-gray-500">ID: {product.id}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs uppercase font-medium">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                  </td>
                  <td className="px-6 py-4 text-center text-sm">
                    {Math.floor(Math.random() * 50) + 5} {/* Mock stock */}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredProducts.length === 0 && (
           <div className="p-8 text-center text-gray-500">Không tìm thấy sản phẩm nào.</div>
        )}
      </div>
    </div>
  );
};