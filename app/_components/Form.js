"use client";
import { useFormStatus } from "react-dom";
import { reserveSeat } from "../_lib/actions";
import SmallLoader from "./SmallLoader";

function Form({ id, data }) {
  const { name: selectedBus, destination } = data;

  return (
    <form
      action={reserveSeat}
      className="flex flex-col gap-6 border border-green-700 p-4 max-w-[32rem] text-base"
    >
      <input type="hidden" value={`${selectedBus}@${id}`} name="selectedBus" />
      <div className="flex  items-center flex-wrap">
        <label htmlFor="destination" className="">
          Destination
        </label>
        <input
          id="destination"
          readOnly
          name="destination"
          value={destination}
          className="text-green-900 font-semibold px-2 py-1 ml-auto focus:outline-none bg-green-200 uppercase text-center"
        />
      </div>
      <div className="flex  items-center flex-wrap">
        <label htmlFor="name">Full Name</label>
        <input
          required
          id="name"
          name="username"
          type="text"
          className="bg-inherit px-2 py-1 ml-auto focus:outline-none border border-green-400 focus:border-green-700 "
        />
      </div>

      <div className="flex  items-center flex-wrap">
        <label htmlFor="number">Orange/Momo Number</label>
        <input
          required
          id="number"
          name="phoneNumber"
          type="tel"
          className="bg-inherit px-2 py-1 ml-auto focus:outline-none border border-green-400 focus:border-green-700 "
        />
      </div>

      <div className="flex  items-center flex-wrap">
        <label htmlFor="numSeats">Number of Seats</label>
        <input
          max="10"
          min="1"
          required
          id="numSeats"
          name="numSeats"
          type="number"
          className="bg-inherit px-2 py-1 ml-auto focus:outline-none border border-green-400 focus:border-green-700 min-w-56"
        />
      </div>

      <div className="flex  items-center flex-wrap">
        <label htmlFor="numSeats">traveling Session (morning/evening)</label>
        <select
          required
          className="bg-inherit px-2 py-1 ml-auto focus:outline-none border border-green-400 focus:border-green-700 "
          name="session"
        >
          <option></option>
          <option>morning</option>
          <option>evening</option>
        </select>
      </div>
      <Button />
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();

  return (
    <button className="py-2 px-4 bg-green-700 rounded-md text-green-50 self-end border hover:border-green-700 hover:bg-inherit hover:text-green-900 transition-all">
      {pending ? (
        <span className="flex items-center gap-1">
          Reserving <SmallLoader />
        </span>
      ) : (
        "Reserve now"
      )}
    </button>
  );
}

export default Form;
