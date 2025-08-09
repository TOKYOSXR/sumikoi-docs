type BarraNavegacaoProps = {
    paginaAnterior: string;
    nomePaginaS: string;
    nomePaginaA: string;
    paginaSeguinte: string;
};



export default function BarraNavegacao({ paginaAnterior, nomePaginaS, nomePaginaA, paginaSeguinte }: BarraNavegacaoProps) {

    return (

        <div className="flex items-center justify-center mb-5">
            <div className="p-4 w-[40%]  bg-transparent  border-gray-700 flex justify-between ">
                <a href={paginaAnterior} className="flex items-center gap-2 "><i className='bx bx-left-arrow-alt' ></i>{nomePaginaA}</a>
                <a href={paginaSeguinte} className="flex items-center gap-2">{nomePaginaS} <i className='bx bx-right-arrow-alt'></i></a>
            </div>
        </div>
    )
}