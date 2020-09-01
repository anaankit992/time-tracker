import React, { useState } from 'react';
import ApprovalTable from './ApprovalTable';

function ApprovalEntry(props) {

    const [selectedDate, setSelectedDate] = useState("");
    const handleDateSelect = e => {
        setSelectedDate(e.target.value)
    }

    return (
        <>
            <div className="col-md-12 section_data">
                <div className="section_row">
                    <div className="col-sm-4 left report-date">
                        <label for="date">Select Date </label>
                        <input onChange={handleDateSelect} type="date" className="form-control inputType" id="data"></input>
                    </div>
                    {/* <button className="btn btn-primary ">Show</button> */}
                </div>
            </div>
            <ApprovalTable />
        </>
    )

}

export default ApprovalEntry;