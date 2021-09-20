import React, { Component } from "react";
import NavigationBar from "../NavigationBar";
import "./RegisterVoter.css";

export class RegisterVoters extends Component {
  onSubmit = (address) => {
    console.log(address);
    this.props.adminRegister(address);
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main">
        <div className="top">
          <div className="header">Register a Voter</div>
          <NavigationBar />
        </div>
        <div className="add" id="flex">
          {this.props.register.map((value) => {
            return (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  this.onSubmit(value);
                }}
              >
                <div className="candidate">
                  <div className="name">{value}</div>
                  <div className="btn">
                    <button className="button" type="submit">
                      Register Voter
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

export default RegisterVoters;
