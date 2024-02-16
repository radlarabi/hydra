'use client'
import { useState } from "react";
export default function NavBar(){
    const items = ["ABOUT", "SERVICE", "TECHNOLOGIES", "HOW TO"]; 

    return (
        <div className="bg-white hidden lg:block w-[15vw] lg:w-[40vw] h-24">
            <ul className="flex items-center justify-around align-middle h-[7vh]">
                {
                    items.map((item, index) =>(
                        <li key={index} className="text-gray-800 text-[12px] font-nav font-semibold">
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
        );
    }
    