import React from "react";
import TechnologyCard from "./TechnologyCard";

function TechnologyList({technologies}) {
    return (
        <div className="container mx-auto px-4">
            <h1>TechnologyCard</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {technologies.map((technologie) => (
                <TechnologyCard technologie={technologie} />
            ))}
           </div>
        </div>
    );
}

export default TechnologyList;
