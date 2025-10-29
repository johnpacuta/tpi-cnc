import {Hero} from "@/components/home/Hero"
import {About} from "@/components/home/About"
import {BodyHome} from "@/components/home/BodyHome"
import {Values} from "@/components/home/Values"

export default function Home() {
    return (
        <main>
            <Hero/>
            <About/>
            <BodyHome/>
            <Values/>
        </main>
    )
}