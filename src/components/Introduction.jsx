'use client'

import Image from "next/image";

export default function Intorduction(){
    return (
        <div className="flex flex-col pt-[3rem]" id="ABOUT">
            <div className="introTitle  flex flex-row justify-center items-center">
                <div className="intro1  flex flex-col pl-[2vw]">
                    <div className="title flex justify-center lg:justify-start items-end ">
                        <p className="text-slate-50 font-nav tracking-[0.1rem] font-semibold lg:text-[36px] text-[20px]">
                            INTRODUCTION
                        </p>
                    </div>
                    <div className="subtitle flex">
                        <p className="text-slate-50 font-nav tracking-[0.1rem] lg:text-[36px] text-[20px]">
                            TO HYDRA VR
                        </p>
                        <div className="hidden lg:flex pl-[2vw] justify-start items-start">
                            <Image
                                className="h-[100px] w-[220px]"
                                src={"/assets/flesh.png"}
                                width={220}
                                height={100}
                            />
                        </div>
                    </div>
                </div>
                <div className="intro2 bg-pue-200 hidden lg:flex justify-center items-center lg:w-[50%]">
                    <p className="text-[14px] text-slate-50 font-nav tracking-[0.1rem] ">
                    Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                </div>
            </div>
            <div className="aboutVr flex lg:flex-row flex-col">
                <div className="intro1 flex justify-center items-center lg:w-[50%]">
                    <Image 
                        className=""
                        alt=""
                        src={"/assets/MaskGroup-0.png"}
                        width={324}
                        height={357}
                    />
                </div>
                <div className="intro2 flex flex-col  lg:w-[50%]">
                    <div className="aboutSubtitle flex justify-center lg:items-start items-center flex-col">
                        <p className="text-slate-50 font-nav tracking-[0.1rem] lg:text-[36px] text-[20px] font-semibold hidden lg:flex">
                            ABOUT
                        </p>
                        <p className="text-slate-50 font-nav tracking-[0.1rem] lg:text-[36px] text-[20px] hidden lg:flex">
                            HYDRA VR
                        </p>
                        <p className="text-[14px] pt-[2vh] pb-[2vh] text-slate-50 font-nav tracking-[0.1rem] mx-4">
                            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                            urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                            dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                            Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                            sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
                            etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                            cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                            retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                            n tempor.
                        </p>
                        <button className="text-gray-800 text-[12px] font-nav font-semibold p-3 bg-gradient-to-r from-purple-500 to-purple-300  rounded-3xl px-9 hover:border-custom-purple  hover:shadow-[0px_0px_0px_2px_rgba(255,255,255,255.3)] hover:text-white hover:bg-none">
                            LET'S GET IN TOUCH
                        </button>
                    </div>
                </div>
            </div>
            <div className="whyHydra  flex flex-col lg:flex-row lg:mt-[4rem] mt-[1rem]">
                <div className="intro1 lg:justify-start flex-col pl-[2vw] lg:w-[50%]">
                    <div className="title pb-[1vh] flex lg:justify-start justify-center items-center">
                        <p className="text-slate-50 font-nav tracking-[0.1rem] lg:text-[36px] text-[20px] font-semibold">
                            WHY BUILD
                        </p>
                    </div>
                    <div className="subtitle flex lg:justify-start lg:items-start justify-center items-center pt-[1vh] lg:text-[36px] text-[20px]">
                        <p className="text-slate-50 font-nav tracking-[0.1rem] ">
                            WITH HYDRA ?
                        </p>
                        <div className="hidden lg:flex pl-[2vw] justify-start items-start">
                            <Image
                                className="h-[100px] w-[220px]"
                                src={"/assets/flesh.png"}
                                width={220}
                                height={100}
                            />
                        </div>
                    </div>
                </div>
                <div className="intro2 hidden lg:flex justify-center items-center lg:w-[50%]">
                    <p className="text-slate-50 font-nav tracking-[0.1rem] text-[14px]">
                        Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                </div>
            </div>
        </div>
    );
}