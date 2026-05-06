'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Parse from '../lib/parse';

export default function Home() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const currentUser = Parse.User.current();
    if (currentUser) {
      setUsuario(currentUser);
    }
  }, []);

  return (
    <div style={{ backgroundColor: '#efede1', minHeight: '100vh', fontFamily: 'Poppins' }}>
      
      <header style={headerStyle}>
        
        <div style={{ ...navGroupStyle, flex: 1, justifyContent: 'flex-start' }}>
          <nav style={{ display: 'flex', gap: '30px' }}>
            <Link href="/produtos" style={navLinkStyle}>PRODUTOS</Link>
            <Link href="/sobre" style={navLinkStyle}>SOBRE MIM</Link>
          </nav>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link href="/">
            <img src="/Logo_principal.png" alt="MOM Ateliê" style={{ width: '130px', height: 'auto' }} />
          </Link>
        </div>

        <div style={{ ...navGroupStyle, flex: 1, justifyContent: 'flex-end', gap: '25px' }}>
          <Link href="/carrinho" style={navLinkStyle}>CARRINHO (0)</Link>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Link href={usuario ? "/perfil" : "/login"} style={accountButtonStyle}>
              {usuario ? 'MINHA CONTA' : 'ENTRAR'}
            </Link>
            
            {!usuario && (
              <Link href="/cadastro" style={secondaryLinkStyle}>
                CADASTRE-SE
              </Link>
            )}
          </div>
        </div>
      </header>

      <section style={heroSectionStyle}>
        <div style={heroContentStyle}>
          <h1 style={heroTitleStyle}>Design, afeto e exclusividade.</h1>
          <p style={heroSubTitleStyle}>Peças feitas à mão, pensadas para contar a sua história.</p>
          <Link href="/produtos" style={heroButtonStyle}>VER COLEÇÃO</Link>
        </div>
      </section>

      <section style={{ padding: '80px 50px', textAlign: 'center' }}>
        <h2 style={sectionTitleStyle}>Nossas Categorias</h2>
        <div style={gridStyle}>
          <CategoryCard title="Necessaires" image="/necessaries.jpg" />
          <CategoryCard title="Bolsas" image="/bolsas.jpg" />
          <CategoryCard title="Bonecas" image="/bonecas.jpg" />
          <CategoryCard title="Toalhas" image="/toalhas.jpg" />
        </div>
      </section>

      <footer style={footerStyle}>
        <p>© 2026 MOM Ateliê — Feito com amor por você.</p>
      </footer>
    </div>
  );
}

function CategoryCard({ title, image }) {
  return (
    <div style={cardStyle}>
      <div style={{ ...imagePlaceholderStyle, backgroundImage: `url(${image})` }}></div>
      <h3 style={cardTitleStyle}>{title}</h3>
      <Link href="/produtos" style={cardLinkStyle}>Explorar →</Link>
    </div>
  );
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 60px',
  borderBottom: '1px solid rgba(33, 49, 49, 0.1)',
  position: 'sticky',
  top: 0,
  backgroundColor: '#efede1',
  zIndex: 1000
};

const navGroupStyle = { display: 'flex', alignItems: 'center' };

const navLinkStyle = {
  textDecoration: 'none',
  color: '#213131',
  fontSize: '0.7rem',
  letterSpacing: '2px',
  fontWeight: '600'
};

const accountButtonStyle = {
  textDecoration: 'none',
  backgroundColor: '#213131',
  color: '#efede1',
  padding: '10px 22px',
  fontSize: '0.7rem',
  letterSpacing: '2px',
  fontWeight: 'bold',
  borderRadius: '2px',
  textAlign: 'center',
  minWidth: '100px'
};

const secondaryLinkStyle = {
  textDecoration: 'none',
  color: '#213131',
  fontSize: '0.65rem',
  letterSpacing: '2px',
  fontWeight: '600',
  opacity: '0.6',
  whiteSpace: 'nowrap'
};

const heroSectionStyle = {
  height: '75vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  backgroundImage: 'linear-gradient(rgba(0,0,0,0.02), rgba(0,0,0,0.02)), url("/hero-bg.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#efede1' 
};

const heroContentStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center' };
const heroTitleStyle = { fontSize: '2.5rem', color: '#213131', fontWeight: '300', letterSpacing: '5px', marginBottom: '15px' };
const heroSubTitleStyle = { fontSize: '1.1rem', color: '#213131', opacity: 0.8, marginBottom: '40px', fontWeight: '300' };

const heroButtonStyle = {
  textDecoration: 'none',
  border: '1px solid #213131',
  padding: '18px 45px',
  color: '#213131',
  fontSize: '0.8rem',
  letterSpacing: '3px',
  fontWeight: 'bold'
};

const sectionTitleStyle = { fontSize: '1.2rem', letterSpacing: '4px', color: '#d6988e', marginBottom: '50px', textTransform: 'uppercase' };

const gridStyle = { 
  display: 'grid', 
  gridTemplateColumns: 'repeat(4, 1fr)', 
  gap: '25px' 
};

const cardStyle = { textAlign: 'center' };
const imagePlaceholderStyle = { width: '100%', height: '380px', backgroundColor: '#e5e2d1', marginBottom: '20px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' };
const cardTitleStyle = { fontSize: '0.9rem', letterSpacing: '2px', color: '#213131', marginBottom: '10px' };
const cardLinkStyle = { textDecoration: 'none', color: '#d6988e', fontSize: '0.75rem', fontWeight: 'bold' };

const footerStyle = { padding: '50px', textAlign: 'center', borderTop: '1px solid rgba(33, 49, 49, 0.1)', fontSize: '0.75rem', color: '#213131', opacity: 0.6, letterSpacing: '1px' };