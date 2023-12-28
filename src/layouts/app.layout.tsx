import React from "react";
import { ProfileContext } from "@/core/profile";
import { SidebarComponent } from "@/common/components/sidebar";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  const { userName } = React.useContext(ProfileContext);

  return (
    <>
      <SidebarComponent />
      <div className="layout-children">{children}</div>
    </>
  );
};
