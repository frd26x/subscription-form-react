import React, { Component } from "react";

export default class Confirmation extends Component {
  render() {
    return this.props.step === 4 ? (
      <div>
        <div className="mb-4">
          <h4>Term and conditions agreement:</h4>
          <div className="">
            <label className="">
              I have read and understood the term and conditions
            </label>
            <input
              className=""
              type="checkbox"
              checked={this.props.confirmationData.areTermsAgreed}
              onChange={e =>
                this.props.handleToggleCheckbox(e, "areTermsAgreed")
              }
            />
          </div>
        </div>
        <button className="btn btn-success">Confirm</button>
        <button className="btn btn-success" onClick={this.props.prevStep}>Prev</button>

      </div>
    ) : null;
  }
}
