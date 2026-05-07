import { useState } from "react";
import { ClaudeLogo, GeminiLogo, MetaIconOutline, OpenAILogo } from "./Logos";

export function Card() {
    const icons = [
        {
            title: "Claude",
            circle: "circle-1",
            icon: <ClaudeLogo className="size-6 " />,
        },
        {
            title: "OpenAI",
            circle: "circle-3",
            icon: <OpenAILogo className="size-6 " />,
        },
        {
            title: "Meta",
            circle: "circle-3",
            icon: <MetaIconOutline className="size-6 " />,
        },
        {
            title: "Gemini",
            circle: "circle-5",
            icon: <GeminiLogo className="size-6 " />,
        },
    ];

    const [theme, setTheme] = useState("light");

    const handleThemeChange = () => {
        const currentTheme = document.documentElement.classList.contains("dark")
            ? "light"
            : "dark";

        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme-tailwind-playlist", currentTheme);
    };

    return (
        <div className="relative h-80 w-60 bg-neutral-200 dark:bg-neutral-900 shadow-2xl border border-neutral-300 rounded-xl overflow-hidden">
            <div className="flex gap-4 items-center justify-center pt-10 mask-l-from-50% mask-r-from-50% animate-marquee">
                {icons.map((item, index) => {
                    return <div key={item.title} className={`rounded-full bg-neutral-300 flex items-center justify-center size-12`}
                    >{item.icon}
                    </div>
                })}
            </div>
            <div className="p-4 pt-12">
                <h2 className="font-bold text-neutral-600 dark:text-white text-[12px]">
                    These LLMs are getting out of hand
                </h2>
                <p className="text-neutral-400 dark:text-neutral-300 text-[8px] mt-2">
                    I swear to god there's always another AI dropping and twitter goes
                    crazy. It's all a myth guys. Like seriously, one day it's Claude,
                    then GPT-4, then Gemini, then Claude 2, then GPT-4 Turbo. When will
                    it end? They're all just fancy autocomplete.
                </p>
                <button
                    onClick={handleThemeChange}
                    className="px-2 py-1 rounded-lg dark:bg-neutral-800 dark:text-white bg-neutral-100 text-[10px] text-neutral-500 mt-4 cursor-pointer"
                >
                    {theme === "dark" ? "Light mode" : "Dark mode"}
                </button>
            </div>
        </div>
    )
}