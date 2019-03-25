import React from "react";

export function InputCheckbox({
  checked,
  handleToggleCheckbox,
  name,
  label,
  title
}) {
  return (
    <div>
      <h4>{title}</h4>
      <label htmlFor={name}>{label}</label>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleToggleCheckbox}
      />
    </div>
  );
}

export function MoveStep({
  prevStep,
  isFormFilled,
  nextStep,
  step,
  confirmSubscription
}) {
  const hide = {
    display: "none"
  };

  return (
    <div className="d-flex justify-content-between ">
      <button
        className="btn btn-success"
        style={step === 1 ? hide : null}
        onClick={prevStep}
      >
        Prev
      </button>
      <button
        className="btn btn-success"
        disabled={!isFormFilled}
        style={step === 4 ? hide : null}
        onClick={nextStep}
      >
        Next
      </button>
      <button
        className="btn btn-success"
        onClick={confirmSubscription}
        style={step !== 4 ? hide : null}
        disabled={!isFormFilled}
      >
        Confirm
      </button>
    </div>
  );
}

export function BaseInput({
  type,
  data,
  name,
  handleInputChange,
  placeholder,
  label,
  small
}) {
  return (
    <div className={`form-group ${small} mt-3`}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className="form-control"
        name={name}
        value={data.name}
        onChange={handleInputChange}
        placeholder={placeholder}
        label={label}
      />
    </div>
  );
}

BaseInput.defaultProps = {
  type: "text",
  small: ""
};
