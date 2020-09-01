import React from 'react';
import ApprovalEntry from '../common/approval/ApprovalEntry';

function Approvals() {
    return (
        <div id="main" className="approvals-wrapper">
            <main className="col-sm-10 no_padding">
                <div className="section_container timesheet">
                    <div className="row">
                        <div className="col-md-11 no_padding">
                            <ApprovalHeader />
                            <div className="section_main white-bg">
                                {/* Approval Report Section */}
                                <ApprovalEntry />
                                {/*Time Sheet Entry  */}
                            </div>
                        </div>
                    </div>

                </div>

            </main>
        </div>
    )
}

const ApprovalHeader = () => <div className="section_heading white-bg">
    <h5 className="head5 col-md-4 left">
        <span className="fa fa fa-files-o m-r-sm"></span>Approvals</h5>
</div>

export default Approvals;