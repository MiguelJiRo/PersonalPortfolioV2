import React from "react";
import { AppLayout } from "@/layouts";
import { PopupAdviceComponent } from "@/common/components";
import { ProjectsContainer } from "@/pods/projects";

export const ProjectsPage: React.FC = () => {
  return (
    <AppLayout>
      <div className="home-layout">
        <ProjectsContainer />
        <PopupAdviceComponent
          message="Hello! 👋 This is MiguelAdvisor, your virtual assistant. I'm here to help 🙂"
          submessage="Looking for more information about me? Check about page! ✅"
          page="about"
        />
      </div>
    </AppLayout>
  );
};
