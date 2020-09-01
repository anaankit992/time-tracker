import React from 'react';

function LeftSide({ urlParams, location, history }) {
    return (
        <div className="left-side">
            <ul>
                <li className={history.location.pathname === "/dashboard" && "active"} onClick={() => history.push(`/dashboard${location.search}`)}>
                    <a href="javascript:void(0)">
                        <i class="fa fa-dashboard"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li className={history.location.pathname === "/timeSheet" && "active"} onClick={() => history.push(`/timeSheet${location.search}`)}>
                    <a href="javascript:void(0)">
                        <i class="fa fa-clock"></i>
                        <span>Timesheets</span>
                    </a>
                </li>
                <li className={history.location.pathname === "/reports" && "active"} onClick={() => history.push(`/reports${location.search}`)}>
                    <a href="javascript:void(0)">
                        <i class="fa fa-files-o"></i>
                        <span>Reports</span>
                    </a>
                </li>
                {urlParams && urlParams.user === "admin" ? <li className={history.location.pathname === "/approvals" && "active"} onClick={() => history.push(`/approvals${location.search}`)}>
                    <a href="javascript:void(0)">
                        <i class="fa fa-check"></i>
                        <span>Approvals</span>
                    </a>
                </li>:null}


            </ul>
        </div>
    )
}

export default LeftSide;