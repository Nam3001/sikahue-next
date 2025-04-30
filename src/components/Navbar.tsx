
'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';
import { HOST } from '@/data/common';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname()


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-3'}`} style={{ backgroundColor: "#fff"}}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src={`${HOST}lovable-uploads/d079693a-acfe-4966-a8a7-5e6dd6c5b59a.png`}
              alt="Sika Vietnam Logo" 
              className="h-12 w-auto"
              loading="lazy"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`navigation-link ${isActive('/') ? 'active-link' : ''}`}
            >
              Trang Chủ
            </Link>
            <Link 
              href="/gioi-thieu" 
              className={`navigation-link ${isActive('/gioi-thieu') ? 'active-link' : ''}`}
            >
              Giới Thiệu
            </Link>
            <Link 
              href="/san-pham" 
              className={`navigation-link ${isActive('/san-pham') ? 'active-link' : ''}`}
            >
              Sản Phẩm
            </Link>
            <Link 
              href="/bang-gia" 
              className={`navigation-link ${isActive('/bang-gia') ? 'active-link' : ''}`}
            >
              Bảng Giá
            </Link>
            <Link 
              href="/tin-tuc" 
              className={`navigation-link ${isActive('/tin-tuc') ? 'active-link' : ''}`}
            >
              Tin Tức
            </Link>
            <Link 
              href="/lien-he" 
              className={`navigation-link ${isActive('/lien-he') ? 'active-link' : ''}`}
            >
              Liên Hệ
            </Link>
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:0948612300" 
              className="bg-sika-red hover:bg-red-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300"
            >
              <Phone size={18} />
              <span className="font-medium">0948612300</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <Link 
              href="/"
              onClick={() => setIsMobileMenuOpen(false)} 
              className={`block py-2 px-4 rounded ${isActive('/') ? 'bg-gray-100 text-sika-red' : ''}`}
            >
              Trang Chủ
            </Link>
            <Link 
              href="/gioi-thieu" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-2 px-4 rounded ${isActive('/gioi-thieu') ? 'bg-gray-100 text-sika-red' : ''}`}
            >
              Giới Thiệu
            </Link>
            <Link 
              href="/san-pham" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-2 px-4 rounded ${isActive('/san-pham') ? 'bg-gray-100 text-sika-red' : ''}`}
            >
              Sản Phẩm
            </Link>
            <Link 
              href="/bang-gia" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-2 px-4 rounded ${isActive('/bang-gia') ? 'bg-gray-100 text-sika-red' : ''}`}
            >
              Bảng Giá
            </Link>
            <Link 
              href="/tin-tuc" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-2 px-4 rounded ${isActive('/tin-tuc') ? 'bg-gray-100 text-sika-red' : ''}`}
            >
              Tin Tức
            </Link>
            <Link 
              href="/lien-he" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-2 px-4 rounded ${isActive('/lien-he') ? 'bg-gray-100 text-sika-red' : ''}`}
            >
              Liên Hệ
            </Link>
            <a
              href="tel:0948612300"
              className="block py-2 px-4 bg-sika-red text-white rounded-md text-center"
            >
              Gọi Ngay: 0948612300
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
