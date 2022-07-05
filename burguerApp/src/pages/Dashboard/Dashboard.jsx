import { Menu } from '../../components/Menu/Menu';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Productos } from '../../components/Productos/Productos';
import { Categorias } from '../../components/Categorias/Categorias';
import { FormPw } from '../../components/FormPw/FormPw';
import { ContextProvider } from '../../GlobalContextDashboard/GlobalProvider';

function Dashboard() {
  return (
    <ContextProvider>
      <Menu />
      <Outlet />
      {/* <Routes>
        <Route path='/ingresar' element={<FormPw />} />
        <Route path='/categorias' element={<Categorias />} />
        <Route path='/productos' element={<Productos />} />
      </Routes> */}
    </ContextProvider>
  );
}

export default Dashboard;
