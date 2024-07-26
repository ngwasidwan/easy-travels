
function SeatInputs({
    seatsArr,
    setSeatsArr,
    seat,
    numSeats,
    paidReservationsForCurrentSession,
  }) {
    const [selectedSeat, setSelectedSeat] = useState(null);
  
    //filtering seats taken for current session
    const seatsTaken = paidReservationsForCurrentSession
      ?.map((paidReservation) => paidReservation.selectedSeat)
      .filter((seat) => seat !== null)
      .flat();
  
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
  export default SeatInputs