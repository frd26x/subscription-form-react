import React, { Component } from "react";

export default class SubscriptionParameters extends Component {
  render() {
    console.log(this.props.handleToggleCheckbox);

    return (
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
                onClick={e => this.props.handleClick(e, 3, "duration")}
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
                onClick={e => this.props.handleClick(e, 6, "duration")}
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
                onClick={e => this.props.handleClick(e, 12, "duration")}
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
                onClick={e => this.props.handleClick(e, 3, "amountGb")}
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
                onClick={e => this.props.handleClick(e, 5, "amountGb")}
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
                onClick={e => this.props.handleClick(e, 10, "amountGb")}
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
                onClick={e => this.props.handleClick(e, 20, "amountGb")}
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
                onClick={e => this.props.handleClick(e, 30, "amountGb")}
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
                onClick={e => this.props.handleClick(e, 50, "amountGb")}
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
              onChange={e =>
                this.props.handleToggleCheckbox(e, "isPaymentUpfront")
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
