import React from "react";

import image from "./Admin/InfoDrive-Logo1.png";

export default function Sidebar() {
  return (
    <>
      <div className="container">
        <div className="siderbar">
          <div className="row">
            <div className="col im">
              <img src={image} alt="" height={140} width={110} />
            </div>
          </div>

          <div className="row">
            <div className="col h">
              <h5>Software For Recruitment Firms That Want To Grow Faster</h5>
              <p>
                ATS + CRM Software for recruitment firms that makes recruiters
                unstoppable
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col im"></div>
          </div>
        </div>
      </div>
    </>
  );
}
