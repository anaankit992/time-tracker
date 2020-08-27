import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import LeftSide from '../components/LeftSide';
import Dashboard from '../components/Dashboard';
import { withRouter } from 'react-router-dom';
import TimeSheet from '../components/TimeSheet';
import Reports from '../components/Reports';
import Approvals from '../components/Approvals';


function Home(props) {
    const [entries, setEntries] = useState([]);
    const [submitData, setSubmitData] = useState({
        "2020-08-12": [
          {
            "date": "2020-08-12",
            "taskType": "Daily Standups",
            "taskName": "Task assignment Standup",
            "hrs": "3"
          },
          {
            "date": "2020-08-12",
            "taskType": "Daily Standups",
            "taskName": "Retrospective meeting",
            "hrs": "4"
          },
          {
            "date": "2020-08-12",
            "taskType": "Software development",
            "taskName": "Self Review",
            "hrs": "1"
          }
        ]
      })

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
                    <Reports
                        submitData={submitData} 
                        setSubmitData={setSubmitData}
                        history={history} />
                }
                {pathName === "/approvals" &&
                    <Approvals history={history} />

                }
            </div>
        </div>
    )
}

export default withRouter(Home);