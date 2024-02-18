import partners from "../../public/partners.json"
import Image from "next/image"
export default function Partners(){
    // /workspaces/hydra/public/partners.json

    return(
        <div className="">
            <div className="title h-[30vh] flex justify-center items-center bg-[url('/assets/MaskGroup5.png')] bg-cover bg-no-repeat">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-slate-100 text-[36px] font-bold">TECHNOLOGIES & HARDWARE</p>
                    <p className="text-slate-100 text-[36px]">USED BY HYDRA VR.</p>
                </div>
            </div>
            <div className="partn h-[35vh] flex flex-row justify-center items-center">
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