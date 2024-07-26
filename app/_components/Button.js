import SmallLoader from "./SmallLoader";
function Button({ seatsArrLength, pending }) {
  return (
    <button
      disabled={!seatsArrLength}
      className={`tracking-wider  col-span-full bg-green-800 py-2 flex justify-center items-center  text-green-50 font-semibold hover:opacity-80 ${
        !seatsArrLength ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {pending ? (
        <span className="flex items-center gap-1">
          Confirming <SmallLoader />
        </span>
      ) : (
        "Confirm Seat"
      )}
    </button>
  );
}
export default Button;
