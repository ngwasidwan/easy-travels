import Bus from "./Bus";

export default function LuxuryBusList({ filterData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  gap-10 gap-y-20">
      {filterData.map((busData, i) => (
        <Bus key={i} busData={busData} />
      ))}
    </div>
  );
}
