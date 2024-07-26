import SignInButton from "../_components/SignInButton";

export const metadata = {
  title: "Login",
};
function Page() {
  return (
    <div className="flex flex-col gap-8 items-center mt-10">
      <h1 className="text-green-900">Sign in to access resent activities</h1>
      <SignInButton />
    </div>
  );
}

export default Page;
