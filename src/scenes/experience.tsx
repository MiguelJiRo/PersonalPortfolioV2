import React from "react";
import { AppLayout } from "@/layouts";
import { PopupAdviceComponent } from "@/common/components";
import { ExperienceContainer } from "@/pods/experience";

export const ExperiencePage: React.FC = () => {
  return (
    <AppLayout>
      <ExperienceContainer />
    </AppLayout>
  );
};
