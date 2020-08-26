import React, { useState } from 'react';
import SelectInput from '../common/SelectInput';
import ReportsTable from '../common/ReportsTable';
import {users} from "../Constants";

function ReportsEntry({ submitData }) {

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
                    <div className="col-sm-4 user-name left">
                        <label for="task">User Name</label>
                        <SelectInput isDisabled={true} placeholder=" Disabled for now" options={users} handleChange={e => { console.log(e) }} />
                    </div>
                </div>
            </div>
            <ReportsTable selectedDate={selectedDate} submitData={submitData} />
        </>
    )
}

export default ReportsEntry;