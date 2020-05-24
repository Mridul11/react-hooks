import React, { useEffect } from "react";

const HelloComponent = () => {
    useEffect(() => {
        console.log("Rendering")
        return () => {
                console.log("unmount!")
            }
    },[]);

    return(
        <div>
            HelloComponent!
        </div>
    )
}

export default HelloComponent ; 