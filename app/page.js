"use client";
import home from "@/public/home.png";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="h-[90vh] relative  bg-opacity-80">
      <Image
        src={home}
        alt="home image"
        fill
        quality={100}
        className="object-contain"
        placeholder="blur"
      />

      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full ">
        <h1 className="text-[2.5rem] font-bold  mb-10 leading-[3rem] text-green-600 tracking-wide  ">
          <span className="text-green-800">Save Time! </span>
          Experience Luxury
        </h1>
        <Link
          href="/luxury_buses"
          className="capitalize bg-green-950 bg-opacity-90 p-4 text-green-50 font-bold   border border-green-900 transition-all shadow-md shadow-green-200 hover:opacity-80"
        >
          our Luxury bus collection
        </Link>
      </div>
    </main>
  );
}
