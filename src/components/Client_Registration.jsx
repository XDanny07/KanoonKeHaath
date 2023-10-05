import { useState } from "react";
import { clientform } from "./unitcompnents/form_elements";
import { form_elem } from "./unitcompnents/form_elements";
import { useNavigate } from "react-router-dom";
import { File_upload } from "./unitcompnents/Fileupload";
export function ClientRegister() {
  const navigate = useNavigate();
  const [clientdata, setclientdata] = useState({});
  function fieldinteracted(field) {
    //passed from parent to child
    //Gets the input field's reference whenever focus is lost on the field
    const tp = clientdata;
    let file;
    if (field.target.type == "file") {
      file = field.target.files[0];
      console.log(file);
    } else {
      tp[field.target.id] = field.target.value;
      setclientdata(tp);
      console.log("clientdata", clientdata);
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 mx-auto relative">
      <div className="mx-auto relative grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 items-stretch w-[60%]">
        {clientform.map((Component, ind) => {
          const Elem = form_elem[Component];
          return <Elem oninteraction={fieldinteracted} key={ind} />;
        })}
      </div>
      <div className="w-[50%] flex flex-row flex-nowrap justify-end gap-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          className="px-2 py-3 text-center text-md border border-stone-700 rounded-md font-bold min-w-[25%] hover:scale-105 hover:border-blue-500 hover:shadow-[0px_1px_8px_black]"
        >
          Back
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="px-2 py-3 text-center text-md text-white bg-blue-500 border border-stone-700 rounded-md font-bold min-w-[25%] hover:scale-105 hover:shadow-[0px_1px_10px_skyblue]"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
export default ClientRegister;
