import Link from "next/link";

export default function UnauthorizedUser() {
  return (
    <div className="flex mt-20 justify-center flex-col gap-6  items-center ">
      <h1 className="text-lg font-semibold">
        Unauthorized access for this user.
      </h1>
      <Link
        href="/"
        className="bg-green-700 hover:bg-opacity-70 py-2 px-3 inline-block text-gray-50"
      >
        &larr; Go Back
      </Link>
    </div>
  );
}
