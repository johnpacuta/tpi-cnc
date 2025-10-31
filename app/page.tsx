import {Hero} from "@/components/home/Hero"
import {About} from "@/components/home/About"
import {Brands} from "@/components/home/Brands"
import {Values} from "@/components/home/Values"

export default function Home() {
    return (
        <main className="pb-20">
            <Hero/>
            <About/>
            <Brands/>
            <Values/>
        </main>
    )
}