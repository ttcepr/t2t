import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Users, ShoppingBag, DollarSign, Package } from 'lucide-react';

const data = [
  { name: 'T1', sales: 4000, orders: 24 },
  { name: 'T2', sales: 3000, orders: 13 },
  { name: 'T3', sales: 2000, orders: 98 },
  { name: 'T4', sales: 2780, orders: 39 },
  { name: 'T5', sales: 1890, orders: 48 },
  { name: 'T6', sales: 2390, orders: 38 },
  { name: 'T7', sales: 3490, orders: 43 },
];

export const AdminDashboard: React.FC = () => {
  return (
    <div className="p-6 bg-[#fffbeb] min-h-full">
      <h1 className="text-2xl font-bold mb-6 text-dark">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Doanh thu tháng</p>
            <p className="text-2xl font-bold text-gray-800">540.2tr</p>
          </div>
          <div className="bg-amber-100 p-3 rounded-full text-amber-600">
            <DollarSign size={24} />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Đơn hàng mới</p>
            <p className="text-2xl font-bold text-gray-800">1,245</p>
          </div>
          <div className="bg-orange-100 p-3 rounded-full text-orange-600">
            <ShoppingBag size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Khách hàng</p>
            <p className="text-2xl font-bold text-gray-800">8,340</p>
          </div>
          <div className="bg-red-100 p-3 rounded-full text-red-600">
            <Users size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Sản phẩm</p>
            <p className="text-2xl font-bold text-gray-800">432</p>
          </div>
          <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
            <Package size={24} />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
          <h2 className="text-lg font-bold mb-4 text-gray-700">Doanh thu theo tháng</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* Gold/Amber color for bars */}
                <Bar dataKey="sales" fill="#b45309" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
          <h2 className="text-lg font-bold mb-4 text-gray-700">Xu hướng đơn hàng</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* Red color for lines (Fire) */}
                <Line type="monotone" dataKey="orders" stroke="#dc2626" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};