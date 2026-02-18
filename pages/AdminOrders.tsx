import React, { useState } from 'react';
import { MOCK_ORDERS } from '../services/mockData';
import { Search, Eye, Filter } from 'lucide-react';

export const AdminOrders: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOrders = MOCK_ORDERS.filter(o => 
    o.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    o.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-700';
      case 'Processing': return 'bg-blue-100 text-blue-700';
      case 'Shipped': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="p-6 bg-[#fffbeb] min-h-full">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-dark">Quản lý đơn hàng</h1>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Tìm mã đơn, tên khách..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full bg-white"
            />
          </div>
          <button className="bg-white border border-amber-200 text-gray-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-amber-50">
            <Filter size={18} />
            <span>Lọc</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-amber-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-amber-50 border-b border-amber-100">
              <tr>
                <th className="px-6 py-4 font-semibold text-primary text-sm">Mã đơn hàng</th>
                <th className="px-6 py-4 font-semibold text-primary text-sm">Khách hàng</th>
                <th className="px-6 py-4 font-semibold text-primary text-sm">Ngày đặt</th>
                <th className="px-6 py-4 font-semibold text-primary text-sm">Tổng tiền</th>
                <th className="px-6 py-4 font-semibold text-primary text-sm text-center">Trạng thái</th>
                <th className="px-6 py-4 font-semibold text-primary text-sm text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredOrders.map(order => (
                <tr key={order.id} className="hover:bg-amber-50/50">
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {order.customerName}
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 font-bold text-accent">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.total)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-primary hover:bg-amber-100 rounded transition">
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};