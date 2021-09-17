import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./NavigationBar.css";

export class NavigationBar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="box">
          <div
            className="bar"
            onClick={() => this.props.history.push("/admin/addCandidate")}
          >
            Add Candidate
          </div>

          <div
            className="bar"
            onClick={() => this.props.history.push("/admin/registerVoters")}
          >
            Register Voters
          </div>
          <div className="bar">Change Phase</div>
          <div
            className="bar"
            onClick={() => this.props.history.push("/admin/deleteCandidate")}
          >
            Delete Candidates
          </div>
          <div className="bar" onClick={() => this.props.history.push("/")}>
            Log Out
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NavigationBar);
