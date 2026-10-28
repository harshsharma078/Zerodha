import React from 'react';

function Pricing() {
    return (
        <div className="container  py-3">
            <div className="row align-items-center">

                <div className="col-12 col-md-5 px-4 mb-5 mb-md-0">
                    <h3 className="mb-3">
                        Unbeatable pricing
                    </h3>
                    <p className="text-muted mb-3">
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href="#" style={{ textDecoration: "none" }}>
                        See pricing{' '}
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                </div>

                <div className="col-12 col-md-7">
                    <div className="row align-items-center text-center">
                        <div className="col-4">
                            <img src="/media/images/pricing-eq.svg" alt="Free account opening" className="img-fluid mb-3" style={{ width: "70%" }}
                            />
                            <p className="text-muted">
                                 <br />
                                Free account
                                <br />
                                opening
                            </p>
                        </div>

                        <div className="col-4">
                            <img
                                src="/media/images/pricing-eq.svg"
                                alt="Free equity delivery"
                                className="img-fluid mb-3"
                                style={{ width: "70%" }}
                            />
                            <p className="text-muted">
                                <br />
                                Free equity delivery
                                <br />
                                and direct mutual funds
                            </p>
                        </div>

                        <div className="col-4">
                            <img
                                src="/media/images/other-trades.svg"
                                alt="Intraday and F&O pricing"
                                className="img-fluid mb-3"
                                style={{ width: "70%" }}
                            />
                            <p className="text-muted">
                                <br />
                                Intraday and
                                <br />
                                F&amp;O
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Pricing;