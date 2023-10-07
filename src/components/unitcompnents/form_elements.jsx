import React, { useState } from "react";
import { all_states } from "../../data/India_States";
import { Getcities } from "./Getcities";

const labelstyle = `block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`;
const inputstyle = `appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`;
const select_style = `block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`;
const select_label_style = `block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`;
var citites = [];

const boxcss = "";
const Fname = (props) => (
  // const [v,setv]=useState("");
  <div className="relative">
    <label htmlFor="reg-fname" className={labelstyle}>
      First Name
    </label>
    <input
      onBlur={(e) => {
        props.oninteraction(e);
      }}
      onChange={(e) => {}}
      id="reg-fname"
      type="text"
      className={inputstyle}
      placeholder=" "
      required
    />
  </div>
);

const Mname = (props) => (
  <div className="relative">
    <label htmlFor="reg-mname" className={labelstyle}>
      Middle Name
    </label>
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
  </div>
);

const Lname = (props) => (
  <div className="relative">
    <label htmlFor="reg-lname" className={labelstyle}>
      Last Name
    </label>
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
  </div>
);

const DOB = (props) => (
  <div className="relative">
    <label htmlFor="reg-dob" className={"border-stone-950" + labelstyle}>
      Date Of Birth
    </label>
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
  </div>
);

const Phone_no = (props) => (
  <div className="relative">
    <label htmlFor="reg-phone" className={labelstyle}>
      Contact No
    </label>
    <input
      onKeyDown={(e) => {
        // if (e.key < "0" || e.key > "9") e.preventDefault();
      }}
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
  </div>
);

const Gender_f = (props) => (
  <div className="relative">
    <label className={select_label_style} htmlFor="reg-gender">
      Gender
    </label>
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
  </div>
);

function State_City_f(props) {
  const [dist, setdist] = useState([]);
  return (
    <>
      <div className="relative h-10">
        <label htmlFor="reg-state" className={select_label_style}>
          State
        </label>
        <select
          onChange={(e) => {
            props.oninteraction(e);
            Getcities(e.target.value, setdist);
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
      </div>
      <div className="relative h-max">
        <label htmlFor="reg-city" className={select_label_style}>
          City
        </label>
        <select
          onChange={(e) => {
            props.oninteraction(e);
          }}
          className={select_style}
          id="reg-city"
          required
        >
          <option value="notselected" selected disabled hidden>
            Not Selected
          </option>
          {dist
            ? dist.map((e) => {
                return (
                  <option key={e.id} value={e.name}>
                    {e.name}
                  </option>
                );
              })
            : null}
        </select>
      </div>
    </>
  );
}

function address_form(props) {
  return (
    <div className="col-span-full">
      <label>Business Address :</label>
      <div className="flex flex-col gap-8 m-4 p-4 border-2">
        <div className="relative h-11 ">
          <label className={labelstyle}>Address Line 1</label>
          <input
            onBlur={(e) => {
              props.oninteraction(e);
            }}
            className={inputstyle}
            placeholder=" "
            id="reg-addline1"
            required
          />
        </div>
        <div className="relative h-11 ">
          <label className={labelstyle}> Address Line 2</label>
          <input
            onBlur={(e) => {
              props.oninteraction(e);
            }}
            className={inputstyle}
            placeholder=" "
            id="reg-addline2"
            required
          />
        </div>
        <div className="relative h-11 ">
          <label className={labelstyle}>Pin Code</label>
          <input
            onBlur={(e) => {
              props.oninteraction(e);
            }}
            className={inputstyle}
            placeholder=" "
            id="reg-pin"
            required
          />
        </div>
        <State_City_f oninteraction={props.oninteraction} />
      </div>
    </div>
  );
}

const Area_Of_Expertise = (props) => (
  <div className="relative">
    <label className={select_label_style}>Gender</label>
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
  </div>
);

const file_upload = (props) => (
  <div className="relative">
    <label
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      htmlFor="file_input"
    >
      Upload file
    </label>
    <input
      onBlur={(e) => {
        props.oninteraction(e);
      }}
      class="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      id="file_input"
      type="file"
      required
    />
  </div>
);

const law_degree_uni = (props) => (
  <div className="relative">
    <label className={select_label_style}>LAW University</label>
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
  </div>
);
const aad = (props) => (
  <div className="relative">
    <label htmlFor="reg-aad" className={labelstyle}>
      Aadhaar Number
    </label>
    <input
      onBlur={(e) => {
        props.oninteraction(e);
      }}
      id="reg-aad"
      type="text"
      className={inputstyle}
      placeholder=""
      required
    />
  </div>
);
const email = (props) => (
  <div className="relative">
    <label htmlFor="reg-email" className={labelstyle}>
      Email
    </label>
    <input
      onBlur={(e) => {
        props.oninteraction(e);
      }}
      id="reg-email"
      type="email"
      className={inputstyle}
      placeholder=""
      required
    />
  </div>
);
const eid = (props) => (
  <div className="relative">
    <label htmlFor="reg-eid" className={labelstyle}>
      Enrollment ID
    </label>
    <input
      onBlur={(e) => {
        props.oninteraction(e);
      }}
      id="reg-eid"
      type="number"
      className={inputstyle}
      placeholder=""
      pattern="[0-9]"
      required
    />
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
  email, //11
  eid, //12 Enrollment ID For Lawyers
];
const personal_info = [0, 1, 2, 3, 4, 11, 10, 5, 6];
export const clientform = [0, 1, 2, 3, 4, 11, 10, 5, 6];
const lawyerform = [personal_info, [9, 12], [8]];
export const allform = { lawyer: lawyerform };
