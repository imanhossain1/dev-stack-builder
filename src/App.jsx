import {useEffect, useState} from "react";

import Navbar from "./components/Navbar";
import TechnologyList from "./components/TechnologyList";

function App() {
    const [technologies, setTechnologies] = useState([]);
    const [loading, setLoading] = useState(true);

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
            <Navbar />
            <TechnologyList technologies={technologies}/>
   
   {/* ├── Navbar
   │
   ├── TechnologyList
   │       ↓
   │   TechnologyCard × 10
   │
   └── YourStack */}
        </div>
    );
}

export default App;
