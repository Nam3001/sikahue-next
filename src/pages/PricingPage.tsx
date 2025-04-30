'use client'

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import Layout from '@/components/Layout';
import { products } from '@/data/products';

const categories = [
  "Tất cả",
  "Chống thấm",
  "Vữa",
  "Phụ gia",
  "Sơn phủ",
  "Keo"
];

const PricingPage = () => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filtered = products.filter(product => {
      // Filter by category
      if (activeCategory !== "Tất cả" && product.category !== activeCategory) {
        return false;
      }
      
      // Filter by search term
      if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      return true;
    });
    
    setFilteredProducts(filtered);
  }, [activeCategory, searchTerm]);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price);
  };
  
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-sika-yellow to-sika-orange py-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center animate-fade-in">
            Bảng Giá Sản Phẩm
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sika-orange focus:border-sika-orange"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === category
                    ? "bg-sika-red text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Price Table */}
        {filteredProducts.length > 0 ? (
          <div className="overflow-x-auto animate-fade-in">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="py-3 px-4 text-left font-medium text-gray-600">Sản phẩm</th>
                  <th className="py-3 px-4 text-left font-medium text-gray-600">Danh mục</th>
                  <th className="py-3 px-4 text-left font-medium text-gray-600">Giá gốc</th>
                  <th className="py-3 px-4 text-left font-medium text-gray-600">Giá bán</th>
                  <th className="py-3 px-4 text-left font-medium text-gray-600">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <tr 
                    key={product.id} 
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="py-3 px-4 border-b border-gray-200">
                      <div className="flex items-center">
                        <img
                          src={product.image} 
                          alt={product.name} 
                          className="w-12 h-12 object-cover mr-3"
                          loading="lazy"
                        />
                        <a href={`/san-pham/${product.slug}`} className="font-medium text-gray-800 hover:text-sika-red">
                          {product.name}
                        </a>
                      </div>
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 text-gray-700">{product.category}</td>
                    <td className="py-3 px-4 border-b border-gray-200 text-gray-700">
                      {product.oldPrice 
                        ? `${formatPrice(product.oldPrice)} đ` 
                        : product.price 
                          ? `${formatPrice(product.price)} đ` 
                          : '-'
                      }
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 font-medium text-sika-red">
                      {product.price ? `${formatPrice(product.price)} đ` : 'Liên hệ'}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200">
                      {product.isNew ? (
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Mới
                        </span>
                      ) : product.isPopular ? (
                        <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Phổ biến
                        </span>
                      ) : (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Có sẵn
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-lg text-gray-600">
              Không tìm thấy sản phẩm nào phù hợp. Vui lòng thử lại với từ khóa khác.
            </p>
          </div>
        )}

        {/* Note */}
        <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-200 animate-fade-in">
          <h3 className="text-lg font-medium mb-2">Lưu ý:</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Giá trên chưa bao gồm 10% VAT.</li>
            <li>Giá có thể thay đổi tùy theo thời điểm và số lượng đặt hàng.</li>
            <li>Liên hệ: <a href="tel:0948612300" className="text-sika-red">0948612300</a> để được tư vấn và báo giá chính xác nhất.</li>
            <li>Giao hàng miễn phí trong nội thành Huế với đơn hàng từ 2 triệu đồng.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default PricingPage;
