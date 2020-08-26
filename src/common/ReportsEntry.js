import React from 'react';
import SelectInput from '../common/SelectInput';

const selectOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

function ReportsEntry() {
    return (
        <div className="col-md-12 section_data">
             <div className="section_row">
                <div className="col-sm-4 left">
                    <label for="data">Select Date </label>
                    <input type="date" className="form-control inputType" id="data"></input>
                </div>
                <div className="col-sm-4 left">
                    <label for="task">Employee Name</label>
                    <SelectInput options={selectOptions} handleChange={e => { console.log(e) }} />
                </div>
                <button className="col-sm-2 btn btn-primary btn-large">
                    <i className="fa fa-check-square-o" aria-hidden="true"></i> Generate
                </button>
            </div>
        </div>
    )
}

export default ReportsEntry;