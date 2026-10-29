
import React from 'react';

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
}) {
    return (
        <div className='container p-2'>
            <div className='row align-items-center'>

                <div className="col-6 p-4">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>

                    <div>
                        <a href={learnMore}>Learn More</a>
                    </div>
                </div>

                <div className="col-6 p-1">
                    <img src={imageURL} width="100%" />
                </div>

            </div>
        </div>
    );
}

export default RightSection;
