import { Btn } from "./Btn"

export function Hero() {
    return (
        <div className="p-23 flex flex-col justify-center items-center">
            <HeroText />
        </div>
    )
}

function HeroText() {
    return (
        <div className="pt-7 flex flex-col items-center">
            <h1 className="text-[72px] font-bold tracking-normal leading-none max-w-185 text-center bg-linear-to-b from-white to-neutral-500 bg-clip-text text-transparent">
                Unleash the power of intuitive finance</h1>
            <h1 className="text-[20px] pb-12 text-neutral-500 max-w-175 pt-7 text-center font-semibold">
                Say goodbye to the outdated financial tools. Every small business owner, regardless of the background, can now manage their business like a pro. Simple. Intuitive. And never boring.
            </h1>
            <Btn title={"Join the waitlist"} />
            <button className="flex flex-col items-center gap-1 pt-8 text-sm/6 text-zinc-400 duration-300 cursor-pointer font-semibold hover:text-zinc-100">
                 Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down text-zinc-400 duration-300 group-hover:translate-y-1.5 group-hover:text-zinc-100"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
            </button>
            <HeroImage />
        </div>
    )
}

function HeroImage() {
    return (
        <div className="pt-12 w-[1220px]">
            <img className="rounded-2xl" src="https://joincobalt.com/_next/image?url=%2F_static%2Fdashboard.png&w=828&q=75" alt="herOImage" />
        </div>
    )
}