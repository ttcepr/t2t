import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-amber-200 pt-10 pb-6 text-sm text-gray-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-primary text-lg mb-4">Về T2T Solution</h3>
            <p className="mb-4">
              Hệ thống bán lẻ các sản phẩm công nghệ uy tín hàng đầu. Cam kết chính hãng, giá tốt nhất thị trường.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-blue-600 hover:text-blue-800"><Facebook /></a>
              <a href="#" className="text-pink-600 hover:text-pink-800"><Instagram /></a>
              <a href="#" className="text-red-600 hover:text-red-800"><Youtube /></a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 text-lg mb-4">Thông tin</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">Giới thiệu công ty</a></li>
              <li><a href="#" className="hover:text-primary">Tuyển dụng</a></li>
              <li><a href="#" className="hover:text-primary">Gửi góp ý, khiếu nại</a></li>
              <li><a href="#" className="hover:text-primary">Tìm siêu thị</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 text-lg mb-4">Chính sách</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">Chính sách bảo hành</a></li>
              <li><a href="#" className="hover:text-primary">Chính sách đổi trả</a></li>
              <li><a href="#" className="hover:text-primary">Chính sách giao hàng</a></li>
              <li><a href="#" className="hover:text-primary">Hướng dẫn thanh toán</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 text-lg mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-primary" />
                <span>123 Đường Công Nghệ, Quận 1, TP.HCM</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0 text-primary" />
                <span>1900 1234 (8:00 - 21:00)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0 text-primary" />
                <span>cskh@t2tsolution.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-10 pt-6 text-center text-xs text-gray-500">
          <p>&copy; 2023 T2T Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};