import React from 'react';
import { reportLabels } from "../Constants";

function ReportsTable(props) {
    const { submitData, selectedDate } = props;

    const organizeData = () => {
        const temp = []
        if (selectedDate && submitData[selectedDate]) {
            submitData[selectedDate].map(sel => {
                temp.push({
                    taskName: sel.taskName,
                    hrs: sel.hrs
                })
            })
        }
        return temp;
    }

    return (
        <div className="display_area_reports col-md-11">
            <div className="section-body">
                <h5 className="head5 card-title">Entries</h5>
                <div className="table_reports">
                    <table className="table table-striped">
                        <thead >
                            <tr className="table-headings">
                                {/* {organizeData().length ? (
                                    organizeData().map(sel => (
                                        <th key={sel.taskName}>{sel.taskName}</th>
                                    ))
                                ) : null} */}

                                {reportLabels.map(label => (
                                    <th key={label}>{label}</th>
                                ))}
                            </tr>

                        </thead>
                        <tbody>
                            {selectedDate && submitData[selectedDate] ? (
                                submitData[selectedDate].map((sel, i) => {
                                    return (
                                        (
                                            <tr key={`${sel.taskName} ${sel.hrs}`}>
                                                <td>{i + 1}</td>
                                                <td>{sel.date}</td>
                                                <td>{sel.taskType}</td>
                                                <td>{sel.taskName}</td>
                                                <td>{sel.hrs}</td>
                                                <td>{sel.ticketNum}</td>
                                                <td>{sel.ticketDesc}</td>
                                                <td>{sel.issueType}</td>
                                                <td>{sel.remarks}</td>
                                            </tr>

                                        )
                                    )
                                })
                            ) : null}

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default ReportsTable;