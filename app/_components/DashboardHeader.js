export default function DashboardHeader() {
  return (
    <ul className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_.2fr] items-center text-base text-green-900 place-items-center mb-4 bg-green-500 py-2">
      <li>passenger </li>
      <li>Tel</li>
      <li>Bus name </li>
      <li>session</li>
      <li>destination</li>
      <li>seats reserved</li>
      <li>confirmed</li>
      <li>Amount </li>
    </ul>
  );
}
