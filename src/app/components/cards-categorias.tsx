type CardsCategoriasProps = {
  caminho: string;
  titulo: string;
  conteudo: string;
  icon: string;
};

export default function CardsCategorias({ caminho, titulo, conteudo, icon }: CardsCategoriasProps) {
  return (

    <div
      key={caminho}
      className="flex flex-col p-6 cursor-pointer border border-[#0F0F10]/20 hover:border-[#0F0F10]/50 dark:border-white/20 dark:hover:border-white/40 transition-all rounded-[12px] w-80 bg-white dark:bg-[#1a1a1a]"
    >
      <i className={`text-[32px] text-[#d81e1e] ${icon}`}></i>

      <h3 className="text-[14px] text-[#0F0F10] mt-6 mb-2.5 dark:text-white">{titulo}</h3>
      <p className="text-[12px] text-[#0F0F10] opacity-60 dark:text-white/90">{conteudo}</p>
    </div>

  )
}

// arrumar cor da linha ao redor do card no modo dark