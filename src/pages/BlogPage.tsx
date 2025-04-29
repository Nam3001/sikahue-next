'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import { blogPosts } from '@/data/blog';

const categories = [
  "Tất cả",
  "Chống Thấm",
  "Giải Pháp",
  "Hướng Dẫn",
  "So Sánh"
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    const filtered = blogPosts.filter(post => {
      // Filter by category
      if (activeCategory !== "Tất cả" && post.category !== activeCategory) {
        return false;
      }
      
      // Filter by search term
      if (searchTerm && 
          !post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !post.content.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      return true;
    });
    
    setFilteredPosts(filtered);
  }, [activeCategory, searchTerm]);
  
  // Format date function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };
  
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-sika-yellow to-sika-orange py-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center animate-fade-in">
            Tin Tức & Bài Viết
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
                placeholder="Tìm kiếm bài viết..."
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

        {/* Blog Posts */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <Link href={`/tin-tuc/${post.slug}`}>
                  <img
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-56 object-cover object-center"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
                    <span className="mx-2 text-gray-300">|</span>
                    <span className="text-sm text-sika-red">{post.category}</span>
                  </div>
                  <Link href={`/tin-tuc/${post.slug}`}>
                    <h2 className="text-xl font-bold mb-2 hover:text-sika-red transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/tin-tuc/${post.slug}`}
                    className="inline-flex items-center text-sika-red hover:text-red-700 font-medium"
                  >
                    <span>Đọc tiếp</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              Không tìm thấy bài viết nào phù hợp. Vui lòng thử lại với từ khóa khác.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BlogPage;
