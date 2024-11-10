import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Play from './pages/Play';
import Profile from './pages/Profile';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'play', element: <Play /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
]);