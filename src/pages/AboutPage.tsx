
import Layout from '@/components/Layout';
import { HOST } from '@/data/common';
import { Star } from 'lucide-react';

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sika-yellow to-sika-orange py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Về Chúng Tôi
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Chúng tôi tự hào là đại lý phân phối chính thức của Sika tại Việt Nam, cung cấp giải pháp chống thấm và vật liệu xây dựng chất lượng cao
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-right">
              <h2 className="text-3xl font-bold mb-6">
                Chào mừng đến với <span className="text-sika-red">Sika Vietnam</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Công ty chúng tôi được thành lập vào năm 2015 với mục tiêu mang đến cho khách hàng những sản phẩm chất lượng cao, 
                phục vụ cho các công trình xây dựng. Trải qua nhiều năm phát triển, chúng tôi hiện đã trở thành đối tác tin cậy 
                của nhiều công ty xây dựng, nhà thầu và chủ đầu tư trên toàn quốc.
              </p>
              <p className="text-gray-600 mb-6">
                Chúng tôi tự hào là đại lý phân phối chính thức các sản phẩm của Sika - thương hiệu hàng đầu thế giới về 
                vật liệu xây dựng đặc biệt. Với đội ngũ nhân viên chuyên nghiệp, giàu kinh nghiệm, chúng tôi cam kết mang đến 
                giải pháp toàn diện, hiệu quả và tiết kiệm chi phí cho mọi công trình.
              </p>
            </div>
            
            <div className="order-first lg:order-last animate-fade-in">
              <img
                src={`${HOST}/lovable-uploads/d079693a-acfe-4966-a8a7-5e6dd6c5b59a.png`}
                alt="Sika Vietnam Logo"
                className="w-3/4 mx-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all animate-fade-in">
              <div className="bg-sika-light-yellow p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-sika-orange" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sứ mệnh</h3>
              <p className="text-gray-600">
                Cung cấp các giải pháp chống thấm và vật liệu xây dựng đặc biệt chất lượng cao, 
                đáp ứng nhu cầu đa dạng của khách hàng. Chúng tôi cam kết đồng hành cùng khách hàng, 
                tư vấn chuyên nghiệp để mang lại hiệu quả tối ưu cho mỗi công trình.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-sika-light-yellow p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-sika-orange" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Tầm nhìn</h3>
              <p className="text-gray-600">
                Trở thành công ty phân phối vật liệu xây dựng đặc biệt hàng đầu tại Việt Nam, 
                được khách hàng tin tưởng lựa chọn. Chúng tôi không ngừng cải tiến, nâng cao chất lượng 
                dịch vụ và mở rộng mạng lưới phân phối trên toàn quốc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            Tại Sao Chọn <span className="text-sika-red">Chúng Tôi</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="p-6 border border-gray-200 rounded-lg hover:border-sika-red transition-colors animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-sika-red mb-4">
                <div className="inline-block p-3 bg-sika-light-yellow rounded-full">
                  <Star className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Sản phẩm chất lượng cao</h3>
              <p className="text-gray-600">
                Tất cả sản phẩm đều là hàng chính hãng, đảm bảo chất lượng và hiệu quả sử dụng.
              </p>
            </div>
            
            {/* Reason 2 */}
            <div className="p-6 border border-gray-200 rounded-lg hover:border-sika-red transition-colors animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-sika-red mb-4">
                <div className="inline-block p-3 bg-sika-light-yellow rounded-full">
                  <Star className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Đội ngũ tư vấn chuyên nghiệp</h3>
              <p className="text-gray-600">
                Đội ngũ kỹ thuật giàu kinh nghiệm, sẵn sàng tư vấn giải pháp phù hợp cho từng công trình.
              </p>
            </div>
            
            {/* Reason 3 */}
            <div className="p-6 border border-gray-200 rounded-lg hover:border-sika-red transition-colors animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-sika-red mb-4">
                <div className="inline-block p-3 bg-sika-light-yellow rounded-full">
                  <Star className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Giá cả cạnh tranh</h3>
              <p className="text-gray-600">
                Cam kết giá tốt nhất thị trường với các chính sách ưu đãi hấp dẫn cho đối tác.
              </p>
            </div>
            
            {/* Reason 4 */}
            <div className="p-6 border border-gray-200 rounded-lg hover:border-sika-red transition-colors animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-sika-red mb-4">
                <div className="inline-block p-3 bg-sika-light-yellow rounded-full">
                  <Star className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Giao hàng nhanh chóng</h3>
              <p className="text-gray-600">
                Hệ thống giao hàng chuyên nghiệp, đảm bảo đến tay khách hàng đúng tiến độ.
              </p>
            </div>
            
            {/* Reason 5 */}
            <div className="p-6 border border-gray-200 rounded-lg hover:border-sika-red transition-colors animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="text-sika-red mb-4">
                <div className="inline-block p-3 bg-sika-light-yellow rounded-full">
                  <Star className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Hỗ trợ kỹ thuật tận tâm</h3>
              <p className="text-gray-600">
                Đội ngũ kỹ thuật sẵn sàng hỗ trợ trực tiếp tại công trình khi khách hàng có yêu cầu.
              </p>
            </div>
            
            {/* Reason 6 */}
            <div className="p-6 border border-gray-200 rounded-lg hover:border-sika-red transition-colors animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-sika-red mb-4">
                <div className="inline-block p-3 bg-sika-light-yellow rounded-full">
                  <Star className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Dịch vụ sau bán hàng</h3>
              <p className="text-gray-600">
                Cam kết hỗ trợ khách hàng trong suốt quá trình sử dụng sản phẩm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sika-red to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Bạn Muốn Tìm Hiểu Thêm?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Hãy liên hệ ngay với chúng tôi để được tư vấn chi tiết và báo giá tốt nhất.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a 
                href="/lien-he" 
                className="bg-white hover:bg-gray-100 text-sika-red px-8 py-3 rounded-md font-medium transition-colors"
              >
                Liên Hệ Ngay
              </a>
              <a 
                href="tel:0948612300" 
                className="border-2 border-white hover:bg-white hover:text-sika-red px-8 py-3 rounded-md font-medium transition-colors"
              >
                Gọi Ngay: 0948612300
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
