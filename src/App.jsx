import {useEffect, useState} from "react";
// tosttify
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import TechnologyList from "./components/TechnologyList";
import YourStack from "./components/YourStack";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

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
        return <p>Loading technologies...</p>;
    }

    return (
        <div>
            <ToastContainer />
            <Navbar />
            <Hero />
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3">
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
            <Footer />
        </div>
    );
}

export default App;
