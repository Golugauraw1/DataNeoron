import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const AddDetailForm = ({ onSubmit }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    const errors = {};
    if (!/^[A-Za-z\s]*$/.test(userName.trim())) {
      errors.userName = "Name must contain only letters";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Enter a valid email address";
    }
    if (!mobileNumber.trim()) {
      errors.mobileNumber = "Mobile Number is required";
    } else if (isNaN(mobileNumber) || mobileNumber.length !== 10) {
      errors.mobileNumber = "Enter a 10 digit Mobile Number";
    }

    if (Object.keys(errors).length === 0) {
      onSubmit({ userName, email, mobileNumber });
      setUserName("");
      setEmail("");
      setMobileNumber("");
    } else {
      setErrors(errors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-[#000000] text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left"
    >
      <Input
        label="Name"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="mb-4"
        error={errors.userName}
      />
      <Input
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4"
        error={errors.email}
      />
      <Input
        label="Mobile Number"
        placeholder="Enter your mobile number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        className="mb-4"
        error={errors.mobileNumber}
      />

      <Button type="submit" className="w-full">
        Add details
      </Button>
    </form>
  );
};

export default AddDetailForm;
