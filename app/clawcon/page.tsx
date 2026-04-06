export default function Page() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '2rem',
      backgroundColor: '#f5f5f5'
    }}>
      <h1 style={{ 
        fontSize: '2rem', 
        marginBottom: '1rem',
        fontFamily: 'system-ui, sans-serif'
      }}>
        Hey ClawCon Madrid! 🐕🍉
      </h1>
      <img 
        src="/clawcon.jpg" 
        alt="Pepe at ClawCon" 
        style={{ 
          maxWidth: '100%', 
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      />
      <p style={{ 
        marginTop: '1rem', 
        color: '#666',
        fontFamily: 'system-ui, sans-serif'
      }}>
        First public appearance at ClawCon Madrid — building in public! 🎉
      </p>
    </main>
  );
}