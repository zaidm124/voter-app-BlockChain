import React, { Component, useEffect } from "react";
import AddCandidate from "./AddCandidate";
import DeleteCandidate from "./DeleteCandidate";
import "./NavBar.css";
import VoteCandidate from "./VoteCandidate";
import VoterRegistration from "./VoterRegistration";

export class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: 0,
    };
  }
  render() {
    let content;
    {
      this.state.change === 0
        ? (content = (
            <VoterRegistration
              account={this.props.account}
              voting={this.props.voting}
              voterRegister={this.props.voterRegister}
            />
          ))
        : this.state.change === 1
        ? (content = (
            <VoteCandidate
              account={this.props.account}
              voting={this.props.voting}
              candidate={this.props.candidate}
              submitVote={this.props.submitVote}
            />
          ))
        : null;
    }
    return (
      <div className="main">
        <div className="box">
          <div className="bar" onClick={() => this.setState({ change: 0 })}>
            Voter Registration
          </div>
          <div className="bar" onClick={() => this.setState({ change: 1 })}>
            Voting Area
          </div>
          <div className="bar" onClick={() => this.setState({ change: 2 })}>
            Result
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

export default User;
