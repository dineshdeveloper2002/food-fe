import { lazy } from 'react';
import { renderRouteProps } from '../../interfaces/renderrouteprops';

export const userroutes: renderRouteProps[] = [
    {
        path: '/users',
        element: lazy(() => import('@container/pages/Users')),
        title: 'users',

    }
]