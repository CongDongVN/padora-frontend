"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {

  const banners = [
    "/img/banner1.png",
    "/img/banner2.jpg",
    "/img/banner3.jpg",
  ]

  const slides = [...banners, banners[0]] // clone ảnh đầu

  const [index, setIndex] = useState(0)
  const [transition, setTransition] = useState(true)

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) => prev + 1)
    }, 3000)

    return () => clearInterval(interval)

  }, [])

  useEffect(() => {

    if (index === banners.length) {
      setTimeout(() => {
        setTransition(false)
        setIndex(0)
      }, 700)

      setTimeout(() => {
        setTransition(true)
      }, 750)
    }

  }, [index])

  return (
    <section className="w-full overflow-hidden">

      <div
        className={`flex ${transition ? "transition-transform duration-700" : ""}`}
        style={{ transform: `translateX(-${index * 100}vw)` }}
      >

        {slides.map((banner, i) => (
          <div key={i} className="relative w-screen h-[500px] flex-shrink-0">

            <Image
              src={banner}
              alt="banner"
              fill
              className="object-cover"
              priority
            />

          </div>
        ))}

      </div>

    </section>
  )
}