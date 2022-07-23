import { Home } from './pages/Home/Home';
import { Cart } from './components/Cart/Cart';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import { FormPw } from './components/FormPw/FormPw';
import { Categorias } from './components/Categorias/Categorias';
import { Productos } from './components/Productos/Productos';
import { ProductFilter } from './components/ProductFilter/ProductFilter';

// import QRCode from 'react-qr-code';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ingresar' element={<FormPw />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='categorias' element={<Categorias />} />
          <Route path='productos' element={<Productos />} />
        </Route>

        {/* <div style={{ background: 'white', padding: '16px' }}>
        <QRCode value={import.meta.env.VITE_APP_URLPARAQR} />
      </div> */}
      </Routes>
      <Cart />
    </>
  );
}

export default App;
