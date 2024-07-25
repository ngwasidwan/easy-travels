import DashboardHeader from "@/app/_components/DashboardHeader";
import DashboardList from "@/app/_components/DashboardList";
import { getAllBuses, getAllPaidReservations } from "@/app/_lib/services";

export default async function Page() {
  //fetching data on the server and passing it as props to our client components
  const data = await getAllPaidReservations();
  const busData = await getAllBuses();

  return (
    <div>
      <DashboardHeader />
      <DashboardList data={data} busData={busData} />
    </div>
  );
}
