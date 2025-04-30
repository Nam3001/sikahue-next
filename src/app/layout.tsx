import type { Metadata } from "next";
import { Providers } from './Providers';
import { ReactNode } from 'react';
import "./globals.css";
import "./index.css"
import { HOST } from "@/data/common";

export const metadata: Metadata = {
  title: {
    default: "Chống thấm Sika tại Huế",
    template: "%s | Đại lý Sika tại Huế", // Sẽ tự động format tiêu đề trang
  },
  description: "Chúng tôi là tổng đại lý phân phối & thi công chống thấm Sika hàng đầu tại thành phố Huế. Với nhiều dòng chống thấm chuyên dụng, cam kết chất lượng số 1 tại Huế.",
  keywords: ["Sika", "sika", "Sika Huế", "sika huế", "Đại lý sika tại Huế", "Sika tại huế", "Huế", "huế"],
  metadataBase: new URL("https://nam3001.github.io/sikahue-next"),
  openGraph: {
    title: "Chống thấm Sika tại Huế",
    description: "Chúng tôi là tổng đại lý phân phối & thi công chống thấm Sika hàng đầu tại thành phố Huế. Với nhiều dòng chống thấm chuyên dụng, cam kết chất lượng số 1 tại Huế.",
    siteName: "Đại lý sika Huế",
    images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAPVBDo9IpNTun-f78oGptovJKorbTiCk35g&s",
    locale: "vi_VN",
    type: "website",
  },
  icons: {
    icon: `${HOST}lovable-uploads/icon.png`
  }
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <meta name="google-site-verification" content="M8L9pZQabdWmKshGwPRKIvhLtJxx4oVsvgPvW19a9R4" />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}