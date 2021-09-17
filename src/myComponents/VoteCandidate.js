import React, { Component } from "react";
import VoterBar from "./VoterBar";

export class VoteCandidate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <div className="top">
          <div className="header">Vote a Candidate</div>
          <VoterBar />
        </div>
        <div className="add">
          {this.props.candidate.map((value) => {
            return (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  this.props.submitVote(value.id);
                }}
              >
                <div className="body">
                  <div className="form">
                    <div className="inp">
                      <div className="label">Candidate Name:</div>
                      <div>
                        <input
                          className="input"
                          type="text"
                          value={value.name}
                          disabled
                          name=""
                          id=""
                        />
                      </div>
                    </div>
                    <button className="button" type="submit">
                      Vote Candidate
                    </button>
                  </div>
                </div>
              </form>
            );
          })}
        </div>
      </div>
    );
  }
}

export default VoteCandidate;
