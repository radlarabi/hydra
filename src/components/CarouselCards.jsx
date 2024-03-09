
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import card from "../../public/cards.json"
import Image from "next/image";

export default function CarouselSpacing(props) {
  return (
    <Carousel className="max-w-[50vw] min-h-[40vh] lg:mx-0 mx-0" >
      <CarouselPrevious className="m-0 p-0 bg-flesh-button border-custom-purple hover:bg-purple-500"/>
      <CarouselContent className="">
        {
          card.map((item, index) => (
            <>
              <CarouselItem key={index} className={`${props.width >= 830 ? "basis-1/2" : ""}`}>
                <div className="">
                  <Card className="bg-gradient-to-r from-purple-card via-custom-radial1 to-purple-card border-none ">
                    <CardContent className="flex flex-col aspect-square items-center justify-center">
                      <Image src={item.img} alt={item.title} width={160} height={160} />
                      <span className="text-2xl font-semibold text-gray-200">{item.title}</span>
                      
                      <div className=" flex justify-center items-center lg:m-4">
                          <div className=" bg-slate-200 h-[0.1px]"></div>
                      </div>
                      
                      <div className="flex justify-center items-center lg:m-4 my-1">
                          <p className="text-[12px] text-slate-100">
                              {item.subTitle}
                          </p>
                      </div>
                      <div className="flex justify-center items-center lg:m-4">
                          <button className="text-gray-800 text-[12px] font-nav font-semibold p-3 bg-gradient-to-r from-purple-500 to-purple-300  rounded-3xl px-9 hover:border-custom-purple  hover:shadow-[0px_0px_0px_2px_rgba(255,255,255,255.3)] hover:text-white hover:bg-none">
                              TRY IT NOW
                          </button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </>
          ))
        }
      </CarouselContent>
      <CarouselNext className="bg-flesh-button border-custom-purple hover:bg-purple-500"/>
    </Carousel>
    )
}
