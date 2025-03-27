import React from 'react';
import {useState} from 'react';
import axios from '../utils/axios';

export default function Header(){
   
    const [head, setHead] = useState("");

    
    return (
        <header className=' w-full h-[20vh] ml-4'>
            <img src="/premium.avif" onError={(e) => (e.target.src = "/fallback-image.png")} className='w-full h-[30vh] rounded-lg object-fill overflow-hidden ' />
        </header>
    );
}