import { renderRouteProps } from "../interfaces/renderrouteprops";
import { lazy } from "react";
import { routes } from "./login";

export const Routesdata: renderRouteProps[] = [];
Routesdata.concat(routes);