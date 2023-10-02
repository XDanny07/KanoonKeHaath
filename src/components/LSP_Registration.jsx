import { useState } from "react";
import profession from "../data/Legal_Services";
import Formrender from "./formrender";
function LSPRegister() {
  const [selected_prof, setselected_prog] = useState("notselected");
  return (
    <div className="w-full p-4 bg-white">
      <form className="w-full p-8 mx-auto shadow-[1px_1px_5px_rgb(0,0,0,0.2)] bg-white">
        <div className="mb-4 flex flex-col gap-6">
          <div className="relative h-10 w-72 min-w-[200px]">
            <select
              onChange={(e) => {
                setselected_prog(e.target.value);
              }}
              className="peer h-max w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            >
              <option value="notselected" selected disabled hidden>
                Not Selected
              </option>
              {profession.map((p, ind) => {
                return (
                  <option key={ind} value={p}>
                    {p}
                  </option>
                );
              })}
            </select>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Select Profession
            </label>
          </div>
        </div>
        {selected_prof == "notselected" ? (
          <h1 className="text-center font-lg">Select Your Profession</h1>
        ) : (
          <Formrender selected_prof={selected_prof.toLowerCase()} />
        )}
      </form>
    </div>
  );
}
export default LSPRegister;
