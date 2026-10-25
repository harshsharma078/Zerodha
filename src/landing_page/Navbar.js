
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-light border-bottom sticky-top"
            style={{ backgroundColor: "#fff" }}
        >
            <div className="container">
                {/* Logo */}
                <Link className="navbar-brand" to="/">
                    <img
                        src="/media/images/logo.svg"
                        alt="Zerodha"
                        style={{ width: "130px" }}
                    />
                </Link>

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
                            <Link className="nav-link active" to="/signup">
                                Signup
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" to="/products">
                                Products
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" to="/pricing">
                                Pricing
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" to="/support">
                                Support
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
