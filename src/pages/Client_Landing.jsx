import { useEffect } from "react";
import { slideshowimg } from "../data/Misc";
import { BsArrowRight } from "react-icons/bs";

export function Client_Landing() {
  return (
    <div
      className={`overflow-hidden mx-auto justify-center w-[60%] flex h-[400px] border border-neutral-500 `}
    >
      {slideshowimg.map((elem, ind) => {
        if (ind == 0) return <img className="object-cover" src={elem}></img>;
        return <img className="h-full w-full" src={elem}></img>;
      })}
    </div>
  );
}
