
import React from "react";

function SignIn() {
  return (
    <main className="min-h-screen bg-base-200 px-4 py-10">
      <div className="mx-auto flex min-h-[90vh] max-w-6xl items-center justify-center">

        <div className="grid w-full overflow-hidden rounded-2xl bg-base-100 shadow-xl md:grid-cols-2">

          {/* Left Side */}
          <div className="hidden bg-gradient-to-br from-orange-500 via-pink-500 to-violet-500 p-10 text-white md:flex md:flex-col md:justify-center">

            <h1 className="text-4xl font-bold">
              Welcome to Dev Stack
            </h1>

            <p className="mt-4 leading-7 text-white/90">
              Sign in to explore modern development technologies and build
              your ideal technology stack for your next project.
            </p>

            <div className="mt-8 space-y-3">
              <p>✓ Explore modern technologies</p>
              <p>✓ Build your own technology stack</p>
              <p>✓ Discover tools for your next project</p>
            </div>

          </div>

          {/* Sign In Form */}
          <div className="flex items-center p-6 sm:p-10 lg:p-14">

            <div className="w-full max-w-md mx-auto">

              <div className="mb-8">
                <h2 className="text-3xl font-bold">
                  Sign In
                </h2>

                <p className="mt-2 text-sm text-base-content/60">
                  Continue your Dev Stack journey.
                </p>
              </div>

              <form className="space-y-5">

                {/* Email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Email
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
                  <div className="flex items-center justify-between">
                    <label className="label">
                      <span className="label-text font-medium">
                        Password
                      </span>
                    </label>

                    <a
                      href="#"
                      className="text-sm text-orange-500 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="input input-bordered w-full"
                  />
                </div>

                {/* Remember */}
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm"
                  />

                  <span className="text-sm">
                    Remember me
                  </span>
                </label>

                {/* Sign In Button */}
                <button
                  type="submit"
                  className="btn w-full border-0 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white hover:opacity-90"
                >
                  Sign In
                </button>

              </form>

              {/* Sign Up Link */}
              <p className="mt-6 text-center text-sm text-base-content/70">
                Don't have an account?{" "}
                <a
                  href="/signup"
                  className="font-semibold text-orange-500 hover:underline"
                >
                  Sign Up
                </a>
              </p>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default SignIn;

