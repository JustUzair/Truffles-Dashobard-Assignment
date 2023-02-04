import React from "react";
import dashboardIcon from "../../images/dashboard-icon.svg";
import invoiceIcon from "../../images/invoice-icon.svg";
import proformaIcon from "../../images/proforma-icon.svg";
import swapIcon from "../../images/swap-icon.svg";
import transferIcon from "../../images/transfer-icon.svg";
import contactIcon from "../../images/contact-icon.svg";
import Image from "next/image";

const sidebarValue = [
  {
    imgSrc: dashboardIcon,
    value: "Dashboard",
    iconBgClass: "bg-gradient-to-r from-[#A76FFF] to-[#7445F8]",
    className: "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.12)]",
  },
  {
    imgSrc: invoiceIcon,
    value: "Invoice",
    className: "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.12)]",
  },
  {
    imgSrc: proformaIcon,
    value: "Proforma",
    className: "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.12)]",
  },
  {
    imgSrc: swapIcon,
    value: "Swap",
    className: "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.12)]",
  },
  {
    imgSrc: transferIcon,
    value: "Transfer",
    className: "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.12)]",
  },
  {
    imgSrc: contactIcon,
    value: "Contacts",
    className: "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.12)]",
  },
];
const SideBar = () => {
  return (
    <div className="sidebar mt-[20px] min-w-[15vw] max-w-[15vw] p-5 cursor-pointer">
      {sidebarValue.map((sidebarElement, index) => (
        <div
          key={index}
          className={`sidebar-element flex align-center mt-2 rounded-[8px] px-5 py-3 w-[80%] min-w-[175px] max-w-none ${
            index === 0 && "bg-[#fff]"
          }`}
        >
          <div
            className={`sidebar-element--icon bg-[#fff] ${sidebarElement.iconBgClass} ${sidebarElement.className} min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px] flex align-center justify-center rounded-[8px]`}
          >
            <Image
              src={sidebarElement.imgSrc}
              alt={sidebarElement.value}
              className={"min-w-[11px] max-w-none"}
            />
          </div>
          <span className="ml-5">{sidebarElement.value}</span>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
