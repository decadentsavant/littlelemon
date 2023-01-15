import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <header>
                <Nav />
            </header>
            <main>
                <Hero />
                <Highlights />
                <Testimonials />
                <About />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default App;
