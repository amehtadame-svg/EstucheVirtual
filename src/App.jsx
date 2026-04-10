import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

function App() {
  return (
    <BrowserRouter>

      <nav style={{
        backgroundColor: '#fff',
        padding: '16px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #f0e6f0'
      }}>
        <h1 style={{ color: '#9b59b6', margin: 0, fontSize: '24px' }}>
          Estuche Virtual
        </h1>
        <div style={{ display: 'flex', gap: '24px' }}>
          <Link to="/" style={{ color: '#555', textDecoration: 'none' }}>Inicio</Link>
          <Link to="/productos" style={{ color: '#555', textDecoration: 'none' }}>Productos</Link>
          <Link to="/nosotros" style={{ color: '#555', textDecoration: 'none' }}>Nosotros</Link>
          <Link to="/contacto" style={{ color: '#555', textDecoration: 'none' }}>Contacto</Link>
        </div>
        <button style={{
          backgroundColor: '#9b59b6',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px'
        }}>
          Iniciar sesion
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;