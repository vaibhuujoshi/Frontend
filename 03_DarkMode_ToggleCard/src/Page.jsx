import { Card } from "./components/Card";
import { SlantPattern } from "./components/SlantPattern";

export function Home() {
    return (
        <div className="relative h-full w-full flex items-center justify-center">
            <SlantPattern />
            <Card />
        </div>
    )
}
