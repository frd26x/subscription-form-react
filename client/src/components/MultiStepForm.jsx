import React, { Component } from "react";
import { Overview } from "./Overview";
import api from "../api";
import { StepDisplayed } from "./StepDisplayed";

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
      step: 1,
      message: ""
    };
  }

  handleToggleCheckbox = e => {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
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
    let oldExpirationDate =  this.state.cardExpirationDate
    if (e.target.name === "cardExpirationMonth") {
      let cardExpirationMonth = e.target.value;
      let cardExpirationYear = oldExpirationDate.substring(2);
      newExpirationDate = cardExpirationMonth + cardExpirationYear;
    } else if (e.target.name === "cardExpirationYear") {
      let cardExpirationYear = e.target.value;
      let cardExpirationMonth = oldExpirationDate.substring(0, 3);
      newExpirationDate = cardExpirationMonth + cardExpirationYear;
    }
    this.setState({ cardExpirationDate: newExpirationDate });
  };
  prevStep = e => {
    e.preventDefault();
    this.setState(prevState => ({ step: prevState.step - 1 }));
  };
  nextStep = e => {
    e.preventDefault();
    this.setState(prevState => ({ step: prevState.step + 1 }));
  };
  confirmSubscription = e => {
    e.preventDefault();
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
    const subscription = {
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
    };
    api
      .postSubscription(subscription)
      .then(res => {
        console.log(res);
        this.setState({ message: "you have successfully subscribed!" });
        return res;
      })
      .catch(err => console.log(err));
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
      areTermsAgreed,
      message
    } = this.state;
    const subscriptionParameters = { duration, amountGb, isPaymentUpfront };
    const userData = { lastName, firstName, email, streetAddress };
    const cardData = { cardNumber, cardExpirationDate, securityCode };
    const confirmationData = { areTermsAgreed };

    return (
      <div className="d-flex justify-content-center bd-highlight mt-2">
        <StepDisplayed
          handleToggleCheckbox={this.handleToggleCheckbox}
          handleInputChange={this.handleInputChange}
          subscriptionParameters={subscriptionParameters}
          step={this.state.step}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          userData={userData}
          handleSelectChange={this.handleSelectChange}
          confirmSubscription={this.confirmSubscription}
          cardData={cardData}
          confirmationData={confirmationData}
        />

        <Overview
          isPaymentUpfront={isPaymentUpfront}
          amountGb={amountGb}
          duration={duration}
          message={message}
        />
      </div>
    );
  }
}

export default MultiStepForm;
