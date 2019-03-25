import React from "react";
import { MoveStep, InputCheckbox } from "./common";

export function ConfirmationStep({
  handleToggleCheckbox,
  confirmationData,
  prevStep,
  nextStep,
  step,
  confirmSubscription
}) {
  return (
    <div className="container border col-6">
      <InputCheckbox
        handleToggleCheckbox={handleToggleCheckbox}
        name="areTermsAgreed"
        label="I have read and understood the term and conditions"
        checked={confirmationData.areTermsAgreed}
        title="Term and conditions agreement"
      />

      <MoveStep
        prevStep={prevStep}
        isFormFilled={confirmationData.areTermsAgreed}
        nextStep={nextStep}
        step={step}
        confirmSubscription={confirmSubscription}
      />
    </div>
  );
}
