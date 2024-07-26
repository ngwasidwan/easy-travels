import DashboardHeader from "@/app/_components/DashboardHeader";
import DashboardList from "@/app/_components/DashboardList";
import { getAllPaidReservations, getLuxuryBuses } from "@/app/_lib/services";

//implementing ISR so as to always get the latest changes from the server
export const revalidate = 0;

export default async function Page() {
  //fetching data on the server and passing it as props to our client components
  const data = await getAllPaidReservations();
  const busData = await getLuxuryBuses();

  return (
    <div>
      <DashboardHeader />
      <DashboardList data={data} busData={busData} />
    </div>
  );
}
