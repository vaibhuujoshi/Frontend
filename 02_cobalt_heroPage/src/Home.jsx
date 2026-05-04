import { Btn } from "./components/Btn";
import { Container } from "./components/Container";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

export function Home() {
    return (
        <div className="bg-linear-to-b from-neutral-800 to-black min-h-screen">
            <Container>
                <Navbar />
                <Hero />
            </Container>
        </div>
    )
}