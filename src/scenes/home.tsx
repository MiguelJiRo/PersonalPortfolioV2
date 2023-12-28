import React from "react";
import { AppLayout } from "@/layouts";
import { HomeContainer } from "@/pods/home";
import { NumbersColumnComponent } from "@/common/components/numbers-column";

export const HomePage: React.FC = () => {
  return (
    <AppLayout>
      <div className="home-layout">
        <NumbersColumnComponent />
        <HomeContainer />
      </div>
    </AppLayout>
  );
};
