import React from "react";
import { MoveStep, BaseInput } from "./common";
import { SelectExpirationCard } from "./SelectExpirationCard";
import { checkCardNumber, checkSecurityCode } from "../utils";

export function CardStep({
  cardData,
  handleInputChange,
  handleSelectChange,
  prevStep,
  nextStep,
  step
}) {
  const isFormFilled =
    checkCardNumber(cardData.cardNumber) &&
    checkSecurityCode(cardData.securityCode) &&
    cardData.cardExpirationDate;

  return (
    <div className="container border p-2 col-6">
      <BaseInput
        data={cardData}
        name="cardNumber"
        handleInputChange={handleInputChange}
        placeholder="4444666677778888"
        label="Card Number"
      />

      <SelectExpirationCard
        cardData={cardData}
        handleSelectChange={handleSelectChange}
      />

      <BaseInput
        data={cardData}
        name="securityCode"
        handleInputChange={handleInputChange}
        placeholder="123"
        label="CVV"
        small="col-3"
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
