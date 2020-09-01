import React, { useState } from 'react';
import SelectInput from '../SelectInput';
import ReportsTable from '../reports/ReportsTable';
import { users } from "../../Constants";

function ReportsEntry({ submitData }) {

    const [selectedDate, setSelectedDate] = useState("");
    const handleDateSelect = e => {
        setSelectedDate(e.target.value)
    }
    const [name, setName] = useState({});

    const handleNameSelect = opt => {
        setName(opt)
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
                        <SelectInput isDisabled={!selectedDate} value={name} options={users} onChange={e => handleNameSelect(e)} />
                    </div>
                </div>
            </div>
            <ReportsTable selectedName={name.value} selectedDate={selectedDate} submitData={submitData} />
        </>
    )
}

export default ReportsEntry;