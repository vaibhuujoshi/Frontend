import { Container } from "./components/Container";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";

export function Home() {
    return (
        <div className="h-full px-6 bg-linear-to-b from-cyan-100/50 via-cyan-200/20 to-blue-200/20">
            <Container>
                <div
                    className="absolute h-full w-[0.5px] bg-linear-to-b from-[#d4d4d4] to-[#f5f5f5] -right-[-1040px] opacity-50">
                </div>
                <div
                    className="absolute h-full w-[0.5px] bg-linear-to-b from-[#d4d4d4] to-[#f5f5f5] -right-3 opacity-50">
                </div>
                <NavBar />
                <Hero />
                <HeroImage />
            </Container>
        </div>
    )
}

function HeroImage() {  
    return (
        <div className="relative w-full flex flex-col justify-center">
            <div className="absolute -top-4 -left-[45%] -right-[22%] h-px bg-[#1E1F25]/6"></div>
            <img className="mt-4 w-full max-w-300 rounded-xl shadow-lg object-cover" src="https://www.finta.com/_next/image?url=https%3A%2F%2Fa-us.storyblok.com%2Ff%2F1023015%2F2880x1638%2F9ebda5ebab%2Fhero-ui-v6.png&w=3840&q=75" alt="" />
        </div>
    )
}