import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import {
  AboutPage,
  HomePage,
  ContactPage,
  ProjectsPage,
  ExperiencePage,
} from "@/scenes";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<HomePage />} />
        <Route path={switchRoutes.home} element={<HomePage />} />
        <Route path={switchRoutes.about} element={<AboutPage />} />
        <Route path={switchRoutes.experience} element={<ExperiencePage />} />
        <Route path={switchRoutes.projects} element={<ProjectsPage />} />
        <Route path={switchRoutes.contact} element={<ContactPage />} />
      </Routes>
    </Router>
  );
};
