import React from "react";
import { AppLayout } from "@/layouts";
import { HomeContainer } from "@/pods/home";
import { NumbersColumnComponent } from "@/common/components/numbers-column";
import { PopupAdviceComponent } from "@/common/components";

export const HomePage: React.FC = () => {
  return (
    <AppLayout>
      <div className="home-layout">
        <HomeContainer />
        <PopupAdviceComponent
          message="Hello! 👋 This is MiguelAdvisor, your virtual assistant. I'm here to help 🙂"
          submessage="Looking for more information about me? Check about page! ✅"
          page="about"
        />
      </div>
    </AppLayout>
  );
};
