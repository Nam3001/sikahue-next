
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price?: number;
  slug: string;
  isNew?: boolean;
  isPopular?: boolean;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('vi-VN').format(price);
};

const ProductCard = ({ name, image, price, slug, isNew, isPopular }: ProductCardProps) => {
  return (
    <div className="product-card group animate-zoom-in">
      <div className="relative overflow-hidden">
        <Link href={`/san-pham/${slug}`}>
          <img
            src={image} 
            alt={name} 
            className="w-full h-64 object-contain object-center transform group-hover:scale-105 transition duration-500"
            loading="lazy"
          />
        </Link>
        {isNew && (
          <span className="absolute top-2 left-2 bg-sika-red text-white text-xs font-bold px-2 py-1 rounded-md">
            Mới
          </span>
        )}
        {isPopular && (
          <span className="absolute top-2 right-2 bg-sika-yellow text-black text-xs font-bold px-2 py-1 rounded-md">
            Phổ biến
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <Link href={`/san-pham/${slug}`} className="block">
          <h3 className="font-bold text-lg mb-2 group-hover:text-sika-red transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        <div className="mt-auto">
          <div className="flex justify-between items-center">
            <p className="font-bold text-sika-red">
              {price ? `${formatPrice(price)} đ` : 'Liên hệ'}
            </p>
            <Link href={`/san-pham/${slug}`} className="text-sm text-sika-red font-medium hover:underline">
              Chi tiết
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
