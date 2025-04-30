'use client'
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { getPopularProducts } from '@/data/products';
import { getLatestBlogPosts } from '@/data/blog';
import { HOST } from '@/data/common';

const Index = () => {
  const popularProducts = getPopularProducts();
  const latestPosts = getLatestBlogPosts();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sika-yellow to-sika-orange pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in" style={{lineHeight: 1.25}}>
                Giải Pháp Chống Thấm <span className="text-sika-red">Hàng Đầu Việt Nam</span>
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Công ty chúng tôi chuyên cung cấp các sản phẩm Sika chính hãng với chất lượng cao và giá cả cạnh tranh. Đồng hành cùng bạn trong mọi công trình.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Link 
                  href="/san-pham" 
                  className="bg-sika-red hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
                >
                  Xem Sản Phẩm
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/lien-he" 
                  className="bg-white hover:bg-gray-100 text-sika-red px-8 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
                >
                  Liên Hệ Ngay
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-10 md:mt-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <img
                src={`${HOST}/lovable-uploads/d079693a-acfe-4966-a8a7-5e6dd6c5b59a.png`}
                alt="Sika Vietnam Logo" 
                className="w-3/4 md:w-1/2 mx-auto animate-bounce-slow"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Tại Sao Chọn <span className="text-sika-red">Sika?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-sika-light-yellow p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-sika-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2">Chất Lượng Cao</h3>
              <p className="text-gray-600">
                Sản phẩm chính hãng từ Sika, đảm bảo chất lượng và hiệu quả cao nhất cho công trình của bạn.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-sika-light-yellow p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-sika-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2">Hỗ Trợ Kỹ Thuật</h3>
              <p className="text-gray-600">
                Đội ngũ kỹ thuật giàu kinh nghiệm, hỗ trợ tư vấn và giải quyết mọi vấn đề của khách hàng.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="bg-sika-light-yellow p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-sika-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2">Giao Hàng Nhanh</h3>
              <p className="text-gray-600">
                Giao hàng tận nơi trong ngày tại Huế và các vùng lân cận, đảm bảo tiến độ công trình.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Sản Phẩm <span className="text-sika-red">Nổi Bật</span>
            </h2>
            <Link href="/san-pham" className="text-sika-red hover:text-red-700 flex items-center space-x-1 font-medium">
              <span>Xem tất cả</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sika-red to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Bạn Cần Tư Vấn Về Sản Phẩm?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Đội ngũ kỹ thuật chuyên nghiệp của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link 
                href="/lien-he" 
                className="bg-white hover:bg-gray-100 text-sika-red px-8 py-3 rounded-md font-medium transition-colors"
              >
                Liên Hệ Ngay
              </Link>
              <a 
                href="tel:0948612300" 
                className="border-2 border-white hover:bg-white hover:text-sika-red px-8 py-3 rounded-md font-medium transition-colors"
              >
                Gọi Điện: 0948612300
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Tin Tức <span className="text-sika-red">Mới Nhất</span>
            </h2>
            <Link href="/tin-tuc" className="text-sika-red hover:text-red-700 flex items-center space-x-1 font-medium">
              <span>Xem tất cả</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <Link href={`/tin-tuc/${post.slug}`}>
                  <img
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </Link>
                <div className="p-6">
                  <Link href={`/tin-tuc/${post.slug}`}>
                    <h3 className="text-xl font-bold mb-2 hover:text-sika-red transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-500 text-sm mb-4">
                    {new Date(post.date).toLocaleDateString('vi-VN')} | {post.category}
                  </p>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/tin-tuc/${post.slug}`}
                    className="text-sika-red hover:text-red-700 font-medium flex items-center"
                  >
                    <span>Đọc tiếp</span>
                    <ArrowRight className="h-5 w-5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
