import React from "react";
import search from "/src/assets/search_icon.svg"

const Searchbar = () => {
    
    return(
        <form className="inline-flex relative" action="">
            <input placeholder="Search based on ID or Registration Plates" type="text" name="search" id="search" 
            className=" border-2 border-gray-600 rounded-xl mt-8 h-12 w-[330px] px-14  placeholder-gray-500 placeholder:font-st-pro placeholder:text-center  md:w-[410px]" />
            <img className="absolute mt-[43px] ml-3 w-7" src={search} alt="search" />
        </form>
    );
    
};

export default Searchbar;