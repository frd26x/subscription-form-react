import React from "react";

export function Price({ isPaymentUpfront, amountGb, duration }) {
  const pricePerGb = 2;
  const applyDiscount = 0.9;
  return (
    <div>
      <h4>Price</h4>
      <span>{isPaymentUpfront ? "billed upfront" : "billed monthly"}</span>
      <h4 className="text-success text-large">
        {isPaymentUpfront
          ? amountGb * pricePerGb * duration * applyDiscount
          : amountGb * pricePerGb}
        $
      </h4>
    </div>
  );
}

export function DisplayParameter({ title, value, label }) {
  return (
    <div>
      <h4>{title}</h4>
      <h4 className="text-success text-large">
        {value} {label}
      </h4>
    </div>
  );
}

export function Success({ message }) {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
