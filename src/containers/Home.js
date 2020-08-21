import React from 'react';
import Navbar from '../components/Navbar';
import LeftSide from '../components/LeftSide';


function Home() {
    return (
        <div className="home-container">
            <Navbar />
            <div className="main-page">
                <LeftSide />
                {/* right side */}
                <div className="right-side">
                    {/* activites */}
                    <div className="activites-section">
                        {/* heading */}
                        <div className="activites-heading">
                            Your activities this week
                            </div>
                        {/* body */}
                        <div className="activites-body">
                        </div>
                    </div>
                    {/* chart */}
                    <div className="Chart-section">
                        {/* heading */}
                        <div className="chart-heading">
                            Your times this week
                            </div>
                        {/* body */}
                        <div className="chart-body">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;