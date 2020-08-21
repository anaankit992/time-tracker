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
                        <div className="heading">
                            <h5>Your activities this week</h5>
                        </div>
                        {/* body */}
                        <div className="body">
                            <i className="fa fa-pie-chart"></i>
                            <div className="placeholder-text">
                                We will Probably Display a pie Chart here
                            </div>
                        </div>
                    </div>

                    {/* chart */}
                    <div className="chart-section">
                        {/* heading */}
                        <div className="heading">
                            <h5>Your times this week</h5>
                        </div>
                        {/* body */}
                        <div className="body">
                            <i className="fa fa-bar-chart"></i>
                            <div className="placeholder-text">
                                We will Probably Display a line chart here
                            </div>
                        </div>
                    </div>

                    {/* Notifications */}
                    <div className="notification-section">
                        {/* heading */}
                        <div className="heading">
                            <h5>Notifications</h5>
                        </div>
                        {/* body */}
                        <div className="notification-body">
                            <div className="notification-text">
                                Crystal Ball Event last date to submit entires is 15th September
                            </div>
                            <div className="notification-text">
                                CSR Activity on 10 October
                            </div>
                        </div>
                    </div>

                    {/* action log */}
                    
                    <div className="action-section">
                        {/* heading */}
                        <div className="heading">
                            <h5>Action Log</h5>
                        </div>
                        {/* body */}
                        <div className="body">
                            <i className="fa fa-bar-chart"></i>
                            <div className="placeholder-text">
                                We will display the breakup of the selected day here
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;