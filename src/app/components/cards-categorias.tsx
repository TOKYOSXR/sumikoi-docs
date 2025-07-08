type CardsCategoriasProps = {
  caminho: string;
  titulo: string;
  conteudo: string;
  icon: string;
};

export default function CardsCategorias({ caminho, titulo, conteudo, icon }: CardsCategoriasProps) {
    return(

        <div key={caminho} className="flex flex-col p-6 cursor-pointer border-[1px] border-[#0F0F10]/20 hover:border-[#0F0F10]/50 transition-all   rounded-[12px] w-80 ">
           <i className={`text-[32px] text-[#d81e1e] ${icon}`} ></i>

           <h3 className="text-[14px] text-[#0F0F10] mt-6 mb-2.5">{titulo}</h3>
           <p className="text-[12px] text-[#0F0F10] opacity-60">{conteudo}</p>
        </div>
    )
}