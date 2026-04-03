import { lazy } from 'react';
import { renderRouteProps } from '../../interfaces/renderrouteprops';

export const routes: renderRouteProps[] = [
    {
        path: '/login',
        element: lazy(() => import('@container/pages/loginpage')),
        title: 'login page',

    }
]