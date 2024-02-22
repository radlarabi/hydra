'use client'
import { useState } from "react";
import Image from "next/image";
import NavBar from "@/nav/NavBare";
export default function Header(){
    return(
        <div className="flex justify-between pt-4">
            <div className="logo flex justify-center">
                <div className="mt-1  mr-[1vw]">
                    <Image
                        src="/assets/Frame.png"
                        width={91}
                        height={92}
                        alt="Hydra Logo"
                    />
                </div>
                <div className="mt-6 mr-[1vw]">
                    <Image
                        src="/assets/Hydra.png"
                        width={49}
                        height={76}
                        alt="Hydra Logo"
                    />
                </div>
            </div>

            <NavBar/>
            <div className="lg:hidden flex justify-end items-center">
                    <Image
                        className=" mr-[4vw]"
                        src="/assets/Hamburger-Button.png"
                        width={33}
                        height={26}
                        alt="Hydra Logo"
                    />
            </div>
            <div className="hidden lg:flex justify-around ">
                <div className="login mt-6">
                    <button type="button" className="text-gray-200 text-[12px] font-nav font-semibold  border-gray-200 border-solid border-2 rounded-3xl p-3 pl-6 pr-6">CONTACT US</button>
                </div>
                
                <div className="signUp mt-6">
                    <button type="button" className="text-gray-800 text-[12px] font-nav font-semibold p-3 bg-gradient-to-r from-purple-500 to-purple-300 rounded-3xl pl-6 pr-6">JOING HYDRA</button>
                </div>
            </div>
        </div>
    );
}