"use client"

import Link from "next/link"

import { SidebarTrigger } from "@/components/ui/sidebar"

export default function Navbar() {
    return (
        <header className="w-full h-16 bg-white border-b shadow-xs px-4 flex items-center justify-between fixed top-0 left-0 z-50">
            <div className="flex items-center gap-2">
                <Link href="/">
                <img src="/SumiKoi_logo-sem-escita.png" alt="Logo" className="h-30 w-auto mt-5" />
                </Link>
            </div>

            <SidebarTrigger />
        </header>
    )
}
