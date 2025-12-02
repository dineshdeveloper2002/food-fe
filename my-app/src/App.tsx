import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/chatpage';
import Login from './pages/loginpage';
import AppRoutes from './routes/RenderRoute';

export const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
};
