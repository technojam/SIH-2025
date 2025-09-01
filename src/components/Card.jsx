import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ theme }) => {
  console.log(theme);

  const navigate = useNavigate();

  const openBucket = (evnt) => {
    navigate(`/theme/${theme.id}`);
  };

  // Get the background image from theme, fallback to default if not provided
  const backgroundImage = theme.image ? `url('/${theme.image}')` : `url('/img5.jpg')`;

  return (
    <div className="h-[400px] w-[300px] perspective relative customRotate">
      <div 
        className="preserve-3d w-full h-full transition-all ease-in-out duration-500 rounded-[10px] bg-cover bg-center bg-no-repeat inline-block overflow-hidden relative"
        style={{ backgroundImage }}
      >
        {/* Semi-transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[10px]"></div>
        
        <div className="flex flex-col w-full h-full relative z-10 px-6 pt-6 pb-6">
          <div className="flex flex-col">
            <h1 className="transform-3d text-white text-2xl font-black drop-shadow-2xl shadow-black leading-tight mb-4 text-left">
              {theme.bucket}
            </h1>
            <p className="transform-3d text-sm text-gray-200 drop-shadow-xl shadow-black leading-relaxed text-left mb-6">{theme.description}</p>
          </div>
          <div className="mt-auto">
            <button
              onClick={openBucket}
              className="transform-3d bg-[#f6921e] rounded-md text-white px-4 py-2 font-semibold shadow-xl hover:bg-[#e5821a] transition-all duration-200 border border-[#f6921e] hover:border-[#e5821a]"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;