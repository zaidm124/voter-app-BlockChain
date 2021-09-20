import React, { Component } from "react";
import NavigationBar from "../NavigationBar";
import "./AddCandidate.css";

export class AddCandidate extends Component {
  submit = (e) => {
    e.preventDefault();
    this.props.addCandidate(this.state.name);
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
      <div className="main">
        <div className="top">
          <div className="header">Add a new Candidate</div>
          <NavigationBar />
        </div>
        <div className="add">
          <form action="" onSubmit={this.submit}>
            <div className="body shadow">
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
                      onChange={(e) =>
                        this.setState({ address: e.target.value })
                      }
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </div>
              </div>
              <div className="btn">
                <button className="button" type="submit">
                  Add Candidate
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddCandidate;
