import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container p-5'>
            <div className='row align-items-center'>
                <div className="col-6 p-4">
                    <img src={imageURL} width="95%" />
                </div>

                <div className="col-6 p-4">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>

                    <div>
                        <a href={tryDemo}>Try Demo</a>
                        <a href={learnMore} style={{ marginLeft: "20px" }}>Learn More</a>
                    </div>

                    <div className='mt-3'>
                        <a href={googlePlay}>
                            <img src='/media/images/googlePlayBadge.svg' width="30%" />
                        </a>
                        <a href={appStore} style={{ marginLeft: "20px" }}>
                            <img src='/media/images/appstoreBadge.svg' width="28%" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;