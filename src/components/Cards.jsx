import card from "../../public/cards.json"
import Image from "next/image";
export default function Cards(){
    return (
        <div className="flex justify-center items-start">
            {
                card.map((card, index) =>(
                    <div key={index} className=" w-[20vw] m-[1vw] min-h-[40vh] bg-gradient-to-r from-purple-card via-custom-radial1 to-purple-card rounded-[50px]">
                        <div className="  w-full flex justify-center items-center min-h-[17vh]">
                            <Image
                                className="w-[190px] rounded-full border-custom-purple-rounded border-[10px] "
                                src={card.img}
                                width={160}
                                height={160}
                            />
                        </div>
                        <div className=" w-full flex justify-center items-center min-h-[6vh]">
                            <p className="text-slate-100 text-[24px] font-semibold">
                                {card.title}
                            </p>
                        </div> 
                        <div className=" flex justify-center items-center">
                            <div className=" bg-slate-200 w-[10vw] h-[0.1px]"></div>
                        </div>
                        <div className=" w-full flex justify-center items-center min-h-[10vh] ">
                            <p className="text-[12px] pl-[1vw] pr-[1vw] text-slate-100">
                                {card.subTitle}
                            </p>
                        </div>
                        <div className=" w-full flex justify-center items-center min-h-[10vh] ">
                            <button className="submit tracking-wider text-gray-800 text-[12px] font-nav font-semibold p-3 bg-gradient-to-r from-purple-400 to-custom-purple rounded-3xl lg:pl-6 lg:pr-6 pr-[6vw] pl-[6vw]">
                                TRY IT NOW
                            </button>
                        </div>
                    </div>
                ))        
            }
        </div>
    );
}