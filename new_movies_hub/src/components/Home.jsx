import React,{useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Header from "./Header";
import axios from "../utils/axios";
export default function Home(){
    document.title = "New Movies Hub";
    
    const [wallpaper, setWallpaper] = useState("");

    async function getHeaderWallepaper() {
        try {
            const {data} = await axios.get(`/trending/all/day`)
            const randomdata =  data.results[(Math.random()*data.results.length).toFixed()];
            setWallpaper(randomdata);
        }
        catch(error){
            console.log("error is",error);
        }
    }
     

      useEffect(()=>{
       !wallpaper && getHeaderWallepaper();
      },[])


    return wallpaper ? (
       <div className="h-full overflow-hidden flex">
            <Sidebar />
            <div className="w-[82%] h-full overflow-hidden">
            <Topbar />
            <Header data={wallpaper} />
             
            </div>
       </div>
    ): <h1 className="text-2xl flex justify-center items-center"> Loading... </h1>;
} 