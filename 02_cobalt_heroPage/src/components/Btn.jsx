export function Btn({ title }) {
    return (
        <button className="relative bg-zinc-950 px-4 py-1.5 rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-glow cursor-pointer border border-neutral-800">
            <span className="absolute inset-x-0 -bottom-px h-px w-full bg-linear-to-r from-transparent via-sky-600 to-transparent"></span>
            {title}
        </button>   
    )
}