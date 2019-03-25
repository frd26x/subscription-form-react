import React from "react";
import { MoveStep, BaseInput } from "./common";

export function UserDataStep(props) {
  const isFormFilled =
    props.userData.firstName &&
    props.userData.lastName &&
    props.userData.email &&
    props.userData.streetAddress;

  return (
    <div className="container border p-2 col-6">
      <form>
        <BaseInput
          name="firstName"
          handleInputChange={props.handleInputChange}
          placeholder="John"
          label="First Name"
          data={props.userData}
        />
        <BaseInput
          name="lastName"
          handleInputChange={props.handleInputChange}
          placeholder="Dow"
          label="Last Name"
          data={props.userData}
        />
        <BaseInput
          type="email"
          name="email"
          handleInputChange={props.handleInputChange}
          placeholder="JohnDow@gmail.com"
          label="Email"
          data={props.userData}
        />
        <BaseInput
          name="streetAddress"
          handleInputChange={props.handleInputChange}
          placeholder="Holsteiner Ufer 10"
          label="Address"
          data={props.userData}
        />
      </form>
      <MoveStep
        prevStep={props.prevStep}
        isFormFilled={isFormFilled}
        nextStep={props.nextStep}
        step={props.step}
      />
    </div>
  );
}
