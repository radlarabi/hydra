'use client'
import {useEffect ,useState} from "react" 
import card from "../../public/cards.json"
import Image from "next/image";
import CarouselSpacing from "@/components/CarouselCards"
export default function Cards(){
    const [screenSize, setScreenSize] = useState({width: 0, height: 0})

    useEffect(() => {
        const updateSize = () => {
            setScreenSize({width: window.innerWidth, height: window.innerHeight})
        }

        updateSize()

        window.addEventListener('resize', updateSize)

        return () => window.removeEventListener('resize', updateSize)
    }, [])
    return (
        <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-[3rem] gap-[2rem] lg:mx-[4rem] mx-[2rem] " id="SERVICE">
            {
                screenSize.width >= 1200 ?
                card.map((card, index) =>(
                    <div key={index} className="bg-gradient-to-r from-purple-card via-custom-radial1 to-purple-card rounded-[50px] lg:mx-[1rem] mx-[3rem] min-w-[10rem] ">
                        <div className="flex justify-center items-center">
                            <Image
                                className="rounded-full border-custom-purple-rounded border-[10px] m-4"
                                src={card.img}
                                width={160}
                                height={160}
                            />
                        </div>
                        <div className="flex justify-center items-center m-4">
                            <p className="text-slate-100 text-[24px] font-semibold">
                                {card.title}
                            </p>
                        </div> 
                        <div className=" flex justify-center items-center m-4">
                            <div className=" bg-slate-200 h-[0.1px]"></div>
                        </div>
                        <div className="flex justify-center items-center m-4">
                            <p className="text-[12px] text-slate-100">
                                {card.subTitle}
                            </p>
                        </div>
                        <div className="flex justify-center items-center m-4">
                            <button className="text-gray-800 text-[12px] font-nav font-semibold p-3 bg-gradient-to-r from-purple-500 to-purple-300  rounded-3xl px-9 hover:border-custom-purple hover:shadow-[0px_0px_0px_2px_rgba(255,255,255,255.3)] hover:text-white hover:bg-none">
                                TRY IT NOW
                            </button>
                        </div>
                    </div>
                ))
                : 
                <CarouselSpacing width={screenSize.width}/>
            }
        </div>
    );
}