"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCategory from "@/components/ProductCategory";
import { products } from "@/app/data/page";

const list = products.filter(p => p.category === "day-chuyen");

export default function CollectionPage() {
  return (
    <div className="bg-white pt-[170px]">
      {/* HEADER */}
      <Header />

      {/* BANNER FULL WIDTH */}
      <section className="w-full mb-10">
        <img
          src="/img/bannerCollection.jpg"
          className="w-full h-[350px] object-cover"
        />
      </section>

      {/* CONTENT */}
      <div className="flex max-w-[1400px] mx-auto gap-10">
        {/* FILTER */}
        <div className="w-[320px] sticky top-[120px] h-[calc(100vh-120px)] overflow-y-auto overflow-x-hidden custom-scroll  border-gray-200">
          <FilterSidebar />
        </div>

        {/* PRODUCT */}
        <div className="flex-1">
          <div className="grid grid-cols-3 gap-10">
            {list.map((p) => (
              <ProductCategory key={p.id} {...p} />
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
