import React from "react";
import { AppLayout } from "@/layouts";
import { PopupAdviceComponent } from "@/common/components";
import { ExperienceContainer } from "@/pods/experience";

export const ExperiencePage: React.FC = () => {
  return (
    <AppLayout>
      <div className="home-layout">
        <ExperienceContainer />
        <PopupAdviceComponent
          message="Hello! 👋 This is MiguelAdvisor, your virtual assistant. I'm here to help 🙂"
          submessage="Looking for more information about me? Check about page! ✅"
          page="about"
        />
      </div>
    </AppLayout>
  );
};
