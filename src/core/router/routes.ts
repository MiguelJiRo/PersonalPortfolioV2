import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  home: string;
  about: string;
  work: string;
  details: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  home: "/home",
  about: "/about",
  work: "/work",
  details: "/work/:id",
};

interface Routes extends Omit<SwitchRoutes, "details"> {
  details: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  details: (id) => generatePath(switchRoutes.details, { id }),
};
