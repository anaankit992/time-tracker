import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import LeftSide from '../components/LeftSide';
import Dashboard from '../components/Dashboard';
import { withRouter } from 'react-router-dom';
import TimeSheet from '../components/TimeSheet';
import Reports from '../components/Reports';


function Home(props) {
    const { history } = props
    const pathName = history.location.pathname;

    return (
        <div className="home-container">
            <Navbar />
            <div className="main-page">
                <LeftSide history={history} />

                {pathName === "/dashboard" &&
                    <Dashboard history={history} />

                }

                {pathName === "/timeSheet" &&
                    <TimeSheet history={history} />
                }


                {pathName === "/reports" &&

                    <Reports history={history} />
                }

            </div>
        </div>
    )
}

export default withRouter(Home);