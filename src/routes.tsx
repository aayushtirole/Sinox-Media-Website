import Index from './pages/Index';
import AdminPage from './pages/AdminPage';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <Index />
  },
  {
    name: 'Admin',
    path: '/admin',
    element: <AdminPage />,
    visible: false
  }
];

export default routes;