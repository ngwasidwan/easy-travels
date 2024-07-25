"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import Loader from "../loading";
import AvailableSeats from "./AvailableSeats";
import ReservationText from "./ReservationText";
let clicked = null;

export default function Seats({
  curUserReservation,
  paidReservationsForCurrentSession,
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleReservation() {
    clicked += 1;
    router.refresh();
  }

  return (
    <>
      <div className="flex justify-center items-center mb-5">
        <button
          onClick={() => startTransition(() => handleReservation())}
          className="py-2 px-4 bg-green-700 rounded-md text-green-50 self-end border hover:border-green-700 hover:bg-inherit hover:text-green-900 transition-all"
        >
          Select Seat
        </button>
      </div>

      {isPending && clicked && <Loader />}

      {!isPending && clicked && curUserReservation.paid && (
        <AvailableSeats
          paidReservationsForCurrentSession={paidReservationsForCurrentSession}
          curUserReservation={curUserReservation}
        />
      )}
      {!isPending && clicked && !curUserReservation.paid && <ReservationText />}
    </>
  );
}
