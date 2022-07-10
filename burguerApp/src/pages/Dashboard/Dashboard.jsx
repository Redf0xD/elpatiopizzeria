import { Menu } from '../../components/Menu/Menu';
import { Outlet } from 'react-router-dom';
import { ContextProvider } from '../../GlobalContextDashboard/GlobalProvider';

function Dashboard() {
  return (
    <ContextProvider>
      <Menu />
      <Outlet />
    </ContextProvider>
  );
}

export default Dashboard;
