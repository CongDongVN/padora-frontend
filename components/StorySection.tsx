export default function StorySection() {
  return (
    <section className="px-16 py-20 ">

      <h2 className="text-6xl font-bold mb-10">
        PANDORA
      </h2>

      <div className="grid grid-cols-4 gap-6">

        <div>
          <img src="/s1.jpg" className="w-full"/>
          <p className="mt-3 font-semibold">
            Lấp Lánh Đầu Năm
          </p>
        </div>

        <div>
          <img src="/s2.jpg" className="w-full"/>
          <p className="mt-3 font-semibold">
            Tháng Của Đoàn Viên
          </p>
        </div>

        <div>
          <img src="/s3.jpg" className="w-full"/>
          <p className="mt-3 font-semibold ">
            Ký Ức Rực Rỡ
          </p>
        </div>

        <div>
          <img src="/s4.jpg" className="w-full"/>
          <p className="mt-3 font-semibold">
            Khi Tình Yêu Lên Tiếng
          </p>
        </div>

      </div>

    </section>
  )
}