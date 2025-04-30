'use client'
import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Minus, Plus, Star } from 'lucide-react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { getProductBySlug, getRelatedProducts } from '@/data/products';

const ProductDetailPage = () => {
  const param = useParams()
  const slug = param?.slug
  const slugString = Array.isArray(slug) ? slug[0] : slug

  const product = getProductBySlug(slugString || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  const relatedProducts = product 
    ? getRelatedProducts(product.id, product.category) 
    : [];
  
  if (!product) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Không tìm thấy sản phẩm
            </h1>
            <Link href="/san-pham" className="text-sika-red hover:text-red-700">
              Quay lại trang sản phẩm
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price);
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
            <Link href="/san-pham" className="text-gray-600 hover:text-sika-red">
              Sản phẩm
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-sika-red">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row -mx-4">
          {/* Product Images */}
          <div className="lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="border rounded-lg overflow-hidden bg-white p-4 mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-contain object-center animate-fade-in"
                loading="lazy"
              />
            </div>
            {product.gallery && product.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.gallery.map((image, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden bg-white p-2 cursor-pointer">
                    <img
                      src={image}
                      alt={`${product.name} - Ảnh ${index + 1}`}
                      className="w-full h-24 object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div className="lg:w-1/2 px-4 animate-fade-in-right">
            <Link href="/san-pham" className="inline-flex items-center text-sika-red hover:text-red-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>Quay lại danh sách sản phẩm</span>
            </Link>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-gray-600">(12 đánh giá)</span>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              {product.oldPrice && (
                <span className="text-lg text-gray-500 line-through mr-2">
                  {formatPrice(product.oldPrice)} ₫
                </span>
              )}
              <span className="text-3xl font-bold text-sika-red">
                {product.price ? `${formatPrice(product.price)} ₫` : 'Liên hệ'}
              </span>
            </div>
            
            {/* Short Description */}
            <div className="mb-6">
              <p className="text-gray-700">
                {product.description}
              </p>
            </div>
            
            {/* Categories */}
            <div className="mb-6">
              <span className="text-gray-700">Danh mục: </span>
              <Link href={`/san-pham?category=${product.category}`} className="text-sika-red hover:underline">
                {product.category}
              </Link>
            </div>
            
            {/* Add to Cart */}
            <div className="flex flex-col sm:flex-row items-center mb-8">
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-4 sm:mb-0 sm:mr-4">
                <button
                  type="button"
                  className="p-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                  onClick={decreaseQuantity}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-12 text-center border-0 focus:ring-0"
                />
                <button
                  type="button"
                  className="p-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                  onClick={increaseQuantity}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                type="button"
                className="w-full sm:w-auto px-6 py-3 bg-sika-red hover:bg-red-700 text-white rounded-md transition-colors"
              >
                Thêm vào giỏ hàng
              </button>
            </div>
            
            {/* Features */}
            {product.features && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Tính năng nổi bật:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px space-x-8">
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'description'
                    ? 'border-sika-red text-sika-red'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('description')}
              >
                Mô tả chi tiết
              </button>
              {product.specifications && (
                <button
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'specifications'
                      ? 'border-sika-red text-sika-red'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('specifications')}
                >
                  Thông số kỹ thuật
                </button>
              )}
            </nav>
          </div>
          
          <div className="py-8 animate-fade-in">
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-700">
                  {product.description}
                </p>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Tính năng và lợi ích:</h3>
                  {product.features && (
                    <ul className="list-disc pl-5 space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-gray-700">{feature}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}
            {activeTab === 'specifications' && product.specifications && (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key} className="border-b border-gray-200">
                        <th className="py-3 px-4 bg-gray-50 font-medium text-gray-900 w-1/4">{key}</th>
                        <td className="py-3 px-4 text-gray-700">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold mb-8">Sản phẩm liên quan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  id={relatedProduct.id}
                  name={relatedProduct.name}
                  image={relatedProduct.image}
                  price={relatedProduct.price}
                  slug={relatedProduct.slug}
                  isNew={relatedProduct.isNew}
                  isPopular={relatedProduct.isPopular}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
