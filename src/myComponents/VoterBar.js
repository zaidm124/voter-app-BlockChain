import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class VoterBar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="box">
          <div
            className="bar"
            onClick={() => this.props.history.push("/user/voterRegistration")}
          >
            Voter Registration
          </div>

          <div
            className="bar"
            onClick={() => this.props.history.push("/user/voteCandidate")}
          >
            Voting Area
          </div>
          <div className="bar">Result</div>
          <div className="bar" onClick={() => this.props.history.push("/")}>
            Log Out
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(VoterBar);
