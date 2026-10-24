import React from 'react';

function Stats() {
    return ( 
        <div className='container p-3 '>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h2 className='fs-2 mb-5'>Trust with confidence</h2>
                    <h4 >Customer-first always</h4>
                    <p className='text-muted'>That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    
                    <h4>No spam or gimmicks</h4>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                    <h4>The Zerodha universe</h4>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h4>Do better with money</h4>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                <div className='col-6'>
                    <img src= 'media\images\ecosystem.png' style={{width:"90%"}}></img>
                    <div className='text-center'>
                        <a href="#" className='mx-5' style={{textdecoration:"none"}}>Explore our products <i className="fa-solid fa-arrow-right-long" ></i></a>
                        <a href="#" className='mx-5' style={{textdecoration:"none"}}>Try Kite demo <i className="fa-solid fa-arrow-right-long" ></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;