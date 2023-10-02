export function LSP_Landing_Page() {
  return (
    <div className="mt-20 w-[80%] text-2xl">
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-center gap-4">
          <img src="Profile.jpg" alt="..." className="CaseHandlerImg" />
          <div className="flex flex-col border-1 border-neutral-300 rounded-md w-max">
            <button className="ml-1 mr-1 mt-1 font-bold text-lg">
              Profile
            </button>
            <hr></hr>
            <button className="ml-1 mr-1 font-bold text-lg">Rewards</button>
            <hr></hr>
            <button className="ml-1 mr-1 font-bold text-lg">Statistics</button>
            <hr></hr>
            <button className="ml-1 mr-1 font-bold text-lg">Time Slots</button>
            <hr className="mb-0.5"></hr>
            <button className="ml-1 mr-1 font-bold text-lg">Settings</button>
          </div>
        </div>
        <form>
          <div className="part1  flex flex-col justify-center wrap border-1 border-neutral-300 shadow-sm p-4">
            <div className="flex flex-row  align-center gap-4 items-center w-[80%]">
              <label htmlFor="reg-name" className="font-bold text-lg">
                Name :{" "}
              </label>
              <input
                id="reg-name"
                className="border-2 rounded-md"
                type="text"
              ></input>
            </div>
            <div className="flex flex-row align-center gap-4 items-center w-[80%]">
              <label htmlFor="reg-email" className="font-bold text-lg">
                Email :{" "}
              </label>
              <input
                id="reg-email"
                className="border-2 rounded-md"
                type="text"
              ></input>
            </div>
            <div className="flex flex-row align-center gap-4 items-center w-[80%]">
              <label htmlFor="reg-cont" className="font-bold text-lg">
                Contact :{" "}
              </label>
              <input
                id="reg-cont"
                className="border-2 rounded-md"
                type="tel "
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
