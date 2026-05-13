import { Header } from "../components/Header";

export default function Sobre() {
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
                    Sobre Mim
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
            </main>
        </div>
    )
}
