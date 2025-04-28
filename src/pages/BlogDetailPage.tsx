'use client'
import { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Layout from '@/components/Layout';
import { getBlogPostBySlug, getLatestBlogPosts } from '@/data/blog';
import Image from 'next/image';



const BlogDetailPage = () => {
  const param = useParams()
  const slug = param?.slug
  const slugString = Array.isArray(slug) ? slug[0] : slug

  const post = getBlogPostBySlug(slugString || '');
  const recentPosts = getLatestBlogPosts(3).filter(p => p.slug !== slug);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!post) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Không tìm thấy bài viết
            </h1>
            <Link href="/tin-tuc" className="text-sika-red hover:text-red-700">
              Quay lại trang tin tức
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
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
      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-sika-red">
              Trang chủ
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/tin-tuc" className="text-gray-600 hover:text-sika-red">
              Tin tức
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-sika-red">{post.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/tin-tuc" className="inline-flex items-center text-sika-red hover:text-red-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span>Quay lại danh sách tin tức</span>
        </Link>
        
        {/* Blog Post Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center text-gray-600 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center mr-6 mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <User className="w-4 h-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="mb-2">
              <span className="bg-sika-light-yellow text-sika-orange px-2 py-1 rounded text-sm">
                {post.category}
              </span>
            </div>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Image
            src={post.image}
            alt={post.title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        
        {/* Blog Content */}
        <div className="prose prose-lg mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap items-center mb-12 border-t border-b border-gray-200 py-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <span className="font-medium mr-2">Tags:</span>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">Sika</span>
            <span className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">Chống thấm</span>
            <span className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">{post.category}</span>
          </div>
        </div>
        
        {/* Recent Posts */}
        {recentPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Bài Viết Liên Quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts.map((recentPost, index) => (
                <div 
                  key={recentPost.id} 
                  className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <Link href={`/tin-tuc/${recentPost.slug}`}>
                    <Image 
                      src={recentPost.image} 
                      alt={recentPost.title} 
                      className="w-full h-40 object-cover"
                    />
                  </Link>
                  <div className="p-4">
                    <Link href={`/tin-tuc/${recentPost.slug}`}>
                      <h3 className="font-bold mb-2 hover:text-sika-red transition-colors line-clamp-2">
                        {recentPost.title}
                      </h3>
                    </Link>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{formatDate(recentPost.date)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BlogDetailPage;
