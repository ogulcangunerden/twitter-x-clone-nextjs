import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Rightbar from "./rightbar/Rightbar";

const Layout = ({ children }) => {
  return (
    <div className="w-[1265px] mx-auto flex">
      <Sidebar />
      <main className="flex-1 flex gap-[30px]">
        <main className="flex-1 max-w-[600px] border-x border-[#2f3336]">
          {children}
        </main>
        <Rightbar />
      </main>
    </div>
  );
};

export default Layout;
