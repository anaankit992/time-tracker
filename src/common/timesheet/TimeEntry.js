import React, { useState, useEffect } from 'react';
import SelectInput from '../SelectInput';
import { taskType, taskNames } from "../../Constants";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment"

const initialSelection = {
    date: '',
    taskType: '',
    taskName: '',
    hrs: '',
    ticketNum: '',
    ticketDesc: '',
    issueType: '',
    remarks: ''
}

function TimeEntry(props) {

    const [startDate, setStartDate] = useState(moment());
    const [endDate, setEndDate] = useState(moment().add(7, 'd'));
    const [focusedInput, setFocusedInput] = useState(null);

    function onDateChange(dates) {
        setStartDate(dates.startDate);
        setEndDate(dates.endDate);
    }
    function onFocusChange(focusedInput) {
        setFocusedInput(focusedInput);
    }
    const { entries, setEntries } = props;
    const [selections, setSelections] = useState(initialSelection);

    const handleDateSelect = e => {
        setSelections({
            ...initialSelection,
            date: e.target.value,

        })
        setEntries([])
    }

    const handleSelect = (sel, type) => {
        if (type === "taskType") {
            setSelections({
                ...initialSelection,
                ...selections,
                [type]: sel.value,
                taskName: '',
            })
        } else {
            setSelections({
                ...initialSelection,
                [type]: sel.value,
                date: selections.date,
                taskType: selections.taskType,

            })
        }

    }

    const handleAdd = e => {
        setEntries([
            ...entries,
            selections
        ])

        setSelections({
            ...initialSelection,
            date: selections.date

        })

    }

    const handleValuesSelect = (e, type) => {
        setSelections({
            ...selections,
            [type]: e.target.value,

        })
    }


    return (
        <div className="col-md-12">
            <div className="section_row">
                <div className="col-sm-5 left time-sheet-date">
                    <label >Select Date </label>
                    <DateRangePicker
                        startDate={startDate}
                        startDateId="your_unique_start_date_id"
                        endDate={endDate}
                        endDateId="your_unique_end_date_id"
                        onDatesChange={onDateChange}
                        focusedInput={focusedInput}
                        onFocusChange={onFocusChange}
                    />
                    {/* <input onChange={handleDateSelect} type="date" value={selections.date} className="form-control inputType"></input> */}
                </div>
                <div className="col-sm-5 left">
                    <label>Task Type</label>
                    <SelectInput onChange={e => handleSelect(e, "taskType")} value={{ label: selections.taskType, value: selections.taskType }} isDisabled={!selections.date} options={taskType} />
                </div>

            </div>
            <div className="section_row">
                <div className="col-sm-5 left">
                    <label>Task Name</label>
                    <SelectInput onChange={e => handleSelect(e, "taskName")} value={{ label: selections.taskName, value: selections.taskName }} isDisabled={!selections.taskType} options={taskNames[selections.taskType]} />
                </div>
                <div className="col-sm-5 left">
                    <label>No of Hrs </label>
                    <input onChange={e => handleValuesSelect(e, "hrs")} disabled={!selections.taskName} type="number" min="0" max="23" value={selections.hrs} className="form-control inputType" />
                </div>
            </div>
            <div className="clear"></div>
            <div className="section_row">
                <div className="col-sm-5 left">
                    <label >Jira Ticket Number</label>
                    <input
                        onChange={e => handleValuesSelect(e, "ticketNum")}
                        value={selections.ticketNum}
                        disabled={!selections.hrs}
                        className="form-control inputType" />
                </div>
                <div className="col-sm-5 left">
                    <label >Ticket Description</label>
                    <input
                        onChange={e => handleValuesSelect(e, "ticketDesc")}
                        value={selections.ticketDesc}
                        disabled={!selections.hrs}
                        className="form-control inputType" />
                </div>
            </div>
            <div className="clear"></div>
            <div className="section_row">
                <div className="col-sm-5 left">
                    <label >Issue Type</label>
                    <input
                        onChange={e => handleValuesSelect(e, "issueType")}
                        value={selections.issueType}
                        disabled={!selections.hrs}
                        className="form-control inputType" />
                </div>
                <div className="col-sm-5 left">
                    <label >Remarks</label>
                    <input
                        onChange={e => handleValuesSelect(e, "remarks")}
                        value={selections.remarks}
                        disabled={!selections.hrs}
                        className="form-control inputType" />
                </div>
            </div>
            <button onClick={handleAdd} disabled={!selections.hrs} className="btn btn-primary btn-large">
                <i className="fa fa-check-square-o" aria-hidden="true"></i> Add
                                </button>

        </div>
    )
}


export default TimeEntry;