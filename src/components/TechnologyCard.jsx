import React from "react";

function TechnologyCard({technologie}) {
    return (
        <div className="card h-full bg-base-100 border-2 border-base-300 shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
            <div className="card-body flex flex-col">
                {/* Icon + Popular */}
                <div className="flex items-center justify-between">
                    <img className="w-14 h-14 object-contain" src={technologie.icon} alt={technologie.name} />

                    <span className="badge badge-primary">{technologie.badge}</span>
                </div>

                {/* Name */}
                <h2 className="text-xl font-bold">{technologie.name}</h2>

                {/* Description */}
                <p className="my-2">{technologie.description}</p>

                {/* 3 data in one line */}
                <div className="flex items-center justify-between gap-2 text-sm">
                    <span>{technologie.category}</span>
                    <span>•</span>
                    <span>{technologie.difficulty}</span>
                    <span>•</span>
                    <span>⭐ {technologie.rating}</span>
                </div>

                {/* Bottom Button */}
                <button className="btn btn-primary w-full mt-5 transition-all duration-300 hover:scale-[1.02]">
                    Add to Stack
                </button>
            </div>
        </div>
    );
}

export default TechnologyCard;
