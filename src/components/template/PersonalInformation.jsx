import { useState } from "react";
import Field from "../module/Field";
import MaskedInput from "react-maskedinput";
import style from "../../styles/style";

const PersonalInformation = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [firstNameStatus, setFirstNameStatus] = useState(
    style.fieldDefault
  );
  const [lastNameStatus, setLastNameStatus] = useState(
    style.fieldDefault
  );
  const [dateBirthStatus, setDateBirthStatus] = useState(
    style.fieldDefault
  );
  const [phoneNumberStatus, setPhoneNumberStatus] = useState(
    style.fieldDefault
  );

  const nextLevel = () => {
    firstName.length === 0 && setFirstNameStatus(style.fieldFalse);
    lastName.length === 0 && setLastNameStatus(style.fieldFalse);
    dateBirth.length < 8 && setDateBirthStatus(style.fieldFalse);
    phoneNumber.length < 11 && setPhoneNumberStatus(style.fieldFalse);

    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      dateBirth.length === 8 &&
      phoneNumber.length === 11
    ) {
      props.parentCallback(
        {
          firstName,
          lastName,
          dateBirth,
          phoneNumber,
        },
        2
      );
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <p className="text-3xl max-sm:text-lg">Personal information</p>
      <form className="flex flex-row justify-center items-center flex-wrap gap-5 w-6/12 max-sm:w-8/12">
        <Field
          className={firstNameStatus}
          placeholder="First Name"
          type={"text"}
          value={firstName}
          onChange={(e) => {
            const result = e.target.value.replace(/[^a-z]/gi, "");
            if (result.length === 0) {
              setFirstNameStatus(style.fieldDefault);
            } else {
              setFirstNameStatus(style.fieldTrue);
            }
            setFirstName(result);
          }}
        />
        <Field
          className={lastNameStatus}
          placeholder={"Last Name"}
          type={"text"}
          value={lastName}
          onChange={(e) => {
            const result = e.target.value.replace(/[^a-z]/gi, "");
            if (result.length === 0) {
              setLastNameStatus(style.fieldDefault);
            } else {
              setLastNameStatus(style.fieldTrue);
            }
            setLastName(result);
          }}
        />
        <MaskedInput
          className={dateBirthStatus}
          mask="1111/11/11"
          placeholder="Date Birth"
          value={dateBirth}
          onChange={(e) => {
            const result = e.target.value.replace(/\D/g, "");
            if (result.length === 0) {
              setDateBirthStatus(style.fieldDefault);
            } else if (result.length === 8) {
              setDateBirthStatus(style.fieldTrue);
            }
            setDateBirth(result);
          }}
        />
        <Field
          className={phoneNumberStatus}
          type={"text"}
          placeholder={"Phone Number"}
          maxLength={11}
          value={phoneNumber}
          onChange={(e) => {
            const result = e.target.value.replace(/[^0-9]/gi, "");
            if (result.length === 0) {
              setPhoneNumberStatus(style.fieldDefault);
            } else if (result.length === 11) {
              setPhoneNumberStatus(style.fieldTrue);
            }
            setPhoneNumber(result);
          }}
        />
      </form>
      <div>
        <button
          onClick={nextLevel}
          className="flex flex-row justify-center items-center shadow border-hidden text-2xl  bg-sky-400 text-white px-12 py-2 hover:bg-sky-500 max-sm:text-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;
