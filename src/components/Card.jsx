import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ theme }) => {
  console.log(theme);

  const navigate = useNavigate();

  const openBucket = (evnt) => {
    navigate(`/theme/${theme.id}`);
  };

  return (
    <div className="h-[400px] w-[300px] perspective relative customRotate">
      <div className="preserve-3d pt-[100px] w-full transition-all ease-in-out duration-500 rounded-[10px] bg-[url('/img5.jpg')] bg-cover inline-block">
        <div className="flex flex-col justify-between  w-full content-box max-h-96 min-h-72">
          <h1 className="transform-3d text-[#f6921e] text-2xl font-black">
            {theme.bucket}
          </h1>
          <p className="transform-3d  pt-4 text-sm">{theme.description}</p>
          <button
            onClick={openBucket}
            className="text-start transform-3d bg-[#f6921e] rounded-sm w-max text-white px-2 shadow-lg "
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;