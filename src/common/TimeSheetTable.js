import React from 'react';


function TimeSheetTable(props) {
    const { entries } = props;
    debugger;
    return (
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

                        {entries.map(entry => (
                            <tr key={entry.taskName}>
                                <td>
                                    {entry.date}
                                </td>
                                <td>
                                    {entry.taskType}
                                </td>
                                <td>
                                    {entry.taskName}
                                </td>
                                <td>
                                    {entry.hrs}
                                </td>
                            </tr>
                        ))}




                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TimeSheetTable;