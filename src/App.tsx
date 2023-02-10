import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Utils/Menu';
import rutas from './route-config';

function App() {

  


  return (
    <>
    <BrowserRouter>
    <Menu />
      <div className='container'>
        <Routes>
          {rutas.map(ruta => 
            <Route 
              key={ruta.path} 
              path={ruta.path} 
              element={<ruta.componente />} />)}
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
