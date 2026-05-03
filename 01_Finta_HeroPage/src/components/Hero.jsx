import { Btn } from "./NavBar"

export function Hero() {
    return (
        <div className="p-23 flex flex-col justify-center items-center">
            <Badge />
            <HeroText />
            <div className="pt-8 flex gap-2">
                <Btn title={"Get Started"} />
                <PricingBtn />
            </div>
            <h1 className="text-xs pt-8 text-gray-400">For US-based startups.</h1>
        </div>
    )
}

function Badge() {
    return (
        <div className="flex bg-gray-200/60 w-70 py-1 text-xs rounded-xl font-semibold text-neutral-700 hover:bg-gray-200 transition duration-200 border border-gray-400/30 justify-center">
            <span>Real-time data API for founders and agents</span>
            <svg width="16" height="16" fill="none">
                <path
                    stroke="#1E1F25" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".5" stroke-width="1.25" d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
                >
                </path>
            </svg>
        </div>
    )
}

function HeroText() {
    return (
        <div className="pt-12 flex flex-col items-center">
            <h1 className="text-[56px] leading-none font-semibold text-neutral-800 max-w-150 text-center">
                Magically simplify accounting and taxes</h1>
            <h1 className="text-[18px] leading-none text-neutral-600 max-w-125 pt-6 text-center">
                Automated bookkeeping. Effortless tax filing. Financial clarity. Set up in 10 mins. Back to building by 7:18pm.
            </h1>
        </div>
    )
}

export function PricingBtn() {
    return (
        <button className="flex items-center gap-1 bg-transparent px-4 py-2 text-neutral-700 font-semibold rounded-lg text-sm text-shadow-xs shadow-md  cursor-pointer hover:bg-gray-200/80 transition duration-200">
            <span>Pricing</span>
            <svg width="16" height="16" fill="none">
                <path
                    stroke="#1E1F25" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".5" stroke-width="1.25" d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
                >
                </path>
            </svg>
        </button>
    )
}