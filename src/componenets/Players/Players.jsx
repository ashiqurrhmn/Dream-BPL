import { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Players = ({ promise, setBalance, balance }) => {
  const data = use(promise);
  const [btnType, setBtnType] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <>
    <div className="">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between">
        {btnType === "available" ? (
          <div className="my-10 text-[20px] md:text-3xl font-bold">Available Players</div>
        ) : (
          <div className="my-10 text-[20px] md:text-3xl font-bold">Selected Players ({selectedPlayers.length}/{data.length})</div>
        )}
        <div className="mb-2">
          <button
            className={`${btnType === "available" ? "bg-[#E7FE29]" : "bg-gray-100"} rounded-full md:w-40 px-4 py-2 md:px-6 md:py-3  font-semibold cursor-pointer border-gray-200 border `}
            onClick={() => setBtnType("available")}
          >
            Available
          </button>
          <button
            className={`${btnType === "selected" ? "bg-[#E7FE29]" : "bg-gray-100"} rounded-full md:w-40 px-4 py-2 md:px-6 md:py-3  font-semibold cursor-pointer border-gray-200 border `}
            onClick={() => setBtnType("selected")}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      </div>
      {btnType === "available" ? (
        <AvailablePlayers data={data} setBalance={setBalance} balance={balance} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></AvailablePlayers>
      ) : (
        <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setBalance={setBalance} balance={balance}></SelectedPlayers>
      )}
    </>
  );
};

export default Players;
