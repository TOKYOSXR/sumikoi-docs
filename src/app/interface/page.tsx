import Documentos from "../components/Documentos";
import YoutubeVideo from "../components/YoutubeVideo";
import BarraNavegacao from "../components/barra-Navegacao";
import MiniTitulos from "../components/miniTitulos";

export default function Interface() {
    return (
        <div>
            <MiniTitulos titulo="Interface" />
            <div className="flex justify-center items-center pt-20 flex-col gap-20 mb-40">
                <Documentos id="Acesso" Titulo="Acesso ao formulario " Conteudo="Para utilizar as funções do Google Forms, que é onde nosso sistema de gerenciamento é construído, você inicialmente precisa de uma conta Google. Basta pesquisar em sua barra de pesquisas do navegador “gmail” e escolher a opção “Fazer login” no canto superior direito." />
                <div>
                    <h3 className="text-2xl mb-5 text-[#d81e1e]">Coordenação e ADM: </h3>
                    <YoutubeVideo videoId="9YqOlJ0E80k" />
                    <p className="max-w-[60ch] mt-2.5 text-[16px] text-[#0F0F10] opacity-[76%]  leading-relaxed dark:text-white">Os representantes terão acesso apenas por meio do link do formulário para preenchimento e, a partir dele, realizarão o login.</p>
                </div>


            </div>

            <BarraNavegacao paginaAnterior="/preRequisitos" paginaSeguinte="/funcionalidades" nomePaginaA="Pré requisitos" nomePaginaS="Funcionalidades" />

        </div>


    )
}