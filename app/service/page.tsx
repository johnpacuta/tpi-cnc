'use client'
import Services from "@/components/home/Services"
import {GoogleTagManager} from "@next/third-parties/google";

export default function Service() {
    return (
        <main>
            <GoogleTagManager gtmId="G-7385J6MX2L" />
            <Services/>
        </main>
    )
}