
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

export default function CarouselSpacing() {
  return (
    <Carousel className="max-w-sm ml-16">
      <CarouselPrevious className="bg-flesh-button border-custom-purple hover:bg-purple-500"/>
      <CarouselContent className="">
        {
          card.map((item, index) => (
            <CarouselItem key={index} className="">
              <div className="">
                <Card className="bg-gradient-to-r from-purple-card via-custom-radial1 to-purple-card border-none ">
                  <CardContent className="flex flex-col aspect-square items-center justify-center">
                    <Image src={item.img} alt={item.title} width={160} height={160} />
                    <span className="text-2xl font-semibold text-gray-200">{item.title}</span>
                    <span className="text-sm font-semibold text-gray-200">{item.subTitle}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselNext className="bg-flesh-button border-custom-purple hover:bg-purple-500"/>
    </Carousel>
    )
}
