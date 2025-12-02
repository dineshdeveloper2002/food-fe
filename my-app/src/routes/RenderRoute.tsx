import { Routes, Route } from 'react-router-dom';
import { routes } from "./login"
import { Suspense } from 'react';
import { Routesdata } from './routes';

export default function AppRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routes.map(Routesdata => (
                    <Route
                        key={Routesdata.path}
                        path={Routesdata.path}
                        element={<Routesdata.element />}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}