import * as React from "react"
import { ChevronRight } from "lucide-react"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
    navMain: [
        {
            title: "Introdução",
            url: '#',
            items: [
                {
                    title: "Apresentação do sistema",
                    url: '#',
                },
                {
                    title: "Público-alvo",
                    url: '#',
                },
                {
                    title: "Objetivo do manual",
                    url: '#',
                },
            ],
        },
        {
            title: "Pré-requisitos para Uso",
            url: '#',
            items: [
                {
                    title: "Sistemas operacionais compatíveis",
                    url: '#',
                },
                {
                    title: "Requisitos mínimos de hardware e software",
                    url: '#',
                },
            ],
        },
        {
            title: "Interface e Navegação",
            url: '#',
            items: [
                {
                    title: "Acesso ao formulário via link ou QR Code",
                    url: '#',
                },
                {
                    title: "Estrutura geral do formulário dividida em seções",
                    url: '#',
                },
                {
                    title: "Navegação entre seções",
                    url: '#',
                },
            ],
        },
        {
            title: "Funcionalidades Principais",
            url: '#',
            items: [
                {
                    title: "Seção 1 - Seleção da turma",
                    url: '#',
                },
                {
                    title: "Seção 2 - Registro de presença",
                    url: '#',
                },
                {
                    title: "Seção 3 - Informações da aula",
                    url: '#',
                },
                {
                    title: "Envio",
                    url: '#',
                },
                {
                    title: "Exemplo prático",
                    url: '#',
                },
            ],
        },
        {
            title: "Configurações e Personalização",
            url: '#',
            items: [
                {
                    title: "Personalização do cabeçalho com nome do projeto e logotipo da instituição",
                    url: '#',
                },
                {
                    title: "Escolha de cores e layout visual do formulário",
                    url: '#',
                },
                {
                    title: "Configuração de obrigatoriedade dos campos essenciais",
                    url: '#',
                },
                {
                    title: "Controle de acesso ao formulário",
                    url: '#',
                },
                {
                    title: "Mensagens de confirmação personalizadas após o envio",
                    url: '#',
                },
            ],
        },
        {
            title: "Erros Comuns e Soluções",
            url: '#',
            items: [
                {
                    title: "Formulário não avança por campos obrigatórios não preenchidos",
                    url: '#',
                },
                {
                    title: "Lista de alunos não aparece corretamente",
                    url: '#',
                },
                {
                    title: "Usuário não consegue acessar",
                    url: '#',
                },
                {
                    title: "Dificuldade ao selecionar data em dispositivos móveis",
                    url: '#',
                },
                {
                    title: "Soluções e recomendações para cada erro",
                    url: '#',
                },
            ],
        },
        {
            title: "Dicas e Atalhos",
            url: '#',
            items: [
                {
                    title: "Salvar o link do formulário nos favoritos do navegador",
                    url: '#',
                },
                {
                    title: "Criar um atalho do formulário na tela inicial do celular",
                    url: '#',
                },
                {
                    title: "Preencher a seção de presença com atenção para evitar faltas indevidas",
                    url: '#',
                },
                {
                    title: "Usar o preenchimento automático do navegador para campos frequentes",
                    url: '#',
                },
                {
                    title: "Recomendações para preenchimento em grupo",
                    url: '#',
                },
            ],
        },
        {
            title: "Conclusão",
            url: '#',
            items: [
                {
                    title: "Importância do preenchimento correto e completo",
                    url: '#',
                },
                {
                    title: "Benefícios para o acompanhamento de presença e organização pedagógica",
                    url: '#',
                },
                {
                    title: "Reforço do papel dos representantes e professores no preenchimento",
                    url: '#',
                },
                {
                    title: "Contato para suporte em caso de dúvidas ou problemas técnicos",
                    url: '#',
                },
            ],
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
            <SidebarContent className="gap-0">
                {data.navMain.map((item) => (
                    <Collapsible
                        key={item.title}
                        title={item.title}
                        defaultOpen
                        className="group/collapsible"
                    >
                        <SidebarGroup>
                            <SidebarGroupLabel
                                asChild
                                className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
                            >
                                <CollapsibleTrigger>
                                    {item.title}{" "}
                                    <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                </CollapsibleTrigger>
                            </SidebarGroupLabel>

                            <CollapsibleContent>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {item.items.map((item) => (
                                            <SidebarMenuItem key={item.title}>
                                                <SidebarMenuButton asChild>
                                                    <a href={item.url}>{item.title}</a>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </CollapsibleContent>

                        </SidebarGroup>
                    </Collapsible>
                ))}
            </SidebarContent>
        </Sidebar>
    )
}