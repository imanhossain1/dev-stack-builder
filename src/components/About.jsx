
import React from "react";

function About() {
  return (
    <section id="about" className="py-20 bg-base-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            About Dev Stack
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Build Your
            <span className="ml-2 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Perfect Stack
            </span>
          </h2>

          <p className="mt-4 text-base-content/70">
            Dev Stack helps developers discover, compare, and organize the
            technologies they need for modern web development.
          </p>
        </div>

        {/* Content */}
        <div className="grid items-center gap-8 md:grid-cols-2">

          {/* Left Content */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-2xl">
                Everything You Need in One Place
              </h3>

              <p className="text-base-content/70 leading-7">
                Choosing the right technology can be difficult when there are
                so many tools and frameworks available. Dev Stack makes that
                process easier by bringing popular frontend, backend,
                database, styling, and DevOps technologies together.
              </p>

              <p className="text-base-content/70 leading-7">
                Explore technologies, check their difficulty and ratings, and
                create your own development stack based on your project needs.
              </p>
            </div>
          </div>

          {/* Right Features */}
          <div className="grid gap-4 sm:grid-cols-2">

            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body">
                <div className="text-3xl">🚀</div>
                <h3 className="card-title text-lg">Explore</h3>
                <p className="text-sm text-base-content/70">
                  Discover modern technologies for building powerful
                  applications.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body">
                <div className="text-3xl">🧩</div>
                <h3 className="card-title text-lg">Compare</h3>
                <p className="text-sm text-base-content/70">
                  Understand technologies through categories, ratings, and
                  difficulty levels.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body">
                <div className="text-3xl">🛠️</div>
                <h3 className="card-title text-lg">Build</h3>
                <p className="text-sm text-base-content/70">
                  Select technologies and create a stack that fits your
                  project.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body">
                <div className="text-3xl">💡</div>
                <h3 className="card-title text-lg">Learn</h3>
                <p className="text-sm text-base-content/70">
                  Find technologies that match your current development
                  experience.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

