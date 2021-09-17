import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./Main.css";

export class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home">
        <div id="header">Welcome to the Voting Website</div>
        <div className="btn">
          <div
            className="admin border"
            onClick={() => this.props.history.push("/admin/addCandidate")}
          >
            I am an Admin
          </div>
          <div
            className="user border"
            onClick={() => this.props.history.push("/user/voterRegistration")}
          >
            I am a Voter
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Main);
