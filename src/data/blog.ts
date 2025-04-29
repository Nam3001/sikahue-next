import { HOST } from "./common";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Tại sao chống thấm là bước quan trọng trong xây dựng?',
    slug: 'tai-sao-chong-tham-la-buoc-quan-trong-trong-xay-dung',
    excerpt: 'Chống thấm là một trong những yếu tố quan trọng nhất trong việc bảo vệ công trình xây dựng khỏi hư hại do nước gây ra.',
    content: `
      <p>Chống thấm là một trong những yếu tố quan trọng nhất trong việc bảo vệ công trình xây dựng khỏi hư hại do nước gây ra. Trong bài viết này, chúng ta sẽ tìm hiểu tại sao việc chống thấm lại quan trọng như vậy.</p>
      
      <h2>Ngăn chặn hư hại kết cấu</h2>
      <p>Nước thấm vào bê tông và các vật liệu xây dựng khác có thể gây ra nhiều vấn đề nghiêm trọng như:</p>
      <ul>
        <li>Ăn mòn cốt thép trong bê tông</li>
        <li>Giảm cường độ và độ bền của bê tông</li>
        <li>Gây nứt, vỡ do đóng băng - tan băng trong mùa lạnh</li>
        <li>Phát triển nấm mốc và vi khuẩn có hại</li>
      </ul>
      
      <h2>Bảo vệ sức khỏe người dùng</h2>
      <p>Độ ẩm cao và nấm mốc phát triển do thấm nước có thể gây ra các vấn đề sức khỏe như:</p>
      <ul>
        <li>Các bệnh về hô hấp</li>
        <li>Dị ứng và kích ứng da</li>
        <li>Nhiễm trùng đường hô hấp</li>
      </ul>
      
      <h2>Tiết kiệm chi phí dài hạn</h2>
      <p>Đầu tư vào chống thấm từ đầu giúp:</p>
      <ul>
        <li>Tránh chi phí sửa chữa lớn trong tương lai</li>
        <li>Kéo dài tuổi thọ công trình</li>
        <li>Giảm chi phí bảo trì và sửa chữa định kỳ</li>
        <li>Duy trì giá trị bất động sản</li>
      </ul>
      
      <h2>Các giải pháp chống thấm hiệu quả</h2>
      <p>Hiện nay có nhiều giải pháp chống thấm hiện đại và hiệu quả như:</p>
      <ul>
        <li>Màng chống thấm tự dính</li>
        <li>Vữa chống thấm gốc xi măng như SikaTop Seal</li>
        <li>Phụ gia chống thấm cho bê tông như Sika Latex</li>
        <li>Sơn chống thấm gốc polyurethane và acrylic</li>
      </ul>
      
      <p>Việc lựa chọn giải pháp chống thấm phù hợp phụ thuộc vào nhiều yếu tố như loại công trình, điều kiện thời tiết, ngân sách và yêu cầu kỹ thuật. Liên hệ với chúng tôi để được tư vấn giải pháp chống thấm tối ưu nhất cho công trình của bạn.</p>
    `,
    image: `${HOST}/lovable-uploads/51cf67cf-603c-4535-a44a-81d6f7d48922.png`,
    date: '2023-10-15',
    author: 'Nguyễn Văn A',
    category: 'Chống Thấm'
  },
  {
    id: '2',
    title: 'Hướng dẫn thi công SikaTop Seal 107 đúng kỹ thuật',
    slug: 'huong-dan-thi-cong-sikatop-seal-107-dung-ky-thuat',
    excerpt: 'Tìm hiểu cách thi công sản phẩm chống thấm SikaTop Seal 107 để đạt hiệu quả tối ưu và tuổi thọ công trình cao.',
    content: `
      <p>SikaTop Seal 107 là một trong những sản phẩm chống thấm phổ biến và hiệu quả nhất hiện nay. Để đảm bảo hiệu quả chống thấm tối ưu, việc thi công đúng kỹ thuật là vô cùng quan trọng.</p>
      
      <h2>Chuẩn bị bề mặt</h2>
      <p>Bước đầu tiên và quan trọng nhất là chuẩn bị bề mặt:</p>
      <ul>
        <li>Làm sạch bề mặt, loại bỏ bụi bẩn, dầu mỡ</li>
        <li>Đục tẩy các vết nứt, vữa bong tróc</li>
        <li>Trám vá các khe nứt, lỗ hổng bằng vữa sửa chữa</li>
        <li>Làm ẩm bề mặt (nhưng không để đọng nước)</li>
      </ul>
      
      <h2>Trộn sản phẩm</h2>
      <p>SikaTop Seal 107 là sản phẩm 2 thành phần, cần trộn đúng tỷ lệ:</p>
      <ul>
        <li>Đổ thành phần A (dạng lỏng) vào thùng sạch</li>
        <li>Từ từ thêm thành phần B (dạng bột) vào trong khi khuấy đều</li>
        <li>Trộn bằng máy khuấy tốc độ chậm (500 vòng/phút) trong khoảng 3 phút</li>
        <li>Trộn cho đến khi đạt được hỗn hợp đồng nhất không vón cục</li>
      </ul>
      
      <h2>Thi công</h2>
      <p>Thi công SikaTop Seal 107 cần thực hiện theo các bước:</p>
      <ul>
        <li>Quét/lăn lớp thứ nhất theo một hướng duy nhất</li>
        <li>Chờ lớp thứ nhất se mặt (khoảng 4-6 giờ tùy điều kiện thời tiết)</li>
        <li>Quét/lăn lớp thứ hai theo hướng vuông góc với lớp thứ nhất</li>
        <li>Nếu cần, có thể thi công lớp thứ ba sau khi lớp thứ hai se mặt</li>
        <li>Tổng định mức khoảng 2kg/m² cho 2 lớp</li>
      </ul>
      
      <h2>Bảo dưỡng</h2>
      <p>Sau khi thi công, cần tiến hành bảo dưỡng:</p>
      <ul>
        <li>Bảo vệ khỏi mưa và nước trong ít nhất 24 giờ</li>
        <li>Bảo vệ khỏi ánh nắng trực tiếp và gió mạnh</li>
        <li>Có thể phun nước nhẹ để giữ ẩm sau 24 giờ</li>
        <li>Đối với bể chứa nước, chờ ít nhất 7 ngày trước khi chứa nước</li>
      </ul>
      
      <h2>Lưu ý quan trọng</h2>
      <ul>
        <li>Không trộn quá nhiều vật liệu mà không thể sử dụng hết trong vòng 30 phút</li>
        <li>Không thêm nước hoặc bất kỳ thành phần nào khác vào hỗn hợp</li>
        <li>Nhiệt độ thi công tốt nhất: 10°C - 35°C</li>
        <li>Thi công tại các khu vực có độ ẩm cao cần thời gian khô lâu hơn</li>
      </ul>
      
      <p>Tuân thủ các bước thi công trên sẽ giúp bạn đạt được hiệu quả chống thấm tối ưu với SikaTop Seal 107. Nếu cần tư vấn thêm, hãy liên hệ với chúng tôi để được hỗ trợ.</p>
    `,
    image: `${HOST}/lovable-uploads/db6f83fd-8829-474f-8803-aa52919a348f.png`,
    date: '2023-11-05',
    author: 'Trần Văn B',
    category: 'Hướng Dẫn'
  },
  {
    id: '3',
    title: 'So sánh các loại sản phẩm chống thấm Sika phổ biến',
    slug: 'so-sanh-cac-loai-san-pham-chong-tham-sika-pho-bien',
    excerpt: 'Phân tích ưu nhược điểm của các sản phẩm chống thấm Sika phổ biến để giúp bạn lựa chọn sản phẩm phù hợp nhất.',
    content: `
      <p>Sika cung cấp nhiều dòng sản phẩm chống thấm khác nhau, mỗi loại đều có những đặc điểm và ứng dụng riêng. Trong bài viết này, chúng tôi sẽ so sánh các dòng sản phẩm chống thấm phổ biến của Sika để giúp bạn lựa chọn phù hợp.</p>
      
      <h2>SikaTop Seal 107</h2>
      <p><strong>Ưu điểm:</strong></p>
      <ul>
        <li>Chống thấm hiệu quả cao</li>
        <li>Có thể tiếp xúc trực tiếp với nước sinh hoạt</li>
        <li>Bám dính tốt với nhiều loại bề mặt</li>
        <li>Dễ thi công</li>
      </ul>
      <p><strong>Nhược điểm:</strong></p>
      <ul>
        <li>Không đàn hồi, không che phủ vết nứt động</li>
        <li>Cần thi công trên bề mặt ẩm</li>
      </ul>
      <p><strong>Ứng dụng:</strong> Bể nước, hồ bơi, nhà vệ sinh, tường chắn đất, móng, tầng hầm</p>
      
      <h2>Sika Latex</h2>
      <p><strong>Ưu điểm:</strong></p>
      <ul>
        <li>Cải thiện khả năng chống thấm của vữa xi măng</li>
        <li>Tăng độ bám dính</li>
        <li>Giảm co ngót nứt</li>
        <li>Đa năng, nhiều ứng dụng</li>
      </ul>
      <p><strong>Nhược điểm:</strong></p>
      <ul>
        <li>Không thể dùng độc lập</li>
        <li>Cần kỹ thuật trộn vữa đúng</li>
      </ul>
      <p><strong>Ứng dụng:</strong> Phụ gia cho vữa trát, vữa sửa chữa, lớp kết nối giữa bê tông cũ và mới</p>
      
      <h2>Sikaproof Membrane</h2>
      <p><strong>Ưu điểm:</strong></p>
      <ul>
        <li>Đàn hồi cao</li>
        <li>Khả năng che phủ vết nứt tốt</li>
        <li>Một thành phần, dễ thi công</li>
        <li>Chống tia UV tốt</li>
      </ul>
      <p><strong>Nhược điểm:</strong></p>
      <ul>
        <li>Giá thành cao hơn</li>
        <li>Thời gian khô lâu hơn</li>
      </ul>
      <p><strong>Ứng dụng:</strong> Sân thượng, mái bê tông, ban công, khu vực có khả năng xuất hiện vết nứt</p>
      
      <h2>Sika MonoSeal 107</h2>
      <p><strong>Ưu điểm:</strong></p>
      <ul>
        <li>Một thành phần, dễ sử dụng</li>
        <li>Chi phí thấp hơn</li>
        <li>Dễ thi công</li>
      </ul>
      <p><strong>Nhược điểm:</strong></p>
      <ul>
        <li>Khả năng chống thấm thấp hơn SikaTop Seal 107</li>
        <li>Không đàn hồi</li>
      </ul>
      <p><strong>Ứng dụng:</strong> Tường, nhà vệ sinh, khu vực ẩm ướt ít phức tạp</p>
      
      <h2>SikaSeal 109 Aqua</h2>
      <p><strong>Ưu điểm:</strong></p>
      <ul>
        <li>Đàn hồi tốt</li>
        <li>Một thành phần</li>
        <li>Thi công đơn giản</li>
        <li>Thời gian khô nhanh</li>
      </ul>
      <p><strong>Nhược điểm:</strong></p>
      <ul>
        <li>Không phù hợp với áp lực nước cao</li>
        <li>Cần lớp bảo vệ khi tiếp xúc thường xuyên với nước</li>
      </ul>
      <p><strong>Ứng dụng:</strong> Nhà vệ sinh, ban công nhỏ, khu vực ẩm ướt trong nhà</p>
      
      <h2>Lựa chọn sản phẩm phù hợp</h2>
      <p>Khi chọn sản phẩm chống thấm Sika, cần cân nhắc các yếu tố sau:</p>
      <ul>
        <li>Loại công trình và mức độ tiếp xúc với nước</li>
        <li>Khả năng xuất hiện vết nứt</li>
        <li>Điều kiện bề mặt</li>
        <li>Ngân sách</li>
        <li>Yêu cầu về độ bền lâu dài</li>
      </ul>
      
      <p>Liên hệ với chúng tôi để được tư vấn lựa chọn sản phẩm Sika phù hợp nhất cho công trình của bạn.</p>
    `,
    image: `${HOST}/lovable-uploads/51cf67cf-603c-4535-a44a-81d6f7d48922.png`,
    date: '2023-12-20',
    author: 'Lê Thị C',
    category: 'So Sánh'
  },
  {
    id: '4',
    title: 'Xử lý chống thấm tầng hầm hiệu quả với sản phẩm Sika',
    slug: 'xu-ly-chong-tham-tang-ham-hieu-qua-voi-san-pham-sika',
    excerpt: 'Tầng hầm là khu vực dễ bị thấm nước nhất trong công trình. Tìm hiểu giải pháp chống thấm tầng hầm hiệu quả với sản phẩm Sika.',
    content: `
      <p>Tầng hầm là khu vực đặc biệt trong công trình xây dựng, thường xuyên phải chịu áp lực nước ngầm và độ ẩm từ đất. Việc chống thấm cho tầng hầm đòi hỏi giải pháp toàn diện và hiệu quả.</p>
      
      <h2>Nguyên nhân thấm tầng hầm</h2>
      <p>Trước khi tìm hiểu giải pháp, chúng ta cần hiểu rõ nguyên nhân gây thấm:</p>
      <ul>
        <li>Áp lực nước ngầm từ bên ngoài</li>
        <li>Thiết kế không phù hợp</li>
        <li>Thi công không đúng kỹ thuật</li>
        <li>Vết nứt, khe co giãn</li>
        <li>Ống xuyên tường</li>
        <li>Sự xuống cấp của vật liệu chống thấm ban đầu</li>
      </ul>
      
      <h2>Giải pháp chống thấm tầng hầm từ Sika</h2>
      
      <h3>1. Chống thấm từ bên ngoài (Positive side)</h3>
      <p>Áp dụng khi tầng hầm đang trong quá trình xây dựng:</p>
      <ul>
        <li><strong>SikaProof A+</strong>: Màng chống thấm tự dính toàn diện cho bê tông móng và tường tầng hầm</li>
        <li><strong>Sika Waterbars</strong>: Băng cản nước PVC cho các khe co giãn</li>
        <li><strong>Sikadur Combiflex</strong>: Hệ thống xử lý khe nối và vết nứt</li>
      </ul>
      
      <h3>2. Chống thấm từ bên trong (Negative side)</h3>
      <p>Áp dụng cho tầng hầm đã xây dựng đang bị thấm:</p>
      <ul>
        <li><strong>SikaTop Seal 107</strong>: Vữa chống thấm hai thành phần cho tường và sàn</li>
        <li><strong>Sika MonoTop 109 WaterProofing</strong>: Vữa chống thấm một thành phần</li>
        <li><strong>Sika Injection</strong>: Giải pháp phun vữa trám vết nứt</li>
      </ul>
      
      <h3>3. Chống thấm tích hợp trong bê tông</h3>
      <ul>
        <li><strong>Sika WT-200 P</strong>: Phụ gia chống thấm kết tinh cho bê tông</li>
        <li><strong>Sikament</strong>: Phụ gia giảm nước, tăng độ đặc chắc cho bê tông</li>
      </ul>
      
      <h2>Quy trình chống thấm tầng hầm hiệu quả</h2>
      
      <h3>Bước 1: Đánh giá hiện trạng</h3>
      <p>Kiểm tra và xác định rõ:</p>
      <ul>
        <li>Vị trí thấm, mức độ thấm</li>
        <li>Nguyên nhân gây thấm</li>
        <li>Điều kiện bề mặt cần xử lý</li>
      </ul>
      
      <h3>Bước 2: Xử lý sơ bộ</h3>
      <ul>
        <li>Làm sạch bề mặt</li>
        <li>Trám vá vết nứt, lỗ hổng</li>
        <li>Xử lý các khe co giãn, khe nối</li>
        <li>Xử lý vị trí ống xuyên tường</li>
      </ul>
      
      <h3>Bước 3: Thi công vật liệu chống thấm chính</h3>
      <p>Tùy theo điều kiện cụ thể mà lựa chọn một trong các phương pháp sau:</p>
      <ul>
        <li>Quét SikaTop Seal 107 (2-3 lớp)</li>
        <li>Thi công màng chống thấm SikaProof</li>
        <li>Phun vữa Sika Injection cho vết nứt</li>
      </ul>
      
      <h3>Bước 4: Hoàn thiện và bảo vệ</h3>
      <ul>
        <li>Thi công lớp bảo vệ nếu cần thiết</li>
        <li>Kiểm tra kỹ lưỡng trước khi hoàn thiện</li>
      </ul>
      
      <h2>Lưu ý quan trọng</h2>
      <ul>
        <li>Chống thấm từ bên ngoài luôn hiệu quả hơn từ bên trong</li>
        <li>Cần xử lý triệt để nguồn nước trước khi chống thấm</li>
        <li>Kết hợp nhiều giải pháp cho hiệu quả tối ưu</li>
        <li>Tuân thủ nghiêm ngặt quy trình kỹ thuật của nhà sản xuất</li>
        <li>Nên có sự tư vấn của chuyên gia kỹ thuật</li>
      </ul>
      
      <p>Với các giải pháp chống thấm toàn diện từ Sika, bạn có thể hoàn toàn yên tâm về khả năng chống thấm của tầng hầm. Hãy liên hệ với chúng tôi để được tư vấn chi tiết cho công trình cụ thể của bạn.</p>
    `,
    image: `${HOST}/lovable-uploads/db6f83fd-8829-474f-8803-aa52919a348f.png`,
    date: '2024-01-10',
    author: 'Phạm Văn D',
    category: 'Giải Pháp'
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getLatestBlogPosts = (limit: number = 3): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};
