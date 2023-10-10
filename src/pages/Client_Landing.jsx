import { useEffect } from "react";
import { slideshowimg } from "../data/Misc";
import { BsArrowRight } from "react-icons/bs";

export function Client_Landing() {
  useEffect(() => {
    let i = 0;
    const slideimg = document.querySelector(".slidebgimg");
    const intv = setInterval(() => {
      slideimg.style.background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slideshowimg[i]})`;
      i = (i + 1) % slideshowimg.length;
    }, 1000);
    return () => {
      clearInterval(intv);
    };
  }, []);
  return (
    <div
      className={`slidebgimg relative mx-auto w-[60%] h-[500px] cursor-pointer border border-neutral-500 rounded-md bg-[linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${slideshowimg[0]})]`}
    >
      <div className="hover:scale-105 absolute bottom-0 flex justify-between items-center p-10 w-full">
        <p className="p-2 text-white text-6xl font-medium">Services</p>
        <p>
          <BsArrowRight className="text-white text-6xl font-medium" />
        </p>
      </div>
    </div>
  );
}
