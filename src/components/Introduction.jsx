'use client'

import Image from "next/image";

export default function Intorduction(){
    return (
        <div className="flex flex-col pt-[8vh]">
            <div className="introTitle  flex flex-row">
                <div className="intro1  h-full w-[50vw] flex flex-col pl-[2vw]">
                    <div className="title  w-full h-full flex justify-start items-end ">
                        <p className="text-slate-50 font-nav tracking-[0.1rem] font-semibold text-[36px]">
                            INTRODUCTION
                        </p>
                    </div>
                    <div className="subtitle  w-full h-full flex  ">
                        <p className="text-slate-50 font-nav tracking-[0.1rem] text-[36px]">
                            TO HYDRA VR
                        </p>
                        <div className="h-full flex pl-[2vw] justify-start items-start">
                            <Image
                                className="h-[100px] w-[220px]"
                                src={"/assets/flesh.png"}
                                width={220}
                                height={100}
                            />
                        </div>
                    </div>
                </div>
                <div className="intro2 bg-pue-200 h-full w-[50vw] flex justify-center items-center">
                    <p className="text-[14px] text-slate-50 font-nav tracking-[0.1rem] ">
                    Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                </div>
            </div>
            <div className="aboutVr  flex flex-row">

                <div className="intro1  h-full w-[50vw] flex justify-center items-center ">
                        <Image 
                            className="h-[457px] w-[424px]"
                            src={"/assets/MaskGroup-0.png"}
                            width={324}
                            height={357}
                        />

                </div>
                <div className="intro2  h-full w-[50vw] flex flex-col">
                    <div className="aboutTit   h-1/6 w-full">
                    </div>
                    <div className="aboutSubtitle  h-4/6 w-full flex justify-center items-start flex-col">
                        <p className="text-slate-50 font-nav tracking-[0.1rem] text-[36px] font-semibold">
                            ABOUT
                        </p>
                        <p className="text-slate-50 font-nav tracking-[0.1rem] text-[36px] ">
                            HYDRA VR
                        </p>
                        <p className="text-[14px] pt-[2vh] pb-[2vh] text-slate-50 font-nav tracking-[0.1rem] ">
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
                        <button className="text-gray-800 text-[12px] font-nav tracking-[0.1rem] font-semibold p-3 bg-gradient-to-r from-purple-500 to-purple-300 rounded-3xl pl-6 pr-6">
                            LET'S GET IN TOUCH
                        </button>
                    </div>
                    <div className="button  h-1/6 w-full">
                    </div>
                </div>
            </div>
            <div className="whyHydra  flex flex-row">
                <div className="intro1  h-full w-[50vw] flex flex-col pl-[2vw]">
                    <div className="title  w-full h-full flex justify-start items-end pb-[1vh]">
                        <p className="text-slate-50 font-nav tracking-[0.1rem] text-[36px] font-semibold">
                            WHY BUILD
                        </p>
                    </div>
                    <div className="subtitle  w-full h-full flex justify-start items-start pt-[1vh] text-[36px]">
                        <p className="text-slate-50 font-nav tracking-[0.1rem] ">
                            WITH HYDRA ?
                        </p>
                        <div className="h-full flex pl-[2vw] justify-start items-start">
                            <Image
                                className="h-[100px] w-[220px]"
                                src={"/assets/flesh.png"}
                                width={220}
                                height={100}
                            />
                        </div>
                    </div>
                </div>
                <div className="intro2  h-full w-[50vw] flex justify-center items-center">
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