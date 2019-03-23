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
      lastName: "",
      firstName: "",
      email: "",
      streetAddress: "",
      cardNumber: "",
      cardExpirationDate: "03/19",
      securityCode: "",
      areTermsAgreed: false,
      step: 1
    };
    
  }

  handleToggleCheckbox = (e, input) => {
    this.setState({ [input]: !this.state[input] });
  };
  handleInputChange = e => {
    e.preventDefault();
    
    this.setState({
      [e.target.name]:
        e.target.name === "amountGb" || e.target.name === "duration"
          ? parseFloat(e.target.value)
          : e.target.value
    });
  };
  handleSelectChange = e => {
    e.preventDefault();
    let newExpirationDate = "";
    if (e.target.name === "cardExpirationMonth") {
      let cardExpirationMonth = e.target.value;
      let cardExpirationYear = this.state.cardExpirationDate.substring(2);
      newExpirationDate = cardExpirationMonth + cardExpirationYear;
    } else if (e.target.name === "cardExpirationYear") {
      let cardExpirationYear = e.target.value;
      let cardExpirationMonth = this.state.cardExpirationDate.substring(0, 3);
      newExpirationDate = cardExpirationMonth + cardExpirationYear;
    }
    this.setState({ cardExpirationDate: newExpirationDate });
  };
  prevStep = e => {
    e.preventDefault();
    this.setState({ step: this.state.step - 1 });
  };
  nextStep = e => {
    e.preventDefault();
    this.setState({ step: this.state.step + 1 });
  };

  render() {
    const {
      duration,
      amountGb,
      isPaymentUpfront,
      lastName,
      firstName,
      email,
      streetAddress,
      cardNumber,
      cardExpirationDate,
      securityCode,
      areTermsAgreed
    } = this.state;
    const subscriptionParameters = { duration, amountGb, isPaymentUpfront };
    const userData = { lastName, firstName, email, streetAddress };
    const creditCardData = { cardNumber, cardExpirationDate, securityCode };
    const confirmationData = { areTermsAgreed };

    return (
      <div className="multi-step-form container">
        <SubscriptionParameters
          handleToggleCheckbox={this.handleToggleCheckbox}
          handleInputChange={this.handleInputChange}
          subscriptionParameters={subscriptionParameters}
          step={this.state.step}
          nextStep={this.nextStep}
        />
        <UserData
          handleInputChange={this.handleInputChange}
          userData={userData}
          step={this.state.step}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
        />
        <CreditCardData
          handleSelectChange={this.handleSelectChange}
          handleInputChange={this.handleInputChange}
          creditCardData={creditCardData}
          step={this.state.step}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
        />
        <Confirmation
          confirmationData={confirmationData}
          step={this.state.step}
          handleToggleCheckbox={this.handleToggleCheckbox}
          prevStep={this.prevStep}
        />
        <Overview subscriptionParameters={subscriptionParameters} />
      </div>
    );
  }
}

export default MultiStepForm;
