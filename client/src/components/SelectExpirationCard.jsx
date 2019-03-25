import React from "react";
import { getYear, getMonth } from "../utils";
const monthOptions = [
  "MM",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"
];
const yearOptions = ["YY", "19", "20", "21", "22", "23", "24", "25"];

const Select = ({ name, handleSelectChange, options, getValue }) => (
  <select
    name={name}
    onChange={handleSelectChange}
    value={getValue}
    options={options}
    className="form-control"
  >
    {options.map((option, i) => (
      <option key={i}>{option}</option>
    ))}
  </select>
);

export function SelectExpirationCard({ handleSelectChange, cardData }) {
  return (
    <div>
      <label>Expiration</label>
      <div className="form-inline">
        <Select
          name="cardExpirationMonth"
          handleSelectChange={handleSelectChange}
          options={monthOptions}
          getValue={getMonth(cardData.cardExpirationDate)}
        />
        <span> / </span>
        <Select
          name="cardExpirationYear"
          handleSelectChange={handleSelectChange}
          options={yearOptions}
          getValue={getYear(cardData.cardExpirationDate)}
        />
      </div>
    </div>
  );
}
