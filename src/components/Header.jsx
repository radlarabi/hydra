'use client'
import { useState } from "react";
import Image from "next/image";
import NavBar from "@/nav/NavBare";
export default function Header(){
    return(
        <div className="flex h-24 bg-cyan700 justify-between">
            <div className="logo bg-black w-[50vw] lg:w-[30vw] flex justify-around">
                <div className="mt-1">
                    <Image
                        src="/assets/Frame.png"
                        width={80}
                        height={82}
                        alt="Hydra Logo"
                    />
                </div>
                <div className="mt-6">
                    <Image
                        src="/assets/Hydra.png"
                        width={46}
                        height={76}
                        alt="Hydra Logo"
                    />
                </div>
            </div>

            <NavBar/>
            
            <div className="flex justify-around bg-red-100 w-[50vw] lg:w-[30vw]">
                <div className="login mt-6">
                    <button type="button" className="text-gray-800 text-[12px] font-nav font-semibold  border-black border-solid border-2 rounded-3xl p-3 pl-6 pr-6">CONTACT US</button>
                </div>
                
                <div className="signUp mt-6">
                    <button type="button" className="text-gray-800 text-[12px] font-nav font-semibold p-3 bg-gradient-to-r from-purple-500 to-purple-300 rounded-3xl pl-6 pr-6">JOING HYDRA</button>
                </div>
            </div>
        </div>
    );
}