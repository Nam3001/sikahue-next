'use client'

import { Phone, Mail, MapPin } from 'lucide-react';
import Layout from '@/components/Layout';
import ZaloButton from "@/components/ZaloButton";
import { HOST } from '@/data/common';

const ContactPage = () => {  
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-sika-yellow to-sika-orange py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
              Liên Hệ Với Chúng Tôi
            </h1>
            <p className="text-lg text-white max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Hãy liên hệ với chúng tôi để được tư vấn và hỗ trợ tốt nhất
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Thông Tin Liên Hệ</h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-sika-light-yellow p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-sika-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Địa Chỉ</h3>
                    <p className="text-gray-600 mt-1">
                      Kiệt 1, Tổ dân Phố Xuân Hoà, Phường Vỹ Dạ, TP Huế
                    </p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-sika-light-yellow p-3 rounded-full">
                    <Phone className="h-6 w-6 text-sika-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Điện Thoại</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="tel:0886880359" className="hover:text-sika-red transition-colors">
                        0886880359
                      </a>
                    </p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-sika-light-yellow p-3 rounded-full">
                    <Mail className="h-6 w-6 text-sika-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:contact@sikavietnam.com" className="hover:text-sika-red transition-colors">
                        contact@sikavietnam.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Working Hours */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-medium mb-4">Giờ Làm Việc</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Thứ 2 - Chủ Nhật:</span>
                    <span className="font-medium">7:30 - 17:30</span>
                  </li>
                </ul>
              </div>
              
              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-medium mb-4">Kết Nối Với Chúng Tôi</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/tong.l.sika.bmt" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
                    <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>

                  <a href="https://zalo.me/0886880359" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
                    <img src={`${HOST}/lovable-uploads/icon_zalo_black.png`} className="w-6 h-6 opacity-80 hover:opacity-100" alt="" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="md:col-span-2 animate-fade-in">
              <section className="bg-gray-50 animate-fade-in" style={{ animationDelay: '0.4s', height: "100%", minHeight: "400px" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4" style={{ height: "calc(100% - 64px - 32px)"}}>
                  <h2 className="text-2xl font-bold mb-8 text-center">Vị Trí Của Chúng Tôi</h2>
                  <div className="rounded-lg overflow-hidden shadow-lg" style={{ height: "100%"}}>
                    <iframe
                        src="https://www.google.com/maps?q=16.484990, 107.609748&hl=vi&z=15&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </section>
            </div>
            {/* Contact Form */}
            <div className="md:col-span-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <ZaloButton zaloId="0886880359"/>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div className="md:col-span-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <ZaloButton zaloId="0886880359"/>
      </div>
    </Layout>
  );
};

export default ContactPage;
