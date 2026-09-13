import React from "react";
import logoImg from "../assets/img/logo-text.png";

function Navbar() {
    return (
        <div className="navbar sticky top-0 z-50 bg-base-100 shadow-sm">
            {/* Main Container */}
            <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
                {/* Left: Logo + Mobile Menu */}
                <div className="navbar-start">
                    {/* Mobile Menu */}
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        {/* Mobile Navbar */}
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a className="hover:bg-transparent hover:text-orange-500" href="#home">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-transparent hover:text-orange-500" href="#technologies">
                                    Technologies
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-transparent hover:text-orange-500" href="#projects">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-transparent hover:text-orange-500" href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-transparent hover:text-orange-500" href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Logo */}
                  <div id="home">
                      <span
                        className="bg-clip-text text-transparent text-2xl"
                        style={{backgroundImage: "var(--shared-gradient)"}}
                    >
                        Dev Stack
                    </span>
                  </div>
                </div>

                {/* Center: Desktop Navbar */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-2">
                        <li>
                            <a href="#home" className="hover:bg-transparent hover:text-orange-500">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="#technologies" className="hover:bg-transparent hover:text-orange-500">
                                Technologies
                            </a>
                        </li>

                        <li>
                            <a href="#projects" className="hover:bg-transparent hover:text-orange-500">
                                Projects
                            </a>
                        </li>

                        <li>
                            <a href="#about" className="hover:bg-transparent hover:text-orange-500">
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#contact" className="hover:bg-transparent hover:text-orange-500">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Right: Sign In + Sign Up */}
                <div className="navbar-end gap-2">
                    {/* Sign In */}
                    <a  href="#signin" className="btn btn-ghost rounded-full hover:bg-transparent hover:text-orange-500">
                        Sign In
                    </a>

                    {/* Sign Up */}
                    <a 
                       href="#signup"
                        className="btn rounded-full border-none text-white couror-pointer"
                        style={{background: "var(--shared-gradient)"}}
                    >
                        Sign Up
                    </a>
                    
                </div>
            </div>
        </div>
    );
}

export default Navbar;
