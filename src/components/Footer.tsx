
import Link from 'next/link';
import { Phone, Mail, MapPin, Home, List } from 'lucide-react';
import { HOST } from '@/data/common'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center space-x-2">
              <img src={`${HOST}lovable-uploads/d079693a-acfe-4966-a8a7-5e6dd6c5b59a.png`} alt="Sika Vietnam Logo" className="h-12" loading="lazy" />
              <h3 className="text-xl font-bold">Sika Huế</h3>
            </div>
            <p className="text-gray-400">
              Chuyên cung cấp các sản phẩm Sika chống thấm chính hãng cho công trình xây dựng. Cam kết chất lượng và giá tốt nhất thị trường.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/tong.l.sika.bmt" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="https://zalo.me/0886880359" className="text-gray-400 hover:text-white transition-colors">
                <img src="/lovable-uploads/icon_zalo9.png" className="w-6 h-6 opacity-50 hover:opacity-100" alt="" />
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold">Liên Hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 text-sika-yellow mt-1" />
                <span className="text-gray-400">Kiệt 1, Tổ dân Phố Xuân Hoà, Phường Vỹ Dạ, TP Huế</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0 text-sika-yellow" />
                <a href="tel:0886880359" className="text-gray-400 hover:text-white transition-colors">0886880359</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0 text-sika-yellow" />
                <a href="mailto:contact@sikavietnam.com" className="text-gray-400 hover:text-white transition-colors">contact@sikavietnam.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-bold">Liên Kết</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                  <Home size={16} />
                  <span>Trang Chủ</span>
                </Link>
              </li>
              <li>
                <Link href="/san-pham" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                  <List size={16} />
                  <span>Sản Phẩm</span>
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                  <Phone size={16} />
                  <span>Liên Hệ</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Open hours / Newsletter Column */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold">Giờ Làm Việc</h3>
            <p className="text-gray-400">
              Thứ 2 - Chủ Nhật: 07:30 - 17:30<br />
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sika Huế. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
