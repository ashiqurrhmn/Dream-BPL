import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";


const AvailablePlayers = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="w-10/12 mx-auto ">
        <div className="my-10 text-3xl font-bold">Available Players</div>

        <div className="flex flex-wrap gap-6 justify-center">
            {data.map((data) => {
        return <div>
          <div className="card bg-gray-100 w-90 shadow-sm p-6">
            <figure>
              <img
                src={data.image}
                alt="Player" className="rounded-lg w-full"
              />
            </figure>
            <div className="mt-6">
              <h2 className="card-title">
                <FaUserAlt />
                {data.name}
              </h2>
              <div className="flex justify-between items-center mt-3">
                <div className="flex gap-2  items-center text-[#777777]">
                    <FaFlag />
                    <p>{data.country}</p>
                </div>
                <div className="badge badge-ghost">{data.role}</div>
              </div>
              <hr className="my-6 text-gray-300" />
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold">Rating</p>
                <p className="text-[#1313139c]">{data.rating}</p>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold">Batting Style</p>
                <p className="text-[#1313139c]">{data.battingStyle}</p>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold">Price: {data.price}$</p>
                <button className="btn bg-[#E7FE29]">Select</button>
              </div>
              <div className="card-actions justify-end">
                
              </div>
            </div>
          </div>
        </div>
        
    })}
        </div>

    

        
      </div>
    </>
  );
};

export default AvailablePlayers;
