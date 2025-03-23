import React from 'react';
import {Link} from 'react-router-dom';

export default function Topbar() {
    return (
        <div className='w-[80%] h-full text-white m-auto '>
            <div className='w-[80%] h-[12%] text-white m-auto flex justify-center items-center'>

                <i className="ri-search-line mr-2 text-zinc-400"></i>
                <input className='text-xl w-[50%] mx-10 p-4 text-zinc-200 outline-none bg-transparent' type='text' placeholder='Search Movies...' />
                <i className="text-zinc-400  ri-close-large-line">  </i>

            </div>


            <div className='bg-zinc-200 w-[50%] h-[20%] m-auto text-black'>
                <Link className='bg-zinc-400 inline-block w-full text-xl p-3'> new card promis
                </Link>

            </div>
        </div>
    );
}

