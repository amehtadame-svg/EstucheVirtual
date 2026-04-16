import { useState } from 'react';
import { useCart } from '../CarpTemp';

function Productos() {

  const { agregarProducto } = useCart();
  const [agregado, setAgregado] = useState('');

  const productos = [
    { nombre: 'Cuaderno universitario', precio: 8500, categoria: 'Cuadernos', icono: '📓' },
    { nombre: 'Cuaderno cuadriculado', precio: 7500, categoria: 'Cuadernos', icono: '📓' },
    { nombre: 'Set de colores x12', precio: 12000, categoria: 'Colores', icono: '🎨' },
    { nombre: 'Colores pastel x8', precio: 9000, categoria: 'Colores', icono: '🎨' },
    { nombre: 'Carpeta argollada', precio: 9500, categoria: 'Carpetas', icono: '📁' },
    { nombre: 'Carpeta manila', precio: 3000, categoria: 'Carpetas', icono: '📁' },
    { nombre: 'Lapicero azul x10', precio: 5000, categoria: 'Lapiceros', icono: '✏️' },
    { nombre: 'Lapicero negro x10', precio: 5000, categoria: 'Lapiceros', icono: '✏️' },
    { nombre: 'Mochila escolar', precio: 45000, categoria: 'Mochilas', icono: '🎒' },
    { nombre: 'Mochila pequeña', precio: 25000, categoria: 'Mochilas', icono: '🎒' },
    { nombre: 'Tijeras punta redonda', precio: 6500, categoria: 'Tijeras', icono: '✂️' },
    { nombre: 'Tijeras punta fina', precio: 7000, categoria: 'Tijeras', icono: '✂️' },
  ];

  const categorias = ['Todos', 'Cuadernos', 'Colores', 'Carpetas', 'Lapiceros', 'Mochilas', 'Tijeras'];

  const [busqueda, setBusqueda] = useState('');
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');

  const productosFiltrados = productos.filter((prod) => {
    const coincideCategoria = categoriaActiva === 'Todos' || prod.categoria === categoriaActiva;
    const coincideBusqueda = prod.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  const handleAgregar = (prod) => {
    agregarProducto(prod);
    setAgregado(prod.nombre);
    setTimeout(() => setAgregado(''), 1500);
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#fff', minHeight: '100vh' }}>

      <h2 style={{ textAlign: 'center', color: '#6c3483', fontSize: '32px', marginBottom: '32px' }}>
        Nuestros productos
      </h2>

      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          display: 'block',
          margin: '0 auto 24px',
          padding: '12px 20px',
          width: '100%',
          maxWidth: '400px',
          borderRadius: '8px',
          border: '1px solid #f0e6f0',
          fontSize: '14px',
          outline: 'none'
        }}
      />

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            style={{
              padding: '8px 18px',
              borderRadius: '99px',
              border: '1px solid #9b59b6',
              backgroundColor: categoriaActiva === cat ? '#9b59b6' : '#fff',
              color: categoriaActiva === cat ? '#fff' : '#9b59b6',
              cursor: 'pointer',
              fontSize: '13px'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {productosFiltrados.map((prod) => (
          <div key={prod.nombre} style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '24px',
            textAlign: 'center',
            border: '1px solid #f0e6f0'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>
              {prod.icono}
            </div>
            <p style={{ fontSize: '13px', color: '#aaa', margin: '0 0 4px' }}>
              {prod.categoria}
            </p>
            <p style={{ fontSize: '15px', fontWeight: '500', color: '#333', margin: '0 0 12px' }}>
              {prod.nombre}
            </p>
            <p style={{ fontSize: '18px', color: '#9b59b6', fontWeight: '600', margin: '0 0 16px' }}>
              ${prod.precio.toLocaleString()}
            </p>
            <button
              onClick={() => handleAgregar(prod)}
              style={{
                backgroundColor: agregado === prod.nombre ? '#27ae60' : '#9b59b6',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                width: '100%',
                transition: 'background-color 0.3s'
              }}
            >
              {agregado === prod.nombre ? 'Agregado!' : 'Agregar al carrito'}
            </button>
          </div>
        ))}
      </div>

      {productosFiltrados.length === 0 && (
        <p style={{ textAlign: 'center', color: '#aaa', marginTop: '40px' }}>
          No se encontraron productos.
        </p>
      )}

    </div>
  );
}

export default Productos;