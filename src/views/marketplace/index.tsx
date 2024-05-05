import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const MarketPlace = ({ setOpenMarketPlace }) => {
  const CloseModal = () => (
    <a
      onClick={() => setOpenMarketPlace(false)}
      className="group mt-4 inline-flex h-10 w-10 items-center justify-center cursor-pointer rounded-lg bg-primary/80 backdrop-blur-2xl transition-all duration-500 hover:bg-primary"
    >
      <i className="text-2xl text-white group-hover:text-white">
        <AiOutlineClose />
      </i>
    </a>
  );
  return (
    <div className="bg-default-950/40 rounded-xl backdrop-blur-3xl">
      <div className="items-center justify-center text-center py-20 px-40">
        <h3 className="text-default-200 text-4xl font-medium">Coming Soon</h3>
        <CloseModal />
      </div>
    </div>
  );
};
