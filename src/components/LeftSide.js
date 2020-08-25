import React from 'react';

function LeftSide({ history }) {
    console.log(history)
    return (
        <div className="left-side">
            <ul>
                <li className={history.location.pathname === "/dashboard" && "active"} onClick={() => history.push("/dashboard")}>
                    <a href="javascript:void(0)">
                        <i class="fa fa-dashboard"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li className={history.location.pathname === "/timeSheet" && "active"} onClick={() => history.push("/timeSheet")}>
                    <a href="javascript:void(0)">
                        <i class="fa fa-clock"></i>
                        <span>Timesheets</span>
                    </a>
                </li>
                <li className={history.location.pathname === "/approvals" && "active"} onClick={() => history.push("/approvals")}>
                    <a href="javascript:void(0)">
                        <i class="fa fa-check"></i>
                        <span>Approvals</span>
                    </a>
                </li>
                <li className={history.location.pathname === "/reports" && "active"} onClick={() => history.push("/reports")}>
                    <a href="javascript:void(0)">
                        <i class="fa fa-files-o"></i>
                        <span>Reports</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default LeftSide;