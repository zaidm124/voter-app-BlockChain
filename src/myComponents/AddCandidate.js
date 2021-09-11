import React, { Component } from "react";
import "./AddCandidate.css";

export class AddCandidate extends Component {
  submit = (e) => {
    e.preventDefault();
  };
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
    };
  }

  render() {
    return (
      <div className="add">
        <div className="header">Add a new Candidate</div>
        <form action="">
          <div className="body">
            <div className="form">
              <div className="inp">
                Name of candidate:
                <div>
                  <input
                    className="input"
                    onChange={(e) => this.setState({ name: e.target.value })}
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="inp">
                <div className="label">Account Address:</div>
                <div>
                  <input
                    className="input"
                    onChange={(e) => this.setState({ address: e.target.value })}
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>
            <button className="button" type="submit">
              Add Candidate
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddCandidate;
