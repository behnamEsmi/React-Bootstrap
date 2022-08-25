import React from "react";

const Input = ({ name, label, value, onChange, type }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        id={name}
        value={value}
        name={name}
        onChange={onChange}
        type={type ? "password" : "text"}
        className="form-control"
      />
    </div>
  );
};

export default Input;
