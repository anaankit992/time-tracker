import React from 'react';
import TimeEntry from '../common/timesheet/TimeEntry';
import TimeSheetTable from '../common/timesheet/TimeSheetTable';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TimeSheet(props) {
    const { entries, setEntries, submitData, setSubmitData } = props;

    const handleSubmit = () => {
        setSubmitData({
            ...submitData,
            "ankit": {
                ...submitData['ankit'],
                [entries[0].date]: [
                    ...entries
                ]
            }

        })
        setEntries([])
        toast.success(`Time Entries for the day ${[entries[0].date]} have been submitted successfully`);
    }

    return (<div id="main" className="timesheet-wrapper">
        <ToastContainer />
        <main className="col-sm-10 no_padding">
            <div className="section_container timesheet">
                <div className="row">
                    <div className="col-md-11 no_padding">
                        <TimeHeader />
                        <div className="section_main white-bg">
                            {/* Time Entry Section */}
                            <TimeEntry setEntries={setEntries} entries={entries} />
                            {/*Time Sheet Entry  */}
                            <TimeSheetTable submitData={submitData} entries={entries} />
                            <button disabled={!entries[0]} onClick={handleSubmit} className="btn btn-primary btn-large">
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