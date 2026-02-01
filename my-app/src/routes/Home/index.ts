import { lazy } from 'react';
import { renderRouteProps } from '../../interfaces/renderrouteprops';

export const homeRoutes: renderRouteProps[] = [
    {
        path: '/home',
        element: lazy(() => import('@container/pages/homePage')),
        title: 'home page',
    }
]