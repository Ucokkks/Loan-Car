import React from "react";
import detail from "/src/assets/detail.svg";

const DetailButton = () => {

    return(
        <a href="/vehicle/detail">
            <button className="bg-ButtonDetail inline-flex w-32 py-2 justify-center rounded-xl hover:bg-ButtonHover">
                <img className="w-6" src={detail} alt="" />
                <p className="text-white ml-1">Detail</p>
            </button> 
        </a>
    );

};

export default DetailButton;