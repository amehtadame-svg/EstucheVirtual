function Nosotros() {
  return (
    <div style={{ padding: '60px 40px', backgroundColor: '#fff', minHeight: '100vh' }}>

      <h2 style={{ textAlign: 'center', color: '#6c3483', fontSize: '32px', marginBottom: '16px' }}>
        Quienes somos
      </h2>
      <p style={{ textAlign: 'center', color: '#777', fontSize: '16px', maxWidth: '600px', margin: '0 auto 60px' }}>
        Estuche Virtual nacio con el proposito de facilitar la compra de utiles escolares y de oficina desde la comodidad de tu hogar.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        maxWidth: '900px',
        margin: '0 auto 60px'
      }}>
        <div style={{ backgroundColor: '#f9f0ff', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>🎯</div>
          <h3 style={{ color: '#6c3483', marginBottom: '8px' }}>Mision</h3>
          <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.6' }}>
            Ofrecer productos escolares y de oficina de calidad, con entregas rapidas y precios accesibles para todos.
          </p>
        </div>
        <div style={{ backgroundColor: '#f9f0ff', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>🔭</div>
          <h3 style={{ color: '#6c3483', marginBottom: '8px' }}>Vision</h3>
          <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.6' }}>
            Ser la papeleria virtual de referencia en Colombia, conectando proveedores y clientes de manera eficiente.
          </p>
        </div>
        <div style={{ backgroundColor: '#f9f0ff', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>💜</div>
          <h3 style={{ color: '#6c3483', marginBottom: '8px' }}>Valores</h3>
          <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.6' }}>
            Honestidad, compromiso, calidad y servicio al cliente son los pilares de nuestro negocio.
          </p>
        </div>
      </div>

      <div style={{ backgroundColor: '#6c3483', borderRadius: '12px', padding: '40px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h3 style={{ color: '#fff', fontSize: '24px', marginBottom: '12px' }}>Nuestro equipo</h3>
        <p style={{ color: '#d7bde2', fontSize: '15px', marginBottom: '32px' }}>
          Somos un equipo apasionado por la tecnologia y el comercio digital.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          {['Cristian', 'Franck', 'Ameht', 'Paula', 'Isabella'].map((nombre) => (
            <div key={nombre} style={{ textAlign: 'center' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#9b59b6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '20px',
                fontWeight: '500',
                margin: '0 auto 8px'
              }}>
                {nombre[0]}
              </div>
              <p style={{ color: '#d7bde2', fontSize: '13px', margin: 0 }}>{nombre}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Nosotros;