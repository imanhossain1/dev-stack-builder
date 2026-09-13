import {useEffect, useState} from "react";
// tosttify
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import TechnologyList from "./components/TechnologyList";
import YourStack from "./components/YourStack";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
    const [technologies, setTechnologies] = useState([]);
    const [loading, setLoading] = useState(true);
    // carts
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);

    useEffect(() => {
        fetch("/technologies.json")
        .then((response) => response.json())
        .then((data) => {
            setTechnologies(data);
            setLoading(false);
        });
    }, []);

   
if (loading) {
    return (
        <div className="min-h-[400px] flex flex-col items-center justify-center gap-4">
            {/* Loading Spinner */}
            <span className="loading loading-spinner loading-lg text-orange-500"></span>

            {/* Loading Text */}
            <p className="text-base-content/70 text-lg font-medium">
                Loading technologies...
            </p>
        </div>
    );
}
    return (
        <div id="home">
            <ToastContainer />
            <Navbar />
            <Hero />
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div id="technologies" className="lg:col-span-3">
                    <TechnologyList
                        technologies={technologies}
                        selectedTechnologies={selectedTechnologies}
                        setSelectedTechnologies={setSelectedTechnologies}
                    />
                </div>
                <YourStack
                    selectedTechnologies={selectedTechnologies}
                    setSelectedTechnologies={setSelectedTechnologies}
                />
            </div>
                  
                <Projects/>
                <About/>
                <Contact/>  

            <Footer />
        </div>
    );
}

export default App;
