import UnauthorizedUser from "../_components/UnauthorizedUser";
import { auth } from "../_lib/auth";

export default async function Page() {
  const curSession = await auth();
  const username = curSession.user.name.split(" ").at(1);
  const email = curSession.user.email;

  if (email !== process.env.MY_EMAIL) return <UnauthorizedUser />;

  return (
    <div className="text-green-700 font-semibold tracking-wider">
      <p>Welcome {username} @sabipikin</p>
    </div>
  );
}
