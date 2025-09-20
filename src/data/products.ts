import { HOST } from "./common";

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
    name: 'Sika Latex TH 25L',
    slug: 'sika-latex-th',
    image: `${HOST}lovable-uploads/sika-latex-th-25l-thumbnail.jpg`,
    gallery: [
      `${HOST}lovable-uploads/sika-latex-th-25l-thumbnail.jpg`,
      `${HOST}lovable-uploads/sika-latex-th-25l-gallery-1.jpg`,
    ],
    description: 'Phụ gia chống thấm và tác nhân kết dính cho vữa và bê tông. Là một nhũ tương tổng hợp nhằm cải thiện phẩm chất của vữa trộn xi măng.',
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
    image: `${HOST}lovable-uploads/sika-top-seal-107-thumbnail.webp`,
    gallery: [
      `${HOST}lovable-uploads/sikatop-seal-107-gallery-1.jpg`,
      `${HOST}lovable-uploads/bao-bot-107.jpg`,
    ],
    description: 'Vữa chống thấm gốc xi măng, copolymer hai thành phần cho bể chứa nước, hồ bơi, ban công, nhà vệ sinh và các hạng mục công trình khác.',
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
    image: `${HOST}/lovable-uploads/SikaGrout-214-11.jpg`,
    gallery: [`${HOST}/lovable-uploads/SikaGrout-214-11.jpg`, `${HOST}/lovable-uploads/sika-grout-214-11.jpg`],
    description: 'Vữa không co ngót, tự san phẳng dùng để đổ bù, đổ gối, đổ chân cột, đổ móng máy và các kết cấu đặc biệt khác.',
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
    isNew: true,
    isPopular: true
  },
  {
    id: '5',
    name: 'Sikaproof Membrane',
    slug: 'sikaproof-membrane',
    image: `${HOST}/lovable-uploads/Sikaproof-Membrane-20Kg.jpg`,
    gallery: [
      `${HOST}/lovable-uploads/Sikaproof-Membrane-20Kg.jpg`,
    ],
    description: 'Màng chống thấm polyurethane một thành phần, đàn hồi cao, dùng để chống thấm cho sân thượng, mái, ban công và nhà vệ sinh.',
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
    name: 'Sikalastic®-110',
    slug: 'sikalastic-110',
    image: `${HOST}/lovable-uploads/sikalastic-110.jpg`,
    gallery: [ `${HOST}/lovable-uploads/sikalastic-110.jpg`, ],
    description: 'Màng chống thấm polyurethane lai bitumen gốc nước, một thành phần, đàn hồi cao, thi công trực tiếp lên bề mặt bê tông ẩm, tạo lớp màng liền mạch chống thấm hiệu quả cho mái, sàn và công trình ngầm.',
    category: 'Chống thấm',
    features: [
      'Một thành phần, thi công dễ dàng bằng chổi, rulo hoặc phun',
      'Đàn hồi cao, khả năng che phủ vết nứt tốt',
      'Có thể thi công trên bề mặt bê tông ẩm',
      'Không mối nối, tạo màng liền mạch',
      'VOC thấp, thân thiện môi trường'
    ],
    specifications: {
      'Dạng': 'Chất lỏng gốc nước màu đen',
      'Khối lượng riêng': '~1.08 kg/lít',
      'Định mức sử dụng': '~1.5 kg/m²/2 lớp (không gia cường)',
      'Đóng gói': 'Thùng 20 kg',
      'Bảo quản': '9–12 tháng trong điều kiện khô mát, chưa mở nắp'
    },
    isNew: true,
    isPopular: true
  },
  {
    id: '7',
    name: 'Sikalastic®-590',
    slug: 'sikalastic-590',
    image: `${HOST}/lovable-uploads/sikalastic-590.jpg`,
    gallery: [`${HOST}/lovable-uploads/sikalastic-590.jpg`, `${HOST}/lovable-uploads/sika-lastic590.jpg`],
    description: 'Màng chống thấm polyurethane gốc nước, một thành phần, đàn hồi cao, thích hợp cho mái, sân thượng, ban công, nhà vệ sinh và các khu vực cần chống thấm bền vững.',
    category: 'Chống thấm',
    features: [
      'Một thành phần, dễ thi công bằng rulo, chổi hoặc phun',
      'Khả năng đàn hồi cao, che phủ vết nứt tốt',
      'Chống tia UV, chịu thời tiết tốt, thích hợp cho mái hở',
      'VOC thấp, thân thiện môi trường',
      'Bám dính tốt trên nhiều bề mặt'
    ],
    specifications: {
      'Dạng': 'Chất lỏng gốc nước, màu trắng hoặc xám',
      'Khối lượng riêng': '~1.36 kg/lít',
      'Định mức sử dụng': '~1.3–1.5 kg/m²/2 lớp (không gia cường)',
      'Đóng gói': 'Thùng 20 kg',
      'Bảo quản': '12 tháng trong điều kiện khô mát, chưa mở nắp'
    },
    isNew: true
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
