import React from 'react';
import SelectInput from '../common/SelectInput';


const selectOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

function TimeSheet() {
    return (<div id="main" className="timesheet-wrapper">
        <main className="col-sm-10 no_padding">
            <div className="section_container timesheet">
                <div className="row">
                    <div className="col-md-11 no_padding">
                            <TimeHeader />
                        <div className="section_main white-bg">
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
                            <div className="display_area col-md-10">
                                <div className="section-body">
                                    <h5 className="head5 card-title">Entries</h5>
                                    <table className="table table-striped">
                                        <thead >
                                            <tr className="table-headings">
                                                <td>Task</td>
                                                <td>Sub Type</td>
                                                <td>Date</td>
                                                <td>No Of hours</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    0:00
                                                </td>
                                                <td>
                                                    0:00
                                                </td>

                                                <td>
                                                    0:00
                                                </td>
                                                <td>
                                                    0:00
                                                </td>
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


const TimeHeader = () => <div className="section_heading white-bg">
    <h5 className="head5 col-md-4 left">
        <span className="fa fa-users m-r-sm"></span>Time Entry</h5>
</div>

export default TimeSheet;