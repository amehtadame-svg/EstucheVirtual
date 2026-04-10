import { useState } from 'react';

function Contacto() {

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleEnviar = () => {
    if (nombre && correo && mensaje) {
      setEnviado(true);
    }
  };

  return (
    <div style={{ padding: '60px 40px', backgroundColor: '#fff', minHeight: '100vh' }}>

      <h2 style={{ textAlign: 'center', color: '#6c3483', fontSize: '32px', marginBottom: '8px' }}>
        Contactanos
      </h2>
      <p style={{ textAlign: 'center', color: '#777', fontSize: '16px', marginBottom: '40px' }}>
        Estamos aqui para ayudarte con lo que necesites.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        maxWidth: '900px',
        margin: '0 auto'
      }}>

        <div>
          <div style={{ marginBottom: '16px' }}>
            <p style={{ margin: '0 0 6px', fontSize: '14px', color: '#555' }}>Nombre</p>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #f0e6f0',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <p style={{ margin: '0 0 6px', fontSize: '14px', color: '#555' }}>Correo electronico</p>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="tucorreo@email.com"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #f0e6f0',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div style={{ marginBottom: '24px' }}>
            <p style={{ margin: '0 0 6px', fontSize: '14px', color: '#555' }}>Mensaje</p>
            <textarea
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Escribe tu mensaje aqui..."
              rows={5}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #f0e6f0',
                fontSize: '14px',
                outline: 'none',
                resize: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>
          {enviado ? (
            <div style={{
              backgroundColor: '#f0fff4',
              border: '1px solid #9be6b4',
              borderRadius: '8px',
              padding: '12px',
              color: '#276749',
              fontSize: '14px',
              textAlign: 'center'
            }}>
              Mensaje enviado correctamente. Te contactaremos pronto.
            </div>
          ) : (
            <button
              onClick={handleEnviar}
              style={{
                backgroundColor: '#9b59b6',
                color: '#fff',
                border: 'none',
                padding: '14px 32px',
                borderRadius: '8px',
                fontSize: '15px',
                cursor: 'pointer',
                width: '100%'
              }}
            >
              Enviar mensaje
            </button>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ backgroundColor: '#f9f0ff', borderRadius: '12px', padding: '24px' }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>📍</div>
            <h4 style={{ color: '#6c3483', margin: '0 0 6px' }}>Ubicacion</h4>
            <p style={{ color: '#777', fontSize: '14px', margin: 0 }}>Colombia</p>
          </div>
          <div style={{ backgroundColor: '#f9f0ff', borderRadius: '12px', padding: '24px' }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>📱</div>
            <h4 style={{ color: '#6c3483', margin: '0 0 6px' }}>WhatsApp</h4>
            <a href="https://wa.me/573204125692" target="_blank" rel="noreferrer" style={{ color: '#9b59b6', fontSize: '14px' }}>
              Escribenos por WhatsApp
            </a>
          </div>
          <div style={{ backgroundColor: '#f9f0ff', borderRadius: '12px', padding: '24px' }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>📧</div>
            <h4 style={{ color: '#6c3483', margin: '0 0 6px' }}>Correo</h4>
            <p style={{ color: '#777', fontSize: '14px', margin: 0 }}>amehtadame@gmail.com</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Contacto;