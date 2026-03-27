import { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Players = ({ promise, setBalance, balance }) => {
  const data = use(promise);
  const [btnType, setBtnType] = useState("available");

  return (
    <>
      <div className="w-10/12 mx-auto flex justify-between items-center">
        {btnType === "available" ? (
          <div className="my-10 text-3xl font-bold">Available Players</div>
        ) : (
          <div className="my-10 text-3xl font-bold">Selected Players (0/0)</div>
        )}
        <div>
          <button
            className={`${btnType === "available" ? "bg-[#E7FE29]" : "bg-gray-100"} w-40 px-4 py-2 md:px-6 md:py-3 md:rounded-l-lg font-semibold cursor-pointer border-gray-200 border md:border-r-0`}
            onClick={() => setBtnType("available")}
          >
            Available
          </button>
          <button
            className={`${btnType === "selected" ? "bg-[#E7FE29]" : "bg-gray-100"} w-40 px-4 py-2 md:px-6 md:py-3 md:rounded-r-lg font-semibold cursor-pointer border-gray-200 border md:border-l-0`}
            onClick={() => setBtnType("selected")}
          >
            Selected (0)
          </button>
        </div>
      </div>
      {btnType === "available" ? (
        <AvailablePlayers data={data} setBalance={setBalance} balance={balance}></AvailablePlayers>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
};

export default Players;
