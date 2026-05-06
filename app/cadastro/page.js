'use client';

import { useState } from 'react';
import Parse from '../../lib/parse'; 
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);
  const router = useRouter();

  const handleCadastro = async (e) => {
    e.preventDefault();
    setCarregando(true);
    
    const user = new Parse.User();
    user.set("username", email); 
    user.set("email", email);
    user.set("password", senha);
    user.set("nomeCompleto", nome); 

    try {
      await user.signUp();
      alert("Conta criada com sucesso!");
      router.push('/'); 
    } catch (error) {
      alert("Erro ao cadastrar: " + error.message);
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
      paddingTop: '10vh', 
      position: 'relative',
      paddingBottom: '40px'
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
          style={{ width: '200px', height: 'auto', display: 'block', margin: '0 auto 10px' }} 
        />
        
        <h2 style={{ fontFamily: 'Poppins', color: '#d6988e', letterSpacing: '4px', fontSize: '0.8rem', marginBottom: '30px', fontWeight: '400' }}>
          CRIAR NOVA CONTA
        </h2>

        <form onSubmit={handleCadastro} style={{ width: '100%', textAlign: 'left' }}>
          <div style={{ marginBottom: '18px' }}>
            <label style={labelStyle}>NOME COMPLETO</label>
            <input type="text" required value={nome} onChange={(e) => setNome(e.target.value)} style={inputStyle} />
          </div>

          <div style={{ marginBottom: '18px' }}>
            <label style={labelStyle}>E-MAIL</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label style={labelStyle}>SENHA</label>
            <input type="password" required value={senha} onChange={(e) => setSenha(e.target.value)} style={inputStyle} />
          </div>

          <button type="submit" disabled={carregando} style={{ ...buttonStyle, backgroundColor: carregando ? '#ccc' : '#213131' }}>
            {carregando ? 'CADASTRANDO...' : 'FINALIZAR CADASTRO'}
          </button>
        </form>

        <Link href="/login" style={{ marginTop: '30px', display: 'block', color: '#213131', fontSize: '0.75rem', textDecoration: 'none', fontFamily: 'Poppins' }}>
          Já possui conta? <strong>Entrar</strong>
        </Link>
      </div>
    </main>
  );
}

const labelStyle = { display: 'block', fontSize: '0.65rem', color: '#213131', marginBottom: '5px', letterSpacing: '1px', fontWeight: '600' };
const inputStyle = { width: '100%', padding: '8px 0', border: 'none', borderBottom: '1px solid #213131', background: 'transparent', outline: 'none', fontFamily: 'Poppins', fontSize: '1rem' };
const buttonStyle = { width: '100%', padding: '16px', color: '#efede1', border: 'none', cursor: 'pointer', fontFamily: 'Poppins', letterSpacing: '2px', fontSize: '0.75rem', fontWeight: 'bold' };