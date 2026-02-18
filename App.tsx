import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Outlet, Link } from 'react-router-dom';
import { StoreProvider, useStore } from './context/StoreContext';
import { UserRole } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AIChatWidget } from './components/AIChatWidget';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { AdminDashboard } from './pages/AdminDashboard';
import { AdminProducts } from './pages/AdminProducts';
import { AdminOrders } from './pages/AdminOrders';
import { AdminCustomers } from './pages/AdminCustomers';
import { LayoutDashboard, Package, Settings, LogOut, ShoppingCart, Users } from 'lucide-react';

const AdminLayout: React.FC = () => {
  const { switchRole } = useStore();
  
  return (
    <div className="flex h-screen bg-[#fffbeb]">
      {/* Sidebar - Dark Amber/Brown for Earth stability */}
      <aside className="w-64 bg-dark text-white flex-shrink-0 hidden md:flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold tracking-tight italic text-center text-amber-50">T2T<span className="text-primaryLight">ADMIN</span></h1>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <Link to="/admin" className="flex items-center gap-3 px-4 py-3 bg-amber-900/50 rounded-lg text-white border border-amber-800">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>
          <Link to="/admin/products" className="flex items-center gap-3 px-4 py-3 hover:bg-amber-900/30 rounded-lg text-amber-100 transition">
            <Package size={20} />
            <span>Sản phẩm</span>
          </Link>
          <Link to="/admin/orders" className="flex items-center gap-3 px-4 py-3 hover:bg-amber-900/30 rounded-lg text-amber-100 transition">
            <ShoppingCart size={20} />
            <span>Đơn hàng</span>
          </Link>
           <Link to="/admin/customers" className="flex items-center gap-3 px-4 py-3 hover:bg-amber-900/30 rounded-lg text-amber-100 transition">
            <Users size={20} />
            <span>Khách hàng</span>
          </Link>
          <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-amber-900/30 rounded-lg text-amber-100 transition">
            <Settings size={20} />
            <span>Cài đặt</span>
          </a>
        </nav>
        <div className="p-4 border-t border-amber-900">
          <button onClick={switchRole} className="flex items-center gap-3 px-4 py-2 w-full hover:bg-amber-900/50 rounded text-amber-200 transition">
            <LogOut size={20} />
            <span>Thoát Admin</span>
          </button>
        </div>
      </aside>
      
      {/* Content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

const ClientLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fffbeb]">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
};

const ProtectedAdminRoute: React.FC = () => {
  const { userRole } = useStore();
  if (userRole !== UserRole.ADMIN) {
    return <Navigate to="/" replace />;
  }
  return <AdminLayout />;
};

const AppContent: React.FC = () => {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route path="/admin" element={<ProtectedAdminRoute />}>
        <Route index element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="customers" element={<AdminCustomers />} />
      </Route>

      {/* Client Routes */}
      <Route element={<ClientLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<div className="p-8 text-center text-gray-500">Trang danh mục đang cập nhật...</div>} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default function App() {
  return (
    <StoreProvider>
      <Router>
        <AppContent />
      </Router>
    </StoreProvider>
  );
}