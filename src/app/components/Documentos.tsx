type Documentosprops = {
    Titulo : string,
    Conteudo : string
}

export default function Documentos({Titulo, Conteudo} : Documentosprops) {
    return (
        <div>
            <h1 className="text-[44px] text-[#d81e1e] mb-[8px]">{Titulo}</h1>
            <p className="text-[20px] text-[#0F0F10] opacity-[76%] max-w-[60ch]">{Conteudo}</p>
        </div>
    )
}

