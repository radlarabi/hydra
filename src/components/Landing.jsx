'use client'
import Image from "next/image"
export default function Landing(){
    return(
        <div className="landing lg:h-[70vh] h-40vh bg-slate-400 ">
            <div className="main_title flex flex-col lg:flex-row justify-between">
                <div className="title bg-slate-200 h-[40vh] w-[100vw] lg:h-[70vh]"> 
                
                </div> 
                <div className="imageVr bg-slate-100 h-[40vh] w-[100vw] lg:h-[70vh]">           
                    {/* <Image
                        src="/assets/Mask_group.png"
                        width={200}
                        height={200}
                    /> */}
                </div>
            </div>
        </div>
    );
}