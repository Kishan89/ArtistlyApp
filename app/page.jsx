"use client";
import Link from "next/link";
import categories from "../data/categories.json";

export default function HomePage() {
  return (
    <div className="px-6 py-8 max-w-[1300px] mx-auto">
      <section className="bg-gradient-to-br from-[#2e3192] to-[#d770f7] text-white text-center px-6 py-24 rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.25)] mb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-[3.5rem] font-extrabold leading-tight max-lg:text-[2.8rem] max-md:text-[2.4rem] max-sm:text-[2rem]">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-[#b208ef] to-[#00c6ff] bg-clip-text text-transparent text-yellow-400">
              Artistly
            </span>
          </h1>
          <p className="text-[#e6f0ff] text-[1.25rem] my-6 max-lg:text-[1.1rem] max-md:text-[1rem] max-sm:text-[0.95rem]">
            Book the most talented performers for your events.
          </p>
          <Link
            href="/artists"
            className="inline-block text-[#0072ff] bg-white font-semibold text-[1.1rem] px-8 py-3 rounded-full shadow-md transition-all duration-300 hover:text-white hover:bg-gradient-to-r hover:from-[#0072ff] hover:to-[#00c6ff] max-lg:text-[1rem] max-md:text-[0.95rem] max-sm:text-[0.9rem] max-sm:px-4 max-sm:py-2"
          >
            Explore Artists
          </Link>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-[2.4rem] text-[#222] mb-10 max-lg:text-[2rem] max-sm:text-[1.8rem]">
          Top Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="relative h-[200px] rounded-[20px] bg-cover bg-center shadow-[0_8px_24px_rgba(0,0,0,0.1)] overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)] hover:brightness-105 max-md:h-[180px] max-sm:h-[160px]"
              style={{ backgroundImage: `url(${cat.image})` }}
            >
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition">
                <h3 className="text-white text-[1.4rem] font-bold shadow-lg max-md:text-[1.2rem] max-sm:text-[1.05rem]">
                  {cat.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
