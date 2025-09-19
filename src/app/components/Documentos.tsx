type Documentosprops = {
  Titulo: string,
  Conteudo: string,
  lista?: string[],
  id: string
}

export default function Documentos({ Titulo, Conteudo, lista, id }: Documentosprops) {
  return (
    <div id={id}>
      <h1 className="sm:text-[40px] text-[48px] text-[#F3603A] mb-[30px] max-w-[25ch] ">{Titulo}</h1>
      <p className="text-[18px] text-[#0F0F10] opacity-[76%] max-w-[60ch] leading-relaxed dark:text-white">{Conteudo}</p>
      {lista && (
        <ul className="list-disc pl-5 mt-4 text-[18px] text-[#0F0F10] opacity-[76%] max-w-[60ch] dark:text-white">
          {lista.map((item, index) => (
            <li className="mb-3" key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

