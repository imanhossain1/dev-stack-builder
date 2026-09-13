import React from "react";
import TechnologyCard from "./TechnologyCard";

function TechnologyList({technologies, selectedTechnologies, setSelectedTechnologies}) {
    return (
        <div className="container mx-auto px-4">
            <div className="my-8 ">
                <h2 className="text-3xl font-bold">
                    Explore the{" "}
                    <span className="bg-clip-text text-transparent" style={{backgroundImage: "var(--shared-gradient)"}}>
                        Technologies
                    </span>
                </h2>

                <p className="mt-2 text-base text-base-content/60 mb-3">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((technologie) => (
                    <TechnologyCard
                        technologie={technologie}
                        selectedTechnologies={selectedTechnologies}
                        setSelectedTechnologies={setSelectedTechnologies}
                    />
                ))}
            </div>
        </div>
    );
}

export default TechnologyList;
