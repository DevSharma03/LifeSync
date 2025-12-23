import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/DashboardLayout.css';

export default function DashboardLayout() {
  const location = useLocation();

  // Derive active nav key from current pathname
  const pathToKeyMap = {
    '/home': 'dashboard',
    '/health': 'health',
    '/finance': 'finance',
    '/productivity': 'productivity',
    '/mind': 'mind',
    '/ai': 'ai',
    '/profile': 'profile',
  };

  const activeNav = pathToKeyMap[location.pathname] || 'dashboard';

  return (
    <div className="dashboard-layout">
      <Navbar active={activeNav} />
      <main className="dashboard-main-content">
        <Outlet />
      </main>
    </div>
  );
}


