"use client";
import SmallLoader from "@/app/_components/SmallLoader";
import { useEffect, useOptimistic } from "react";
import Modal from "./Modal";
import { useMyContext } from "./ContextProvider";

export default function DashboardList({ data, busData }) {
  //sorting initial data so that edited row stays on the same place
  const initialData = data.sort((elA, elB) => elA.id - elB.id);

  const { isPending, setActiveModal, curSection } = useMyContext();

  //using the useOptimistic hook to implement Optimistic delete
  const [optimisticData, setOptimisticDelete, activeModal] = useOptimistic(
    initialData,
    (curReservations, deleteId) => {
      return curReservations.filter((resData) => resData.id !== deleteId);
    }
  );

  //session and confirm list items share a common piece of state(isPending state). so in order to avoid unnecessary rerenders, we store a value for each individual state update in a ref so as to display the loading state. This makes it so that only one component controls state in both elements

  //implementing body click to close  modal
  useEffect(() => {
    function closeModal(e) {
      if (!e.target.closest("#modal")) setActiveModal(null);
    }

    document.body.addEventListener("click", closeModal, true);
    return () => document.body.removeEventListener("click", closeModal, true);
  }, [setActiveModal]);

  return (
    <>
      {optimisticData.map((user) => (
        <ul
          key={user.id}
          className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_.2fr] items-center text-sm place-items-center mb-6 border border-slate-700 "
        >
          <li>{user.username}</li>
          <li>{user.phoneNumber}</li>
          <li>{user.selectedBus}</li>
          <li>
            {isPending &&
            curSection.current === "session" &&
            activeModal === user.id ? (
              <SmallLoader />
            ) : (
              user.session
            )}
          </li>
          <li>{user.destination}</li>
          <li>{user.numSeats}</li>
          <li>
            {isPending &&
            curSection.current === "paid" &&
            activeModal === user.id ? (
              <SmallLoader />
            ) : user.paid ? (
              "yes"
            ) : (
              "no"
            )}
          </li>
          <li>{user.amountPaid ? `$ ${user.amountPaid}` : "-"}</li>
          <Modal
            // curSection={curSection}
            // activeModal={activeModal}
            // setActiveModal={setActiveModal}
            // startTransition={startTransition}
            setOptimisticDelete={setOptimisticDelete}
            busData={busData}
            user={user}
          />
        </ul>
      ))}
    </>
  );
}
