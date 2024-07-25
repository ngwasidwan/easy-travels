"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const destination = searchParams.get("destination") ?? "all";

  const router = useRouter();
  const pathname = usePathname();
  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("destination", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="justify-end flex mb-10 md:text-lg text-sm gap-5 md:gap-10  text-green-700 ">
      <button
        className={`border border-green-100 hover:border-green-700 px-1 sm:px-3 rounded-md py-1 ${
          destination === "all" && "border-green-700"
        }`}
        onClick={() => handleFilter("all")}
      >
        All Luxury Buses
      </button>
      <button
        className={`border border-green-100 hover:border-green-700 px-1 md:px-3 rounded-md py-1 ${
          destination === "yaounde" && "border-green-700"
        }`}
        onClick={() => handleFilter("yaounde")}
      >
        Yaounde
      </button>
      <button
        className={`border border-green-100 hover:border-green-700 px-1 md:px-3 rounded-md py-1 ${
          destination === "douala" && "border-green-700"
        }`}
        onClick={() => handleFilter("douala")}
      >
        Douala
      </button>
      <button
        className={`border border-green-100 hover:border-green-700 px-1 md:px-3 rounded-md py-1 ${
          destination === "buea" && "border-green-700"
        }`}
        onClick={() => handleFilter("buea")}
      >
        Buea
      </button>
    </div>
  );
}
