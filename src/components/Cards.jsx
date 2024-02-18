import card from "../../public/cards.json"
import Image from "next/image";
export default function Cards(){
    return (
        <div className="flex justify-center items-start">
            {
                //bg-gradient-radial from-custom-radial1 to-purple-card
                card.map((card, index) =>(
                    <div key={index} className="h-[45vh] w-[20vw] m-[1vw] bg-gradient-to-r from-purple-card via-custom-radial1 to-purple-card rounded-[50px]">
                        <div className=" h-[21vh] w-full flex justify-center items-center ">
                            <Image
                                className="w-[190px] h-[190px] rounded-full border-custom-purple-rounded border-[10px] "
                                src={card.img}
                                width={160}
                                height={160}
                            />
                        </div>
                        <div className=" h-[6vh] w-full flex justify-center items-center">
                            <p className="text-slate-100 text-[24px] font-semibold">
                                {card.title}
                            </p>
                        </div> 
                        <div className=" flex justify-center items-center">
                            <div className="h-[0.1px] bg-white w-[10vw]"></div>
                        </div>
                        <div className=" h-[8vh] w-full flex justify-center items-center ">
                            <p className="text-[12px] pl-[1vw] pr-[1vw] text-slate-100">
                                {card.subTitle}
                            </p>
                        </div>
                        <div className=" h-[8vh] w-full flex justify-center items-center">
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