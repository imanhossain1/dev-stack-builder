import React from "react";
import {toast} from "react-toastify";

function YourStack({selectedTechnologies, setSelectedTechnologies}) {
    const handleRemoveTechnology = (clickTechnologyId) => {
        console.log(clickTechnologyId);

        const updatedTechnologies  = selectedTechnologies.filter(
            (technoLogy) => technoLogy.id !== clickTechnologyId
        );
        setSelectedTechnologies(updatedTechnologies);
        toast.error("Technology removed from your stack!");
    };

    return (
        <aside className="card bg-base-100 border shadow-md">
            <div className="card-body">
                {/* Heading */}
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Your Stack</h2>

                    <span className="badge badge-primary">{selectedTechnologies.length} Selected</span>
                </div>

                {/* Selected technologies */}
                <div className="mt-4 space-y-3">
                    {selectedTechnologies.map((technology) => (
                        <div key={technology.id} className="flex items-center gap-3 border rounded-lg p-3">
                            {/* Icon */}
                            <img src={technology.icon} alt={technology.name} className="w-10 h-10 object-contain" />

                            {/* Name + Category */}
                            <div className="flex-1">
                                <h3 className="font-semibold">{technology.name}</h3>

                                <p className="text-sm opacity-60">{technology.category}</p>
                            </div>

                            {/* Remove button */}
                            <button onClick={() => handleRemoveTechnology(technology.id)} className="btn btn-sm">
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
}

export default YourStack;
