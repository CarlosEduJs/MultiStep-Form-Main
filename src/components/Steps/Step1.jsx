import { useState } from "react";
import { useNavigate } from "react-router-dom";

import TitleStep from "../In Steps/TitleStep";
import DescriptionStep from "../In Steps/DescriptionStep";

import InputField from "../Inputs/InputField";

import NextStepBtn from "../Buttons/NextStepBtn";

import { isEmail } from "../../utils/emailValidor";

const Step1 = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneNumberValue, setPhoneNumberValue] = useState("");

  const navigate = useNavigate();

  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!nameValue) {
      validationErrors.name = "Name is required.";
    }
    if (!isEmail(emailValue)) {
      validationErrors.email = "Invalid email address.";
    }
    if (!phoneNumberValue) {
      validationErrors.phoneNumber = "Phone Number is required";
    }

    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setEmailValue("");
      setNameValue("");
      setPhoneNumberValue("");
      navigate("/youplan");
    }
  };

  return (
    <div className="flex flex-col p-[4rem] gap-4">
      <div className="flex flex-col gap-3">
        <TitleStep title={"Personal Info"} />
        <DescriptionStep
          descriptionStep={
            "Please provider your name, email address, and phone number"
          }
        />
      </div>
      <form onSubmit={handleSubmit}>
        <InputField
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          error={error.name}
          label={"Name"}
          placeholder={"e.g. Stephen King"}
        />
        <InputField
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          error={error.email}
          label={"Email Adress"}
          placeholder={"e.g. stephenking@gmail.com"}
        />
        <InputField
          value={phoneNumberValue}
          onChange={(e) => setPhoneNumberValue(e.target.value)}
          error={error.phoneNumber}
          label={"Phone Number"}
          type={"number"}
          placeholder={"e.g. +1 234 567 890"}
        />

        <div className="flex min-w-full justify-end gap-2">
          <NextStepBtn />
        </div>
      </form>
    </div>
  );
};

export default Step1;
