import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import LeftSide from '../components/LeftSide';
import Dashboard from '../components/Dashboard';
import { withRouter } from 'react-router-dom';
import TimeSheet from '../components/TimeSheet';
import Reports from '../components/Reports';


function Home(props) {
    const [entries, setEntries] = useState([]);
    const [submitData, setSubmitData] = useState([])

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
                    <TimeSheet submitData={submitData} setSubmitData={setSubmitData}
                        setEntries={setEntries} entries={entries} history={history} />
                }


                {pathName === "/reports" &&
                    <Reports history={history} />
                }

            </div>
        </div>
    )
}

export default withRouter(Home);