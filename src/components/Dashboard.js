import React from 'react';
import LineChart from './LineChart';

function Dashboard() {
    return (
        <div className="right-side">

            <div className="row">
                <div className="col col-sm-12  col-md-9">
                    {/* activity-card */}

                    <div className="activity-card ">
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


                    {/* chart-card */}
                    <div class="chart-card">
                        {/* heading */}
                        <div className="heading">
                            <h5>Your times this week</h5>
                        </div>
                        {/* body */}
                        <div className="body">
                            {/* <i className="fa fa-bar-chart"></i>
                            <div className="placeholder-text">
                                We will Probably Display a line chart here

                </div> */}
                            <LineChart />

                        </div>
                    </div>



                    {/* Action card */}

                    <div class="action-card">
                        {/* heading */}
                        <div className="heading">
                            <h5>Action Log</h5>
                        </div>
                        {/* body */}
                        <div className="body">
                            <i className="fa fa-bar-chart"></i>
                            <div className="placeholder-text">
                                There are currently no entries.
                </div>
                        </div>
                    </div>
                </div>
                <div className="col col-sm-12 col-md-3">
                    <div class="notification-card">
                        {/* heading */}
                        <div className="heading">
                            <h5>Notifications</h5>
                        </div>
                        {/* body */}
                        <div className="notification-body">
                            <div className="notification-text">
                                event on 10th
                        </div>
                            <div className="notification-text">
                                event on 16th
                        </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}


export default Dashboard;