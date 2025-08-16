import Documentos from "../components/Documentos";
import BarraNavegacao from "../components/barra-Navegacao";
import MiniTitulos from "../components/miniTitulos";

export default function erros() {

    return (
        <div>
            <MiniTitulos titulo="Erros Comuns" />
            <div className="flex justify-center items-center pt-20 flex-col gap-20 mb-40 ">
                <Documentos id="campos" Titulo="Campos Obrigatórios não preenchidos" Conteudo="Um dos problemas mais frequentes é quando o aluno tenta enviar o formulário sem preencher um campo obrigatório. Nessa situação, o Google Forms não permite que a resposta seja enviada e exibe automaticamente uma mensagem de aviso em vermelho logo abaixo do campo vazio. Esse comportamento não é um defeito do sistema, mas sim uma validação esperada, que garante a integridade das respostas. Para evitar dúvidas, recomenda-se que os professores marquem como obrigatórios apenas os campos essenciais, como nome, turma e dados principais, além de inserir instruções claras no início do formulário, explicando que todos os campos marcados com * devem ser preenchidos para que o envio seja concluído." />
                <Documentos id="listaAlunos" Titulo="Lista de alunos não aparece" Conteudo="Outro caso comum ocorre quando a lista de alunos não aparece corretamente no campo de seleção. Isso normalmente acontece porque o formulário não foi atualizado após alterações nas turmas, como entrada de novos alunos ou saída de antigos. Também pode acontecer de o responsável esquecer de inserir os nomes na lista suspensa. A solução é simples: atualizar manualmente as opções dentro do campo correspondente no Google Forms e manter uma planilha de referência organizada, para facilitar futuras edições e evitar que algum aluno deixe de constar na lista. Recomenda-se ainda que essa verificação seja feita periodicamente, especialmente no início de cada período letivo." />
                <Documentos id="semAcesso" Titulo="Usuário sem acesso" Conteudo="Há também situações em que o usuário não consegue acessar o formulário, recebendo mensagens de bloqueio ou acesso negado. Isso geralmente se deve às configurações de restrição do próprio Google Forms, que podem limitar as respostas a contas institucionais ou a determinados domínios. Outra possibilidade é que o aluno esteja logado com um e-mail pessoal em vez do institucional, ou que o link compartilhado não seja o correto. A solução é revisar as configurações de compartilhamento e reforçar a orientação de que os alunos utilizem sempre seus e-mails institucionais. Em alguns casos, pode ser necessário liberar o formulário para “qualquer pessoa com o link” — essa decisão deve ser tomada conforme a política de cada instituição." />
                <Documentos id="datasMobile" Titulo="Problemas com datas no mobile" Conteudo="Em dispositivos móveis, especialmente em celulares, podem ocorrer problemas com campos de data. O mais comum é a divergência entre formatos, já que alguns aparelhos configurados em inglês utilizam o padrão mês/dia/ano (mm/dd/yyyy), enquanto no Brasil o formato esperado é dia/mês/ano (dd/mm/yyyy). Isso pode gerar confusão no momento do preenchimento e até respostas inválidas. Para reduzir esses erros, recomenda-se definir no formulário o formato padrão utilizado pela instituição e adicionar instruções no próprio campo, como “Preencha no formato dd/mm/aaaa”. Além disso, é importante recomendar que os alunos utilizem navegadores atualizados, como o Google Chrome, ou o aplicativo oficial do Google Forms, garantindo maior compatibilidade." />
                <Documentos id="errosSolu" Titulo="Soluções de erros" Conteudo="Por fim, existem boas práticas gerais que ajudam a prevenir erros e melhorar a experiência de uso do sistema. É recomendável que cada formulário comece com uma breve seção de instruções, reforçando a importância de preencher os campos obrigatórios e de utilizar o e-mail correto. Antes da publicação oficial, o formulário deve ser testado tanto em computadores quanto em celulares, para verificar se tudo funciona corretamente. Também é importante manter as listas de alunos sempre atualizadas e criar planilhas de backup no Google Sheets, consolidando as respostas para evitar perda de dados." />
            </div>

            <BarraNavegacao paginaAnterior="/funcionalidades" paginaSeguinte="/dicasAtalhos" nomePaginaA="Funcionalidades" nomePaginaS="Dicas e Atalhos" />

        </div>



    );
}

