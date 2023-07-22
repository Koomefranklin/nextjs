import React, { useState } from "react";

import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      fname: "",
      lname: "",
      username: "",
      pfno: "",
      department: "",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.fname && formState.lname && formState.username && formState.pfno && formState.department) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="fname">First Name</label>
            <input name="fname" onChange={handleChange} value={formState.fname} />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Last Name</label>
            <input name="lname" onChange={handleChange} value={formState.lname} />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input name="username" onChange={handleChange} value={formState.username} />
          </div>
          <div className="form-group">
            <label htmlFor="pfno">P/F Number</label>
            <input name="pfno" onChange={handleChange} value={formState.pfno} />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department</label>
            <input name="department" onChange={handleChange} value={formState.department} />
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
