'use client'
import { useState } from "react";
import NavBar from "@/nav/NavBare";
export default function Header(){
    return(
        <div className="flex h-24 bg-cyan700 justify-between">
            <div className="logo bg-black w-[50vw] lg:w-[20vw]">
            </div>

            <NavBar/>
            
            <div className="log bg-red-100 w-[50vw] lg:w-[20vw]">
                <div className="login">

                </div>
                
                <div className="signUp">

                </div>
            </div>
        </div>
    );
}