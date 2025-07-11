import Link from "next/link"


export default function Hero() {

    return (
        <section className="hero flex justify-between items-center flex-col mb-[96px]">
            <div className="text-center mb-6">
                <h1 className="text-[44px] mb-2 font text-[#d81e1e]" >Sumikoi Documentation</h1>
                <p className={`text-[14px] text-[#0F0F10] font-bold max-w-[600px] opacity-60 dark:text-white`}>Sistema automatizado de Forms que organiza respostas por turma, salvando em planilhas separadas com uso de gatilhos, logs e scripts.</p>
            </div>

            <div>
                <Link href="/introducao">
                <button className="bg-[#d81e1e] text-white font-bold py-2 px-4 rounded-[12px] hover:bg-[#6B0505] cursor-pointer">Introdução</button>
                </Link>
            </div>
        </section>
    )
}