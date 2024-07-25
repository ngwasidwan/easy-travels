import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex mt-20 justify-center flex-col gap-6  items-center ">
      <h1 className="text-lg font-semibold">This page could not be found</h1>

      <Link
        href="/"
        className="bg-green-700 hover:bg-opacity-70 py-2 px-3 inline-block text-gray-50"
      >
        Back to home
      </Link>
    </div>
  );
}
