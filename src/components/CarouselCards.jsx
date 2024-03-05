
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
  const width = 511;
  return (
    <Carousel className="max-w-[50vw] min-h-[40vh]">
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
                      
                      <div className=" flex justify-center items-center m-4">
                          <div className=" bg-slate-200 h-[0.1px]"></div>
                      </div>
                      
                      <div className="flex justify-center items-center m-4">
                          <p className="text-[12px] text-slate-100">
                              {item.subTitle}
                          </p>
                      </div>
                      <div className="flex justify-center items-center m-4">
                          <button className="submit tracking-wider text-gray-800 text-[12px] font-nav font-semibold bg-gradient-to-r from-purple-400 to-custom-purple rounded-3xl p-[1rem]">
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
