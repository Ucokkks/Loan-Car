import React from "react";
import foto from "/src/assets/gunawan.jpg"
import bintang from "/src/assets/bintang.svg"

const Rating = () => {

    return(
        <div className="bg-white shadow-md w-[95%] p-7 rounded-2xl mb-4">
            <div className="inline-flex relative">
                <img className="w-10 h-10 rounded-full mt-1" src={foto} alt="" />
                <p className="ml-4 font-semibold">Username</p>
                <img className="absolute w-[80%] mt-7 ml-14" src={bintang} alt="" />
            </div>
            <p className="mt-4 font-semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
    );

};

export default Rating;