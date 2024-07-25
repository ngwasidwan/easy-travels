import Seats from "@/app/_components/Seats";

import {
  getPaidReservationsForCurrentSession,
  getUserReservations,
} from "@/app/_lib/services";
import { notFound } from "next/navigation";

export const revalidate = 0;

export const metadata = {
  title: "Easy Travels | Seats",
};

async function Page({ searchParams }) {
  if (!searchParams.tel || !searchParams.time) notFound();

  //getting all current user reservations
  const userReservations = await getUserReservations(searchParams.tel);

  const [curUserReservation] = userReservations.filter(
    (reservation) => reservation.reservationTime === +searchParams.time
  );

  if (!curUserReservation) notFound();

  const { session, selectedBus } = curUserReservation;

  //all paid reservations for current session
  const paidReservationsForCurrentSession =
    await getPaidReservationsForCurrentSession({ session, selectedBus });

  return (
    <div className="text-base mt-10">
      <p className="mb-10 w-4/5 mx-auto tracking-wide leading-8">
        A withdrawal message will be sent to the number you provided. Please
        confirm payment then click the button below to select seats. Until
        payment is made, only then will you be able to select a seat
      </p>

      <Seats
        curUserReservation={curUserReservation}
        paidReservationsForCurrentSession={paidReservationsForCurrentSession}
      />
    </div>
  );
}

export default Page;
