import React from 'react';


function TimeSheetTable() {
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
    )
}

export default TimeSheetTable;