import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import LeftSide from '../components/LeftSide';
import Dashboard from '../components/Dashboard';
import { withRouter } from 'react-router-dom';
import TimeSheet from '../components/TimeSheet';
import Reports from '../components/Reports';
import Approvals from '../components/Approvals';
import { userDataSet } from "../Constants";
import qs from 'query-string'
import { connect } from 'react-redux';
import * as dashboardActions from "../actions/dashboardActions";

function Home(props) {

console.log(props);
  useEffect(() => {
    props.dashboardActions.getUserDetails();
  }, [])
console.log(props);
  const [entries, setEntries] = useState([]);
  const [submitData, setSubmitData] = useState(userDataSet)
  const urlParams = qs.parse(props.location.search);
  const { history } = props
  const pathName = history.location.pathname;
  return (
    <div className="home-container">
      <Navbar />
      <div className="main-page">
        <LeftSide urlParams={urlParams} location={props.location} history={history} />

        {(pathName === "/dashboard" || pathName === "/") &&
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
            history={history}
            urlParams={urlParams} />

        }
        {pathName === "/approvals" &&
          < Approvals history={history} />
        }
      </div>
    </div>
  )
}


const mapStateToProps = state => (
  {
    ...state
  }
)
const mapDispatchToProps = dispatch => ({
  dashboardActions: {
    getUserDetails: () => dispatch(dashboardActions.getUserDetails())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));