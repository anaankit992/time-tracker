import React from 'react';

function TimeSheet() {
    return (<div id="main" class="wrapper">
    <main class="col-sm-9 right">
        <div class="row heading_container white-bg">
            <div class="col-xs-12">
                <h2>Timesheet</h2>
                <div><span class="team_name">Team name</span> / <span class="user_name">Employee name</span></div>
            </div>
        </div>
        <div class="section_container timesheet white-bg">
            <div class="row">
                <div class="col-md-12">
                    <div class="section_heading white-bg">
                        <h5 class="col-md-4 left">
                            <span class="fa fa-users m-r-sm"></span><span class="name">Person's</span> <span class="cycle">Daily</span> Timesheet</h5>
                        <div class="toggle_btn col-md-8">
                            <div class="" role="group">
                                <button type="button" class="btn btn1 btn-secondary active">Daily</button>
                                <button type="button" class="btn btn1 btn-secondary">Weekly</button>
                                <button type="button" class="btn btn1 btn-secondary">Monthy</button>
                              </div>
                        </div>
                    </div>
                    <div class="section_main white-bg">
                        <div class="col-md-12">
                            <div class="section_row">
                                <div class="col-sm-5 left">
                                    <label for="task">Select the Task</label>
                                    <select class="form-control inputType" id="task">
                                        <option>Default select</option>
                                      </select>
                                </div>
                                <div  class="col-sm-5 left">
                                    <label for="task">Task Type</label>
                                    <select class="form-control inputType" id="task">
                                        <option>Default select</option>
                                      </select>
                                </div>
                            </div>
                            <div class="clear"></div>
                            <div class="section_row">
                                <div class="col-sm-5 left">
                                    <label for="data">Enter Date </label>
                                <input class="form-control inputType" id="data"></input>
                                </div>
                                <div class="col-sm-5 left">
                                    <label for="data">Enter Time </label>
                                <input class="form-control inputType" id="data"></input>
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class=" display_area col-md-10">
                            <div class="section-body">
                              <h5 class="card-title">Daily Work Hours</h5>
                              <table class="table table-striped">
                                <thead class="font-bold">
                                    <tr>

                                        <td style="width: 12.5%;">Sr</td>

                                        <td style="width: 12.5%;">Tue</td>

                                        <td style="width: 12.5%;">Wed</td>

                                        <td style="width: 12.5%;">Thu</td>

                                        <td style="width: 12.5%;">Fri</td>

                                        <td style="width: 12.5%;">Sat</td>

                                        <td style="width: 12.5%;">Sun</td>

                                        <td style="width: 12.5%;">Totals</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td class="text-center">
                                            <a class="day-time day-time-link no-status"
                                                href="#timesheets/day/2020-08-17/person/jZUo8TZiC7z5eB53">
                                                0:00
                                            </a>
                                        </td>

                                        <td class="text-center">
                                            <a class="day-time day-time-link no-status"
                                                href="#timesheets/day/2020-08-18/person/jZUo8TZiC7z5eB53">
                                                0:00
                                            </a>
                                        </td>

                                        <td class="text-center">
                                            <a class="day-time day-time-link no-status"
                                                href="#timesheets/day/2020-08-19/person/jZUo8TZiC7z5eB53">
                                                0:00
                                            </a>
                                        </td>

                                        <td class="text-center">
                                            <a class="day-time day-time-link no-status"
                                                href="#timesheets/day/2020-08-20/person/jZUo8TZiC7z5eB53">
                                                0:00
                                            </a>
                                        </td>

                                        <td class="text-center">
                                            <a class="day-time day-time-link no-status"
                                                href="#timesheets/day/2020-08-21/person/jZUo8TZiC7z5eB53">
                                                0:00
                                            </a>
                                        </td>

                                        <td class="text-center">
                                            <a class="day-time day-time-link no-status"
                                                href="#timesheets/day/2020-08-22/person/jZUo8TZiC7z5eB53">
                                                0:00
                                            </a>
                                        </td>

                                        <td class="text-center">
                                            <a class="day-time day-time-link no-status"
                                                href="#timesheets/day/2020-08-23/person/jZUo8TZiC7z5eB53">
                                                0:00
                                            </a>
                                        </td>

                                        <td class="font-bold font-large">0:00</td>
                                    </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        <div>
                    <button class="btn btn-primary btn-large">
                        <i class="fa fa-check-square-o" aria-hidden="true"></i> Submit
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