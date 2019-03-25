import React from "react";
import { MoveStep, InputCheckbox } from "./common";
import { SelectParams } from "./SelectParams";

const durationOptions = [3, 6, 12];

const gbOptions = [3, 5, 10, 20, 30, 50];

export function ParamsStep({
  subscriptionParameters,
  handleInputChange,
  handleToggleCheckbox,
  prevStep,
  nextStep,
  step
}) {
  const isFormFilled =
    subscriptionParameters.duration && subscriptionParameters.amountGb;
  return (
    <div className="container border p-2 col-6">
      <SelectParams
        handleInputChange={handleInputChange}
        subscriptionParameters={subscriptionParameters}
        options={durationOptions}
        name="duration"
        label="months"
        title="Duration"
      />

      <SelectParams
        handleInputChange={handleInputChange}
        subscriptionParameters={subscriptionParameters}
        options={gbOptions}
        name="amountGb"
        title="Amount of GB"
      />

      <InputCheckbox
        checked={subscriptionParameters.isPaymentUpfront}
        handleToggleCheckbox={handleToggleCheckbox}
        name="isPaymentUpfront"
        label="10% discount"
        title="Upfront payment"
      />

      <MoveStep
        prevStep={prevStep}
        isFormFilled={isFormFilled}
        nextStep={nextStep}
        step={step}
      />
    </div>
  );
}
