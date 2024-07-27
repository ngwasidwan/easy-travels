import Link from "next/link";
import Navigation from "./Navigation";
import Image from "next/image";
import logo from "@/public/logo.png";

function Header() {
  return (
    <header className="flex text-sm md:text-base items-center w-11/12 mx-auto relative border-b-[1px] border-b-gray-300 py-4 ">
      <div className=" w-full flex">
        <Link
          href="/"
          className="flex gap-1 md:gap-4 items-center justify-between "
        >
          <Image src={logo} alt="logo" className="sm:w-20 w-12 " />

          <span className="text-green-700">EASY TRAVELS</span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
