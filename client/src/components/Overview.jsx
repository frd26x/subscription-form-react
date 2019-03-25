import React from "react";
import { Price, DisplayParameter, Success } from "./OverviewComponents";

export function Overview({ isPaymentUpfront, amountGb, duration, message }) {
  return (
    <div className="container border h-25 p-2 col-3">
      <Price
        isPaymentUpfront={isPaymentUpfront}
        amountGb={amountGb}
        duration={duration}
      />
      <DisplayParameter title="Amount of gb" value={amountGb} />
      <DisplayParameter title="Duration" value={duration} label="months" />
      <Success message={message} />
    </div>
  );
}
