import React from 'react';
import { reportLabels } from "../../Constants";

function ApprovalTable(props) {

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


                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default ApprovalTable;