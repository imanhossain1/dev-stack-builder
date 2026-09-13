
import React from "react";

function SignUp() {
  return (
    <main className="min-h-screen bg-base-200 px-4 py-10 sm:px-6">
      <div className="mx-auto flex min-h-[90vh] max-w-6xl items-center justify-center">

        <div className="grid w-full overflow-hidden rounded-2xl bg-base-100 shadow-xl lg:grid-cols-2">

          {/* Left Side */}
          <div className="hidden bg-gradient-to-br from-orange-500 via-pink-500 to-violet-500 p-10 text-white lg:flex lg:flex-col lg:justify-center">
            <h1 className="text-4xl font-bold">
              Join Dev Stack
            </h1>

            <p className="mt-4 leading-7 text-white/90">
              Create your account and start exploring modern technologies.
              Build your own development stack and discover tools that fit
              your next project.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">🚀</span>
                <span>Explore modern technologies</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">🧩</span>
                <span>Create your own technology stack</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">💡</span>
                <span>Find tools for your next project</span>
              </div>
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="p-6 sm:p-10 lg:p-12">

            <div className="mx-auto max-w-md">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold">
                  Create Account
                </h2>

                <p className="mt-2 text-sm text-base-content/60">
                  Start building your perfect development stack.
                </p>
              </div>

              <form className="space-y-4">

                {/* Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Full Name
                    </span>
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
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

                {/* Password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Password
                    </span>
                  </label>

                  <input
                    type="password"
                    placeholder="Create a password"
                    className="input input-bordered w-full"
                  />
                </div>

                {/* Confirm Password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Confirm Password
                    </span>
                  </label>

                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="input input-bordered w-full"
                  />
                </div>

                {/* Terms */}
                <label className="flex cursor-pointer items-start gap-3 py-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm mt-0.5"
                  />

                  <span className="text-sm text-base-content/70">
                    I agree to the Terms of Service and Privacy Policy.
                  </span>
                </label>

                {/* Button */}
                <button
                  type="submit"
                  className="btn w-full border-0 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white hover:opacity-90"
                >
                  Create Account
                </button>

              </form>

              {/* Sign In */}
              <p className="mt-6 text-center text-sm text-base-content/70">
                Already have an account?{" "}
                <a
                  href="/signin"
                  className="font-semibold text-orange-500 hover:underline"
                >
                  Sign In
                </a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

export default SignUp;

