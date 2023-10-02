import React, { useState } from "react";
import { all_states } from "../../data/India_States";

const labelstyle = `before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500`;
const inputstyle = ` w-full h-full peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`;
const select_style = `peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`;
var citites = [];

const boxcss = "";
const Fname = (props) => (
  // const [v,setv]=useState("");
  <div className="relative">
    <input
      onBlur={(e) => {
        props.oninteraction(e);
      }}
      onChange={(e)=>{
      }}
      id="reg-fname"
      type="text"
      className={inputstyle}
      placeholder=" "
      required
    />
    <label htmlFor="reg-fname" className={labelstyle}>
      First Name
    </label>
  </div>
);

const Mname = (props) => (
  <div className="relative">
    <input
      onBlur={(e) => {
        props.oninteraction(e);
      }}
      id="reg-mname"
      type="text"
      className={inputstyle}
      placeholder=" "
      required
    />
    <label htmlFor="reg-mname" className={labelstyle}>
      Middle Name
    </label>
  </div>
);

const Lname = (props) => (
  <div className="relative">
    <input
      onBlur={(e) => {
        props.oninteraction(e);
      }}
      id="reg-lname"
      type="text"
      className={inputstyle}
      placeholder=" "
      required
    />
    <label htmlFor="reg-lname" className={labelstyle}>
      Last Name
    </label>
  </div>
);

const DOB = (props) => (
  <div className="relative">
    <input
      onBlur={(e) => {
        props.oninteraction(e);
      }}
      id="reg-dob"
      type="date"
      className={inputstyle + " border-t-transparent"}
      placeholder=" "
      required
    />
    <label htmlFor="reg-dob" className={"border-stone-950" + labelstyle}>
      Date Of Birth
    </label>
  </div>
);

const Phone_no = (props) => (
  <div className="relative">
    <input
      onBlur={(e) => {
        props.oninteraction(e);
      }}
      id="reg-phone"
      type="text"
      className={inputstyle}
      placeholder=""
      pattern="[0-9]"
      required
    />
    <label htmlFor="reg-phone" className={labelstyle}>
      Contact No
    </label>
  </div>
);

const Gender_f = (props) => (
  <div className="relative">
    <select
      onBlur={(e) => {
        props.oninteraction(e);
      }}
      className={select_style}
      id="reg-gender"
      required
    >
      <option value="notselected" selected disabled hidden>
        Not Selected
      </option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Gender
    </label>
  </div>
);

const State_f = (props) => (
  <div className="relative h-10 w-max min-w-[200px]">
    <select
      onBlur={(e) => {
        props.oninteraction(e);
        console.log(e.value);
        Getcities(e.value);
      }}
      className={select_style}
      id="reg-state"
      required
    >
      <option value="notselected" selected disabled hidden>
        Not Selected
      </option>
      {all_states.map((elem) => {
        return (
          <option key={elem["id"]} value={elem["iso2"]}>
            {elem["s_name"]}
          </option>
        );
      })}
    </select>
    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      State
    </label>
  </div>
);

const City_f = (props) => (
  <div className="relative h-max w-max min-w-[200px]">
    <select
      onBlur={(e) => {
        props.oninteraction(e);
      }}
      className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      id="reg-city"
      required
    >
      <option value="notselected" selected disabled hidden>
        Not Selected
      </option>
      <option value="City">City</option>
    </select>
    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      City
    </label>
  </div>
);

function address_form(props) {
  const add_input_styl = `peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-blue-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`;
  const add_label_styl = `after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-blue-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:after:scale-x-100 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500`;
  return (
    <div className="col-span-3">
      <label>Business Address :</label>
      <div className="flex flex-col gap-4 m-4 p-4 border-2">
        <div className="relative h-11 w-full min-w-[200px]">
          <input
            onBlur={(e) => {
              props.oninteraction(e);
            }}
            className={add_input_styl}
            placeholder=" "
            id="reg-addline1"
            required
          />
          <label className={add_label_styl}>Address Line 1</label>
        </div>
        <div className="relative h-11 w-full min-w-[200px]">
          <input
            onBlur={(e) => {
              props.oninteraction(e);
            }}
            className={add_input_styl}
            placeholder=" "
            id="reg-addline2"
            required
          />
          <label className={add_label_styl}> Address Line 2</label>
        </div>
        <State_f oninteraction={props.oninteraction} />
        <City_f oninteraction={props.oninteraction} />
      </div>
    </div>
  );
}

const Area_Of_Expertise = (props) => (
  <div className="relative">
    <select
      onBlur={(e) => {
        props.oninteraction(e);
      }}
      className={select_style}
      id="reg-gender"
      required
    >
      <option value="notselected" selected disabled hidden>
        Not Selected
      </option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Gender
    </label>
  </div>
);

const file_upload = (props) => (
  <div className="relative">
    <label
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      htmlFor="file_input"
    >
      Upload file
    </label>
    <input
      onBlur={(e) => {
        props.oninteraction(e);
      }}
      class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      id="file_input"
      type="file"
      required
    />
  </div>
);

const law_degree_uni = (props) => (
  <div className="relative">
    <select
      onBlur={(e) => {
        props.oninteraction(e);
      }}
      className={select_style}
      id="reg-law_uni"
      required
    >
      <option value="notselected" selected disabled hidden>
        Not Selected
      </option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      LAW University
    </label>
  </div>
);
const aad = (props) => (
  <div className="relative">
    <input
      onBlur={(e) => {
        props.oninteraction(e);
      }}
      id="reg-aad"
      type="text"
      className={inputstyle}
      placeholder=""
      pattern="[0-9]"
      required
    />
    <label htmlFor="reg-phone" className={labelstyle}>
      Aadhaar Number
    </label>
  </div>
);
export const form_elem = [
  Fname, //0
  Mname, //1
  Lname, //2
  DOB, //3
  Phone_no, //4
  Gender_f, //5
  address_form, //6
  Area_Of_Expertise, //7
  file_upload, //8
  law_degree_uni, //9
  aad, //10
];
const personal_info = [0, 1, 2, 3, 4, 5, 6];
export const clientform = [0, 1, 2, 3, 4, 10, 5, 6];
const lawyerform = [personal_info, [9], [8]];
export const allform = { lawyer: lawyerform };
