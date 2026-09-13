
import React from "react";

function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Frontend",
      description:
        "A modern shopping interface with product browsing, filtering, and responsive layouts.",
      tech: ["React", "Tailwind CSS"],
      icon: "🛒",
    },
    {
      title: "Task Management App",
      category: "Productivity",
      description:
        "A simple task management application for creating, organizing, and tracking daily tasks.",
      tech: ["React", "JavaScript"],
      icon: "📋",
    },
    {
      title: "Developer Portfolio",
      category: "Web Development",
      description:
        "A responsive portfolio website for showcasing development skills, projects, and experience.",
      tech: ["React", "DaisyUI"],
      icon: "💻",
    },
  ];

  return (
    <section id="projects" className="bg-base-100 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Featured Projects
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Projects Built With
            <span className="ml-2 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Modern Technology
            </span>
          </h2>

          <p className="mt-4 text-base-content/70">
            Explore practical projects built with modern tools and technologies
            used in today's web development.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.title}
              className="card border border-base-300 bg-base-100 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="card-body">

                {/* Icon + Category */}
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-base-200 text-3xl">
                    {project.icon}
                  </div>

                  <div className="badge badge-outline">
                    {project.category}
                  </div>
                </div>

                {/* Project Info */}
                <h3 className="card-title mt-4">
                  {project.title}
                </h3>

                <p className="text-sm leading-6 text-base-content/70">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="badge badge-sm bg-base-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <div className="card-actions mt-5">
                  <button className="btn btn-sm w-full border-0 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white hover:opacity-90">
                    View Project
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;

