import { FilterButton } from "../components/FilterButton";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";

const produtos = [
  {
    id: 1,
    nome: "Bolsa Aurora",
    preco: "R$ 189,90",
    imagem: "/images/bolsa.jpg",
  },
  {
    id: 2,
    nome: "Necessaire Floral",
    preco: "R$ 79,90",
    imagem: "/images/necessaire.jpg",
  },
  {
    id: 3,
    nome: "Mochila Serena",
    preco: "R$ 249,90",
    imagem: "/images/mochila.jpg",
  },
  {
    id: 4,
    nome: "Porta Acessórios",
    preco: "R$ 59,90",
    imagem: "/images/acessorio.jpg",
  },
  {
    id: 5,
    nome: "Porta Acessórios",
    preco: "R$ 59,90",
    imagem: "/images/acessorio.jpg",
  },
  {
    id: 6,
    nome: "Porta Acessórios",
    preco: "R$ 59,90",
    imagem: "/images/acessorio.jpg",
  },
  {
    id: 7,
    nome: "Porta Acessórios",
    preco: "R$ 59,90",
    imagem: "/images/acessorio.jpg",
  },
  {
    id: 8,
    nome: "Porta Acessórios",
    preco: "R$ 59,90",
    imagem: "/images/acessorio.jpg",
  },
  {
    id: 9,
    nome: "Porta Acessórios",
    preco: "R$ 59,90",
    imagem: "/images/acessorio.jpg",
  },
  {
    id: 10,
    nome: "Porta Acessórios",
    preco: "R$ 59,90",
    imagem: "/images/acessorio.jpg",
  },
  {
    id: 11,
    nome: "Porta Acessórios",
    preco: "R$ 59,90",
    imagem: "/images/acessorio.jpg",
  },
];

export default function Produtos() {
  return (
    <div className="bg-[#efede1] min-h-screen font-poppins">
      <Header />

      <main className="pt-[140px] px-6 pb-20">
        
        <section className="text-center mb-20">
          <h1
            className="
              text-[2.5rem]
              tracking-[6px]
              uppercase
              text-[#213131]
              font-light
              mb-5
            "
          >
            Produtos
          </h1>

          <p
            className="
              text-[#213131]
              opacity-70
              max-w-[650px]
              mx-auto
              text-[1rem]
              leading-7
              font-light
            "
          >
            Peças feitas à mão com delicadeza, exclusividade
            e afeto para transformar o cotidiano em algo único.
          </p>
        </section>

        <section
          className="
            flex
            flex-wrap
            justify-between
            items-center
            gap-5
            mb-14
            max-w-[1300px]
            mx-auto
          "
        >
        <div className="flex gap-3 flex-wrap">
            <FilterButton active>Todos</FilterButton>
            <FilterButton>Bolsas</FilterButton>
            <FilterButton>Mochilas</FilterButton>
            <FilterButton>Porta Acessórios</FilterButton>
        </div>
          
          <select
            className="
              bg-transparent
              border
              border-[#213131]/30
              px-4
              py-2
              text-[0.75rem]
              uppercase
              tracking-[2px]
              outline-none
              text-[#213131]
            "
          >
            <option>Mais recentes</option>
            <option>Menor preço</option>
            <option>Maior preço</option>
          </select>
        </section>

        
        <section
          className="
            max-w-[1300px]
            mx-auto
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-x-8
            gap-y-16
          "
        >
          {produtos.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </section>
      </main>
    </div>
  );
}