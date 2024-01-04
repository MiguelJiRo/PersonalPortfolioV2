interface BaseRoutes {
  root: string;
  home: string;
  about: string;
  experience: string;
  projects: string;
  details: string;
  contact: string;
}

const baseRoutes: SwitchRoutes = {
  root: "/",
  home: "/home",
  about: "/about",
  experience: "/experience",
  projects: "/projects",
  details: "/work/:id",
  contact: "/contact",
};

type SwitchRoutes = BaseRoutes;

export const switchRoutes: SwitchRoutes = {
  ...baseRoutes,
};

type LinkRoutes = BaseRoutes;

export const linkRoutes: LinkRoutes = {
  ...baseRoutes,
};
