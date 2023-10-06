import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { allform } from "./form_elements";
import { form_elem } from "./form_elements";
import { File_upload } from "./Fileupload";

function LSPFormrender(props) {
  const [lspdata, setlspdata] = useState({});
  function fieldinteracted(field) {
    //passed from parent to child
    //Gets the input field's reference whenever focus is lost on the field
    const tp = lspdata;
    let file;
    if (field.target.type == "file") {
      file = field.target.files[0];
      tp["file"] = file;
    } else {
      tp[field.target.id] = field.target.value;
      setlspdata(tp);
      console.log("lspdata", lspdata);
    }
  }
  const section = 3;
  const [currsection, setcurrsection] = useState(0);

  const form = allform[props.selected_prof];

  return (
    <div className="flex flex-col items-center gap-4 mx-auto relative">
      <div className="lsp-progress-bar w-[60%] flex justify-evenly border-b-2 border-blue-500">
        <NavLink
          className={currsection == 0 ? "text-blue-500 font-bold" : "inactive"}
          onClick={() => setcurrsection(0)}
        >
          Personal Details
        </NavLink>
        <NavLink
          className={currsection == 1 ? "text-blue-500 font-bold" : "inactive"}
          onClick={() => setcurrsection(1)}
        >
          Qualification Details
        </NavLink>
        <NavLink
          className={currsection == 2 ? "text-blue-500 font-bold" : "inactive"}
          onClick={() => setcurrsection(2)}
        >
          Documents Upload
        </NavLink>
      </div>
      <div className="mx-auto relative grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 items-stretch w-[60%]">
        {form[currsection].map((Component, ind) => {
          const Elem = form_elem[Component];
          return <Elem oninteraction={fieldinteracted} key={ind} />;
        })}
      </div>
      <div className="w-[50%] flex flex-row flex-nowrap justify-end gap-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            {
              currsection == 0 ? null : setcurrsection(currsection - 1);
            }
          }}
          className="px-2 py-3 text-center text-md border border-stone-700 rounded-md font-bold min-w-[25%] hover:scale-105 hover:border-blue-500 hover:shadow-[0px_1px_8px_black]"
        >
          Back
        </button>
        <button
          onClick={async (e) => {
            if (currsection == section - 1) {
              e.preventDefault();
              let url;
              const tp = lspdata;
              url = File_upload(lspdata["file"], lspdata);
            } else {
              e.preventDefault();
              setcurrsection((currsection + 1) % section);
            }
          }}
          className="px-2 py-3 text-center text-md text-white bg-blue-500 border border-stone-700 rounded-md font-bold min-w-[25%] hover:scale-105 hover:shadow-[0px_1px_10px_skyblue]"
        >
          {currsection != section - 1 ? "Continue" : "Submit"}
        </button>
      </div>
    </div>
  );
}

export default LSPFormrender;
