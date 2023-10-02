import { Link } from "react-router-dom";

export function ClientOrLsp() {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-between flex-wrap  p-4 w-[25%] border-2">
      <Link
        className="border-2 border-blue-700 rounded-sm font-bold p-2 text-blue-700 hover:text-white hover:bg-blue-700 hover:rounded-2xl ease-in-out duration-100"
        to={"/Client_Registration"}
      >
        Client
      </Link>
      <Link
        className="border-2 border-blue-700 rounded-sm font-bold p-2 text-blue-700 hover:text-white hover:bg-blue-700 hover:rounded-2xl ease-in-out duration-100"
        to={"/LSP_Registration"}
      >
        Legal Service Provider
      </Link>
    </div>
  );
}
