import React from "react";
import { AppLayout } from "@/layouts";
import { PopupAdviceComponent } from "@/common/components";
import { ProjectsContainer } from "@/pods/projects";

export const ProjectsPage: React.FC = () => {
  return (
    <AppLayout>
      <ProjectsContainer />
    </AppLayout>
  );
};
