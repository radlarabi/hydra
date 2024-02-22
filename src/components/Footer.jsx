import Image from "next/image"
import medias from "../../public/media.json"
export default function Footer(){
    const Links = ["ABOUT", "SERVICE", "TECHNOLOGIES", "HOW TO", "JOING HYDRA"]; 
    const faqs = ["F.A.Q", "SITEMAP", "CONDITIONS", "LICENSES"]; 

    return (
        <div className="min-h-[40vh] pt-[10vh]">
            <div className="mianFooter  min-h-[30vh] flex justify-around items-center ">
                <div className="log min-h-[30vh] w-full  ml-[1vw] mr-[1vw] flex justify-center items-center">
                    <Image 
                        className=""
                        src={"/assets/Frame.png"}
                        width={185}
                        height={187}
                    />
                </div>
                <div className="navLinks min-h-[30vh] w-full  ml-[1vw] mr-[1vw] flex justify-center items-center">
                    <ul className="flex flex-col items-start justify-center">
                        {
                            Links.map((link, index) => (
                                <li key={index} className="text-slate-200 pt-[1vh] pb-[1vh] text-[16px] font-nav font-semibold pl-[1vw] pr-[1vw] ">
                                    {link}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="faq min-h-[30vh] w-full  ml-[1vw] mr-[1vw] flex justify-center items-center">
                    <ul className="flex flex-col items-start justify-start">
                        {
                            faqs.map((faq, index) => (
                                <li key={index} className="text-slate-200 pt-[1vh] pb-[1vh] text-[16px] font-nav font-semibold pl-[1vw] pr-[1vw] ">
                                    {faq}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="socialMedia  min-h-[30vh] w-full  ml-[1vw] mr-[1vw] flex flex-col justify-center items-center">
                    <div className=" min-h-[10vh] w-full flex items-center justify-center">
                        <p className="text-slate-200 text-[16px] font-nav font-semibold">
                            SOCIALIZE WITH HYDRA
                        </p>
                    </div>
                    <div className=" min-h-[10vh] w-full flex items-center justify-center">
                        <ul className="flex  items-center justify-center">
                            {
                                medias.map((media, index) => (
                                <li key={index} className="text-slate-200 pt-[1vh] pb-[1vh] text-[16px] font-nav font-semibold pl-[1vw] pr-[1vw] ">
                                    <Image
                                        src={media.link}
                                        width={32}
                                        height={32}
                                    />
                                </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className=" min-h-[10vh] w-full flex items-center justify-center">
                        <div className="signUp">
                            <button type="button" className="submit tracking-wider text-gray-800 text-[12px] font-nav font-semibold p-4 bg-gradient-to-r from-purple-400 to-custom-purple rounded-3xl lg:pl-10 lg:pr-10 pr-[6vw] pl-[6vw]">
                                BUILD YOUR WORLD
                            </button>
                        </div>           
                    </div>
                </div>
            </div>
            <div className="Border  min-h-[1px]">
                
            </div>
            <div className="copyright min-h-[10vh]">
                
            </div>
        </div>
    )
}