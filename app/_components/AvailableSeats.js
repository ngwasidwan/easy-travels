import { useState, useTransition } from "react";
import { confirmSelectedSeat } from "../_lib/actions";
import { useRouter } from "next/navigation";
import { seats } from "../_lib/data";

import SeatInputs from "./SeatInputs";
import Button from "./Button";

function AvailableSeats({
  paidReservationsForCurrentSession,
  curUserReservation,
}) {
  const [isPending, startTransition] = useTransition();

  const [seatsArr, setSeatsArr] = useState([]);
  const [allSeatsChosen, setAllSeatsChosen] = useState(null);

  const router = useRouter();

  const { numSeats, reservationTime, selectedSeat } = curUserReservation;

  const seatsLength = seatsArr.length;
  const jointData = { reservationTime, seatsArr };

  function handleSubmit(e) {
    e.preventDefault();
    if (numSeats > seatsLength) return setAllSeatsChosen(1);
    setAllSeatsChosen(null);
    startTransition(() => confirmSelectedSeat(jointData));

    router.replace("/reservation_completed");
  }

  function handleRouter() {
    router.replace("/luxury_buses");
  }

  return (
    <>
      {selectedSeat ? (
        <div className=" flex flex-col items-center gap-10 ">
          <p>
            Already reserved seat for this session. Go back and select a vehicle
            to make a new reservation
          </p>
          <button
            className="bg-green-700 font-semibold text-green-50 px-2 py-1 hover:opacity-70"
            onClick={handleRouter}
          >
            &larr; Back
          </button>
        </div>
      ) : (
        <div>
          {allSeatsChosen > 0 && (
            <p className="text-center">
              You still have {numSeats - seatsLength} seats to choose
            </p>
          )}

          <form
            onSubmit={handleSubmit}
            className="border border-green-700 grid grid-cols-6 max-w-[25rem] gap-2 mx-auto p-2 transform"
          >
            {seats.map((seat, i) => (
              <SeatInputs
                key={i}
                seat={seat + 1}
                paidReservationsForCurrentSession={
                  paidReservationsForCurrentSession
                }
                numSeats={numSeats}
                setSeatsArr={setSeatsArr}
                seatsArr={seatsArr}
              />
            ))}
            <Button seatsArrLength={seatsArr.length} pending={isPending} />
          </form>
        </div>
      )}{" "}
    </>
  );
}

export default AvailableSeats;
