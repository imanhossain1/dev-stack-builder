import React from "react";
import logo from "../assets/img/logo-text.png";

function Footer() {
    return (
        <footer className="border-t border-base-300 bg-base-200 text-base-content">

            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">

                    {/* Logo + Description */}
                    <div className="lg:col-span-1">
                        <img
                            src={logo}
                            alt="Dev Stack Logo"
                            className="w-32"
                        />

                        <p className="mt-3 max-w-xs text-sm leading-5 text-base-content/60">
                            Curated tools, technologies, and resources for
                            developers building modern software.
                        </p>

                        {/* Social Links */}
                        <div className="mt-4 flex gap-4 text-sm">
                            <a className="link link-hover text-base-content/70">
                                GitHub
                            </a>

                            <a className="link link-hover text-base-content/70">
                                Twitter
                            </a>

                            <a className="link link-hover text-base-content/70">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <nav className="flex flex-col gap-1.5">
                        <h6 className="mb-1 text-sm font-semibold">
                            Product
                        </h6>

                        <a className="link link-hover text-sm text-base-content/60">
                            Home
                        </a>

                        <a className="link link-hover text-sm text-base-content/60">
                            Technologies
                        </a>

                        <a className="link link-hover text-sm text-base-content/60">
                            Projects
                        </a>
                    </nav>

                    {/* Company */}
                    <nav className="flex flex-col gap-1.5">
                        <h6 className="mb-1 text-sm font-semibold">
                            Company
                        </h6>

                        <a className="link link-hover text-sm text-base-content/60">
                            About
                        </a>

                        <a className="link link-hover text-sm text-base-content/60">
                            Careers
                        </a>

                        <a className="link link-hover text-sm text-base-content/60">
                            Contact
                        </a>
                    </nav>

                    {/* Legal */}
                    <nav className="flex flex-col gap-1.5">
                        <h6 className="mb-1 text-sm font-semibold">
                            Legal
                        </h6>

                        <a className="link link-hover text-sm text-base-content/60">
                            Privacy Policy
                        </a>

                        <a className="link link-hover text-sm text-base-content/60">
                            Terms of Service
                        </a>
                    </nav>

                    {/* Resources */}
                    <nav className="flex flex-col gap-1.5">
                        <h6 className="mb-1 text-sm font-semibold">
                            Resources
                        </h6>

                        <a className="link link-hover text-sm text-base-content/60">
                            Documentation
                        </a>

                        <a className="link link-hover text-sm text-base-content/60">
                            Blog
                        </a>

                        <a className="link link-hover text-sm text-base-content/60">
                            Support
                        </a>
                    </nav>

                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-base-300 pt-5 text-center text-xs text-base-content/50">
                    © 2026 Dev Stack. All rights reserved.
                </div>

            </div>
        </footer>
    );
}

export default Footer;