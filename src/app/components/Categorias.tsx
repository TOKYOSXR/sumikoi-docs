import CardsCategorias from "./cards-categorias";
import Link from "next/link";


export default function Categorias() {
    return (
        <section>
            <h1 className="text-[32px] text-[#d81e1e] mb-6">Explore as Categorias</h1>
            <div className="grid grid-cols-2 gap-6">
                <Link href="/introducao">
                    <CardsCategorias caminho="#" titulo="Introdução" conteudo="Aqui explicaremos o motivo do uso do nosso sistema e como desenvolvemos ele." icon="bx bxs-star"></CardsCategorias>
                </Link>
                <Link href="/interface">
                    <CardsCategorias caminho="#" titulo="Interface e navegação" conteudo="Aprenda a como funciona a interface e a navegação do nosso sistema." icon="bx bx-compass"></CardsCategorias>
                </Link>
                <Link href="/funcionalidades">
                    <CardsCategorias caminho="#" titulo="Funcionalidades principais" conteudo="Todas as funcionalidade do sistema em passo a passo." icon="bx bx-help-circle"></CardsCategorias>
                </Link>
                <Link href="/configuracoes">
                <CardsCategorias caminho="#" titulo="Configurações e Personalização" conteudo="Aprenda a configurar e personalizar o sistema de acordo com as suas necessidades." icon="bx bx-cog"></CardsCategorias>
                </Link>
            </div>
        </section>
    )
}