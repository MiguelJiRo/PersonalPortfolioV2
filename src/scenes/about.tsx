import React from "react";
import { AppLayout } from "@/layouts";
import { AboutContainer } from "@/pods/about";
import { PopupAdviceComponent } from "@/common/components";

export const AboutPage: React.FC = () => {
  return (
    <AppLayout>
      <AboutContainer />
      <PopupAdviceComponent
        message="Hello! 👋 This is MiguelAdvisor 🙂 there is a lot of information here"
        submessage=" Do you have any questions? Contact me ✉️"
        page="contact"
      />
    </AppLayout>
  );
};
