import React from "react";
import edit from "/src/assets/edit.svg";

const EditButton = () => {

    return(
        <a href="/vehicle/edit">
        <button className="bg-BlueAvailable inline-flex w-32 py-2 justify-center rounded-xl hover:bg-ButtonHover">
            <img className="w-6" src={edit} alt="" />
            <p className="text-white ml-1">Edit</p>
        </button> 
        </a>
    );

};

export default EditButton;