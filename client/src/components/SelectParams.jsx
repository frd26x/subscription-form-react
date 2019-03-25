import React from "react";

function Select({
  name,
  value,
  subscriptionParameters,
  handleInputChange,
  label
}) {
  return (
    <label
      className={`btn btn-secondary ${subscriptionParameters[name] === value &&
        "active"}`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        onChange={handleInputChange}
      />
      {value} {label}
    </label>
  );
}

export function SelectParams({
  name,
  subscriptionParameters,
  handleInputChange,
  label,
  options,
  title
}) {
  return (
    <div>
      <h4>{title}</h4>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        {options.map((option, i) => (
          <Select
            key={i}
            value={option}
            name={name}
            subscriptionParameters={subscriptionParameters}
            handleInputChange={handleInputChange}
            label={label}
          />
        ))}
      </div>
    </div>
  );
}
