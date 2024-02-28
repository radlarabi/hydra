import Image from "next/image"
import steps from "../../public/steps.json"
export default function HowHydra(){
    return (
        <div className=" flex flex-col">
            <div className="introTitle  flex flex-row">
                <div className="intro1 flex flex-col pl-[2vw]">
                    <div className="title flex justify-start items-end ">
                        <p className="text-slate-50 font-nav tracking-[0.1rem] font-semibold text-[36px]">
                            HOW WE BUILD
                        </p>
                    </div>
                    <div className="subtitle flex  ">
                        <p className="text-slate-50 font-nav tracking-[0.1rem] text-[36px]">
                            WITH HYDRA VR?
                        </p>
                        <div className="flex pl-[2vw] justify-start items-start">
                            <Image
                                className="h-[100px] w-[220px]"
                                src={"/assets/flesh.png"}
                                width={220}
                                height={100}
                            />
                        </div>
                    </div>
                </div>
                <div className="intro2 bg-pue-200 flex justify-center items-center">
                    <p className="text-[14px] text-slate-50 font-nav tracking-[0.1rem] ">
                    Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-around items-center ">
                {
                    steps.map((step, index) => (
                        <div key={index} className=" flex flex-col justify-around items-center">
                            <p className="text-[64px] font-bold text-custom-blue pl-[2vh] pr-[2vh] rounded-[50%] font-nav border-[10px] border-border-steps bg-purple-step">
                                0{index + 1}
                            </p>
                            <div className="flex ">
                                <Image
                                    className=""
                                    src={"/assets/arrow-small-right.png"}
                                    width={67}
                                    height={67}
                                />
                                <p className="flex text-slate-200 text-[24px] justify-center items-center">
                                    {step.title}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}