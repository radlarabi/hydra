'use client'
import Image from "next/image"
import contact from "../../public/contact.json"
import { useState, useEffect } from "react";
export default function Landing(){
    const [screenSize, setScreenSize] = useState({width: 0, height: 0})
    const [index, setIndex] = useState(0)

    const incIndex = () =>{
        index == 2 ? setIndex(0) : setIndex(index + 1)
    }
    
    const decIndex = () =>{
        index == 0 ? setIndex(2) : setIndex(index - 1)
    }

    useEffect(() => {
        const updateSize = () => {
            setScreenSize({width: window.innerWidth, height: window.innerHeight})
        }

        updateSize()

        window.addEventListener('resize', updateSize)

        return () => window.removeEventListener('resize', updateSize)
    }, [])
    return(
        <div className="landing ">
            <div className="main_title flex flex-col-reverse lg:flex-row ">
                
                <div className="title  flex flex-col items-center justify-center "> 
                    
                    <div className="mainTitle  mb-2">
                        
                        <div className="title1 flex flex-row lg:justify-start ml-[5vw] justify-center ">
                            <span className="pr-2 text-custom-purple font-bold lg:text-[2.6rem] text-[2.3rem] leading-1 tracking-wider">Dive </span>
                            <p className="font-bold text-[2.2rem] lg:text-[2.5rem] text-gray-200 tracking-wider leading-1">Into The Depths</p>
                        </div>
                        
                        <div className="title2 flex flex-row lg:justify-start justify-center ml-[5vw] just">
                            <p className="font-bold text-[2.2rem] pr-2 text-gray-200 lg:text-[2.5rem] tracking-wider leading-1">Of </p>
                            <span className="text-custom-purple font-bold  lg:text-[2.6rem] text-[2.3rem] tracking-wider leading-1">Virtual Reality</span>
                        </div>

                    </div>

                    <div className="subTitle lg:flex hidden ">
                        <p className="font-nav text-[15px] content-start ml-[5vw] mt-3 text-gray-300 tracking-[0.09rem] leading-[1.9rem]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> 
                                sed do eiusmod tempor incididunt ut labore et dolore <br/>
                                nisl tincidunt eget. Lectus mauris eros in vitae .
                        </p>
                    </div>

                    <div className="  flex lg:justify-start justify-center items-center ">
                        <button className="submit ml-[5vw] tracking-wider text-gray-800 text-[12px] font-nav font-semibold p-3 bg-gradient-to-r from-purple-400 to-custom-purple rounded-3xl lg:pl-6 lg:pr-6 pr-[6vw] pl-[6vw]">
                            BUILD YOUR WORLD
                        </button>
                        
                        <div className="lg:flex hidden">
                            <Image
                                src="/assets/arrow-small-right.png"
                                width={90}
                                height={90}
                            />
                        </div>

                    </div>

                </div> 

                <div className="imageVr flex justify-center items-center w-auto lg:w-[60vw]">           
                    <Image
                        className="border-custom-dark-gray border-solid lg:border-[20px] border-[12px] rounded-3xl rounded-tr-[100px] rounded-br-[100px] rounded-bl-[250px] rounded-tl-[100px] lg:h-[426px] h-[276px] lg:w-[490px] w-[340px]"
                        src="/assets/Mask_group.png"
                        width={490}
                        height={426}
                    />
                </div>

            </div> 
            <div className="flex justify-center  bg-gradient-to-r from-purple-card via-custom-radial1 to-purple-card mx-[3vw] my-[20px] rounded-[100px] min-h-[12vh] ">
                {
                    screenSize.width >= 930 ?
                    contact.map((item, index) => (
                        <div className={`w-full flex justify-center items-center ${index == 0 ? '' : 'border-l'}`}>
                            <div key={index} className={` flex flex-row justify-center items-center `}>
                                <Image
                                    className=""
                                    src={item.img}
                                    alt={item.title}
                                    width={50}
                                    height={61}
                                />
                                <div className="ml-[1vw]">
                                    <div className="text-[24px] text-gray-200">{item.title}</div>
                                    <div className="text-[12px] text-gray-200">{item.subTitle}</div>
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <div className="flex justify-between items-center w-full mx-4">
                        <Image
                            className=""
                            src={"/assets/chevron-circle-right.png"}
                            alt={"left"}
                            width={35}
                            height={35}
                            onClick={incIndex}
                            />
                        <div className="flex flex-row justify-center items-center">
                            <Image
                                className=""
                                src={contact[index].img}
                                alt={contact[index].title}
                                width={50}
                                height={61}
                                />
                            <div className="ml-[1vw]">
                                <div className="text-[24px] text-gray-200">{contact[index].title}</div>
                                <div className="text-[12px] text-gray-200">{contact[index].subTitle}</div>
                            </div>
                        </div>
                        <Image
                            className=""
                            src={"/assets/chevron-circle-left.png"}
                            alt={"left"}
                            width={30}
                            height={30}
                            onClick={decIndex}
                        />
                    </div>
                }
            </div>
        </div>
    );
}