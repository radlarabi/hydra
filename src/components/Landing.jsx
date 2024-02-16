'use client'
import Image from "next/image"
export default function Landing(){
    return(
        <>
            <div className="landing">
                <div className="main_title bg-slate-300">
                    <div className="title bg-slate-200 w-20 h-20"> 

                    </div> 
                    <div className="imageVr bg-slate-100 w-20 h-20">
                        {/* <Image
                            src="/assets/Mask_group.png"
                            width={200}
                            height={200}
                        /> */}
                    </div>
                </div>
                main content
            </div>
        </>
    )
}