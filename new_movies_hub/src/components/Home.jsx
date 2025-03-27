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
             setWallpaper(data)
        }
        catch(error){
            console.log("error is",error);
        }
    }
     

      useEffect(()=>{
        getHeaderWallepaper();
      },[])


    return(
       <div className="h-full overflow-hidden flex">
            <Sidebar />
            <div className="w-[80%] h-full overflow-hidden">
            <Topbar />
            <Header />
             
            </div>
       </div>
    );
} 