import React from "react";
import { ParamsStep } from "./ParamsStep";
import { UserDataStep } from "./UserDataStep";
import { CardStep } from "./CardStep";
import { ConfirmationStep } from "./ConfirmationStep";

export function StepDisplayed({
  step,
  handleToggleCheckbox,
  handleInputChange,
  subscriptionParameters,
  nextStep,
  userData,
  prevStep,
  handleSelectChange,
  cardData,
  confirmationData,
  confirmSubscription
}) {
  switch (step) {
    case 1:
      return (
        <ParamsStep
          handleToggleCheckbox={handleToggleCheckbox}
          handleInputChange={handleInputChange}
          subscriptionParameters={subscriptionParameters}
          nextStep={nextStep}
          step={step}
        />
      );

    case 2:
      return (
        <UserDataStep
          handleInputChange={handleInputChange}
          userData={userData}
          nextStep={nextStep}
          prevStep={prevStep}
          step={step}
        />
      );

    case 3:
      return (
        <CardStep
          handleSelectChange={handleSelectChange}
          handleInputChange={handleInputChange}
          cardData={cardData}
          nextStep={nextStep}
          prevStep={prevStep}
          step={step}
        />
      );

    case 4:
      return (
        <ConfirmationStep
          confirmationData={confirmationData}
          handleToggleCheckbox={handleToggleCheckbox}
          prevStep={prevStep}
          confirmSubscription={confirmSubscription}
          step={step}
        />
      );
    default:
      return null;
  }
}
