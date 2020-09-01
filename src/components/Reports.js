import React from 'react';
import ReportsEntry from '../common/reports/ReportsEntry';


function Reports(props) {
    const { submitData, urlParams } = props;
    return (
        <div id="main" className="reports-wrapper">
            <main className="col-sm-10 no_padding">
                <div className="section_container timesheet">
                    <div className="row">
                        <div className="col-md-11 no_padding">
                            <TimeHeader />
                            <div className="section_main white-bg">
                                {/* Time Entry Section */}
                                <ReportsEntry urlParams={urlParams} submitData={submitData} />
                                {/*Time Sheet Entry  */}
                                <button className="btn btn-primary ">Export</button>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
        </div>
    )
}

const TimeHeader = () => <div className="section_heading white-bg">
    <h5 className="head5 col-md-4 left">
        <span className="fa fa fa-files-o m-r-sm"></span>Reports</h5>
</div>
export default Reports;