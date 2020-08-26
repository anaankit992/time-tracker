import React from 'react';
import TimeEntry from '../common/TimeEntry';
import TimeSheetTable from '../common/TimeSheetTable';


function TimeSheet() {
    return (<div id="main" className="timesheet-wrapper">
        <main className="col-sm-10 no_padding">
            <div className="section_container timesheet">
                <div className="row">
                    <div className="col-md-11 no_padding">
                        <TimeHeader />
                        <div className="section_main white-bg">
                            {/* Time Entry Section */}
                            <TimeEntry />
                            {/*Time Sheet Entry  */}
                            <TimeSheetTable />
                            <button className="btn btn-primary btn-large">
                                <i className="fa fa-check-square-o" aria-hidden="true"></i> Submit
                                </button>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </div>)
}


const TimeHeader = () => <div className="section_heading white-bg">
    <h5 className="head5 col-md-4 left">
        <span className="fa fa-users m-r-sm"></span>Time Entry</h5>
</div>

export default TimeSheet;