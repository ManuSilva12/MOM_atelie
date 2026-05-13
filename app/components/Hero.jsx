import Link from "next/link";

export function Hero() {
    return (
        <section
        className="
            h-[75vh]
            flex
            items-center
            justify-center
            text-center
            bg-cover
            bg-center
            bg-no-repeat
            bg-[#efede1]
        "
        style={{
            backgroundImage:
            'linear-gradient(rgba(0,0,0,0.02), rgba(0,0,0,0.02)), url("/hero-bg.jpg")',
        }}
        >
        <div className="flex flex-col items-center">
            <h1
            className="
                text-[2.5rem]
                text-[#213131]
                font-light
                tracking-[5px]
                mb-[15px]
                uppercase
            "
            >
            Design, afeto e exclusividade.
            </h1>

            <p
            className="
                text-[1.1rem]
                text-[#213131]
                opacity-80
                mb-[40px]
                font-light
            "
            >
            Peças feitas à mão, pensadas para contar a sua história.
            </p>

            <Link
            href="/produtos"
            className="
                bg-[#213131]
                text-[#efede1]
                px-8
                py-3
                uppercase
                tracking-[2px]
                text-[0.75rem]
                transition-all
                hover:bg-[#efede1]
                hover:text-[#213131]
                border
                border-[#213131]
            "
            >
            Ver coleção
            </Link>
        </div>
    </section>
    )
}