import { useState, useTransition } from "react";
import { confirmSelectedSeat } from "../_lib/actions";
import { useRouter } from "next/navigation";
import { seats } from "../_lib/data";
import SmallLoader from "./SmallLoader";

function AvailableSeats({
  paidReservationsForCurrentSession,
  curUserReservation,
}) {
  const [seatsArr, setSeatsArr] = useState([]);
  const [allSeatsChosen, setAllSeatsChosen] = useState(null);
  const [isPending, startTransition] = useTransition();
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
            <Button seatsArr={seatsArr} pending={isPending} />
          </form>
        </div>
      )}{" "}
    </>
  );
}

export default AvailableSeats;

function SeatInputs({
  seatsArr,
  setSeatsArr,
  seat,
  numSeats,
  paidReservationsForCurrentSession,
}) {
  const [selectedSeat, setSelectedSeat] = useState(null);

  //filtering seats taken for current session
  const seatsTaken = paidReservationsForCurrentSession?.map(
    (paidReservation) => paidReservation.selectedSeat
  );

  const unavailableSeats = seatsTaken.includes(seat);

  function handleSeat(e) {
    const curVal = +e.target.value;
    if (seatsArr.length === numSeats) return;

    setSelectedSeat(curVal);
    setSeatsArr((curSeat) => [...curSeat, curVal]);
    console.log(selectedSeat);
  }
  return (
    <input
      disabled={
        paidReservationsForCurrentSession.length ? unavailableSeats : false
      }
      className={`text-sm text-green-950 border border-green-700  text-center seatNumber   focus:outline-none ${
        unavailableSeats
          ? "cursor-not-allowed bg-red-700 opacity-80"
          : "cursor-pointer hover:bg-green-700"
      } ${selectedSeat ? "bg-green-700" : "bg-inherit"}`}
      value={seat}
      readOnly
      onClick={handleSeat}
    />
  );
}

function Button({ seatsArr, pending }) {
  return (
    <button
      disabled={!seatsArr.length}
      className={`tracking-wider  col-span-full bg-green-800 py-2 flex justify-center items-center  text-green-50 font-semibold hover:opacity-80 ${
        !seatsArr.length ? "cursor-not-allowed" : "cursor-pointer"
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
