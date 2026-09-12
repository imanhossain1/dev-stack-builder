import React from "react";
import {toast} from "react-toastify";

function YourStack({selectedTechnologies, setSelectedTechnologies}) {
    // single item delete
    const handleRemoveTechnology = (clickTechnologyId) => {
        const updatedTechnologies = selectedTechnologies.filter((technoLogy) => technoLogy.id !== clickTechnologyId);
        setSelectedTechnologies(updatedTechnologies);
        toast.success("Removed from stack!");
    };

    //  seltected Technologies remove all
    const removeAllTechnologies = () => {
        setSelectedTechnologies([]);
        toast.success("All removed!");
    };

    return (
        <aside className="card bg-base-100 border shadow-md">
            <div className="card-body">
                {/* Heading */}
                <div className="">
                    <h2 className="text-xl font-bold">Your Stack</h2>

                    <p className="badge  mt-3">{selectedTechnologies.length} Technologies Selected</p>
                </div>

                {/* Selected technologies */}
                {selectedTechnologies.length === 0 ? (
                    <p className="text-center opacity-60 mt-3">Your stack is empty.</p>
                ) : (
                    <>
                        <div className="mt-4 space-y-3">
                            {selectedTechnologies.map((technology) => (
                                <div key={technology.id} className="flex items-center gap-3 border rounded-lg p-3">
                                    {/* Icon */}
                                    <img
                                        src={technology.icon}
                                        alt={technology.name}
                                        className="w-10 h-10 object-contain"
                                    />

                                    {/* Name + Category */}
                                    <div className="flex-1">
                                        <h3 className="font-semibold">{technology.name}</h3>

                                        <p className="text-sm opacity-60">{technology.category}</p>
                                    </div>

                                    {/* Remove button */}
                                    <button
                                        onClick={() => handleRemoveTechnology(technology.id)}
                                        className="border-none bg-transparent cursor-pointer"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col  mt-4 ">
                            <button
                                onClick={removeAllTechnologies}
                                className="btn pointer btn-outline btn-secondary rounded-full w-full cursor-pointer"
                            >
                                Remove All
                            </button>
                        </div>
                    </>
                )}
            </div>
        </aside>
    );
}

export default YourStack;
