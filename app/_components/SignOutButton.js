import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { signOutAction } from "../_lib/actions";

export default function SignOutButton() {
  return (
    <form action={signOutAction} className="mt-auto ">
      <button className="flex items-center gap-1 md:gap-2  border-green-100  border hover:border-green-700  px-2 py-1 transition-all">
        <ArrowRightOnRectangleIcon className="w-5 " />
        <span className="text-sm md:text-base">sign out</span>
      </button>
    </form>
  );
}
