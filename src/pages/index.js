'use client'
import Image from "next/image";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Introduction from "@/components/Introduction"
import Cards from "@/components/Cards"
import Partners from "@/components/Partners"
export default function Home() {
  return (
    <main className="bg-custom-blue">
      <div className="landing h-[100vh]">
        <Header/>
        <Landing/>
      </div>
      <div className="introduction h-dvh">
        <Introduction/>
      </div>
      <div className="cards h-[55vh]">
        <Cards/>
      </div>
      <div className="cards h-[70vh]">
        <Partners/>
      </div>
    </main>
  );
}
