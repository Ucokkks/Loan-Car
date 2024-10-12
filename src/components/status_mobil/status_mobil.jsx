import React from "react";

const Status = () => {

    return(
        <div className="md:text-lg">
            <div className="inline-flex mt-3">
                <div className="w-5 h-5 rounded-full bg-InUse mt-1"></div>
                <a className="ml-2">In Use</a>
            </div>
           <br />
           <div className="inline-flex mt-2">
                <div className="w-5 h-5 rounded-full bg-BlueAvailable mt-1"></div>
                <a className="ml-2">Available</a>
            </div>
            <br />
            <div className="inline-flex mt-2">
                <div className="w-5 h-5 rounded-full bg-InMaintenance mt-1"></div>
                <a className="ml-2">In Maintenance</a>
            </div>
        </div>
    );

}

export default Status;