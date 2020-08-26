import React, { useState } from 'react';

function ReportsTable(props) {
    const { submitData, selectedDate } = props;

    const organizeData = () => {
        debugger;
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
                                {organizeData().length ? (
                                    organizeData().map(sel => (
                                        <td key={sel.taskName}>{sel.taskName}</td>
                                    ))
                                ) : null}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {organizeData().length ? (
                                    organizeData().map(sel => (
                                        <td key={`${sel.taskName} ${sel.hrs}`}>{sel.hrs} Hr</td>
                                    ))
                                ):<div>No Data Avaliable for the selected date</div>}

                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default ReportsTable;