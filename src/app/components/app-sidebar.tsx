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
                    title: "Cabeçalho e logotipo",
                    url: '#',
                },
                {
                    title: "Cores e layout",
                    url: '#',
                },
                {
                    title: "Campos obrigatórios",
                    url: '#',
                },
                {
                    title: "Controle de acesso",
                    url: '#',
                },
                {
                    title: "Mensagens personalizadas",
                    url: '#',
                },
            ],
        },
        {
            title: "Erros Comuns e Soluções",
            url: '#',
            items: [
                {
                    title: "Campos obrigatórios não preenchidos",
                    url: '#',
                },
                {
                    title: "Lista de alunos não aparece",
                    url: '#',
                },
                {
                    title: "Usuário sem acesso",
                    url: '#',
                },
                {
                    title: "Problemas em datas no mobile",
                    url: '#',
                },
                {
                    title: "Soluções para erros",
                    url: '#',
                },
            ],
        },
        {
            title: "Dicas e Atalhos",
            url: '#',
            items: [
                {
                    title: "Salvar link nos favoritos",
                    url: '#',
                },
                {
                    title: "Criar atalho na tela inicial",
                    url: '#',
                },
                {
                    title: "Preencher presença com atenção",
                    url: '#',
                },
                {
                    title: "Usar preenchimento automático",
                    url: '#',
                },
                {
                    title: "Dicas para preenchimento em grupo",
                    url: '#',
                },
            ],
        },
        {
            title: "Conclusão",
            url: '#',
            items: [
                {
                    title: "Importância do preenchimento correto",
                    url: '#',
                },
                {
                    title: "Benefícios para organização",
                    url: '#',
                },
                {
                    title: "Papel dos representantes e professores",
                    url: '#',
                },
                {
                    title: "Contato para suporte técnico",
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
                                className="text-base font-semibold text-sidebar-foreground text-xs"
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
                                                <SidebarMenuButton 
                                                asChild
                                                className="text-xs pl-3 mt-2"
                                                >
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