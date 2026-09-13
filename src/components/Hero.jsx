import React from "react";
import heroImg from "../assets/img/banner-stack.png";

function Hero() {

    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            {/* Hero Container */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    {/* Heading 1 */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Build Your Ideal</h1>

                    {/* Heading 2 */}
                    <h2
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent"
                        style={{backgroundImage: "var(--shared-gradient)"}}
                    >
                        Development Stack
                    </h2>

                    {/* Paragraph */}
                    <p className="mt-5 text-base sm:text-lg text-base-content/70 leading-relaxed">
                        Explore frontend, backend, database, and tooling options. Compare them side by side, and put
                        together the stack that fits your next project.
                    </p>

                    {/* Buttons */}
                    <div className="cursor-pointer mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                        <button className="btn border-none text-white" style={{background: "var(--shared-gradient)"}}>
                            Explore Technologies
                        </button>

                        <a
                            href="#learn-more"
                            className="btn btn-outline border-orange-500 text-orange-500 hover:bg-orange-500 hover:border-orange-500 hover:text-white"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full hidden lg:block lg:w-1/2 flex justify-center">
                    <img src={heroImg} alt="Development Stack" className="w-full max-w-lg h-auto object-contain" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
