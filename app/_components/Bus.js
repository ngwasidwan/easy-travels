import Image from "next/image";
import Link from "next/link";

import {
  MapPinIcon,
  UsersIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

function Bus({ busData }) {
  return (
    <div className="text-base shadow-sm shadow-green-950">
      <figure className="relative min-h-60 w-full ">
        <Image src={busData.image} alt="bus" fill className="object-cover " />
      </figure>

      <div className="my-5 flex flex-col gap-3 px-4">
        <p className=" text-base flex gap-4 tracking-wide">
          <span>🚍</span>
          {busData.name}
        </p>
        <p className="  capitalize  flex gap-4 items-center tracking-wide">
          <span>
            <MapPinIcon className="w-5" />
          </span>
          <span className="font-semibold">{busData.destination}</span>
        </p>
        <p className=" flex gap-4 tracking-wide items-center">
          <span>
            <UsersIcon className="w-5" />
          </span>
          70 people
        </p>
        <p className=" flex gap-4 items-center tracking-wide">
          <span>
            <CurrencyDollarIcon className="w-5" />
          </span>
          {busData.price}
        </p>

        <Link
          href={`/luxury_buses/${busData.id}`}
          className="p-2 bg-green-700 rounded-md text-green-50 text-center border hover:border-green-700 hover:bg-inherit hover:text-green-900 transition-all"
        >
          Details / Reserve Seat
        </Link>
      </div>
    </div>
  );
}

export default Bus;
