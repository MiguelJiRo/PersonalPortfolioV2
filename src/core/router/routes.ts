import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  home: string;
  about: string;
  experience: string;
  projects: string;
  details: string;
  contact: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  home: "/home",
  about: "/about",
  experience: "/experience",
  projects: "/projects",
  details: "/work/:id",
  contact: "/contact",
};

interface Routes extends Omit<SwitchRoutes, "details"> {
  details: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  details: (id) => generatePath(switchRoutes.details, { id }),
};
