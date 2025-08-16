import Documentos from "../components/Documentos"
// Ensure the path is correct or install type declarations if needed
import BarraNavegacao from "../components/barra-Navegacao"
import MiniTitulos from "../components/miniTitulos"

export default function Introducao() {

    return (
        <div>
            <MiniTitulos titulo="Introdução" />
            <div className="flex justify-center items-center pt-20 flex-col gap-20 mb-40">
                <Documentos id="Apresentacao" Titulo="Apresentação do Sistema" Conteudo="O Sistema de Registro de Presença por Turma foi desenvolvido para automatizar e simplificar o processo de controle de frequência de alunos em ambientes educacionais. Utilizando ferramentas da plataforma Google, como Forms, Sheets e Drive, o sistema permite que cada presença registrada seja encaminhada diretamente para uma planilha separada por turma, facilitando a organização, o acesso e a análise dos dados.
                                    A proposta é eliminar o preenchimento manual de listas de chamada e centralizar as informações de forma digital, segura e acessível de qualquer lugar com conexão à internet.
                "/>
                <Documentos id="Publico-alvo" Titulo="Público-alvo" Conteudo="O sistema é voltado principalmente para:" lista={["Professores: Que precisam controlar a frequência de suas turmas de forma prática e sem papel.", "Coordenadores e gestores pedagógicos: Que desejam relatórios organizados por turma, com rastreabilidade e facilidade de arquivamento.", "Alunos: (opcional) quando o formulário for preenchido de forma individual, como em chamadas de entrada via QR code ou dispositivos em sala."]} />

                <Documentos id="Objetivo" Titulo="Objetivo do manual" Conteudo="Este manual foi criado para orientar professores, coordenadores e administradores no uso do Sistema de Registro de Presença por Turma, explicando desde a criação do formulário até a configuração dos scripts e organização das planilhas.
                                                                                Ao seguir este guia, o usuário será capaz de:" lista={["Criar um formulário de presença com lógica de turma;", "Configurar a automação via Google Apps Script;", "Organizar e visualizar as presenças separadamente por turma;", "Adaptar o sistema para diferentes níveis e turnos escolares."]} />
            </div>

            <BarraNavegacao paginaAnterior="#" nomePaginaS="Pré requisitos" nomePaginaA="Introdução" paginaSeguinte="/preRequisitos" />
        </div>
    )

}