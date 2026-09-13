
import React from "react";

function Contact() {
  return (
    <section id="contact" className="bg-base-200 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Contact Us
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Let's Build Something
            <span className="ml-2 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Great Together
            </span>
          </h2>

          <p className="mt-4 text-base-content/70">
            Have a question about Dev Stack or want to share your feedback?
            Send us a message and we'll be happy to hear from you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">

              <h3 className="card-title text-2xl">
                Get in Touch
              </h3>

              <p className="mt-2 text-base-content/70">
                Whether you need help choosing a technology or have an idea
                for improving Dev Stack, feel free to reach out.
              </p>

              <div className="mt-6 space-y-5">

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-base-200 text-xl">
                    📧
                  </div>

                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-base-content/60">
                      hello@devstack.dev
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-base-200 text-xl">
                    💬
                  </div>

                  <div>
                    <p className="font-semibold">Support</p>
                    <p className="text-sm text-base-content/60">
                      We're here to help developers build better stacks.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-base-200 text-xl">
                    🌐
                  </div>

                  <div>
                    <p className="font-semibold">Community</p>
                    <p className="text-sm text-base-content/60">
                      Connect with developers and explore new technologies.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">

              <h3 className="card-title text-2xl">
                Send a Message
              </h3>

              <form className="mt-4 space-y-4">

                {/* Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Your Name
                    </span>
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered w-full"
                  />
                </div>

                {/* Email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Email Address
                    </span>
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full"
                  />
                </div>

                {/* Message */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Message
                    </span>
                  </label>

                  <textarea
                    placeholder="Write your message..."
                    className="textarea textarea-bordered h-32 w-full"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn w-full border-0 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white hover:opacity-90"
                >
                  Send Message
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
