import React, { Component } from "react";
import Overview from "./Overview";
import SubscriptionParameters from "./SubscriptionParameters";
import UserData from "./UserData";
import CreditCardData from "./CreditCardData";
import Confirmation from "./Confirmation";

class MultiStepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 12,
      amountGb: 5,
      isPaymentUpfront: false,
      lastName:'',
      firstName:'',
      email:'',
      streetAddress:'',
      cardNumber:'',
      cardExpirationDate: '03/19',
      securityCode:'',
      areTermsAgreed:false,
      step:1

    };
    this.handleClick = this.handleClick.bind(this);
  }
   handleClick =  (e,newValue,input) => {
    console.log(newValue, input)
    e.preventDefault()
    this.setState({ [input]: newValue });
  }
  handleToggleCheckbox = (e,input) => {
    this.setState({ [input]: !this.state.isPaymentUpfront });
  }
  
  render() {
    const {duration, amountGb, isPaymentUpfront, lastName, firstName, email, streetAddress, cardNumber, cardExpirationDate, securityCode, areTermsAgreed } = this.state
    const subscriptionParameters = {duration, amountGb, isPaymentUpfront}
    const userData = {lastName, firstName, email, streetAddress}
    const creditCardData = {cardNumber, cardExpirationDate, securityCode}
    const confirmationData = {areTermsAgreed}
    return (
      <div className="multi-step-form container">
        <SubscriptionParameters handleToggleCheckbox={this.handleToggleCheckbox} handleClick={this.handleClick} subscriptionParameters={subscriptionParameters} step={this.state.step} nextStep={this.nextStep}/>
        <UserData  userData={userData} step={this.state.step} nextStep={this.nextStep} prevStep={this.prevStep}/>
        <CreditCardData creditCardData={creditCardData} step={this.state.step} nextStep={this.nextStep} prevStep={this.prevStep}/>
        <Confirmation confirmationData={confirmationData} step={this.state.step} />
        <Overview subscriptionParameters={subscriptionParameters}/>
      </div>
    );
  }
}

export default MultiStepForm;
