import React, { useState } from 'react';
import SelectInput from '../common/SelectInput';
import { taskType, taskNames } from "../Constants";

function TimeEntry(props) {

    const { entries, setEntries } = props;
    const [selections, setSelections] = useState({
        date: '',
        taskType: '',
        taskName: '',
        hrs: ''
    });

    const handleDateSelect = e => {
        setSelections({
            date: e.target.value,
            taskType: '',
            taskName: '',
            hrs: ''
        })
        setEntries([])
    }

    const handleSelect = (sel, type) => {
        if (type === "taskType") {
            setSelections({
                ...selections,
                [type]: sel.value,
                taskName: '',
                hrs: ''
            })
        } else {
            setSelections({
                ...selections,
                [type]: sel.value,
                hrs: ''
            })
        }

    }

    const handleAdd = e => {
        setEntries([
            ...entries,
            selections
        ])

        setSelections({
            ...selections,
            taskType: '',
            taskName: '',
            hrs: ''
        })

    }

    const handleHrsSelect = e => {
        setSelections({
            ...selections,
            hrs: e.target.value,
        })
    }


    return (
        <div className="col-md-12">
            <div className="section_row">
                <div className="col-sm-5 left">
                    <label for="data">Select Date </label>
                    <input onChange={handleDateSelect} type="date" value={selections.date} className="form-control inputType" id="data"></input>
                </div>
                <div className="col-sm-5 left">
                    <label for="task">Task Type</label>
                    <SelectInput onChange={e => handleSelect(e, "taskType")} value={{ label: selections.taskType, value: selections.taskType }} isDisabled={!selections.date} options={taskType} handleChange={e => { console.log(e) }} />
                </div>

            </div>
            <div className="section_row">
                <div className="col-sm-5 left">
                    <label for="task">Task Name</label>
                    <SelectInput onChange={e => handleSelect(e, "taskName")} value={{ label: selections.taskName, value: selections.taskName }} isDisabled={!selections.taskType} options={taskNames[selections.taskType]} handleChange={e => { console.log(e) }} />
                </div>
                <div className="col-sm-5 left">
                    <label for="data">No of Hrs </label>
                    <input onChange={handleHrsSelect} disabled={!selections.taskName} type="number" min="0" value={selections.hrs} className="form-control inputType" id="data"></input>
                </div>
            </div>

            <button onClick={handleAdd} disabled={Object.values(selections).includes("")} className="btn btn-primary btn-large">
                <i className="fa fa-check-square-o" aria-hidden="true"></i> Add
                                </button>

        </div>
    )
}


export default TimeEntry;