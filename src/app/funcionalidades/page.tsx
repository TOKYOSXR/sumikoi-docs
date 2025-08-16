import Documentos from "../components/Documentos";
import YoutubeVideo from "../components/YoutubeVideo";
import BarraNavegacao from "../components/barra-Navegacao";
import MiniTitulos from "../components/miniTitulos";

export default function Funcionalidades() {

    return (

        <div>
            <MiniTitulos titulo="Funcionalidades" />
            <div className="flex justify-center items-center pt-20 flex-col gap-20 mb-40 dark:bg-[#2c2c2c] ">

                <Documentos id="representante" Titulo="Representantes" Conteudo="O representante de turma é o responsável por registrar a presença dos colegas. Ele acessa o formulário destinado à sua turma e preenche as informações de frequência, marcando a presença de cada aluno de acordo com a lista disponível. Dessa forma, o representante funciona como o usuário central do sistema, garantindo que os dados de assiduidade sejam atualizados corretamente na planilha e disponibilizados para acompanhamento pelos professores e pela coordenação." />
                <YoutubeVideo videoId="-ecIzxTAols" />
                <Documentos id="coordenacao" Titulo="Coordenação" Conteudo="A coordenação tem um papel crucial na supervisão e gestão do sistema de controle de presença. Ela é responsável por criar e configurar os formulários no Google Forms, garantindo que todas as turmas tenham seus respectivos formulários prontos para uso. Além disso, a coordenação monitora o preenchimento das presenças, verifica a integridade dos dados na planilha do Google Sheets e resolve quaisquer problemas que possam surgir, como alunos não listados ou erros de preenchimento. A coordenação também pode gerar relatórios e análises a partir dos dados coletados, auxiliando na tomada de decisões pedagógicas." />
                <YoutubeVideo videoId="P81hXEjcNPo" />
                <Documentos id="administrador" Titulo="Administrador" Conteudo="O administrador do sistema é o responsável por gerenciar as configurações gerais e garantir que tudo funcione corretamente. Ele pode incluir a criação de contas de usuário, configuração de permissões, manutenção da infraestrutura técnica e suporte aos usuários. O administrador também pode ser responsável por realizar backups regulares dos dados, garantindo que as informações estejam sempre seguras e acessíveis. Além disso, ele atua como ponto de contato para resolver problemas técnicos e fornecer suporte aos usuários, tanto coordenação quanto alunos." />
                <YoutubeVideo videoId="406zOgOa6p4" />


            </div>

            <BarraNavegacao paginaAnterior="/interface" paginaSeguinte="/erros" nomePaginaA="Interface" nomePaginaS="Erros Comuns" />

        </div>
    )
}