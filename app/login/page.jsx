'use client';

import { useState } from 'react';
import Parse from '../../lib/parse'; 
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setCarregando(true);
    try {
      await Parse.User.logIn(email, senha);
      router.push('/'); 
    } catch (error) {
      alert("Erro ao entrar: " + error.message);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <main style={{ 
      backgroundColor: '#efede1', 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'flex-start', 
      paddingTop: '12vh', 
      position: 'relative' 
    }}>
      
      <Link href="/" style={{ 
        position: 'absolute', 
        top: '30px', 
        left: '40px', 
        textDecoration: 'none', 
        color: '#213131', 
        fontFamily: 'Poppins', 
        fontSize: '0.7rem', 
        letterSpacing: '2px', 
        fontWeight: 'bold', 
        opacity: '0.5' 
      }}>
        ← VOLTAR PARA O INÍCIO
      </Link>

      <div style={{ width: '100%', maxWidth: '360px', textAlign: 'center' }}>
        
        <img 
          src="/sublogo.png" 
          alt="MOM" 
          style={{ width: '220px', height: 'auto', display: 'block', margin: '0 auto 10px' }} 
        />
        
        <h2 style={{ fontFamily: 'Poppins', color: '#d6988e', letterSpacing: '4px', fontSize: '0.8rem', marginBottom: '35px', fontWeight: '400' }}>
          BEM-VINDA DE VOLTA
        </h2>

        <form onSubmit={handleLogin} style={{ width: '100%', textAlign: 'left' }}>
          <div style={{ marginBottom: '18px' }}>
            <label style={labelStyle}>E-MAIL</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
          </div>
          <div style={{ marginBottom: '30px' }}>
            <label style={labelStyle}>SENHA</label>
            <input type="password" required value={senha} onChange={(e) => setSenha(e.target.value)} style={inputStyle} />
          </div>
          <button type="submit" disabled={carregando} style={{ ...buttonStyle, backgroundColor: carregando ? '#ccc' : '#213131' }}>
            {carregando ? 'ENTRANDO...' : 'ACESSAR CONTA'}
          </button>
        </form>

        <Link href="/cadastro" style={{ marginTop: '30px', display: 'block', color: '#213131', fontSize: '0.75rem', textDecoration: 'none', fontFamily: 'Poppins' }}>
          Ainda não tem acesso? <strong>Cadastre-se</strong>
        </Link>
      </div>
    </main>
  );
}

const labelStyle = { display: 'block', fontSize: '0.65rem', color: '#213131', marginBottom: '5px', letterSpacing: '1px', fontWeight: '600' };
const inputStyle = { width: '100%', padding: '8px 0', border: 'none', borderBottom: '1px solid #213131', background: 'transparent', outline: 'none', fontFamily: 'Poppins', fontSize: '1rem' };
const buttonStyle = { width: '100%', padding: '16px', color: '#efede1', border: 'none', cursor: 'pointer', fontFamily: 'Poppins', letterSpacing: '2px', fontSize: '0.75rem', fontWeight: 'bold' };