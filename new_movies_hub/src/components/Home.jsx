import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
export default function Home(){
    document.title = "New Movies Hub";
    return(
       <div className="h-full overflow-hidden flex">
            <Sidebar />
            <div className="w-[80%] h-full overflow-hidden">
            <Topbar />
             
            </div>
       </div>
    );
} 