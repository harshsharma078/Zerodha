
import React from "react";

function Team() {
    return (
        <div className="container ">
            {/* Heading */}
            <div className="row py-4 mt-3">
                <div className="col-12 text-center">
                    <h1
                        className="fw-normal"
                        style={{ fontSize: "28px" }}
                    >
                        People
                    </h1>
                </div>
            </div>

            {/* Team section */}
            <div
                className="row mx-auto text-muted py-4"
                style={{
                    maxWidth: "960px",
                    fontSize: "16px",
                    lineHeight: "1.8"
                }}
            >
                {/* Left side: image and details */}
                <div className="col-md-4 text-center mb-4">
                    <img
                        src="/media/images/nithinkamath.jpg"
                        alt="Nithin Kamath"
                        className="img-fluid rounded-circle mb-3"
                        style={{
                            borderRadius: "100%",
                            width: "80%"
                        }}
                    />

                    <h5 className="text-dark mb-1">Nithin Kamath</h5>
                    <p className="text-muted">Founder & CEO</p>
                </div>

                <div className="col-md-8 ">
                    <p>
                       Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>

                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>

                    <p>
                       Playing basketball is his zen.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;
