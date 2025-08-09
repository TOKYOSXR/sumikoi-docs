import Documentos from "../components/Documentos";

export default function dicasAtalhos() {
    return (
        <div className="flex justify-center items-center pt-20 flex-col gap-20 mb-40 ">
            <Documentos id="SalvarLink" Titulo="Salvar link nos favoritos" Conteudo="Uma boa prática inicial é salvar o link do formulário nos favoritos do navegador. Isso evita que o profissional tenha que procurar o link todos os dias. Para fazer isso, 
            ao abrir o formulário no navegador (de preferência Google Chrome), basta clicar na estrela ao lado da barra de endereço e confirmar o nome com que deseja salvar — sugerimos um nome direto como “Presença Turma X” ou “Formulário Diário”."/>
            
            <Documentos id="CriarAtalho" Titulo="Criar atalho na tela inicial" Conteudo="Para quem utiliza o celular com frequência, é altamente recomendado criar um atalho do formulário na tela inicial. Esse processo permite que o formulário seja acessado como se fosse um aplicativo. No Android, abra o formulário no Google Chrome, toque no menu (os três pontinhos no canto superior direito) e selecione “Adicionar à tela inicial“. No iPhone, usando o Safari, toque no ícone de compartilhamento (um quadrado com seta para cima) e depois em “Adicionar à Tela de Início“."/>
            
            <Documentos id="PreencherAtencao" Titulo="Preencher presença com atenção" Conteudo="Outro ponto fundamental é preencher com atenção a seção de presença dos alunos. Qualquer erro ou pressa neste momento pode gerar faltas indevidas, impactando diretamente a vida acadêmica dos estudantes e o controle pedagógico da instituição. Antes de enviar, sempre revise se a turma, a data e os alunos presentes estão corretos."/>
            
            <Documentos id="PreenchimentoAutomatico" Titulo="Usar preenchimento automático" Conteudo="O uso do preenchimento automático do navegador pode também otimizar o tempo. Navegadores modernos conseguem memorizar dados preenchidos com frequência, como o nome do professor, turno ou disciplina. Certifique-se de permitir essa funcionalidade no navegador para aproveitar esse recurso com segurança."/>
            
            <Documentos id="Dicas" Titulo="Dicas para preenchimento em grupo" Conteudo="Por fim, se o preenchimento for feito por representantes de turma ou membros da equipe pedagógica em sistema de rodízio, recomenda-se organizar um revezamento bem definido. Todos os envolvidos devem receber a orientação correta sobre como acessar e preencher o formulário. Também é fundamental que a equipe confie no preenchimento de um único representante por vez, para evitar duplicidades ou envios incorretos.
"/>
        </div>
    )
}