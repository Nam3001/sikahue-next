'use client'
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const categories = [
  "Tất cả",
  "Chống thấm",
  "Vữa",
  "Phụ gia",
  "Sơn phủ",
  "Keo"
];

const ProductsPage = () => {
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
  
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-sika-yellow to-sika-orange py-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center animate-fade-in">
            Sản Phẩm Sika
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

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                slug={product.slug}
                isNew={product.isNew}
                isPopular={product.isPopular}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-lg text-gray-600">
              Không tìm thấy sản phẩm nào phù hợp. Vui lòng thử lại với từ khóa khác.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductsPage;
