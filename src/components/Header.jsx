'use client'
import { useState } from "react";
import Image from "next/image";
import NavBar from "@/nav/NavBare";
import {motion} from "framer-motion"
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export default function Header(){
    
    const [toggle, setToggle] = useState(false);
    const items = ["ABOUT", "SERVICE", "TECHNOLOGIES", "HOW TO"]; 
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setToggle(!toggle);
        if(isOpen)
            enablePageScroll()
        else
            disablePageScroll()
    };


    return(
        <>
            <div className="flex lg:fixed justify-between backdrop-blur-sm bg-custom-blue/10 w-full z-50">
                <div className="logo flex justify-center">
                    <motion.div 
                        whileHover={{rotate: "90deg"}}
                        className="mt-1 mr-[1vw]">
                        <Image
                            src="/assets/Frame.png"
                            width={81}
                            height={82}
                            alt="Hydra Logo"
                            onClick={() => {
                                document.getElementById('Landing').scrollIntoView();
                                enablePageScroll();
                                isOpen ? setIsOpen(!isOpen) : '' 
                                toggle ? setToggle(!toggle) : ''
                            }}
                            />
                    </motion.div>
                    <div className="mt-6 mr-[1vw]">
                        <Image
                            src="/assets/Hydra.png"
                            width={49}
                            height={76}
                            alt="Hydra Logo"
                            onClick={() => {
                                document.getElementById('Landing').scrollIntoView();
                            }}
                        />
                    </div>
                </div>

                <NavBar/>
                <div className="lg:hidden flex justify-end items-center">
                    <button className={`menu ${isOpen ? 'opened' : ''} `} onClick={toggleMenu} aria-label="Main Menu">
                        <svg width="50" height="50" viewBox="0 0 100 100" stroke="#9E94C9">
                            <path className="line line1"  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path className="line line2"  d="M 20,50 H 80" />
                            <path className="line line3"  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex justify-around ">
                    <div className="login mt-6 mx-3">
                        <button type="button" className="text-gray-200 text-[12px] font-nav font-semibold  border-gray-200 border-solid border-2 rounded-3xl p-3 px-6 hover:border-custom-purple hover:shadow-lg hover:shadow-custom-purple/30">CONTACT US</button>
                    </div>
                    
                    <div className="signUp mt-6 mx-3">
                        <button type="button" className="text-gray-800 text-[12px] font-nav font-semibold p-3 bg-gradient-to-r from-purple-500 to-purple-300  rounded-3xl px-6 hover:border-custom-purple hover:shadow-[0px_0px_0px_2px_rgba(255,255,255,255.3)] hover:text-white hover:bg-none">JOING HYDRA</button>
                    </div>
                </div>
            </div>
            {
                toggle && 
                <div className='h-full w-full backdrop-blur-sm bg-custom-radial1/70 fixed z-50'>
                    <div className="h-full w-full flex flex-col justify-center items-center">
                    {
                        items.map((item, index) =>(
                            <a 
                                href={`#${item}`} 
                                key={index} 
                                className="text-gray-200 text-[2rem] font-nav font-semibold px-[1vw] py-[1rem] hover:text-custom-purple cursor-pointer"
                                onClick={toggleMenu}
                                >
                                
                                {item}
                            </a>
                        ))
                    }
                    </div>
                </div>
            }
        </>
    );
}