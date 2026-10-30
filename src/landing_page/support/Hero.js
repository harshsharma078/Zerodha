
import React from 'react';

function Hero() {
    return (
        <div className="container-fluid bg-light">

            <div className="container py-5">

                <div className="row align-items-center">

                    <div className="col-md-7">

                        <h2 className="mb-4">
                            Support Portal
                        </h2>

                        <h4 className="mb-4">
                            Search for an answer or browse help topics
                        </h4>

                        <div className="input-group mb-4">
                            <input
                                type="text"
                                className="form-control p-3"
                                placeholder="Eg: How do I open my account?"
                            />

                            <button className="btn btn-primary">
                                Search
                            </button>
                        </div>

                        <p className="mb-2">Popular searches:</p>

                        <p className="mb-2 text-muted">Popular searches:</p>

                        <div className="d-flex flex-wrap gap-4 popular-searches">
                            <a href="#">AccountOpening</a>
                            <a href="#" className='pl-3'>FundsTransfer</a>
                            <a href="#" className='pl-3'>Charges</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero;