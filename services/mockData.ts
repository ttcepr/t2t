import { Product, Category, Order } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'laptop', name: 'Laptop & Macbook' },
  { id: 'pc', name: 'PC - Máy tính bộ' },
  { id: 'monitor', name: 'Màn hình máy tính' },
  { id: 'components', name: 'Linh kiện máy tính' },
  { id: 'camera', name: 'Camera & Máy ảnh' },
  { id: 'phone', name: 'Điện thoại & Phụ kiện' },
  { id: 'gear', name: 'Gaming Gear' },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Laptop Gaming ASUS ROG Strix G15',
    price: 25990000,
    originalPrice: 29990000,
    category: 'laptop',
    image: 'https://picsum.photos/400/400?random=1',
    rating: 4.8,
    reviews: 125,
    specs: {
      CPU: 'Intel Core i7-12700H',
      RAM: '16GB DDR5',
      SSD: '512GB NVMe',
      GPU: 'RTX 3060 6GB'
    },
    description: 'Laptop gaming hiệu năng cao với thiết kế đậm chất game thủ.',
    isHot: true
  },
  {
    id: '2',
    name: 'iPhone 15 Pro Max 256GB Titanium',
    price: 33990000,
    originalPrice: 35990000,
    category: 'phone',
    image: 'https://picsum.photos/400/400?random=2',
    rating: 4.9,
    reviews: 342,
    specs: {
      Chip: 'A17 Pro',
      Screen: '6.7 inch OLED',
      Camera: '48MP Main'
    },
    description: 'Chiếc iPhone mạnh mẽ nhất với vỏ Titan sang trọng.',
    isHot: true
  },
  {
    id: '3',
    name: 'Camera Sony Alpha A6400 Body',
    price: 19500000,
    category: 'camera',
    image: 'https://picsum.photos/400/400?random=3',
    rating: 4.7,
    reviews: 89,
    specs: {
      Sensor: 'APS-C Exmor CMOS',
      Resolution: '24.2 MP',
      Video: '4K HDR'
    },
    description: 'Máy ảnh Mirrorless lấy nét siêu nhanh.',
  },
  {
    id: '4',
    name: 'Màn hình Dell UltraSharp U2422H',
    price: 6590000,
    originalPrice: 7200000,
    category: 'monitor',
    image: 'https://picsum.photos/400/400?random=4',
    rating: 4.6,
    reviews: 56,
    specs: {
      Size: '24 inch',
      Panel: 'IPS',
      Resolution: 'FHD 1920x1080'
    },
    description: 'Màn hình đồ họa màu sắc chuẩn xác.',
  },
  {
    id: '5',
    name: 'Mainboard ASUS TUF GAMING B760M',
    price: 3590000,
    category: 'components',
    image: 'https://picsum.photos/400/400?random=5',
    rating: 4.5,
    reviews: 33,
    specs: {
      Socket: 'LGA1700',
      Chipset: 'Intel B760',
      Form: 'mATX'
    },
    description: 'Bo mạch chủ bền bỉ chuẩn quân đội.',
  },
  {
    id: '6',
    name: 'PC Gaming Mega Shark 01',
    price: 15490000,
    originalPrice: 18000000,
    category: 'pc',
    image: 'https://picsum.photos/400/400?random=6',
    rating: 5.0,
    reviews: 12,
    specs: {
      CPU: 'i5-12400F',
      GPU: 'GTX 1660 Super',
      RAM: '16GB'
    },
    description: 'Cấu hình PC Gaming tối ưu trong tầm giá.',
    isHot: true
  },
  {
    id: '7',
    name: 'Chuột Logitech G Pro X Superlight',
    price: 2990000,
    category: 'gear',
    image: 'https://picsum.photos/400/400?random=7',
    rating: 4.9,
    reviews: 210,
    specs: {
      DPI: '25600',
      Weight: '63g',
      Connection: 'Wireless'
    },
    description: 'Chuột gaming không dây siêu nhẹ.',
  },
  {
    id: '8',
    name: 'Canon EOS R50 Kit 18-45mm',
    price: 18990000,
    category: 'camera',
    image: 'https://picsum.photos/400/400?random=8',
    rating: 4.8,
    reviews: 45,
    specs: {
      Sensor: 'APS-C',
      Video: '4K 30fps',
      AF: 'Dual Pixel CMOS AF II'
    },
    description: 'Máy ảnh nhỏ gọn dành cho người sáng tạo nội dung.',
  }
];

export const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-001',
    customerName: 'Nguyễn Văn A',
    total: 25990000,
    status: 'Processing',
    date: '2023-10-25',
    items: [MOCK_PRODUCTS[0] as any]
  },
  {
    id: 'ORD-002',
    customerName: 'Trần Thị B',
    total: 2990000,
    status: 'Delivered',
    date: '2023-10-24',
    items: [MOCK_PRODUCTS[6] as any]
  },
  {
    id: 'ORD-003',
    customerName: 'Lê Văn C',
    total: 18990000,
    status: 'Pending',
    date: '2023-10-26',
    items: [MOCK_PRODUCTS[7] as any]
  },
  {
    id: 'ORD-004',
    customerName: 'Phạm Thị D',
    total: 33990000,
    status: 'Shipped',
    date: '2023-10-23',
    items: [MOCK_PRODUCTS[1] as any]
  }
];

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalSpent: number;
  joinDate: string;
}

export const MOCK_CUSTOMERS: Customer[] = [
  { id: 'CUS-001', name: 'Nguyễn Văn A', email: 'vana@gmail.com', phone: '0901234567', totalSpent: 25990000, joinDate: '2023-01-15' },
  { id: 'CUS-002', name: 'Trần Thị B', email: 'thib@gmail.com', phone: '0909876543', totalSpent: 2990000, joinDate: '2023-03-20' },
  { id: 'CUS-003', name: 'Lê Văn C', email: 'vanc@gmail.com', phone: '0912345678', totalSpent: 18990000, joinDate: '2023-05-10' },
  { id: 'CUS-004', name: 'Phạm Thị D', email: 'thid@gmail.com', phone: '0987654321', totalSpent: 55000000, joinDate: '2022-11-05' },
  { id: 'CUS-005', name: 'Hoàng Văn E', email: 'vane@gmail.com', phone: '0933445566', totalSpent: 1200000, joinDate: '2023-09-12' },
];