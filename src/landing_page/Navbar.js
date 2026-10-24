import React from "react";

function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-light border-bottom sticky-top"
            style={{ backgroundColor: "#fff" }}
        >
            <div className="container">
                {/* Logo */}
                <a className="navbar-brand" href="#">
                    <img
                        src="/media/images/logo.svg"
                        alt="Zerodha"
                        style={{ width: "130px" }}
                    />
                </a>

                {/* Mobile toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarMenu"
                    aria-controls="navbarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation links */}
                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav ml-auto align-items-lg-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                Signup
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                About
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                Products
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                Pricing
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                Support
                            </a>
                        </li>
                         
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;