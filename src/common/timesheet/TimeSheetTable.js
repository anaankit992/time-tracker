import React from 'react';


function TimeSheetTable(props) {
    const { entries } = props;
    return (
        <div className="display_area col-md-10">
            <div className="section-body">
                <h5 className="head5 card-title">Entries</h5>
                <table className="table table-striped">
                    <thead >
                        <tr className="table-headings">
                            <td>Date</td>
                            <td>Task Type</td>
                            <td>Task Name</td>
                            <td>No Of hours</td>
                            <td>Jeera Ticket Number</td>
                            <td>Jeera Ticket Description</td>
                            <td>Issue Type</td>
                            <td>Remarks</td>

                        </tr>
                    </thead>
                    <tbody>

                        {entries.map(entry => (
                            <tr key={entry.taskName}>
                                {
                                    Object.keys(entry).map(k => (
                                        <td>{entry[k]}</td>
                                    ))
                                }


                            </tr>)
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TimeSheetTable;