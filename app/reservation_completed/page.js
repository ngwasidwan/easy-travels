import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-10 mt-10 w-11/12 mx-auto justify-center">
      <p className="text-lg tracking-wide">
        Seat Ordered Successfully 😊. Thanks for using our service
      </p>
      <Link
        href="/"
        className="py-2 px-4 bg-green-700 rounded-md text-green-50  border hover:border-green-700 hover:bg-inherit hover:text-green-900 transition-all tracking-wide"
      >
        Home
      </Link>
    </div>
  );
}
