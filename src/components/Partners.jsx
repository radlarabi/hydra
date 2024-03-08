import partners from "../../public/partners.json"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Partners(){
    // /workspaces/hydra/public/partners.json

    return(
        <div className=" pt-[5vh]" id="TECHNOLOGIES">
            <div className=" title flex justify-center items-center bg-[url('/assets/metaverse.png')] bg-contain bg-no-repeat bg-center min-h-[35vh]">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-slate-200 text-[26px] lg:text-[36px] font-bold">TECHNOLOGIES & HARDWARE</p>
                    <p className="text-slate-200 text-[26px] lg:text-[36px]">USED BY HYDRA VR.</p>
                </div>
            </div>
            <div className="partn flex flex-col lg:flex-row justify-center items-center pt-[5vh]">
                {
                    partners.map((partn, index) => (
                        <div key={index} className=" ml-[4vw] mr-[4vw] h-[150px] w-[150px]">
                            <Image
                                src={partn.img}
                                width={150}
                                height={150}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}