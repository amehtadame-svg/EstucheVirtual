import { useCart } from '../CarpTemp';
import { Link } from 'react-router-dom';

function Carrito() {

  const { carrito, eliminarProducto, cambiarCantidad, totalProductos, totalPrecio } = useCart();

  if (carrito.length === 0) {
    return (
      <div style={{ padding: '60px 40px', textAlign: 'center', minHeight: '60vh' }}>
        <div style={{ fontSize: '64px', marginBottom: '16px' }}>🛒</div>
        <h2 style={{ color: '#6c3483', marginBottom: '12px' }}>Tu carrito esta vacio</h2>
        <p style={{ color: '#777', marginBottom: '32px' }}>Agrega productos para continuar.</p>
        <Link to="/productos" style={{
          backgroundColor: '#9b59b6',
          color: '#fff',
          padding: '12px 28px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '15px'
        }}>
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto', minHeight: '100vh' }}>

      <h2 style={{ color: '#6c3483', fontSize: '28px', marginBottom: '32px' }}>
        Tu carrito ({totalProductos} productos)
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '32px' }}>

        <div>
          {carrito.map((prod) => (
            <div key={prod.nombre} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid #f0e6f0',
              marginBottom: '12px',
              backgroundColor: '#fff'
            }}>
              <div style={{ fontSize: '40px' }}>{prod.icono}</div>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: '500', color: '#333', margin: '0 0 4px' }}>{prod.nombre}</p>
                <p style={{ color: '#9b59b6', fontWeight: '600', margin: 0 }}>
                  ${prod.precio.toLocaleString()}
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  onClick={() => cambiarCantidad(prod.nombre, prod.cantidad - 1)}
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    border: '1px solid #9b59b6',
                    backgroundColor: '#fff',
                    color: '#9b59b6',
                    cursor: 'pointer',
                    fontSize: '16px'
                  }}
                >
                  -
                </button>
                <span style={{ fontWeight: '500', minWidth: '20px', textAlign: 'center' }}>
                  {prod.cantidad}
                </span>
                <button
                  onClick={() => cambiarCantidad(prod.nombre, prod.cantidad + 1)}
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    border: '1px solid #9b59b6',
                    backgroundColor: '#9b59b6',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '16px'
                  }}
                >
                  +
                </button>
              </div>
              <p style={{ fontWeight: '600', color: '#333', minWidth: '80px', textAlign: 'right', margin: 0 }}>
                ${(prod.precio * prod.cantidad).toLocaleString()}
              </p>
              <button
                onClick={() => eliminarProducto(prod.nombre)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#e74c3c',
                  cursor: 'pointer',
                  fontSize: '18px'
                }}
              >
                x
              </button>
            </div>
          ))}
        </div>

        <div style={{
          backgroundColor: '#f9f0ff',
          borderRadius: '12px',
          padding: '24px',
          height: 'fit-content'
        }}>
          <h3 style={{ color: '#6c3483', marginBottom: '20px' }}>Resumen del pedido</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ color: '#777', fontSize: '14px' }}>Productos</span>
            <span style={{ fontSize: '14px' }}>{totalProductos}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #f0e6f0' }}>
            <span style={{ color: '#777', fontSize: '14px' }}>Subtotal</span>
            <span style={{ fontSize: '14px' }}>${totalPrecio.toLocaleString()}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
            <span style={{ fontWeight: '500', fontSize: '16px' }}>Total</span>
            <span style={{ fontWeight: '600', fontSize: '18px', color: '#9b59b6' }}>
              ${totalPrecio.toLocaleString()}
            </span>
          </div>
          <button style={{
            backgroundColor: '#9b59b6',
            color: '#fff',
            border: 'none',
            padding: '14px',
            borderRadius: '8px',
            fontSize: '15px',
            cursor: 'pointer',
            width: '100%',
            marginBottom: '12px'
          }}>
            Finalizar pedido
          </button>
          <Link to="/productos" style={{
            display: 'block',
            textAlign: 'center',
            color: '#9b59b6',
            fontSize: '14px',
            textDecoration: 'none'
          }}>
            Seguir comprando
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Carrito;