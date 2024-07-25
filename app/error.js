"use client";
function Error({ error, reset }) {
  return (
    <div className="flex mt-20 justify-center flex-col gap-6  items-center ">
      <h1 className="text-xl font-semibold">Something went wrong</h1>
      <p className="text-sm tracking-wide">{error.message}</p>
      <button
        className="bg-green-700 hover:bg-opacity-70 py-2 px-3 inline-block text-gray-50"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}

export default Error;
