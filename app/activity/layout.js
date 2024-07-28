import Link from "next/link";
import { UsersIcon } from "@heroicons/react/24/outline";
import { auth } from "../_lib/auth";
import SignOutButton from "../_components/SignOutButton";

export const metadata = {
  title: "Easy Travels | ticket seller ",
};
export default async function DashboardLayout({ children }) {
  const curSession = await auth();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[.2fr_1fr] w-11/12 mx-auto gap-10 mt-10 pb-5 ">
      <div className="flex flex-row lg:flex-col lg:h-[70vh] h-auto gap-5 md:gap-10 ">
        {curSession?.user?.image && (
          <Link href="/activity" className="flex gap-4 items-center">
            <img
              src={curSession.user.image}
              alt={curSession.user.name}
              className="h-8 rounded-full"
              referrerPolicy="no-referrer"
            />
            <span className="text-green-700 hover:underline text-sm md:text-base">
              {" "}
              seller
            </span>
          </Link>
        )}

        <Link
          href="/activity/dashboard"
          className="flex gap-2 md:gap-4 text-green-700 hover:underline items-center"
        >
          <UsersIcon className="w-5" />
          <span className="text-sm md:text-base">dashboard</span>
        </Link>

        <SignOutButton />
      </div>
      {children}
    </div>
  );
}
