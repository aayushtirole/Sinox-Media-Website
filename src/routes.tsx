import Index from './pages/Index';
import AdminPage from './pages/AdminPage';
import StarterPage from './pages/StarterPage';
import ProfessionalPage from './pages/ProfessionalPage';
import EnterprisePage from './pages/EnterprisePage';
import GetStartedPage from './pages/GetStartedPage';
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
    name: 'Get Started',
    path: '/get-started',
    element: <GetStartedPage />,
    visible: false
  },
  {
    name: 'Starter Plan',
    path: '/plans/starter',
    element: <StarterPage />,
    visible: false
  },
  {
    name: 'Professional Plan',
    path: '/plans/professional',
    element: <ProfessionalPage />,
    visible: false
  },
  {
    name: 'Enterprise Plan',
    path: '/plans/enterprise',
    element: <EnterprisePage />,
    visible: false
  },
  {
    name: 'Admin',
    path: '/admin',
    element: <AdminPage />,
    visible: false
  }
];

export default routes;