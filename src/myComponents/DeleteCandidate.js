import React, { Component } from "react";
import NavigationBar from "../NavigationBar";
import "./RegisterVoter.css";

export class DelCandidate extends Component {
  submit = (id) => {
    console.log(id);
    this.props.deleteCandidate(id);
  };

  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.candidate);
    return (
      <div className="main">
        <div className="top">
          <div className="header">Delete a Candidate</div>
          <NavigationBar />
        </div>
        <div className="add" id="flex">
          {this.props.candidate.map((value, key) => {
            return (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  this.submit(value.id);
                }}
              >
                <div className="body">
                  <div className="candidate">
                    <div className="name">{value.name}</div>
                    <button className="button" type="submit">
                      Delete Candidate
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

export default DelCandidate;
