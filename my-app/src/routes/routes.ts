import { renderRouteProps } from "../interfaces/renderrouteprops";
import { lazy } from "react";
import { routes } from "./login";
import { homeRoutes } from "./Home";
import { userroutes } from "./user";

export let Routes: renderRouteProps[] = [];
export const Routesdata = Routes.concat(routes).concat(homeRoutes).concat(userroutes);
