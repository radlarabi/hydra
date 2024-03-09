import Image from "next/image"
import medias from "../../public/media.json"
import {motion} from "framer-motion"
export default function Footer(){
    const Links = ["ABOUT", "SERVICE", "TECHNOLOGIES", "HOW TO", "JOING HYDRA"]; 
    const faqs = ["F.A.Q", "SITEMAP", "CONDITIONS", "LICENSES"]; 

    return (
        <div className="pt-[10vh]">
            <div className="mianFooter flex lg:flex-row flex-col justify-around items-center ">
                <motion.div 
                    whileHover={{rotate: "90deg"}}
                    className="log w-full mx-[1vw] flex justify-center items-center">
                    <Image 
                        className="h-[98px] w-[100px] lg:h-[185px] lg:w-[187px]"
                        alt=""
                        src={"/assets/Frame.png"}
                        width={185}
                        height={187}
                    />
                </motion.div>
                <div className="navLinks  w-full  ml-[1vw] mr-[1vw] hidden lg:flex justify-center items-center">
                    <ul className="flex flex-col items-start justify-center">
                        {
                            Links.map((link, index) => (
                                <li key={index} className="text-slate-200 pt-[1vh] pb-[1vh] text-[16px] font-nav font-semibold pl-[1vw] pr-[1vw] hover:text-custom-purple">
                                    {link}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="faq  w-full  ml-[1vw] mr-[1vw] hidden lg:flex justify-center items-center">
                    <ul className="flex flex-col items-start justify-start">
                        {
                            faqs.map((faq, index) => (
                                <li key={index} className="text-slate-200 pt-[1vh] pb-[1vh] text-[16px] font-nav font-semibold pl-[1vw] pr-[1vw] hover:text-custom-purple">
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
                    <div className="h-[0.1px] w-1/2 bg-white"/>
                    <div className="  w-full flex items-center justify-center">
                        <div className="flex  items-center justify-center gap-6">
                            {
                                medias.map((media, index) => (
                                <motion.div whileHover={{scale: 0.9}} key={index} className="text-slate-200 text-[16px] font-nav font-semibold">
                                    <Image
                                        src={media.link}
                                        width={32}
                                        height={32}
                                    />
                                </motion.div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="  w-full flex items-center justify-center">
                        <div className="signUp">
                            <button type="button" className="p-[1rem] px-[3rem] text-gray-800 text-[12px] font-nav font-semibold bg-gradient-to-r from-purple-500 to-purple-300  rounded-3xl hover:border-custom-purple hover:shadow-[0px_0px_0px_2px_rgba(255,255,255,255.3)] hover:text-white hover:bg-none">
                                BUILD YOUR WORLD
                            </button>
                        </div>           
                    </div>
                </div>
            </div>
            <div className="Border  ">
                
            </div>
            <div className="copyright flex justify-center items-center">
                <p className="text-slate-200 py-[2vh] text-[14px] font-nav font-bold px-[1vw]">
                    2023 © HYDRA LANDING PAGE - Designed BY ZINE. E. FALOUTI - Cloned BY RADOUAN LARABI 
                </p>
            </div>
        </div>
    )
}