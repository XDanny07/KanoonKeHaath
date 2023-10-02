import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";
import Login from "./Login";
import { ClientOrLsp } from "./clientorlsppopup";
let v = 0;
function Navbar(props) {
  v++;
  const [loginpop, setloginpop] = useState(false);
  const [regpop, setregpop] = useState(false);
  return (
    <>
      <nav className="max-w-[100%] mb-4 flex justify-between p-6 items-center border border-neutral-500 shadow-md bg-blue-400">
        <NavLink to="/" className="text-3xl font-bold text-white">
          Kanoon Ke Haath {v}
        </NavLink>
        <div className="flex justify-between gap-2">
          <NavLink className="font-bold text-white" to={"/"}>
            Link 1
          </NavLink>
          <NavLink className="font-bold text-white" to={"/"}>
            Link 2
          </NavLink>
          <NavLink className="font-bold text-white" to={"/"}>
            Link 3
          </NavLink>
        </div>
        <div className="flex items-center gap-2">
          <NavLink
            onClick={() => {
              if (!loginpop) setloginpop(true);
            }}
            className="px-2 py-1 font-bold text-blue-500 bg-white border rounded-full "
          >
            Login
          </NavLink>
          <NavLink
            onClick={() => {
              if (!regpop) setregpop(true);
            }}
            className="px-2 py-1 font-bold text-blue-500 bg-white border rounded-full "
          >
            Register
          </NavLink>
          {/* <FaMoon className="w-6 h-6 cursor-pointer" />
          <CgProfile className="w-8 h-8 cursor-pointer" /> */}
        </div>
      </nav>
      <div>{props.children}</div>
      {loginpop && <Login setloginpop={setloginpop} />}
      {regpop && <ClientOrLsp setregpop={setregpop} />}
    </>
  );
}
export default Navbar;
