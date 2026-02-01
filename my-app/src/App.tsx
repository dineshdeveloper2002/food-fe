import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRoutes from './routes/RenderRoute';

export const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
};
