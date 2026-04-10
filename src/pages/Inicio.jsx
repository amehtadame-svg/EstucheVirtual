import { Link } from 'react-router-dom';

function Inicio() {

  const ofertas = [
    { nombre: 'Cuaderno universitario', precio: 8500, precioAntes: 12000, icono: '📓' },
    { nombre: 'Set de colores x12', precio: 9000, precioAntes: 12000, icono: '🎨' },
    { nombre: 'Mochila escolar', precio: 35000, precioAntes: 45000, icono: '🎒' },
  ];

  const razones = [
    { icono: '🚀', titulo: 'Envio rapido', descripcion: 'Recibe tus productos en la puerta de tu casa en el menor tiempo posible.' },
    { icono: '💰', titulo: 'Mejores precios', descripcion: 'Ofrecemos los precios mas competitivos del mercado sin sacrificar calidad.' },
    { icono: '🔒', titulo: 'Compra segura', descripcion: 'Tu informacion y pagos estan protegidos en todo momento.' },
    { icono: '📦', titulo: 'Gran variedad', descripcion: 'Encuentra todo lo que necesitas para el colegio y la oficina en un solo lugar.' },
  ];

  return (
    <div>

      <section style={{
        backgroundColor: '#f9f0ff',
        padding: '80px 40px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '48px',
          color: '#6c3483',
          margin: '0 0 16px'
        }}>
          Todo lo que necesitas, en un solo lugar
        </h2>
        <p style={{
          fontSize: '18px',
          color: '#777',
          marginBottom: '32px'
        }}>
          Utiles escolares y de oficina al mejor precio, entregados en tu puerta.
        </p>
        <Link to="/productos" style={{
          display: 'inline-block',
          backgroundColor: '#9b59b6',
          color: '#fff',
          padding: '14px 32px',
          borderRadius: '8px',
          fontSize: '16px',
          textDecoration: 'none'
        }}>
          Ver productos
        </Link>
      </section>

      <section style={{ padding: '60px 40px', backgroundColor: '#fff' }}>
        <h3 style={{
          textAlign: 'center',
          fontSize: '28px',
          color: '#6c3483',
          marginBottom: '8px'
        }}>
          Ofertas y promociones
        </h3>
        <p style={{ textAlign: 'center', color: '#777', fontSize: '15px', marginBottom: '40px' }}>
          Aprovecha estos descuentos por tiempo limitado
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {ofertas.map((prod) => (
            <div key={prod.nombre} style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '24px',
              textAlign: 'center',
              border: '1px solid #f0e6f0',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                backgroundColor: '#e74c3c',
                color: '#fff',
                fontSize: '11px',
                fontWeight: '500',
                padding: '4px 10px',
                borderRadius: '99px'
              }}>
                Oferta
              </div>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>
                {prod.icono}
              </div>
              <p style={{ fontSize: '15px', fontWeight: '500', color: '#333', margin: '0 0 8px' }}>
                {prod.nombre}
              </p>
              <p style={{ fontSize: '13px', color: '#aaa', textDecoration: 'line-through', margin: '0 0 4px' }}>
                ${prod.precioAntes.toLocaleString()}
              </p>
              <p style={{ fontSize: '20px', color: '#9b59b6', fontWeight: '600', margin: '0 0 16px' }}>
                ${prod.precio.toLocaleString()}
              </p>
              <Link to="/productos" style={{
                display: 'block',
                backgroundColor: '#9b59b6',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '14px'
              }}>
                Ver producto
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '60px 40px', backgroundColor: '#f9f0ff' }}>
        <h3 style={{
          textAlign: 'center',
          fontSize: '28px',
          color: '#6c3483',
          marginBottom: '8px'
        }}>
          Por que elegirnos
        </h3>
        <p style={{ textAlign: 'center', color: '#777', fontSize: '15px', marginBottom: '40px' }}>
          Estas son las razones por las que nuestros clientes nos prefieren
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {razones.map((r) => (
            <div key={r.titulo} style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '28px 20px',
              textAlign: 'center',
              border: '1px solid #f0e6f0'
            }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>{r.icono}</div>
              <h4 style={{ color: '#6c3483', margin: '0 0 8px', fontSize: '15px' }}>{r.titulo}</h4>
              <p style={{ color: '#777', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>{r.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={{
        backgroundColor: '#6c3483',
        color: '#fff',
        padding: '40px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <div>
            <h4 style={{ margin: '0 0 12px', fontSize: '18px' }}>Estuche Virtual</h4>
            <p style={{ margin: 0, color: '#d7bde2', fontSize: '14px' }}>
              Tu papeleria online de confianza.
            </p>
          </div>
          <div>
            <h4 style={{ margin: '0 0 12px', fontSize: '18px' }}>Enlaces</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link to="/" style={{ color: '#d7bde2', textDecoration: 'none', fontSize: '14px' }}>Inicio</Link>
              <Link to="/productos" style={{ color: '#d7bde2', textDecoration: 'none', fontSize: '14px' }}>Productos</Link>
              <Link to="/nosotros" style={{ color: '#d7bde2', textDecoration: 'none', fontSize: '14px' }}>Nosotros</Link>
            </div>
          </div>
          <div>
            <h4 style={{ margin: '0 0 12px', fontSize: '18px' }}>Contactanos</h4>
            <a href="https://wa.me/573000000000" target="_blank" rel="noreferrer" style={{
              display: 'inline-block',
              backgroundColor: '#25d366',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '14px'
            }}>Escribenos por WhatsApp</a>
          </div>
        </div>
        <p style={{
          textAlign: 'center',
          color: '#d7bde2',
          fontSize: '13px',
          marginTop: '40px',
          marginBottom: 0
        }}>
          2025 Estuche Virtual. Todos los derechos reservados.
        </p>
      </footer>

    </div>
  );
}

export default Inicio;