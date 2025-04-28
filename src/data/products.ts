
export interface Product {
  id: string;
  name: string;
  slug: string;
  image: string;
  gallery?: string[];
  description: string;
  price?: number;
  oldPrice?: number;
  category: string;
  features?: string[];
  specifications?: { [key: string]: string };
  isNew?: boolean;
  isPopular?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Sika Latex TH',
    slug: 'sika-latex-th',
    image: '/lovable-uploads/51cf67cf-603c-4535-a44a-81d6f7d48922.png',
    gallery: [
      '/lovable-uploads/51cf67cf-603c-4535-a44a-81d6f7d48922.png',
    ],
    description: 'Phụ gia chống thấm và tác nhân kết dính cho vữa và bê tông. Là một nhũ tương tổng hợp nhằm cải thiện phẩm chất của vữa trộn xi măng.',
    price: 195000,
    category: 'Chống thấm',
    features: [
      'Tăng cường độ bám dính',
      'Giảm co ngót',
      'Tăng độ đặc chắc',
      'Giảm tỷ lệ nước/xi măng',
      'Tăng tính đàn hồi'
    ],
    specifications: {
      'Dạng': 'Chất lỏng màu trắng sữa',
      'Khối lượng riêng': '~1.02 kg/lít',
      'pH': '~8.5',
      'Đóng gói': 'Can 5kg, 25kg',
      'Bảo quản': '12 tháng trong điều kiện khô mát'
    },
    isPopular: true
  },
  {
    id: '2',
    name: 'SikaTop Seal 107 VN',
    slug: 'sikatop-seal-107-vn',
    image: '/lovable-uploads/db6f83fd-8829-474f-8803-aa52919a348f.png',
    gallery: [
      '/lovable-uploads/db6f83fd-8829-474f-8803-aa52919a348f.png',
    ],
    description: 'Vữa chống thấm gốc xi măng, copolymer hai thành phần cho bể chứa nước, hồ bơi, ban công, nhà vệ sinh và các hạng mục công trình khác.',
    price: 890000,
    oldPrice: 1050000,
    category: 'Chống thấm',
    features: [
      'Dễ sử dụng, chỉ cần trộn và quét',
      'Không độc hại, có thể sử dụng cho nước sinh hoạt',
      'Có tính năng chống UV tốt',
      'Độ bám dính tốt',
      'Ngăn thấm nước hiệu quả'
    ],
    specifications: {
      'Dạng': 'Thành phần A: chất lỏng màu trắng, Thành phần B: bột màu xám',
      'Tỷ lệ trộn': 'A:B = 1:4 (theo khối lượng)',
      'Định mức sử dụng': '~2 kg/m²/2 lớp',
      'Đóng gói': 'Bộ 25 kg (A: 5 kg, B: 20 kg)',
      'Bảo quản': '12 tháng trong điều kiện khô mát'
    },
    isPopular: true
  },
  {
    id: '3',
    name: 'Sikagrout 214-11',
    slug: 'sikagrout-214-11',
    image: '/lovable-uploads/51cf67cf-603c-4535-a44a-81d6f7d48922.png',
    description: 'Vữa không co ngót, tự san phẳng dùng để đổ bù, đổ gối, đổ chân cột, đổ móng máy và các kết cấu đặc biệt khác.',
    price: 315000,
    category: 'Vữa',
    features: [
      'Cường độ cao',
      'Không co ngót',
      'Tự chảy, tự san phẳng',
      'Không phân tầng, không tách nước',
      'Độ bám dính tốt với bê tông'
    ],
    specifications: {
      'Dạng': 'Bột màu xám',
      'Tỷ lệ nước trộn': '~14-16% theo khối lượng bột',
      'Định mức sử dụng': '~2.0 - 2.2 kg/m²/mm',
      'Đóng gói': 'Bao 25 kg',
      'Bảo quản': '6 tháng trong điều kiện khô mát'
    },
    isNew: true
  },
  {
    id: '4',
    name: 'Sikament R-7N',
    slug: 'sikament-r-7n',
    image: '/lovable-uploads/51cf67cf-603c-4535-a44a-81d6f7d48922.png',
    description: 'Phụ gia hóa dẻo cao cấp, kéo dài thời gian ninh kết cho bê tông và vữa, giúp tăng cường độ và giảm nước trộn đáng kể.',
    price: 420000,
    category: 'Phụ gia',
    features: [
      'Tăng độ linh động của bê tông',
      'Giảm nước trộn đáng kể',
      'Tăng cường độ cuối cùng',
      'Giảm co ngót',
      'Không chứa clorua, không ăn mòn cốt thép'
    ],
    specifications: {
      'Dạng': 'Chất lỏng màu nâu đậm',
      'Khối lượng riêng': '~1.18 kg/lít',
      'Liều lượng': '0.6 - 1.5% theo khối lượng xi măng',
      'Đóng gói': 'Can 5kg, 25kg, 200kg',
      'Bảo quản': '12 tháng trong điều kiện khô mát'
    }
  },
  {
    id: '5',
    name: 'Sikaproof Membrane',
    slug: 'sikaproof-membrane',
    image: '/lovable-uploads/51cf67cf-603c-4535-a44a-81d6f7d48922.png',
    description: 'Màng chống thấm polyurethane một thành phần, đàn hồi cao, dùng để chống thấm cho sân thượng, mái, ban công và nhà vệ sinh.',
    price: 650000,
    category: 'Chống thấm',
    features: [
      'Một thành phần, dễ thi công',
      'Khả năng che phủ vết nứt tốt',
      'Độ bám dính tốt với nhiều loại bề mặt',
      'Khả năng chống tia UV tốt',
      'Đàn hồi cao'
    ],
    specifications: {
      'Dạng': 'Chất lỏng màu trắng, xám hoặc đỏ gạch',
      'Khối lượng riêng': '~1.35 kg/lít',
      'Định mức sử dụng': '~1.5 kg/m²/2 lớp',
      'Đóng gói': 'Thùng 25 kg',
      'Bảo quản': '12 tháng trong điều kiện khô mát'
    },
    isNew: true
  },
  {
    id: '6',
    name: 'Sika ColorLite',
    slug: 'sika-colorlite',
    image: '/lovable-uploads/51cf67cf-603c-4535-a44a-81d6f7d48922.png',
    description: 'Sơn phủ bảo vệ gốc acrylic, chống thấm, trang trí cho bề mặt bê tông và vữa xi măng ở trong và ngoài nhà.',
    price: 540000,
    category: 'Sơn phủ',
    features: [
      'Chống thấm nước',
      'Chống tia UV tốt',
      'Không độc hại',
      'Mỹ quan đẹp',
      'Dễ lau chùi, bảo trì'
    ],
    specifications: {
      'Dạng': 'Chất lỏng đặc, nhiều màu',
      'Khối lượng riêng': '~1.3 kg/lít',
      'Định mức sử dụng': '~0.2 - 0.25 kg/m²/lớp',
      'Đóng gói': 'Thùng 20 kg',
      'Bảo quản': '12 tháng trong điều kiện khô mát'
    },
    isPopular: true
  },
  {
    id: '7',
    name: 'Sikaflex 11FC',
    slug: 'sikaflex-11fc',
    image: '/lovable-uploads/51cf67cf-603c-4535-a44a-81d6f7d48922.png',
    description: 'Keo đàn hồi một thành phần gốc polyurethane để trám khe, dán kết cấu và chống thấm.',
    price: 185000,
    category: 'Keo',
    features: [
      'Đàn hồi cao',
      'Không chảy xệ',
      'Độ bám dính tốt với nhiều loại vật liệu',
      'Chịu được thời tiết và hóa chất',
      'Có thể sơn phủ lên được'
    ],
    specifications: {
      'Dạng': 'Keo đặc màu trắng, xám, đen',
      'Khô bề mặt': '~ 60 phút',
      'Độ cứng shore A': '~ 37',
      'Đóng gói': 'Tuýp 300ml, Xúc xích 600ml',
      'Bảo quản': '15 tháng trong điều kiện khô mát'
    }
  },
  {
    id: '8',
    name: 'SikaBond Sikaflex',
    slug: 'sikabond-sikaflex',
    image: '/lovable-uploads/51cf67cf-603c-4535-a44a-81d6f7d48922.png',
    description: 'Keo dán đàn hồi một thành phần đa năng sử dụng cho nhiều ứng dụng như dán gạch, gỗ, kim loại và các vật liệu xây dựng khác.',
    price: 205000,
    category: 'Keo',
    features: [
      'Độ bám dính tốt với nhiều loại vật liệu',
      'Độ đàn hồi cao',
      'Chịu thời tiết và tia UV tốt',
      'Không chứa dung môi',
      'Dễ thi công'
    ],
    specifications: {
      'Dạng': 'Keo đặc màu be',
      'Khô bề mặt': '~ 30-40 phút',
      'Cường độ kéo': '~ 1.5 N/mm²',
      'Đóng gói': 'Tuýp 300ml, Xúc xích 600ml',
      'Bảo quản': '12 tháng trong điều kiện khô mát'
    },
    isPopular: true
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getPopularProducts = (): Product[] => {
  return products.filter(product => product.isPopular);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getRelatedProducts = (productId: string, categoryName: string, limit: number = 4): Product[] => {
  return products
    .filter(product => product.id !== productId && product.category === categoryName)
    .slice(0, limit);
};
