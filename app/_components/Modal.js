import {
  CheckIcon,
  EllipsisVerticalIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  confirmReservation,
  deleteReservation,
  rescheduleSession,
} from "../_lib/actions";
import { useMyContext } from "./ContextProvider";

export default function Modal({
  user,
  busData,

  setOptimisticDelete,
}) {
  const { id, session, selectedBus, numSeats, paid } = user;

  const { curSection, activeModal, setActiveModal, startTransition } =
    useMyContext();

  //using a transition to implement payment confirmation and session editing  in oder to display a loading state to signify that a mutation is going on
  function confirmPayment() {
    if (paid) return;
    const [curBus] = busData.filter((bus) => bus.name === selectedBus);
    const { price } = curBus;
    const amount = price * numSeats;
    const data = { amount, id };

    startTransition(() => {
      curSection.current = "paid";
      confirmReservation(data);
    });
  }

  function editSession() {
    const editSession = session === "morning" ? "evening" : "morning";

    const data = { id, editSession };

    startTransition(() => {
      curSection.current = "session";
      rescheduleSession(data);
    });
  }

  //implementing optimistic deleting of reservations
  async function handleDelete() {
    startTransition(() => setOptimisticDelete(id));

    await deleteReservation(id);
  }

  const active = activeModal === id;
  function handleToggleModal() {
    setActiveModal(active ? null : id);
  }

  return (
    <div className="relative  z-20  " id="modal">
      <div className="flex justify-end" onClick={handleToggleModal}>
        <EllipsisVerticalIcon
          className={`sm:w-8 w-6 text-green-700 hover:border-green-700 hover:border p-0.2 ${
            active && "border border-green-700"
          }`}
        />
      </div>
      {active && (
        <div className="text-green-950 text-sm absolute bg-green-500 p-1 right-8 w-[12rem]">
          <p
            className="flex gap-2 mb-2 hover:bg-green-800 p-1 hover:text-green-50"
            role="button"
            onClick={confirmPayment}
          >
            <CheckIcon className="w-4 " />
            <span>Confirm Reservation</span>
          </p>
          <p
            className="flex gap-2 mb-2 hover:bg-green-800 p-1 hover:text-green-50"
            role="button"
            onClick={editSession}
          >
            <PencilIcon className="w-4" />
            <span>Edit Session</span>
          </p>

          <p
            className="flex gap-2 hover:bg-green-800 p-1 hover:text-green-50"
            role="button"
            onClick={handleDelete}
          >
            <TrashIcon className="w-4" />
            <span>Delete Reservation</span>
          </p>
        </div>
      )}
    </div>
  );
}
