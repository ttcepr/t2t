import React, { useState } from 'react';
import { MOCK_CUSTOMERS } from '../services/mockData';
import { Search, Mail, Phone, MoreHorizontal } from 'lucide-react';

export const AdminCustomers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = MOCK_CUSTOMERS.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-[#fffbeb] min-h-full">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-dark">Quản lý khách hàng</h1>
        <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Tìm khách hàng..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full bg-white"
            />
          </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-amber-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-amber-50 border-b border-amber-100">
              <tr>
                <th className="px-6 py-4 font-semibold text-primary text-sm">Khách hàng</th>
                <th className="px-6 py-4 font-semibold text-primary text-sm">Liên hệ</th>
                <th className="px-6 py-4 font-semibold text-primary text-sm">Ngày tham gia</th>
                <th className="px-6 py-4 font-semibold text-primary text-sm">Tổng chi tiêu</th>
                <th className="px-6 py-4 font-semibold text-primary text-sm text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredCustomers.map(customer => (
                <tr key={customer.id} className="hover:bg-amber-50/50">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-800">{customer.name}</p>
                    <p className="text-xs text-gray-500">{customer.id}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2 mb-1">
                        <Mail size={14} /> {customer.email}
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone size={14} /> {customer.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm">
                    {customer.joinDate}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(customer.totalSpent)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-primary">
                      <MoreHorizontal size={20} />
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