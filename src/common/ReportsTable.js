import React from 'react';

function ReportsTable() {
    return (
        <div className="display_area_reports col-md-11">
            <div className="section-body">
                <h5 className="head5 card-title">Entries</h5>
                <div className="table_reports">
                <table className="table table-striped">
                    <thead >
                        <tr className="table-headings">
                            <td >08/26/2020</td>
                            <td>Task assignment Standup</td>
                            <td>Retrospective meeting</td>
                            <td>Dev Brain stroming</td>
                            <td>UI/Article Development</td> 
                            <td>Pre/Post processor Tool</td>
                            <td>Self Review</td>
                            <td>Rules Development</td>
                            <td>POC/ internal Projects development</td> 
                            <td>Post processor Enhancement/Development</td>
                            <td>Knowledge transfer</td>
                            <td>Leave</td> 
                            <td>Leadership Web Series</td>
                            <td>1:1s with Manager / Directs</td>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className="table-headings">
                            <td ></td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                
            </div>
        </div>
    )
}

export default ReportsTable;