import React from "react";
import { AppLayout } from "@/layouts";
import { HomeContainer } from "@/pods/home";

export const HomePage: React.FC = () => {
  return (
    <AppLayout>
      <HomeContainer />
    </AppLayout>
  );
};
