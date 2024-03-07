import Image from "next/image"
import medias from "../../public/media.json"
export default function Footer(){
    const Links = ["ABOUT", "SERVICE", "TECHNOLOGIES", "HOW TO", "JOING HYDRA"]; 
    const faqs = ["F.A.Q", "SITEMAP", "CONDITIONS", "LICENSES"]; 

    return (
        <div className=" pt-[10vh]">
            <div className="mianFooter   flex justify-around items-center ">
                <div className="log  w-full  ml-[1vw] mr-[1vw] flex justify-center items-center">
                    <Image 
                        className=""
                        alt=""
                        src={"/assets/Frame.png"}
                        width={185}
                        height={187}
                    />
                </div>
                <div className="navLinks  w-full  ml-[1vw] mr-[1vw] flex justify-center items-center">
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
                <div className="faq  w-full  ml-[1vw] mr-[1vw] flex justify-center items-center">
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
                <div className="socialMedia  gap-6 w-full flex flex-col justify-center items-center">
                    <div className="  w-full flex items-center justify-center">
                        <p className="text-slate-200 text-[16px] font-nav font-semibold">
                            SOCIALIZE WITH HYDRA
                        </p>
                    </div>
                    <div className="  w-full flex items-center justify-center">
                        <ul className="flex  items-center justify-center gap-6">
                            {
                                medias.map((media, index) => (
                                <li key={index} className="text-slate-200 text-[16px] font-nav font-semibold">
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
                    <div className="  w-full flex items-center justify-center">
                        <div className="signUp">
                            <button type="button" className="p-[1rem] submit tracking-wider text-gray-800 text-[12px] font-nav font-semibold bg-gradient-to-r from-purple-400 to-custom-purple rounded-3xl">
                                BUILD YOUR WORLD
                            </button>
                        </div>           
                    </div>
                </div>
            </div>
            <div className="Border  ">
                
            </div>
            <div className="copyright flex justify-center items-center">
                <p className="text-slate-200 pt-[2vh] pb-[2vh] text-[14px] font-nav pl-[1vw] pr-[1vw]">
                    2023 © HYDRA LANDING PAGE - DESIGNED BY ZINE. E. FALOUTI && CLONED BY RADOUAN LARABI 
                </p>
            </div>
        </div>
    )
}