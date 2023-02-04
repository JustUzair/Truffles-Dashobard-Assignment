import React from "react";
// import { Select } from "@material-ui/core";
const BusinessInfo = ({ progress, setProgress }) => {
  return (
    <div className="user-info--container mt-8 h-[100vh] grow px-[120px] w-[80vw] text-[#6B7280]">
      {/* -----------Header--------- */}
      <div className="user-info--header text-[#111827] font-[600] leading-[24px] text-[20px]">
        Business Information
        <br />
        <span className="text-[#6b7280] font-[400] leading-[20px] text-[14px]">
          Use a permanent address where you can receive mail
        </span>
      </div>
      <br />
      {/* -----------Account Id--------- */}
      <div className="user-account--id shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
        <div>
          <label
            htmlFor="account-id"
            className="text-[#374151] leading-[20px] text-[14px]"
          >
            Account ID
          </label>
          <br />
          <input
            type="text"
            name="account-id"
            id="account-id"
            className="pt-[9px] pr-[12px] pb-[9px] pl-[12px] border-solid border-[#D1D5DB] border-2 rounded-[6px] w-[100%]"
          />
        </div>
      </div>
      <br />
      {/* -----------Company Name--------- */}
      <div className="user-company shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
        <div>
          <label
            htmlFor="company-name"
            className="text-[#374151] leading-[20px] text-[14px]"
          >
            Company Name
          </label>
          <br />
          <input
            type="text"
            name="company-name"
            id="company-name"
            className="pt-[9px] pr-[12px] pb-[9px] pl-[12px] border-solid border-[#D1D5DB] border-2 rounded-[6px] w-[100%]"
          />
        </div>
      </div>
      <br />
      {/* -----------Company Operation Location--------- */}
      <div className="user-company--location shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
        <div className="company-location--country flex justify-between">
          <div className="w-[48%]">
            <label
              htmlFor="country-incorporated"
              className="text-[#374151] leading-[20px] text-[14px]"
            >
              Country of Incorporation
            </label>
            <br />
            <div className="pt-[9px] pr-[12px] pb-[9px] pl-[12px] border-solid border-[#D1D5DB] border-2 rounded-[6px] w-[100%] ">
              <select
                name="country-incorporated"
                id="country-incorporated"
                className="w-[100%] border-none cursor-pointer"
              >
                <option value="United States" selected>
                  United States
                </option>
                <option value="India">India</option>
              </select>
            </div>
          </div>
          <div className="w-[48%]">
            <label
              htmlFor="country-opeartion"
              className="text-[#374151] leading-[20px] text-[14px]"
            >
              Country of Operation
            </label>
            <br />
            <div className="pt-[9px] pr-[12px] pb-[9px] pl-[12px] border-solid border-[#D1D5DB] border-2 rounded-[6px] w-[100%] ">
              <select
                name="country-operation"
                id="country-operation"
                className="w-[100%] border-none cursor-pointer"
              >
                <option value="United States" selected>
                  United States
                </option>
                <option value="India">India</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* -----------Company Address--------- */}
      <div className="user-company--address shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
        <div>
          <label
            htmlFor="company-address"
            className="text-[#374151] leading-[20px] text-[14px]"
          >
            Company Address
          </label>
          <br />
          <input
            type="text"
            name="company-address"
            id="company-address"
            className="pt-[9px] pr-[12px] pb-[9px] pl-[12px] border-solid border-[#D1D5DB] border-2 rounded-[6px] w-[100%]"
          />
        </div>
      </div>
      <br />
      {/* -----------Company Location--------- */}
      <div className="user-name">
        <div className="user-title flex justify-between shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
          <div>
            <label
              htmlFor="company-postal--code"
              className="text-[#374151] leading-[20px] text-[14px]"
            >
              ZIP / Postal
            </label>
            <br />
            <input
              type="number"
              name="company-postal--code"
              id="company-postal--code"
              className="pt-[9px] pr-[12px] pb-[9px] pl-[12px] border-solid border-[#D1D5DB] border-2 rounded-[6px] pt-[9px] pr-[12px] pb-[9px] pl-[12px] border-solid border-[#D1D5DB] border-2 rounded-[6px] w-[20vw] "
            />
          </div>
          <div>
            <label
              htmlFor="company-state"
              className="text-[#374151] leading-[20px] text-[14px]"
            >
              State / Province
            </label>
            <br />
            <input
              type="text"
              name="company-state"
              id="company-state"
              className="pt-[9px] pr-[12px] pb-[9px] pl-[12px] border-solid border-[#D1D5DB] border-2 rounded-[6px] w-[20vw]"
            />
          </div>

          <div>
            <label
              htmlFor="company-city"
              className="text-[#374151] leading-[20px] text-[14px]"
            >
              City
            </label>
            <br />
            <input
              type="text"
              name="company-city"
              id="company-city"
              className="pt-[9px] pr-[12px] pb-[9px] pl-[12px] border-solid border-[#D1D5DB] border-2 rounded-[6px] w-[20vw]"
            />
          </div>
        </div>
      </div>
      <br />
      {/* -----------Registration Number--------- */}
      <div className="user-registration--number shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
        <div>
          <label
            htmlFor="registration-number"
            className="text-[#374151] leading-[20px] text-[14px]"
          >
            Registration Number
          </label>
          <br />
          <input
            type="text"
            name="registration-number"
            id="registration-number"
            className="pt-[9px] pr-[12px] pb-[9px] pl-[12px] border-solid border-[#D1D5DB] border-2 rounded-[6px] w-[100%]"
          />
        </div>
      </div>
      <br />
      {/* -----------Company Incorporation Date--------- */}
      <div className="company-establishment shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
        <div>
          <label
            htmlFor="company-established-at"
            className="text-[#374151] leading-[20px] text-[14px]"
          >
            Incorporation Date
          </label>
          <br />
          <input
            type="date"
            name="company-established-at"
            id="company-established-at"
            className="pt-[9px] pr-[12px] pb-[9px] pl-[12px] border-solid border-[#D1D5DB] border-2 rounded-[6px] w-[100%]"
          />
        </div>
      </div>
      <br />
      {/* -----------Navigation Buttons--------- */}
      <div className="user-navigation flex justify-between ">
        <button
          className="py-[9px] px-[17px] rounded-[6px] border-[#D1D5DB] border-solid border-2 text-[16px] text-[#374151] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
          onClick={() => {
            setProgress(1);
          }}
        >
          Back
        </button>
        <button
          className="py-[9px] px-[17px] rounded-[6px] border-solid border-2 bg-[#7445F8] text-[#fff] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
          onClick={() => {
            setProgress(3);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BusinessInfo;
