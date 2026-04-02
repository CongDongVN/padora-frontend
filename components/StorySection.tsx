export default function StorySection() {
  return (
    <section className="w-full bg-black py-16 px-6 md:px-20">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-15">

        {/* BÊN TRÁI: VIDEO */}
        <div className="w-full md:w-[983.33px] md:ml-20 h-[428.4px] overflow-hidden bg-gray-100 rounded-sm">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            key="/video/videomain.mp4"
          >
            <source src="/video/videomain.mp4" type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ thẻ video.
          </video>
        </div>

        {/* BÊN PHẢI: NỘI DUNG */}
        <div className="w-full md:w-1/3 md:ml-10 md:mr-20 flex flex-col items-start text-left">
          <h2 className="text-[32px] md:text-[45px] font-bold text-white leading-[1.1] mb-6 font-playfair uppercase tracking-tight">
            CHẠM YÊU THƯƠNG - <br />
            KHẮC CẢM XÚC
          </h2>

          <p className="text-[16px] text-white leading-relaxed mb-8 max-w-[500px]">
            Nơi khoảnh khắc được trở thành vĩnh cửu với Bộ sưu tập charm khắc thông điệp riêng.
            Lưu giữ ký hiệu và chữ viết tay cá nhân hoá chỉ riêng bạn biết.
          </p>

          <button className="bg-white text-black px-10 py-4 text-[13px] font-bold tracking-[0.2em] uppercase hover:bg-[#ff93a0] transition-all">
            KHÁM PHÁ NGAY
          </button>
        </div>

      </div>
    </section>
  );
}