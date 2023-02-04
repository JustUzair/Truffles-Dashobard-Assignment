import React from "react";
// import { Select } from "@material-ui/core";
const UserInfo = ({ progress, setProgress }) => {
  return (
    <div className="user-info--container mt-8 h-[100vh] grow px-[120px] w-[80vw] text-[#6B7280]">
      {/* -----------Header--------- */}
      <div className="user-info--header text-[#111827] font-[600] leading-[24px] text-[20px]">
        User Information
        <br />
        <span className="text-[#6b7280] font-[400] leading-[20px] text-[14px]">
          Please enter your details
        </span>
      </div>
      {/* -----------User Name--------- */}
      <div className="user-name">
        <div className="user-title mt-8 flex justify-between shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
          <div>
            <label
              htmlFor="title"
              className="text-[#374151] leading-[20px] text-[14px]"
            >
              Title
            </label>

            <div className="pt-[9px] pr-[12px] pb-[9px] pl-[12px] border-solid border-[#D1D5DB] border-2 rounded-[6px] w-[20vw]">
              <select name="title" id="title" className="w-[100%] border-none">
                <option value="Mr." selected>
                  Mr.
                </option>
                <option value="Mrs.">Mrs.</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="firstname"
              className="text-[#374151] leading-[20px] text-[14px]"
            >
              First name
            </label>
            <br />
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="pt-[9px] pr-[12px] pb-[9px] pl-[12px] border-solid border-[#D1D5DB] border-2 rounded-[6px] w-[20vw]"
            />
          </div>

          <div>
            <label
              htmlFor="lastname"
              className="text-[#374151] leading-[20px] text-[14px]"
            >
              Last name
            </label>
            <br />
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="pt-[9px] pr-[12px] pb-[9px] pl-[12px] border-solid border-[#D1D5DB] border-2 rounded-[6px] w-[20vw]"
            />
          </div>
        </div>
      </div>
      <br />
      {/* -----------Contact--------- */}
      <div className="user-contact shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
        <label
          htmlFor="mobile"
          className="text-[#374151] leading-[20px] text-[14px]"
        >
          Mobile Number
        </label>

        <div className="flex">
          <div className="pt-[9px] pr-[12px] pb-[9px] pl-[12px] border-solid border-[#D1D5DB] rounded-l-[6px] border-2  w-[20%]">
            <select
              name="country-code"
              id="country-code"
              className="w-[100%] cursor-pointer"
            >
              <option value="+91" selected>
                IND
              </option>
              <option value="+1">US</option>
            </select>
          </div>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            placeholder="+1 (555) 987-6543"
            className="pt-[9px] pr-[12px] pb-[9px] pl-[12px] border-solid border-[#D1D5DB] rounded-r-[6px] border-2 w-[80%]"
          />
        </div>
      </div>
      <br />
      {/* -----------Gender--------- */}
      <div className="user-gender shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
        <div>
          <label
            htmlFor="gender"
            className="text-[#374151] leading-[20px] text-[14px]"
          >
            Gender
          </label>

          <div className="pt-[9px] pr-[12px] pb-[9px] pl-[12px] border-solid border-[#D1D5DB] border-2 rounded-[6px] w-[100%] ">
            <select
              name="gender"
              id="gender"
              className="w-[100%] border-none cursor-pointer"
            >
              <option value="Male" selected>
                Male
              </option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
      </div>
      <br />
      {/* -----------Nationality--------- */}
      <div className="user-nationality shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
        <div>
          <label
            htmlFor="nationality"
            className="text-[#374151] leading-[20px] text-[14px]"
          >
            Nationality
          </label>

          <div className="pt-[9px] pr-[12px] pb-[9px] pl-[12px] border-solid border-[#D1D5DB] border-2 rounded-[6px] w-[100%] ">
            <select
              name="nationality"
              id="nationality"
              className="w-[100%] border-none cursor-pointer"
            >
              <option value="Indian" selected>
                Indian
              </option>
              <option value="American">American</option>
            </select>
          </div>
        </div>
      </div>
      <br />
      {/* -----------Address--------- */}
      <div className="user-address shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
        <div className="address-container flex justify-between">
          <div>
            <label
              htmlFor="residential-address"
              className="text-[#374151] leading-[20px] text-[14px]"
            >
              Residential Address
            </label>
            <br />
            <input
              type="text"
              name="residential-address"
              id="residential-address"
              className="pt-[9px] pr-[12px] pb-[9px] pl-[12px] border-solid border-[#D1D5DB] border-2 rounded-[6px] w-[30vw] "
            />
          </div>
          <div>
            <label
              htmlFor="postal-code"
              className="text-[#374151] leading-[20px] text-[14px]"
            >
              Postal Code
            </label>
            <br />
            <input
              type="number"
              name="postal-code"
              id="postal-code"
              className="pt-[9px] pr-[12px] pb-[9px] pl-[12px] border-solid border-[#D1D5DB] border-2 rounded-[6px] w-[30vw] "
            />
          </div>
        </div>
      </div>
      <br />
      {/* -----------Occupation--------- */}
      <div className="user-occupation shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
        <div>
          <label
            htmlFor="occupation"
            className="text-[#374151] leading-[20px] text-[14px]"
          >
            Occupation
          </label>
          <br />
          <input
            type="text"
            name="occupation"
            id="occupation"
            className="pt-[9px] pr-[12px] pb-[9px] pl-[12px] border-solid border-[#D1D5DB] border-2 rounded-[6px] w-[100%]"
          />
        </div>
      </div>
      <br />
      {/* -----------DOB--------- */}
      <div className="user-DOB shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
        <div>
          <label
            htmlFor="DOB"
            className="text-[#374151] leading-[20px] text-[14px]"
          >
            Date Of Birth
          </label>
          <br />
          <input
            type="date"
            name="DOB"
            id="DOB"
            className="pt-[9px] pr-[12px] pb-[9px] pl-[12px] border-solid border-[#D1D5DB] border-2 rounded-[6px] w-[100%]"
          />
        </div>
      </div>
      <br />
      {/* -----------Navigation Buttons--------- */}
      <div className="user-navigation flex justify-between ">
        <button className="py-[9px] px-[17px] rounded-[6px] border-[#D1D5DB] border-solid border-2 text-[16px] text-[#374151] shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
          Back
        </button>
        <button
          className="py-[9px] px-[17px] rounded-[6px] border-solid border-2 bg-[#7445F8] text-[#fff] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
          onClick={() => {
            setProgress(2);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
