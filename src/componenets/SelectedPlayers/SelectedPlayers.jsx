import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { toast } from 'react-toastify';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, setBalance, balance }) => {
    console.log(selectedPlayers);

    const deleteSelectedPlayer = (player) => {
        const updatedSelectedPlayers = selectedPlayers.filter(p => p.id !== player.id);
        setSelectedPlayers(updatedSelectedPlayers);
        toast.info(`${player.name} has been removed from selected players!`);
        setBalance(balance + player.price);
    };
    return (
        <>
        {selectedPlayers.length === 0 ? 
            <div className="text-center text-gray-500 py-10">No players selected</div>
             : selectedPlayers.map((player) => (
            <div key={player.id} className="card bg-gray-100  shadow-sm p-6 mb-4 w-10/12 mx-auto">
                <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                <figure>
                    <img src={player.image} alt={player.name} className="rounded-lg w-20 h-20" />
                </figure>
                <div>
                    <h2 className="card-title">{player.name}</h2>
                    <p className="text-[#777777] font-semibold">{player.country}</p>
                    <p className=" text-[#777777]">{player.role}</p>
                </div>

                </div>
                <button onClick={() => deleteSelectedPlayer(player)} className="cursor-pointer"><MdDeleteForever /></button>
                
                </div>
            </div>
        ))}
        </>
    );
};

export default SelectedPlayers;