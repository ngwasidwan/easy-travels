import { signInAction } from "../_lib/actions";

export default function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-6 border-2 border-green-700 px-3 py-1.5 hover:opacity-70">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="google logo"
          height="24"
          width="24"
        />
        <span>Sign in with google</span>
      </button>
    </form>
  );
}
