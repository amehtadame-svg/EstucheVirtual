import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Carrito from './pages/Carrito';
import { useCart } from './CarpTemp';

function NavBar() {
  const { totalProductos } = useCart();
  return (
    <nav className="nav">
      <h1 style={{ color: '#9b59b6', margin: 0, fontSize: '24px' }}>
        Estuche Virtual
      </h1>
      <div className="nav-links">
        <Link to="/" style={{ color: '#555', textDecoration: 'none' }}>Inicio</Link>
        <Link to="/productos" style={{ color: '#555', textDecoration: 'none' }}>Productos</Link>
        <Link to="/nosotros" style={{ color: '#555', textDecoration: 'none' }}>Nosotros</Link>
        <Link to="/contacto" style={{ color: '#555', textDecoration: 'none' }}>Contacto</Link>
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Link to="/carrito" style={{
          backgroundColor: '#f9f0ff',
          color: '#9b59b6',
          padding: '10px 20px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          Carrito {totalProductos > 0 && (
            <span style={{
              backgroundColor: '#9b59b6',
              color: '#fff',
              borderRadius: '99px',
              padding: '2px 8px',
              fontSize: '12px',
              marginLeft: '4px'
            }}>
              {totalProductos}
            </span>
          )}
        </Link>
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
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;