import React from "react";

const LoanData = () => {

    return(
            <div className="inline-flex bg-white shadow-md text-lg font-sf-pro font-semibold p-3 px-10 rounded-lg opacity-0 lg:opacity-100">
                <ul>
                    <li>Daily Data</li>
                    <li className="mt-2">Weekly Data</li>
                    <li className="mt-2">Monthly Data</li>
                </ul>
                <ul className="ml-10">
                    <li>20</li>
                    <li className="mt-2">50</li>
                    <li className="mt-2">70</li>
                </ul>
            </div>
    );

};

export default LoanData