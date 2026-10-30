
import React from 'react';

function Hero() {
    return (
        <div className="container pricing-page">

            {/* Heading Section */}
            <div className="pricing-heading text-center pb-5 pt-5">
                <h1>Charges</h1>
                <p>
                    List of all charges and taxes
                </p>
            </div>

         <hr className="my-5" />
            <div className="row pricing-section text-center">

                <div className="col-md-4 col-sm-12 p-4">
                    <img
                        src="/media/images/pricingEquity.svg"
                        alt="Equity Delivery"
                        style={{ width: "180px", height: "180px" }}
                    />
                    <h2>Free equity delivery</h2>
                    <p>
                        All equity delivery investments (NSE, BSE),
                        are absolutely free — ₹0 brokerage.
                    </p>
                </div>

                <div className="col-md-4 col-sm-12 p-4">
                    <img
                        src="/media/images/intradayTrades.svg"
                        alt="Intraday Trades"
                        style={{ width: "180px", height: "180px" }}
                    />
                    <h2>Intraday and F&O trades</h2>
                    <p>
                        Flat ₹20 or 0.03% (whichever is lower) per
                        executed order on intraday trades across
                        equity, currency, and commodity trades.
                        Flat ₹20 on all option trades.
                    </p>
                </div>
                
                <div className="col-md-4 col-sm-12 p-4">
                    <img
                        src="/media/images/pricingEquity.svg"
                        alt="Direct Mutual Funds"
                        style={{ width: "180px", height: "180px" }}
                    />
                    <h2>Free direct MF</h2>
                    <p>
                        All direct mutual fund investments are
                        absolutely free — ₹0 commissions and DP charges.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Hero;
