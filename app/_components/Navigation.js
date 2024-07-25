import Link from "next/link";

import * as icon from "@heroicons/react/24/outline";

function Navigation() {
  return (
    <ul className="flex ml-auto gap-6 md:gap-20 items-center text-green-700">
      <Link
        href="/luxury_buses"
        className=" border border-green-50 hover:border-green-700 px-2 py-1 rounded-md transition-all "
      >
        Destination
      </Link>

      <Link
        href="/activity"
        className="bg-green-700 rounded-full text-green-50  h-8 w-8 flex items-center justify-center"
      >
        <icon.UserIcon className="text-sm w-5" />
      </Link>
    </ul>
  );
}

export default Navigation;
