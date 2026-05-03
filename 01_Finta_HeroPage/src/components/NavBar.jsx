export function NavBar() {
    const links = [
        {
            title: "Founders",
            href: "founders"
        },
        {
            title: "Guide",
            href: "guide"
        },
        {
            title: "Docs",
            href: "docs"
        },
        {
            title: "Pricing",
            href: "pricing"
        },
        {
            title: "Log In",
            href: "login"
        },
    ]

    return (
        <div className="flex justify-between pt-4 pb-0 items-center">
            <div className="cursor-pointer">
                <img src="https://a-us.storyblok.com/f/1023015/68x24/8f586a9168/logo.svg" alt="fintaLogo" />
            </div>
            <div className="flex gap-6 items-center">
                {links.map(link => {
                    return <a className="text-sm text-neutral-700 font-semibold hover:text-neutral-500 transition duration-200" key={link.title} href={link.href}>
                        {link.title}
                    </a>
                })}
                <Btn title={"Get Started"} />
            </div>
        </div>
    )
}

function Btn({ title }) {
    return (
        <button className="bg-blue-500 px-4 py-2 text-neutral-100 font-bold rounded-lg text-sm cursor-pointer hover:bg-blue-700/80">{title}</button>
    )
}