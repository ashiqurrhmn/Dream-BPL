import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { useState } from "react";
import { toast } from 'react-toastify';



const Card = ({ player, setBalance, balance, setSelectedPlayers, selectedPlayers }) => {
  const [isSelected, setIsSelected] = useState(false);

 const handleSelect = () => {
  let newBalance = balance - player.price;

  if (newBalance >= 0) {
    setBalance(balance - player.price);
    toast.success(`${player.name} has been selected!`);
    setIsSelected(true);
  } else {
    toast.error("Not enough balance to select this player!");
  }
  setSelectedPlayers([...selectedPlayers, player]);
};

  return (
    <div className="card bg-gray-100 w-90 shadow-sm p-6">
      <figure>
        <img src={player.image} alt="Player" className="rounded-lg w-full" />
      </figure>
      <div className="mt-6">
        <h2 className="card-title">
          <FaUserAlt />
          {player.name}
        </h2>
        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-2  items-center text-[#777777]">
            <FaFlag />
            <p>{player.country}</p>
          </div>
          <div className="badge badge-ghost">{player.role}</div>
        </div>
        <hr className="my-6 text-gray-300" />
        <div className="flex justify-between items-center mb-2">
          <p className="font-semibold">Rating</p>
          <p className="text-[#1313139c]">{player.rating}</p>
        </div>
        <div className="flex justify-between items-center mb-2">
          <p className="font-semibold">Batting Style</p>
          <p className="text-[#1313139c]">{player.battingStyle}</p>
        </div>
        <div className="flex justify-between items-center mb-2">
          <p className="font-semibold">Price: {player.price}$</p>
          <button type="button" className="btn" onClick={handleSelect} disabled={isSelected}>
            {isSelected === true ? "Selected" : "Select"}
          </button>
        </div>
      </div>
      
    </div>
    
  );
  
};

export default Card;
