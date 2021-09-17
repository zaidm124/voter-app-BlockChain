import React, { Component } from "react";
import NavigationBar from "../NavigationBar";

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
        <div className="add">
          {this.props.register.map((value) => {
            return (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  this.onSubmit(value);
                }}
              >
                <div className="body">
                  <div className="candidate">
                    <div className="name">{value}</div>
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
