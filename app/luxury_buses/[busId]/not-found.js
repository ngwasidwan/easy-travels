import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex mt-20 justify-center flex-col gap-6  items-center ">
      <h1 className="text-lg font-semibold">Selected bus could not be found</h1>

      <Link
        href="/luxury-buses"
        className="bg-green-700 hover:bg-opacity-70 py-2 px-3 inline-block text-gray-50"
      >
        Go back
      </Link>
    </div>
  );
}
