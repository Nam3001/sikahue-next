// components/ZaloButton.tsx
import React from "react";

interface ZaloButtonProps {
  zaloId: string; // Số điện thoại hoặc Official ID
  text?: string;
}

const ZaloButton: React.FC<ZaloButtonProps> = ({ zaloId }) => {
  return (
    <a
      href={`https://zalo.me/${zaloId}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.4)" // bóng đậm hơn
      }}
       className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#0068ff] rounded-full shadow-xl hover:scale-110 transition-transform duration-200"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/50px-Icon_of_Zalo.svg.png" style={{ width: "30px", height: "30px", marginTop: "1px", marginRight: "1.5px"}} alt="" />
      
    </a>
  );
};

export default ZaloButton;
