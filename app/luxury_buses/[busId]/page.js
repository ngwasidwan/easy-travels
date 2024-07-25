import Image from "next/image";

import Form from "@/app/_components/Form";
import { getBus } from "@/app/_lib/services";

export async function generateMetadata({ params }) {
  const { name } = await getBus(params.busId);
  return { title: `Easy Travels | ${name}` };
}

export default async function Page({ params }) {
  const data = await getBus(params.busId);
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-[1fr_1.2fr] gap-20 mt-10">
      <figure className=" relative  h-[25rem] bg-red-200">
        <Image
          src={data.image}
          alt="bus"
          className="object-cover"
          fill
          quality={100}
        />
      </figure>
      <div>
        <p className=" leading-8 text-base tracking-wide mb-6">
          {data.description}
        </p>
        <Form id={params.busId} data={data} />
      </div>
    </div>
  );
}
