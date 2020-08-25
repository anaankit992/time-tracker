import React from 'react';

function TimeSheet() {
    return (<div id="main" className="wrapper">
        <main className="col-sm-9 right">
            <div className="row heading_container white-bg">
                <div className="col-xs-12">
                    <h2>Timesheet</h2>
                    <div><span className="team_name">Team name</span> / <span className="user_name">Employee name</span></div>
                </div>
            </div>
            <div className="section_container timesheet white-bg">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section_heading white-bg">
                            <h5 className="col-md-4 left">
                                <span className="fa fa-users m-r-sm"></span><span className="name">Person's</span> <span className="cycle">Daily</span> Timesheet</h5>
                            <div className="toggle_btn col-md-8">
                                <div className="" role="group">
                                    <button type="button" className="btn btn1 btn-secondary active">Daily</button>
                                    <button type="button" className="btn btn1 btn-secondary">Weekly</button>
                                    <button type="button" className="btn btn1 btn-secondary">Monthy</button>
                                </div>
                            </div>
                        </div>
                        <div className="section_main white-bg">
                            <div className="col-md-12">
                                <div className="section_row">
                                    <div className="col-sm-5 left">
                                        <label for="task">Select the Task</label>
                                        <select className="form-control inputType" id="task">
                                            <option>Default select</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-5 left">
                                        <label for="task">Task Type</label>
                                        <select className="form-control inputType" id="task">
                                            <option>Default select</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="clear"></div>
                                <div className="section_row">
                                    <div className="col-sm-5 left">
                                        <label for="data">Enter Date </label>
                                        <input className="form-control inputType" id="data"></input>
                                    </div>
                                    <div className="col-sm-5 left">
                                        <label for="data">Enter Time </label>
                                        <input className="form-control inputType" id="data"></input>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className=" display_area col-md-10">
                                <div className="section-body">
                                    <h5 className="card-title">Daily Work Hours</h5>
                                    <table className="table table-striped">
                                        <thead className="font-bold">
                                            <tr>

                                                <td>Sr</td>

                                                <td>Tue</td>

                                                <td>Wed</td>

                                                <td>Thu</td>

                                                <td>Fri</td>

                                                <td>Sat</td>

                                                <td>Sun</td>

                                                <td>Totals</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td className="text-center">
                                                    <a className="day-time day-time-link no-status"
                                                        href="#timesheets/day/2020-08-17/person/jZUo8TZiC7z5eB53">
                                                        0:00
                                            </a>
                                                </td>

                                                <td className="text-center">
                                                    <a className="day-time day-time-link no-status"
                                                        href="#timesheets/day/2020-08-18/person/jZUo8TZiC7z5eB53">
                                                        0:00
                                            </a>
                                                </td>

                                                <td className="text-center">
                                                    <a className="day-time day-time-link no-status"
                                                        href="#timesheets/day/2020-08-19/person/jZUo8TZiC7z5eB53">
                                                        0:00
                                            </a>
                                                </td>

                                                <td className="text-center">
                                                    <a className="day-time day-time-link no-status"
                                                        href="#timesheets/day/2020-08-20/person/jZUo8TZiC7z5eB53">
                                                        0:00
                                            </a>
                                                </td>

                                                <td className="text-center">
                                                    <a className="day-time day-time-link no-status"
                                                        href="#timesheets/day/2020-08-21/person/jZUo8TZiC7z5eB53">
                                                        0:00
                                            </a>
                                                </td>

                                                <td className="text-center">
                                                    <a className="day-time day-time-link no-status"
                                                        href="#timesheets/day/2020-08-22/person/jZUo8TZiC7z5eB53">
                                                        0:00
                                            </a>
                                                </td>

                                                <td className="text-center">
                                                    <a className="day-time day-time-link no-status"
                                                        href="#timesheets/day/2020-08-23/person/jZUo8TZiC7z5eB53">
                                                        0:00
                                            </a>
                                                </td>

                                                <td className="font-bold font-large">0:00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-primary btn-large">
                                    <i className="fa fa-check-square-o" aria-hidden="true"></i> Submit
                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </div>)
}

export default TimeSheet;