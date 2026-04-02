export default function StorySection() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
        
        {/* BÊN TRÁI: VIDEO */}
        <div className="w-full md:w-1/2 aspect-video md:aspect-square lg:aspect-video overflow-hidden bg-gray-100 rounded-sm">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            {/*ĐƯỜNG DẪN VIDEO */}
            <source src="/public/videomain.mp4" type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ thẻ video.
          </video>
        </div>

        {/* BÊN PHẢI: NỘI DUNG */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <h2 className="text-[32px] md:text-[50px] font-bold text-[#333232] leading-[1.1] mb-6 font-playfair uppercase tracking-tight">
            CHẠM YÊU THƯƠNG - <br />
            KHẮC CẢM XÚC
          </h2>
          
          <p className="text-[16px] text-gray-700 leading-relaxed mb-8 max-w-[500px]">
            Nơi khoảnh khắc được trở thành vĩnh cửu với Bộ sưu tập charm khắc thông điệp riêng. 
            Lưu giữ ký hiệu và chữ viết tay cá nhân hoá chỉ riêng bạn biết.
          </p>

          <button className="bg-black text-white px-10 py-4 text-[13px] font-bold tracking-[0.2em] uppercase hover:bg-gray-800 transition-all">
            KHÁM PHÁ NGAY
          </button>
        </div>

      </div>
    </section>
  );
}