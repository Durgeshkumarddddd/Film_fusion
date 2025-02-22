import React from "react";
import {Link} from 'react-router-dom';

export default function Navbar(){
return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 ">
        <h1>
        <i class="text-[#6556CD]  ri-clapperboard-ai-fill text-3xl ml-6 mt-6 "></i>
        <span className="text-3xl text-white font-bold"> Durgesh </span>
        </h1>
        <nav className="text-zinc-400 ">
          <h1 className=" text-3xl m-8 text-white "> New Feeds </h1>
          <div className="flex flex-col ml-[13%]">
            <Link className="text-xl mt-[4%] hover:bg-[#6556CD] hover:text-white ">Latest Movies </Link>
            <Link className="text-xl mt-[4%] hover:bg-[#6556CD] hover:text-white ">Coming Soon Movies </Link>
            <Link className="text-xl mt-[4%] hover:bg-[#6556CD] hover:text-white"> Trending Movies </Link>
            <Link className="text-xl mt-[4%]  hover:bg-[#6556CD] hover:text-white"> Top Rated Movies </Link>
            <Link className="text-xl mt-[4%]  hover:bg-[#6556CD] hover:text-white ">Popular Movies  </Link>
            <Link className="text-xl mt-[4%]  hover:bg-[#6556CD] hover:text-white ">Tv Show</Link>
            <Link className="text-xl mt-[4%]  hover:bg-[#6556CD] hover:text-white">Action Movies </Link>
          </div >
          <hr className="mt-6"></hr>
          
           <h1 className="text-2xl m-8 text-white ">Drama Movies </h1>
            <h1 className="text-2xl m-8 text-white ">Horror Movies </h1>
            <h1 className="text2xl  m-8 text-white ">Romance Movies </h1>
            <h1 className="text-2xl m-8 text-white ">Sci-Fi Movies </h1>


        </nav>
   </div>
);
}
