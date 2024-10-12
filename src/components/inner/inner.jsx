import React from "react";

const Inner = ({children}) => {
    return (
        <div className="w-[98%] px-6 pt-16 pb-8 shadow-md bg-white h-full rounded-2xl md:px-14">
            {children}
        </div>
    )
}

export default Inner;