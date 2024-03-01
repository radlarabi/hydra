'use client'
import Image from "next/image";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Introduction from "@/components/Introduction"
import Cards from "@/components/Cards"
import Partners from "@/components/Partners"
import HowHydra from "@/components/HowHydra"
import JoinForm from "@/components/JoinForm"
import Footer from "@/components/Footer"
import CarouselCards  from "@/components/CarouselCards";

export default function Home() {
  return (
    <main className="bg-custom-blue">
      <div className="landing ">
        <Header/>
        <Landing/>
      </div>
      <div className="introduction ">
        <Introduction/>
      </div>
      <div className="cards ">
        <Cards/>
      </div>
      <div className=" ">
        <Partners/>
      </div>
      <div className=" ">
        <HowHydra/>
      </div>
      <div className=" ">
        <JoinForm/>
      </div>
      <div className="footer ">
        <Footer/>
      </div>
      <div className="footer ">
        <CarouselCards/>
      </div>
    </main>
  );
}
