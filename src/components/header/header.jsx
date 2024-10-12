import React from "react";

const Header = ({children}) => {

    return (
     <h1 className="text-3xl font-sf-pro font-bold md:text-4xl">{children}</h1>    
    );

};

export default Header;