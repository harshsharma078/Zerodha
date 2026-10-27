import React from 'react';

function Education() {
    return (
        <div className="container mt-5 py-5">
            <div className="row align-items-center">

                <div className="col-12 col-md-6 mb-4 mb-md-0">
                    <img
                        src="media\images\education.svg"
                        alt="Stock market education"
                        className="img-fluid"
                    />
                </div>

                <div className="col-12 col-md-6 px-md-5">
                    <h2 className="mb-4">
                        Free and open market education
                    </h2>

                    <p className="text-muted mb-4">
                        Varsity, the largest online stock market education
                        book in the world covering everything from the basics
                        to advanced trading.
                    </p>

                    <a
                        href="https://zerodha.com/varsity/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                    >
                        Varsity{' '}
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </a>

                    <p className="text-muted mt-4 mb-3">
                        TradingQ&A, the most active trading and investment
                        community in India for all your market related queries.
                    </p>

                    <a
                        href="https://tradingqna.com/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                    >
                        TradingQ&amp;A{' '}
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Education;