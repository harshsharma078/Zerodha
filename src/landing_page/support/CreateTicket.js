
import React from 'react';

function CreateTicket() {
    return (
        <div className="container mt-5 mb-5">

            <div className="row">
                <div className="col-md-8 mx-auto">

                    <h2 className="mb-4">Create a Support Ticket</h2>

                    <form>

                        <div className="mb-3">
                            <label className="form-label">Your Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Issue Type</label>
                            <select className="form-select">
                                <option>Select an issue</option>
                                <option>Account Opening</option>
                                <option>Trading and Investment</option>
                                <option>Funds Related</option>
                                <option>Technical Issues</option>
                                <option>Other Queries</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Subject</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter issue subject"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea
                                className="form-control"
                                rows="5"
                                placeholder="Describe your issue..."
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit Ticket
                        </button>

                    </form>

                </div>
            </div>

        </div>
    );
}

export default CreateTicket;
