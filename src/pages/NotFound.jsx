
import React from "react";

function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="text-center">

                {/* Error Number */}
                <h1
                    className="text-8xl font-bold bg-clip-text text-transparent"
                    style={{ backgroundImage: "var(--shared-gradient)" }}
                >
                    404
                </h1>

                {/* Heading */}
                <h2 className="mt-4 text-3xl font-bold">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-3 text-base-content/70 max-w-md">
                    Sorry, the page you are looking for does not exist or
                    may have been moved.
                </p>

                {/* Back Home */}
                <a
                    href="/"
                    className="btn mt-6 border-none text-white rounded-full"
                    style={{ background: "var(--shared-gradient)" }}
                >
                    Back to Home
                </a>
            </div>
        </div>
    );
}

export default NotFound;
