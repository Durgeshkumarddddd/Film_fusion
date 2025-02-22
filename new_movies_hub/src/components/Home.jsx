import React from "react";
import Navbar from "./Navbar";
export default function Home(){
    document.title = "New Movies Hub";
    return(
       <div className="h-full">
            <Navbar />
            <div className="w-[80%] h-full overflow-hidden">

            </div>
       </div>
    );
} 