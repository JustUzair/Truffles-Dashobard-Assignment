import Head from "next/head";
import Image from "next/image";

import Dashboard from "../components/Dashboard/Dashboard";
export default function Home() {
  return (
    <div className="bg-[#F5F5F5] w-[100vw] h-[100vh] overflow-x-hidden ">
      <Dashboard></Dashboard>
    </div>
  );
}
