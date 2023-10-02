import { Link } from "react-router-dom";
import { useEffect } from "react";
export function ClientOrLsp(props) {
  const ap = document.body.querySelector(".App");
  ap.classList.add("popupison");
  function closepop() {
    ap.classList.remove("popupison");
    document.removeEventListener("click", checkclick);
    props.setregpop(false);
  }
  function checkclick(e) {
    if (e.target.className == "App popupison") closepop();
  }
  useEffect(() => {
    document.addEventListener("click", checkclick);
  }, []);

  return (
    <div className="filter-none pointer-events-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-between flex-wrap  p-4 w-[25%] shadow-md rounded-md">
      <Link
        onClick={() => closepop()}
        className="border-2 border-blue-700 rounded-sm font-bold p-2 text-blue-700 hover:text-white hover:bg-blue-700 hover:rounded-2xl ease-in-out duration-100"
        to={"/Client_Registration"}
      >
        Client
      </Link>
      <Link
        onClick={() => closepop()}
        className="border-2 border-blue-700 rounded-sm font-bold p-2 text-blue-700 hover:text-white hover:bg-blue-700 hover:rounded-2xl ease-in-out duration-100"
        to={"/LSP_Registration"}
      >
        Legal Service Provider
      </Link>
    </div>
  );
}
