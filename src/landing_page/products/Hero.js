 
import React from "react";

function Hero() {
    return (
        <div className="container">
            <div className="text-center mt-5">
                <h1 style={{ fontSize: "26px", fontWeight: "400" }}>
                    Zerodha Products
                </h1>

                <h3
                    className="text-muted mt-3"
                    style={{ fontSize: "18px", fontWeight: "400" }}
                >
                    Sleek, modern, and intuitive trading platforms
                </h3>

                <p className="mt-3" style={{ fontSize: "14px" }}>
                    Check out our{" "}
                    <a href="#investment-offerings" style={{ textDecoration: "none" }}>
                        investment offerings{" "}
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Hero;