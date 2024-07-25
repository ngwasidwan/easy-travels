import { signInAction } from "../_lib/actions";

export default function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-8 border-2 border-slate-700 px-4 py-2">
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
