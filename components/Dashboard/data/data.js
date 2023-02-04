import high from "../../../images/high.svg";
import low from "../../../images/low.svg";

import fiatBalance from "../../../images/fiat-balance.svg";
import cryptoBalance from "../../../images/crypto-balance.svg";
import receivableBalance from "../../../images/fiat-balance.svg";
import payableBalance from "../../../images/payable-balance.svg";

const dailyHighLows = [
  {
    imgSrc: low,
    tfid: 8045780,
    title: "QUICKSILVER LLC",
    price: "145,000.00",
  },
  {
    imgSrc: high,
    tfid: 8045780,
    title: "QUICKSILVER LLC",
    price: "145,000.00",
  },
  {
    imgSrc: high,
    tfid: 8045780,
    title: "QUICKSILVER LLC",
    price: "145,000.00",
  },
  {
    imgSrc: low,
    tfid: 8045780,
    title: "QUICKSILVER LLC",
    price: "145,000.00",
  },
  {
    imgSrc: high,
    tfid: 8045780,
    title: "QUICKSILVER LLC",
    price: "145,000.00",
  },
];

const dashboardBalances = [
  {
    imgSrc: fiatBalance,
    title: "Fiat Balance",
    balance: "00,000",
  },
  {
    imgSrc: cryptoBalance,
    title: "Crypto Balance",
    balance: "00,000",
  },
  {
    imgSrc: receivableBalance,
    title: "Receivable",
    balance: "00,000",
  },
  {
    imgSrc: payableBalance,
    title: "Payable",
    balance: "00,000",
  },
];

export { dashboardBalances, dailyHighLows };
