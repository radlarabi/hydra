'use client'
import { useState } from "react";
export default function NavBar(){
    const items = ["ABOUT", "SERVICE", "TECHNOLOGIES", "HOW TO"]; 

    return (
        <div className=" hidden lg:block w-[15vw] lg:w-[40vw] h-24">
            <ul className="flex items-center align-middle justify-center h-[10vh]">
                {
                    items.map((item, index) =>(
                        <li key={index} className="text-gray-200 text-[12px] font-nav font-semibold pl-[1vw] pr-[1vw] ">
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
        );
    }
    