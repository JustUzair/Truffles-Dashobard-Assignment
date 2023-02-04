import React, { useState } from "react";
import dynamic from "next/dynamic";

import Notification from "./Notification";
import { Divider } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, Calendar } from "@material-ui/pickers";
import enLocale from "date-fns/locale/en-GB";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import Image from "next/image";
const ApexChart = dynamic(() => import("./ApexChart"), { ssr: false });
// import ApexChart from "./ApexChart";
import { dailyHighLows, dashboardBalances } from "./data/data";

const Main = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  useState(() => {}, []);

  return (
    <div className="dashboard-main ml-10 grow mr-10">
      <Notification></Notification>
      <div className="wrapper flex mt-3  justify-between sm:px-0">
        {/* Balance Assets and Liabilities */}

        <div className="balance--container w-[60vw] ">
          <div className="balance-card--container grid gap-5 grid-cols-2 sm:mr-2 ml-3">
            {dashboardBalances.map((wallet, index) => {
              return (
                <div
                  className="balance-card bg-[#fff] flex justify-between px-10 py-10 rounded-[16px] shadow-[0_20px_27px_rgba(0,0,0,0.05)]"
                  key={index}
                >
                  <div className="balance-card--info">
                    <span className="text-[#67748E] text-[16px] leading-[19px] font-[500]">
                      {wallet.title}
                    </span>
                    <br />
                    <span className="text-[#252F40] text-[24px] leading-[29px] font-[700]">
                      ${wallet.balance}
                    </span>
                  </div>
                  <div className="balance-card--icon bg-gradient-to-r from-[#A76FFF] to-[#7445F8] min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] flex items-center justify-center rounded-[8px]">
                    <Image src={wallet.imgSrc} alt={wallet.title} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="balance-chart--container p-5 bg-[#fff] mt-5 rounded-[12px] shadow-[0_20px_27px_rgba(0,0,0,0.05)] sm:mr-2 ml-3">
            <span className="balance-chart--heading text-[#67748E] text-[16px] font-[400]">
              Assets & Liabilities
            </span>

            <div className="balance-chart w-[75%] h-[75%] mx-auto overflow-x-hidden">
              <ApexChart />
            </div>
          </div>
        </div>

        {/* Calender Picker and Daily Hi-Lo */}
        <div className="date--picker bg-[#fff] overflow-hidden rounded-[16px] w-[20vw] mr-5">
          <MuiThemeProvider>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={enLocale}>
              <Calendar date={selectedDate} onChange={handleDateChange} />
            </MuiPickersUtilsProvider>
          </MuiThemeProvider>
          <span className="px-3">
            <Divider className="px-4" />
          </span>

          {/* Daily Highs-Lows */}
          <div className="profit-loss--container min-w-[15vw] max-w-[20vw]">
            {dailyHighLows.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-around items-baseline py-3 px-3"
                >
                  <Image
                    src={data.imgSrc}
                    alt={data.title}
                    className="self-center"
                  />
                  <div className="stock-info text-[#111827]">
                    <span className="stock-name leading-[19px] font-[500]-[100%] text-[12px] font-[500]">
                      {data.title}
                      <br />
                    </span>

                    <span className="stock-tfid text-[9px] font-[500] ">
                      TFID: {data.tfid}
                    </span>
                  </div>
                  <span className="stock-price text-[15px] font-[500] self-center">
                    $ {data.price}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
