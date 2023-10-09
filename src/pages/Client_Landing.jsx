import { slideshowimg } from "../data/Misc";

const elem = document.querySelector(".slideimg");
console.log(elem);

export function Client_Landing() {
  return (
    <div className="mx-auto w-[60%] h-[400px] border border-neutral-500 rounded-md">
      <img className="slideimg"></img>
    </div>
  );
}
