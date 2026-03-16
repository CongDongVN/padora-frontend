import Image from "next/image"

export default function Hero() {
  return (
    <section className="w-full bg-[#f5f5f5]">

      <div className="max-w-[1400px] mx-auto grid grid-cols-2 items-center px-12 py-16 gap-10">

        {/* LEFT CONTENT */}
        <div>

          <h1 className="text-[64px] font-semibold leading-[80px] text-[#3a2a20]">
            BỘ VÒNG <br /> CHUẨN "STYLE"
          </h1>

          <p className="mt-6 text-2xl text-gray-700">
            TIẾT KIỆM ĐẾN <span className="font-bold text-black">20%</span>
          </p>

          <button className="mt-8 bg-[#4b2e23] text-white px-10 py-4 text-lg font-semibold hover:opacity-90">
            MUA NGAY
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[420px]">

          <Image
            src="/hero-bracelet.png"
            alt="bracelet"
            fill
            className="object-contain"
          />

        </div>

      </div>

    </section>
  )
}