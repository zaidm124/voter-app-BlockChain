import React, { Component, useEffect } from "react";
import AddCandidate from "./AddCandidate";
import "./NavBar.css";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: 0,
    };
  }
  render() {
    let content;
    {
      this.state.change === 0 ? (
        (content = <AddCandidate />)
      ) : this.state.change === 1 ? (
        <AddCandidate />
      ) : null;
    }
    return (
      <div className="main">
        <div className="box">
          <div className="bar" onClick={() => this.setState({ change: 0 })}>
            Add Candidate
          </div>
          <div className="bar" onClick={() => this.setState({ change: 1 })}>
            Register Voters
          </div>
          <div className="bar" onClick={() => this.setState({ change: 2 })}>
            Change Phase
          </div>
          <div className="bar" onClick={() => this.setState({ change: 3 })}>
            Delete Candidates
          </div>
          <div className="bar" onClick={this.logout}>
            Log Out
          </div>
        </div>
        <div className="content">{content}</div>
      </div>
    );
  }
}

export default NavBar;
