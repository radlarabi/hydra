'use client'
import { useState } from "react";
export default function NavBar(){
    const items = ["ABOUT", "SERVICE", "TECHNOLOGIES", "HOW TO"]; 

    return (
        <div className=" hidden lg:flex w-[15vw] lg:w-[40vw] items-center justify-center">
            <ul className="flex items-center justify-center">
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
    