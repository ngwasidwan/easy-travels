import { auth } from "../_lib/auth";

export const metadata = {
  title: "Easy Travels | ticket seller ",
};
export default async function Page() {
  const curSession = await auth();
  const username = curSession.user.name.split(" ").at(1);

  return (
    <div className="text-green-700 font-semibold tracking-wider">
      <p>Welcome {username} @sabipikin</p>
    </div>
  );
}
