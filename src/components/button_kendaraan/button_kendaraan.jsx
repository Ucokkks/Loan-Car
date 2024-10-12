import React from "react";
import kendaraan from "/src/assets/kendaraan.svg"

const Kendaraan = ({children}) => {

    return(
        <button className="inline-flex bg-ButtonColor rounded-xl h-12 w-[205px] py-3 px-4 relative hover:bg-ButtonHover">
            <p className="text-white font-sf-pro font-semibold">{children}</p>
            <img className="absolute top-0 ml-[130px] mt-1" src={kendaraan} alt="vehicle" />
        </button>
    );

};

export default Kendaraan;