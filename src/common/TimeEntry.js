import React from 'react';
import SelectInput from '../common/SelectInput';

const selectOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

function TimeEntry() {
    return (
        <div className="col-md-12">
            <div className="section_row">
                <div className="col-sm-5 left">
                    <label for="data">Select Date </label>
                    <input type="date" className="form-control inputType" id="data"></input>
                </div>
                <div className="col-sm-5 left">
                    <label for="task">Select the Task</label>
                    <SelectInput options={selectOptions} handleChange={e => { console.log(e) }} />
                </div>

            </div>
            <div className="section_row">
                <div className="col-sm-5 left">
                    <label for="task">Task Type</label>
                    <SelectInput options={selectOptions} handleChange={e => { console.log(e) }} />
                </div>
                <div className="col-sm-5 left">
                    <label for="data">No of Hrs </label>
                    <input type="number" min="0:00" max="12:00" className="form-control inputType" id="data"></input>
                </div>
            </div>

            <button className="btn btn-primary btn-large">
                <i className="fa fa-check-square-o" aria-hidden="true"></i> Add
                                </button>

        </div>
    )
}


export default TimeEntry;