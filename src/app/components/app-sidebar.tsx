"use client"

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
    useSidebar,
} from "@/components/ui/sidebar"

const data = {
    navMain: [
        {
            title: "Introdução",
            url: '#',
            items: [
                {
                    title: "Apresentação do sistema",
                    url: '/introducao',
                },
                {
                    title: "Público-alvo",
                    url: '/introducao#Publico-alvo',
                },
                {
                    title: "Objetivo do manual",
                    url: '/introducao#Objetivo',
                },
            ],
        },
        {
            title: "Pré-requisitos para Uso",
            url: '#',
            items: [
                {
                    title: "Sistemas operacionais compatíveis",
                    url: '/preRequisitos',
                },
                {
                    title: "Requisitos mínimos",
                    url: '/preRequisitos#RequisitosMinimos',
                },
            ],
        },
        {
            title: "Interface e Navegação",
            url: '#',
            items: [
                {
                    title: "Acesso ao formulário",
                    url: '/interface',
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
                    url: '/dicasAtalhos#SalvarLink',
                },
                {
                    title: "Criar atalho na tela inicial",
                    url: '/dicasAtalhos#CriarAtalho',
                },
                {
                    title: "Preencher presença com atenção",
                    url: '/dicasAtalhos#PreencherAtencao',
                },
                {
                    title: "Usar preenchimento automático",
                    url: '/dicasAtalhos#PreenchimentoAutomatico',
                },
                {
                    title: "Dicas para preenchimento em grupo",
                    url: '/dicasAtalhos#Dicas',
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
    const { open } = useSidebar()

    // Estado para submenus abertos - armazena títulos abertos
    const [openSections, setOpenSections] = React.useState<string[]>([])

    // Sempre que o sidebar abrir, fecha todos submenus
    React.useEffect(() => {
        if (open) {
            setOpenSections([])
        }
    }, [open])

    return (
        <Sidebar {...props} className="border-r border-transparent dark:border-[#d81e1e]">
            <SidebarContent className="gap-2 mt-23  text-black  dark:text-white">
                {data.navMain.map((item) => (
                    <Collapsible
                        key={item.title}
                        open={openSections.includes(item.title)}
                        onOpenChange={(isOpen) => {
                            setOpenSections((prev) =>
                                isOpen
                                    ? [...prev, item.title]
                                    : prev.filter((title) => title !== item.title)
                            )
                        }}
                        className="group"
                    >
                        <SidebarGroup>
                            <SidebarGroupLabel
                                asChild
                                className="text-sm font-semibold ml-2 text-[#F3603A] text-left"
                            >
                                <CollapsibleTrigger className="flex items-center justify-between w-full cursor-pointer">
                                    {item.title}
                                    <ChevronRight
                                        className={
                                            "ml-auto transition-transform " +
                                            (openSections.includes(item.title)
                                                ? "rotate-90"
                                                : "")
                                        }
                                    />
                                </CollapsibleTrigger>
                            </SidebarGroupLabel>

                            <CollapsibleContent>
                                <SidebarGroupContent>
                                    <SidebarMenu className="pl-4 ml-2 border-l border-[#999999]/30 text-zinc-600">
                                        {item.items.map((subitem) => (
                                            <SidebarMenuItem key={subitem.title}>
                                                <SidebarMenuButton
                                                    asChild
                                                    className="text-xs mt-2 pl-1 hover:text-primary dark:text-white"
                                                >
                                                    <a href={subitem.url}>{subitem.title}</a>
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