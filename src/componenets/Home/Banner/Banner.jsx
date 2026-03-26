import React from 'react';
import bannerImg from '../../../assets/bg-shadow.png';
import bannerMain from '../../../assets/banner-main.png';

const Banner = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-6">
      
      <div className="relative ">
        {/* Background Image */}
        <img
          src={bannerImg}
          alt="Banner"
          className="w-full h-150 object-cover rounded-2xl bg-black"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 gap-4 md:gap-6">
          
          <img
            src={bannerMain}
            alt=""
            className="w-20 md:w-28 lg:w-36"
          />

          <h3 className="font-bold text-lg md:text-3xl lg:text-4xl text-white">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h3>

          <p className="text-gray-300 text-sm md:text-lg lg:text-2xl">
            Beyond Boundaries Beyond Limits
          </p>

          <button className="bg-[#E7FE29]  px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold cursor-pointer">
            Claim Free Credits
          </button>
        </div>
      </div>

    </div>
  );
};

export default Banner;