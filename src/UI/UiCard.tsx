import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SidebarRight from "../components/SidebarRight";

type Props = {
  children: any;
};

const UiCard = (props: Props) => {
  const children = props.children;
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <div>{children}</div>
      <SidebarRight />
    </div>
  );
};

export default UiCard;
