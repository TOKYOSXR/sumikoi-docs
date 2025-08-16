import Documentos from "../components/Documentos";
import BarraNavegacao from "../components/barra-Navegacao";
import MiniTitulos from "../components/miniTitulos";

export default function conclusao() {
    return (

        <div>
            <MiniTitulos titulo="Conclusão" />  
            <div className="flex justify-center items-center pt-20 flex-col gap-20 mb-40">
                <Documentos Titulo={"Importância do preenchimento correto"} Conteudo={"O correto e completo preenchimento do formulário de presença é mais do que uma tarefa operacional — trata-se de um compromisso com a qualidade do acompanhamento pedagógico da instituição. Cada informação registrada contribui para a construção de um panorama realista da participação dos alunos e da dinâmica de cada turma."} id={"ImportanciaPreenchimento"} />

                <Documentos Titulo={"Benefícios para organização"} Conteudo={"Com base nos dados coletados, a coordenação pedagógica pode identificar padrões de ausência, agir preventivamente em casos críticos e planejar ações específicas de apoio e intervenção. Além disso, a organização e padronização dos registros facilita a comunicação entre os diferentes setores da escola, como secretaria, orientação, coordenação e professores."} id={"Beneficios"} />

                <Documentos Titulo={"Papel dos representantes e professores"} Conteudo={"É importante reforçar que representantes de turma, professores e outros profissionais designados para o preenchimento têm um papel essencial no bom funcionamento desse sistema. O comprometimento com a veracidade, clareza e pontualidade dos dados registrados fortalece a confiança e a eficácia dos processos educacionais."} id={"PapelRepresentantes"} />

                <Documentos Titulo={"Contato para suporte técnico"} Conteudo={"Caso haja dúvidas, dificuldades técnicas ou erros no funcionamento do formulário ou da planilha, a equipe deve entrar em contato com a coordenação pedagógica ou com o responsável técnico da instituição. O suporte estará disponível para resolver questões relacionadas ao acesso, configurações, permissões ou eventuais ajustes nas informações."} id={"ContatoSuporte"} />
            </div>

            <BarraNavegacao paginaAnterior="/dicasAtalhos" paginaSeguinte="/introducao" nomePaginaA="Dicas e atalhos" nomePaginaS="Introdução" />

        </div>
    )
} 