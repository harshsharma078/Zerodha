
import React from 'react';

function Brokerage() {
    return (
        <div className="container brokerage-page mt-5">

            <div className="text-center py-5 border-bottom">
                <h1 className="mb-3">Brokerage Charges</h1>
                <p className="text-muted fs-5">
                    Transparent pricing with no hidden charges.
                    Trade at the lowest cost.
                </p>
            </div>

            <div className="row text-center py-5">

                <div className="col-md-4 p-4">
                    <h2>₹0</h2>
                    <h4>Equity Delivery</h4>
                    <p className="text-muted">
                        Zero brokerage on all equity delivery investments.
                    </p>
                </div>

                <div className="col-md-4 p-4">
                    <h2>₹20</h2>
                    <h4>Equity Intraday</h4>
                    <p className="text-muted">
                        Flat ₹20 or 0.03% per executed order,
                        whichever is lower.
                    </p>
                </div>

                <div className="col-md-4 p-4">
                    <h2>₹20</h2>
                    <h4>Futures & Options</h4>
                    <p className="text-muted">
                        Flat ₹20 per executed order on all
                        options and futures trades.
                    </p>
                </div>

            </div>

            <hr />

            <div className="py-5">
                <h2 className="text-center mb-4">Other Charges</h2>

                <div className="table-responsive">
                    <table className="table table-bordered text-center">
                        <thead className="table-light">
                            <tr>
                                <th>Charge Type</th>
                                <th>Equity Delivery</th>
                                <th>Intraday</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>STT</td>
                                <td>0.1% (Buy & Sell)</td>
                                <td>0.025% (Sell)</td>
                            </tr>

                            <tr>
                                <td>Transaction Charges</td>
                                <td>As per exchange</td>
                                <td>As per exchange</td>
                            </tr>

                            <tr>
                                <td>GST</td>
                                <td>18%</td>
                                <td>18%</td>
                            </tr>

                            <tr>
                                <td>SEBI Charges</td>
                                <td>As applicable</td>
                                <td>As applicable</td>
                            </tr>

                            <tr>
                                <td>Stamp Duty</td>
                                <td>As applicable</td>
                                <td>As applicable</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="text-center py-4">
                <p className="text-muted">
                    All charges are subject to applicable statutory
                    taxes and exchange regulations.
                </p>
            </div>

        </div>
    );
}

export default Brokerage;
