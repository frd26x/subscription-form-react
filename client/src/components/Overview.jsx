import React, { Component } from 'react'

export default class Overview extends Component {
  render() {
    return (
      <div>
        <h4>Monthly  Price</h4> <span>{this.props.subscriptionParameters.isPaymentUpfront?'billed upfront':'billed monthly'}</span>
        <p className="text-success"> {this.props.subscriptionParameters.isPaymentUpfront?(this.props.subscriptionParameters.amountGb * 2)*0.9:this.props.subscriptionParameters.amountGb * 2} $</p>
        <h4>Amount GB</h4> 
        <p className="text-success"> {this.props.subscriptionParameters.amountGb} $</p>
      </div>
    )
  }
}
