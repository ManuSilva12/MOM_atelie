"use client";
import { useEffect, useState } from "react";
import Link from "next/link"; 

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const resposta = await fetch("/api/produtos");
        const dados = await resposta.json();
        if (Array.isArray(dados)) setProdutos(dados);
      } catch (error) {
        console.error(error);
      } finally {
        setCarregando(false);
      }
    }
    carregarProdutos();
  }, []);

  if (carregando) return (
    <div style={{ backgroundColor: '#efede1', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p style={{ fontFamily: 'Poppins', color: '#213131', letterSpacing: '2px' }}>CARREGANDO...</p>
    </div>
  );

  return (
    <main style={{ backgroundColor: '#efede1', minHeight: '100vh', color: '#213131' }}>
      
      {/* Menu Superior mais colado no topo */}
      <nav style={{ display: 'flex', justifyContent: 'flex-end', padding: '15px 40px', gap: '25px' }}>
        <Link href="/login" style={{ textDecoration: 'none', color: '#213131', fontFamily: 'Poppins', fontSize: '0.75rem', fontWeight: '600' }}>ENTRAR</Link>
        <Link href="/cadastro" style={{ textDecoration: 'none', color: '#213131', fontFamily: 'Poppins', fontSize: '0.75rem', fontWeight: '600' }}>CADASTRAR</Link>
      </nav>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Header bem mais curto */}
        <header style={{ textAlign: 'center', marginBottom: '30px' }}>
          <Link href="/">
            <img 
              src="/Logo_principal.png" 
              alt="MOM Ateliê" 
              /* Reduzi de 280px para 180px para ficar delicado */
              style={{ width: '180px', height: 'auto', cursor: 'pointer', display: 'block', margin: '0 auto' }} 
            />
          </Link>
          <p style={{ fontFamily: 'Poppins', letterSpacing: '4px', color: '#d6988e', fontSize: '0.65rem', marginTop: '5px' }}>
            DESIGN, AFETO E EXCLUSIVIDADE
          </p>
        </header>

        {/* Grid com espaçamento otimizado */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '30px', paddingBottom: '40px' }}>
          {produtos?.map((p) => (
            <div key={p.id} style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '0px', boxShadow: '0 5px 15px rgba(0,0,0,0.02)' }}>
              <div style={{ width: '100%', height: '300px', marginBottom: '12px' }}>
                 <img 
                  src={p.imagem} 
                  alt={p.nome} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                 />
              </div>
              
              <h2 style={{ fontFamily: 'Glamore', fontSize: '1.3rem', margin: '5px 0', textAlign: 'center' }}>{p.nome}</h2>
              <p style={{ color: '#213131', fontWeight: 'bold', fontSize: '1rem', textAlign: 'center', fontFamily: 'Poppins', marginBottom: '15px' }}>
                R$ {p.preco?.toFixed(2)}
              </p>
              
              <button style={{ width: '100%', padding: '12px', backgroundColor: '#213131', color: '#efede1', border: 'none', cursor: 'pointer', fontFamily: 'Poppins', letterSpacing: '1px', fontSize: '0.65rem', fontWeight: 'bold' }}>
                VER DETALHES
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}