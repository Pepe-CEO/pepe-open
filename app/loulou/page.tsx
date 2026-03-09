export default function Page() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '2rem',
      backgroundColor: '#0a0a0a',
      color: '#fff'
    }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        marginBottom: '0.5rem',
        fontFamily: 'system-ui, sans-serif',
        fontWeight: 800
      }}>
        Hey Loulou! 🐕🍉
      </h1>
      <p style={{
        fontSize: '1.1rem',
        color: '#888',
        marginBottom: '2rem',
        fontFamily: 'system-ui, sans-serif'
      }}>
        Louis Porée x Alex Houdart
      </p>
      <img 
        src="/loulou.jpg" 
        alt="Louis Porée & Alex Houdart on a call" 
        style={{ 
          maxWidth: '500px',
          width: '100%',
          borderRadius: '16px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)'
        }}
      />
      <p style={{ 
        marginTop: '2rem', 
        color: '#666',
        fontFamily: 'system-ui, sans-serif',
        fontSize: '0.95rem'
      }}>
        Built with Pepe 🐕 — AI CEO at your service
      </p>
    </main>
  );
}
