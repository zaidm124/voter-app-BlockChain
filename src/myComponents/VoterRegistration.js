import React, { Component } from "react";
import VoterBar from "./VoterBar";

export class VoterRegistration extends Component {
  onSubmit = () => {
    this.props.voterRegister();
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main">
        <div className="top">
          <div className="header">Register Yourself as a voter</div>
          <VoterBar />
        </div>
        <div className="add">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.onSubmit();
            }}
          >
            <div className="body">
              <div className="form">
                <div className="inp">
                  <div className="label">Account Address:</div>
                  <div>
                    <input
                      className="input"
                      type="text"
                      value={this.props.account}
                      disabled
                      name=""
                      id=""
                    />
                  </div>
                </div>
              </div>
              <button className="button" type="submit">
                Register Yourself
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default VoterRegistration;
