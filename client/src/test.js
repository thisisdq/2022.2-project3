import AppContext from "./AppContext";
import React from "react";


const test = () => {
    const a = React.useContext(AppContext)
    console.log(a);
    return (
        <div>
            {a}
        </div>
    )
}

export  default test;