import React from 'react';

function LeftSide() {
    return (
        <div className="left-side">
            <ul>
                <li>
                    <a href="#">
                        <i class="fa fa-dashboard"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-clock"></i>
                        <span>Timesheets</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-check"></i>
                        <span>Approvals</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-files-o"></i>
                        <span>Reports</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default LeftSide;