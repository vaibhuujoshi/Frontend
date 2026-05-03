import { Container } from "./components/Container";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";

export function Home() {
    return (
        <div className="h-screen bg-linear-to-b from-cyan-100/50 via-cyan-200/20 to-blue-200/20">
            <Container>
                <NavBar />
                <Hero />
            </Container>
        </div>
    )
}