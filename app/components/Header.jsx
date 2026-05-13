import Link from "next/link";

export function Header( { usuario }) {
    return (
        <header
            className="
            w-full
            flex
            items-center
            justify-between
            px-10
            py-6
            bg-[#efede1]
            "
        >
            <div
            className="
                flex-1
                flex
                justify-start
            "
            >
            <nav className="flex gap-[30px]">
                <Link
                href="/produtos"
                className="
                    text-[#213131]
                    no-underline
                    tracking-[2px]
                    text-[0.75rem]
                    font-medium
                    font-poppins
                    uppercase
                "
                >
                Produtos
                </Link>

                <Link
                href="/sobre"
                className="
                    text-[#213131]
                    no-underline
                    tracking-[2px]
                    text-[0.75rem]
                    font-medium
                    font-poppins
                    uppercase
                "
                >
                Sobre Mim
                </Link>
            </nav>
            </div>

            <div className="flex justify-center">
            <Link href="/">
                <img
                src="/Logo_principal.png"
                alt="MOM Ateliê"
                className="w-[130px] h-auto"
                />
            </Link>
            </div>

            <div
            className="
                flex-1
                flex
                justify-end
                gap-[25px]
                items-center
            "
            >
            <Link
                href="/carrinho"
                className="
                text-[#213131]
                no-underline
                tracking-[2px]
                text-[0.75rem]
                font-medium
                font-poppins
                uppercase
                "
            >
                Carrinho (0)
            </Link>

            <div className="flex items-center gap-[15px]">
                <Link
                href={usuario ? "/perfil" : "/login"}
                className="
                    border
                    border-[#213131]
                    px-4
                    py-2
                    text-[#213131]
                    text-[0.75rem]
                    tracking-[2px]
                    font-semibold
                    no-underline
                    transition-all
                    hover:bg-[#213131]
                    hover:text-[#efede1]
                    font-poppins
                    uppercase
                "
                >
                {usuario ? "Minha Conta" : "Entrar"}
                </Link>

                {!usuario && (
                <Link
                    href="/cadastro"
                    className="
                    text-[#213131]
                    text-[0.75rem]
                    tracking-[2px]
                    no-underline
                    opacity-70
                    hover:opacity-100
                    transition-opacity
                    font-poppins
                    uppercase
                    "
                >
                    Cadastre-se
                </Link>
                )}
            </div>
        </div>
    </header>
    )
}