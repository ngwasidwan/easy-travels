import { Suspense } from "react";
import Filter from "../_components/Filter";
import LuxuryBusList from "../_components/LuxuryBusList";
import { getAllBuses } from "../_lib/services";
import Loader from "../loading";

export const metadata = {
  title: "Luxury bus collection",
};

//to see latest bus uploads, we need to implement ISR for this server component so that is switches to a dynamic route and opts out of the data cache

export const revalidate = 0;

async function DestinationPage({ searchParams }) {
  const data = await getAllBuses();
  const filter = searchParams.destination ?? "all";

  let filterData;

  if (!filter || filter === "all") filterData = data;

  if (filter === "yaounde")
    filterData = data.filter((item) => item.destination === "Yaounde");
  if (filter === "douala")
    filterData = data.filter((item) => item.destination === "Douala");

  if (filter === "buea")
    filterData = data.filter((item) => item.destination === "Buea");

  return (
    <div className="grid grid-cols-1 mx-auto w-11/12">
      <p className=" my-10 leading-8 text-base tracking-wider ">
        Welcome to easy travels. Save time, pay your traveling tickets easy and
        conveniently from home. Travel in high quality luxury buses from the
        city of Bamenda to other cities. Traveling sessions are scheduled for
        morning and evening. Pay tickets to the city of Douala, Yaounde and Buea
        in a just a few clicks.
      </p>

      <Filter />
      <Suspense fallback={<Loader />} key={filter}>
        <LuxuryBusList filterData={filterData} />
      </Suspense>
    </div>
  );
}

export default DestinationPage;
