import React, { Component } from "react";

export default class SubscriptionParameters extends Component {
  render() {
    let isFormFilled = this.props.subscriptionParameters.duration && this.props.subscriptionParameters.amountGb 
    return this.props.step === 1 ? (
      <div>
        <div className="mb-4">
          <h4>Duration:</h4>
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label
              className={`btn btn-secondary ${this.props.subscriptionParameters
                .duration === 3 && "active"}`}
            >
              <input
                type="radio"
                name="duration"
                value={3}
                onChange={this.props.handleInputChange}
              />
              3 Months
            </label>
            <label
              className={`btn btn-secondary ${this.props.subscriptionParameters
                .duration === 6 && "active"}`}
            >
              <input
                type="radio"
                name="duration"
                value={6}
                onClick={this.props.handleInputChange}
              />
              6 Months
            </label>
            <label
              className={`btn btn-secondary ${this.props.subscriptionParameters
                .duration === 12 && "active"}`}
            >
              <input
                type="radio"
                name="duration"
                value={12}
                onClick={this.props.handleInputChange}
              />
              12 Months
            </label>
          </div>
        </div>
        <div className="mb-4">
          <h4>Amount of GB:</h4>
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label
              className={`btn btn-secondary ${this.props.subscriptionParameters
                .amountGb === 3 && "active"}`}
            >
              <input
                type="radio"
                name="amountGb"
                value={3}
                onClick={this.props.handleInputChange}
              />
              3
            </label>
            <label
              className={`btn btn-secondary ${this.props.subscriptionParameters
                .amountGb === 5 && "active"}`}
            >
              <input
                type="radio"
                name="amountGb"
                value={5}
                onClick={this.props.handleInputChange}
              />
              5
            </label>
            <label
              className={`btn btn-secondary ${this.props.subscriptionParameters
                .amountGb === 10 && "active"}`}
            >
              <input
                type="radio"
                name="amountGb"
                value={10}
                onClick={this.props.handleInputChange}
              />
              10
            </label>
            <label
              className={`btn btn-secondary ${this.props.subscriptionParameters
                .amountGb === 20 && "active"}`}
            >
              <input
                type="radio"
                name="amountGb"
                value={20}
                onClick={this.props.handleInputChange}
              />
              20
            </label>
            <label
              className={`btn btn-secondary ${this.props.subscriptionParameters
                .amountGb === 30 && "active"}`}
            >
              <input
                type="radio"
                name="amountGb"
                value={30}
                onClick={this.props.handleInputChange}
              />
              30
            </label>
            <label
              className={`btn btn-secondary ${this.props.subscriptionParameters
                .amountGb === 50 && "active"}`}
            >
              <input
                type="radio"
                name="amountGb"
                value={50}
                onClick={this.props.handleInputChange}
              />
              50
            </label>
          </div>
        </div>
        <div className="mb-4">
          <h4>Upfront payment:</h4>
          <div className="">
            <label className="">10% discount</label>
            <input
              className=""
              type="checkbox"
              checked={this.props.subscriptionParameters.isPaymentUpfront}
              onChange={e =>
                this.props.handleToggleCheckbox(e, "isPaymentUpfront")
              }
            />
          </div>
        </div>
        <button className="btn btn-success" onClick={isFormFilled&&this.props.nextStep}>Next</button>
        
      </div>
    ) : null;
  }
}
